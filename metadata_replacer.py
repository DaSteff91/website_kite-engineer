import os
import re
from pathlib import Path
from typing import Iterable, Iterator, Tuple, Union, Pattern, Callable

def find_page_tsx_files(base_dir: Path) -> Iterator[Path]:
    """
    Recursively find all `page.tsx` files under a given directory.

    Args:
        base_dir (Path): Root directory to search in.

    Yields:
        Path: Paths to files named "page.tsx".
    """
    for root, dirs, files in os.walk(base_dir):
        for fname in files:
            if fname == "page.tsx":
                yield Path(root) / fname

def replace_in_file(
    file_path: Path,
    replacements: Iterable[Tuple[Pattern[str], Union[str, Callable[[re.Match], str]]]]
) -> None:
    """
    Apply multiple regex replacements to a file if matches are found.

    Reads the file, performs all replacements sequentially, and writes the
    file back only if changes occurred.

    Args:
        file_path (Path): The file to modify.
        replacements (Iterator[Tuple[Pattern[str], Union[str, Callable]]]):
            Tuples of (pattern, replacement) where replacement can be a string
            or a callable that takes a `re.Match` and returns a string.
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
    Build regex patterns and replacement rules for import & metadata substitution.

    Returns:
        Iterator of tuples: (pattern, replacement).
    """
    # Replace import of PAGE_METADATA
    pattern_import = re.compile(
        r'import\s+\{\s*PAGE_METADATA\s*\}\s+from\s+"(@/lib/constants/metadata)";'
    )
    replacement_import = (
        r'import { getPageMetadata } from "\1";\n'
        r'import type { Metadata } from "next";'
    )
    yield (pattern_import, replacement_import)

    # Replace `export const metadata = PAGE_METADATA.<key>;`
    pattern_meta = re.compile(
        r'export\s+const\s+metadata\s*=\s*PAGE_METADATA\.([A-Za-z0-9_\.]+)\s*;'
    )

    def repl_meta(match: re.Match) -> str:
        page_key = match.group(1)
        path = "/" + page_key.replace(".", "/").lower()
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

def main() -> None:
    """
    Main entry point: locate page.tsx files and apply replacements.

    Uses the fixed base directory to search and perform replacements
    on each found page.tsx.
    """
    base_dir = Path(
        "/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app"
    )
    replacements = list(build_replacements())

    for file_path in find_page_tsx_files(base_dir):
        replace_in_file(file_path, replacements)

if __name__ == "__main__":
    main()
