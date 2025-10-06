#!/usr/bin/env python3
"""
Transform page.tsx files to use dynamic metadata generation.

Replacements performed:
- `import { PAGE_METADATA } from "@/lib/constants/metadata";`
  -> `import { getPageMetadata } from "@/lib/constants/metadata";\nimport type { Metadata } from "next";`

- `export const metadata = PAGE_METADATA["engineer/project-management/documentation"];`
  or `export const metadata = PAGE_METADATA.KiteSubpages.Freelancer.SchoolSupport;`
  -> a generated async `generateMetadata` function that calls
     `getPageMetadata(locale, "<Pascal.Dotted.PageKey>", "</path/...>")`

Notes:
- The script attempts to derive a PascalCase dotted PageKey from either
  slash-style route keys or existing dotted keys.
- It produces URL paths in kebab-case (e.g. `/kite/freelancer/school-support`).
- No backups are created (use git to revert if needed).
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
)

# -------------------------- String helpers ----------------------------------


def to_pascal_case(segment: str) -> str:
    """
    Convert a hyphen/underscore/space separated segment into PascalCase.

    Examples:
        "school-support" -> "SchoolSupport"
        "project_management" -> "ProjectManagement"
    """
    parts = re.split(r"[-_\s]+", segment)
    return "".join(part[:1].upper() + part[1:] if part else "" for part in parts)


def pascal_to_kebab(segment: str) -> str:
    """
    Convert a PascalCase/CamelCase segment to kebab-case.

    Examples:
        "SchoolSupport" -> "school-support"
        "ProcessControl" -> "process-control"
        If the segment already contains '-' or '_', normalize and lowercase.
    """
    if "-" in segment or "_" in segment:
        return segment.replace("_", "-").lower()
    # Insert hyphen before capital letters that follow a lowercase or digit
    s = re.sub(r"(?<=[a-z0-9])(?=[A-Z])", "-", segment)
    return s.lower()


def pagekey_from_slash_key(raw: str) -> Tuple[str, str]:
    """
    Convert a slash-style key (e.g. "kite/freelancer/school-support")
    into a dotted PascalCase PageKey and an URL path.

    Returns:
        (page_key_for_meta, path)
        e.g. ("KiteSubpages.Freelancer.SchoolSupport", "/kite/freelancer/school-support")
    """
    segments = [seg for seg in raw.split("/") if seg != ""]
    if not segments:
        return ("Unknown", "/")

    # First segment mapping:
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
    Convert a dotted key (possibly already PascalCase e.g.
    'KiteSubpages.Freelancer.SchoolSupport' or lower/dashed like
    'kite.freelancer.school-support') into a canonical PascalCase dotted
    PageKey and a kebab-style URL path.

    Returns:
        (page_key_for_meta, path)
    """
    segments = [seg for seg in re.split(r"\.", raw) if seg != ""]
    if not segments:
        return ("Unknown", "/")

    # Detect if segments look already PascalCase (first char uppercase)
    looks_pascal = all(seg and seg[0].isupper() for seg in segments)

    if looks_pascal:
        page_key = ".".join(segments)
        # For path: map first seg if it ends with Subpages -> base route, else use kebab
        first = segments[0]
        if first.endswith("Subpages"):
            first_path = first[: -len("Subpages")].lower()
        else:
            first_path = pascal_to_kebab(first)
        rest_path = [pascal_to_kebab(s) for s in segments[1:]]
        path = "/" + "/".join([first_path] + rest_path) if rest_path else "/" + first_path
        return page_key, path

    # Otherwise treat them like lower/slug segments, convert each to Pascal + derive path
    # e.g. 'kite.freelancer.school-support' -> 'KiteSubpages.Freelancer.SchoolSupport'
    # Here we apply same logic as for slash keys
    # Rebuild a pseudo-slash key and reuse logic
    pseudo_slash = "/".join(segments)
    return pagekey_from_slash_key(pseudo_slash)


# -------------------------- File discovery ---------------------------------


def find_page_tsx_files(base_dir: Path) -> Iterator[Path]:
    """
    Recursively yield all `page.tsx` files under base_dir.

    Args:
        base_dir: Directory to walk.

    Yields:
        Path objects for each page.tsx found.
    """
    for root, _, files in os.walk(base_dir):
        for fname in files:
            if fname == "page.tsx":
                yield Path(root) / fname


# -------------------------- Replacement logic ------------------------------


def replace_in_file(
    file_path: Path,
    replacements: Iterable[Tuple[Pattern[str], Union[str, Callable[[re.Match], str]]]],
) -> None:
    """
    Read a file, apply regex replacements and write back only if changed.

    Args:
        file_path: file to modify.
        replacements: iterable of (pattern, replacement) pairs. Replacement
                      can be either a string or a callable(match) -> str.
    """
    original = file_path.read_text(encoding="utf-8")
    modified = original
    for pattern, repl in replacements:
        modified = pattern.sub(repl, modified)
    if modified != original:
        file_path.write_text(modified, encoding="utf-8")
        print(f"Updated: {file_path}")


def build_replacements() -> Iterator[
    Tuple[Pattern[str], Union[str, Callable[[re.Match], str]]]
]:
    """
    Build the regex patterns and replacement handlers.

    Yields:
        (compiled_pattern, replacement) tuples.
    """
    # Replace the import
    pattern_import = re.compile(
        r'import\s+\{\s*PAGE_METADATA\s*\}\s+from\s+"(@/lib/constants/metadata)";'
    )
    replacement_import = (
        r'import { getPageMetadata } from "\1";\n'
        r'import type { Metadata } from "next";'
    )
    yield (pattern_import, replacement_import)

    # Replace export const metadata = PAGE_METADATA.<key> OR PAGE_METADATA["..."]
    pattern_meta = re.compile(
        r'export\s+const\s+metadata\s*=\s*PAGE_METADATA(?:\.([A-Za-z0-9_\-\.]+)|\["([^"]+)"\])\s*;',
        flags=re.MULTILINE,
    )

    def repl_meta(match: re.Match) -> str:
        """
        Replacement function builds generateMetadata with correct pageKey and path.
        """
        key_dot = match.group(1)
        key_bracket = match.group(2)
        raw_key = key_dot if key_dot is not None else key_bracket or "unknown"

        # Decide how the raw_key was formatted and convert accordingly
        if "/" in raw_key:
            page_key, path = pagekey_from_slash_key(raw_key)
        elif "." in raw_key:
            page_key, path = pagekey_from_dotted_key(raw_key)
        else:
            # single token: small -> Pascal e.g. "about" -> "About"
            page_key = to_pascal_case(raw_key)
            path = "/" + raw_key.lower().lstrip("/")

        # Build the generateMetadata block (params typed as any for now)
        return (
            f'export async function generateMetadata({{\n'
            f'  params,\n'
            f'}}: {{ params: any }}): Promise<Metadata> {{\n'
            f'  const resolvedParams = await params;\n'
            f'  const {{ locale }} = resolvedParams;\n'
            f'  return await getPageMetadata(locale, "{page_key}", "{path}");\n'
            f'}}'
        )

    yield (pattern_meta, repl_meta)


# -------------------------- Main -------------------------------------------


def main() -> None:
    """
    Walk the app folder and apply replacements to all page.tsx files.
    """
    base_dir = Path("/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app")
    replacements = list(build_replacements())

    for page_file in find_page_tsx_files(base_dir):
        replace_in_file(page_file, replacements)


if __name__ == "__main__":
    main()
