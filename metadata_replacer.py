#!/usr/bin/env python3
"""
Transform page.tsx files to use dynamic metadata generation.

This version detects a local `interface <Name>PageProps { ... }` declaration
and injects `params: <Name>PageProps["params"]` into the generated function
signature. Falls back to `any` when no interface is found.

No backups are created — use git for rollback.
"""

import os
import re
from pathlib import Path
from typing import (
    Iterable,
    Iterator,
    Tuple,
    Union,
    Pattern,
    Callable,
    Optional,
)

# ---------------------------- String helpers -------------------------------


def to_pascal_case(segment: str) -> str:
    """Convert a hyphen/underscore/space separated segment into PascalCase."""
    parts = re.split(r"[-_\s]+", segment)
    return "".join(part[:1].upper() + part[1:] if part else "" for part in parts)


def pascal_to_kebab(segment: str) -> str:
    """Convert a PascalCase segment to kebab-case."""
    if "-" in segment or "_" in segment:
        return segment.replace("_", "-").lower()
    s = re.sub(r"(?<=[a-z0-9])(?=[A-Z])", "-", segment)
    return s.lower()


def pagekey_from_slash_key(raw: str) -> Tuple[str, str]:
    """Convert "kite/freelancer/school-support" -> ("KiteSubpages.Freelancer.SchoolSupport", "/kite/freelancer/school-support")."""
    segments = [seg for seg in raw.split("/") if seg != ""]
    if not segments:
        return ("Unknown", "/")

    first_seg = segments[0].lower()
    if first_seg == "kite":
        first_meta = "KiteSubpages"
    elif first_seg == "engineer":
        first_meta = "EngineerSubpages"
    else:
        first_meta = to_pascal_case(segments[0])

    rest_meta = [to_pascal_case(seg) for seg in segments[1:]]
    page_key = ".".join([first_meta] + rest_meta) if rest_meta else first_meta
    path = "/" + "/".join(seg.lower() for seg in segments)
    return page_key, path


def pagekey_from_dotted_key(raw: str) -> Tuple[str, str]:
    """
    Convert dotted key into (PageKey, path).
    If already PascalCase dotted key, preserve it and derive path.
    Otherwise reuse slash logic.
    """
    segments = [seg for seg in re.split(r"\.", raw) if seg != ""]
    if not segments:
        return ("Unknown", "/")

    looks_pascal = all(seg and seg[0].isupper() for seg in segments)
    if looks_pascal:
        page_key = ".".join(segments)
        first = segments[0]
        if first.endswith("Subpages"):
            first_path = first[: -len("Subpages")].lower()
        else:
            first_path = pascal_to_kebab(first)
        rest_path = [pascal_to_kebab(s) for s in segments[1:]]
        path = "/" + "/".join([first_path] + rest_path) if rest_path else "/" + first_path
        return page_key, path

    # treat like lower-dotted segments -> pseudo-slash
    pseudo_slash = "/".join(segments)
    return pagekey_from_slash_key(pseudo_slash)


# ---------------------------- File discovery --------------------------------


def find_page_tsx_files(base_dir: Path) -> Iterator[Path]:
    """Yield all page.tsx files under base_dir."""
    for root, _, files in os.walk(base_dir):
        for fname in files:
            if fname == "page.tsx":
                yield Path(root) / fname


# ---------------------------- Replacement logic -----------------------------


def replace_in_file(
    file_path: Path,
    replacements_factory: Callable[[Optional[str]], Iterable[Tuple[Pattern[str], Union[str, Callable[[re.Match], str]]]]],
) -> None:
    """
    Read file content, determine local interface name (if any), build replacements
    using factory(interface_name) and apply them.

    Args:
        file_path: path to the file to edit.
        replacements_factory: function that receives the interface name (or None)
            and returns the replacements iterable.
    """
    original = file_path.read_text(encoding="utf-8")

    # Try to find a local interface declaration like `interface AboutPageProps {`
    m = re.search(r'interface\s+([A-Za-z0-9_]+PageProps)\s*\{', original)
    interface_name: Optional[str] = m.group(1) if m else None

    replacements = list(replacements_factory(interface_name))

    modified = original
    for pattern, repl in replacements:
        modified = pattern.sub(repl, modified)
    if modified != original:
        file_path.write_text(modified, encoding="utf-8")
        print(f"Updated: {file_path} (used interface: {interface_name or 'none'})")


def build_replacements(interface_name: Optional[str]) -> Iterable[
    Tuple[Pattern[str], Union[str, Callable[[re.Match], str]]]
]:
    """
    Return replacement pairs for the given interface_name.

    If interface_name is None, the generated signature will use `params: any`.
    """
    # 1) import replacement
    pattern_import = re.compile(
        r'import\s+\{\s*PAGE_METADATA\s*\}\s+from\s+"(@/lib/constants/metadata)";'
    )
    replacement_import = (
        r'import { getPageMetadata } from "\1";\n'
        r'import type { Metadata } from "next";'
    )
    yield (pattern_import, replacement_import)

    # 2) metadata replacement (covers dot or bracket notation)
    pattern_meta = re.compile(
        r'export\s+const\s+metadata\s*=\s*PAGE_METADATA(?:\.([A-Za-z0-9_\-\.]+)|\["([^"]+)"\])\s*;',
        flags=re.MULTILINE,
    )

    def repl_meta(match: re.Match) -> str:
        key_dot = match.group(1)
        key_bracket = match.group(2)
        raw_key = key_dot if key_dot is not None else key_bracket or "unknown"

        if "/" in raw_key:
            page_key, path = pagekey_from_slash_key(raw_key)
        elif "." in raw_key:
            page_key, path = pagekey_from_dotted_key(raw_key)
        else:
            page_key = to_pascal_case(raw_key)
            path = "/" + raw_key.lower().lstrip("/")

        # Build params type fragment
        if interface_name:
            params_type = f'{interface_name}["params"]'
            params_decl = f'{{ params: {params_type}; }}'
        else:
            params_decl = "{ params: any }"

        return (
            f'export async function generateMetadata({{\n'
            f'  params,\n'
            f'}}: {params_decl}): Promise<Metadata> {{\n'
            f'  const resolvedParams = await params;\n'
            f'  const {{ locale }} = resolvedParams;\n'
            f'  return await getPageMetadata(locale, "{page_key}", "{path}");\n'
            f'}}'
        )

    yield (pattern_meta, repl_meta)


# ---------------------------- Main ------------------------------------------


def main() -> None:
    """
    Walk the app folder and apply replacements to all page.tsx files.
    """
    base_dir = Path("/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app")
    for page_file in find_page_tsx_files(base_dir):
        replace_in_file(page_file, build_replacements)


if __name__ == "__main__":
    main()
