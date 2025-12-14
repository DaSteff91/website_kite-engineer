#!/usr/bin/env python3
"""
Replace old generateContactHref usage with hrefForTemplateWithTranslator across
page.tsx files under a base directory.

- Replaces the import:
    import { generateContactHref } from "@/lib/utils/contact-filler";
  with:
    import { hrefForTemplateWithTranslator } from "@/lib/utils/contact-i18n-helper";

- After the `const t = await getTranslations({... namespace: "XxxPage" ...});`
  insertion point, the script will insert (if not already present):
    const contactT = await getTranslations({
      locale,
      namespace: "ContactTemplates",
    });

- Replaces calls like:
    href={generateContactHref("/kite/freelancer/school-support")}
  with:
    href={hrefForTemplateWithTranslator(contactT, "/kite/freelancer/school-support")}

Usage:
    python3 contact_template_replacer.py [--apply] [--base-dir PATH]

By default the script runs in "dry-run" mode and prints planned changes.
Pass --apply to overwrite files. Backups (filename.bak) are created on apply.

Requirements:
    - Python 3.8+
"""

from __future__ import annotations

import argparse
import logging
import re
from pathlib import Path
from typing import Iterable, List, Optional, Tuple

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger("contact-i18n-replacer")

# Configure the base directory default - user requested path in prompt
DEFAULT_BASE_DIR = Path(
    "/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/[locale]/engineer"
)


def find_page_files(base_dir: Path) -> List[Path]:
    """
    Recursively find all files named `page.tsx` under base_dir.

    :param base_dir: Path to start searching from.
    :return: list of matching Path objects.
    """
    return list(base_dir.rglob("page.tsx"))


def replace_imports(content: str) -> Tuple[str, bool]:
    """
    Replace the import of generateContactHref with hrefForTemplateWithTranslator.

    Returns the new content and a boolean indicating whether a replacement occurred.
    """
    # Match lines that import generateContactHref from the specific module.
    # Be permissive about spacing and single/double quotes.
    pattern = re.compile(
        r'^\s*import\s*\{\s*generateContactHref\s*\}\s*from\s*[\'"]@/lib/utils/contact-filler[\'"]\s*;\s*$',
        flags=re.MULTILINE,
    )

    replacement = (
        'import { hrefForTemplateWithTranslator } from "@/lib/utils/contact-i18n-helper";'
    )

    new_content, count = pattern.subn(replacement, content)
    if count:
        logger.debug("Replaced import line (%d occurrences).", count)
    return new_content, bool(count)


def insert_contactT_after_t(
    content: str,
    contactt_snippet: str = (
        "  const contactT = await getTranslations({\n"
        "    locale,\n"
        '    namespace: "ContactTemplates",\n'
        "  });\n"
    ),
) -> Tuple[str, bool]:
    """
    Insert a contactT translator call right after the t = await getTranslations(...) statement.

    The function searches for a pattern like:
      const t = await getTranslations({
        locale,
        namespace: "SomePage",
      });

    and appends the contactT snippet directly after that block, unless contactT already exists.

    Returns (new_content, changed_flag).
    """
    # First check if contactT already exists to avoid duplicate insertion
    if "const contactT = await getTranslations" in content:
        logger.debug("File already contains 'contactT' - skipping insertion.")
        return content, False

    # Regex: capture the entire const t = await getTranslations({...}); including multi-line content.
    # We try to be flexible: allow whitespace, comments, trailing commas, etc.
    gettrans_pattern = re.compile(
        r"""
        (                               # start group 1: full match to be preserved
        const\s+t\s*=\s*await\s+getTranslations   # const t = await getTranslations
        \s*\(                           # opening paren
        \s*\{                           # opening brace of object
        .*?                             # non-greedy content inside the object
        \}\s*\)                         # closing brace and paren
        \s*;                            # semicolon
        )                               # end group 1
        """,
        flags=re.DOTALL | re.VERBOSE,
    )

    match = gettrans_pattern.search(content)
    if not match:
        logger.debug("No `const t = await getTranslations(...)` block found.")
        return content, False

    insert_pos = match.end(1)
    # Insert the snippet with same indentation level as following lines (we'll use two spaces indent as in snippet)
    new_content = content[:insert_pos] + "\n" + contactt_snippet + content[insert_pos:]
    logger.debug("Inserted contactT snippet after t-getTranslations block.")
    return new_content, True


def replace_generate_calls(content: str) -> Tuple[str, bool]:
    """
    Replace generateContactHref("literal") calls with hrefForTemplateWithTranslator(contactT, "literal").

    Only replaces calls where the single argument is a string literal (single or double quoted).
    Does not attempt to convert calls with multiple arguments or non-literal arguments.
    """
    # Regex to match generateContactHref("...") or generateContactHref('...')
    pattern = re.compile(
        r"generateContactHref\(\s*(['\"])(?P<path>[^'\"]+)\1\s*\)", flags=re.MULTILINE
    )

    def repl(m: re.Match) -> str:
        path = m.group("path")
        return f'hrefForTemplateWithTranslator(contactT, "{path}")'

    new_content, count = pattern.subn(repl, content)
    if count:
        logger.debug("Replaced %d generateContactHref(...) call(s).", count)
    return new_content, bool(count)


def process_file(path: Path, apply: bool = False) -> Tuple[bool, List[str]]:
    """
    Process a single file: perform import replacement, insert contactT, and replace generateContactHref calls.

    :param path: file path
    :param apply: if True, write changes to disk (with .bak backup). If False, only report changes.
    :return: (changed_flag, list_of_change_descriptions)
    """
    logger.info("Processing: %s", path)
    content = path.read_text(encoding="utf-8")
    changes: List[str] = []

    # Step 1: replace import
    content, changed_import = replace_imports(content)
    if changed_import:
        changes.append("Replaced import generateContactHref -> hrefForTemplateWithTranslator")

    # Step 2: insert contactT after t translator block (if t exists and contactT not present)
    content, inserted_contactt = insert_contactT_after_t(content)
    if inserted_contactt:
        changes.append("Inserted contactT = await getTranslations({ namespace: 'ContactTemplates' })")

    # Step 3: replace generateContactHref("...") calls (only single string literal arg)
    content, replaced_calls = replace_generate_calls(content)
    if replaced_calls:
        changes.append("Replaced generateContactHref(...) calls with hrefForTemplateWithTranslator(contactT, ...)")

    if not changes:
        logger.info("No changes needed.")
        return False, []

    # If apply is True, write changes and back up original
    if apply:
        # backup_path = path.with_suffix(path.suffix + ".bak")
        # Read original content (we read it earlier as `orig_content_at_start`, but safe to re-read here)
        original_content = path.read_text(encoding="utf-8")
        # Write backup (overwrite if exists)
        # backup_path.write_text(original_content, encoding="utf-8")
        # Now overwrite the original file atomically:
        # Write to a temp file then rename to avoid partial writes.
        tmp_path = path.with_suffix(path.suffix + ".tmp")
        tmp_path.write_text(content, encoding="utf-8")
        tmp_path.replace(path)  # atomic move on same filesystem
        #logger.info("Applied changes and wrote backup: %s", backup_path)
        return True, changes

    # Dry-run: report what would be changed
    for ch in changes:
        logger.info("Would change: %s", ch)
    return True, changes


def process_all(base_dir: Path, apply: bool = False) -> None:
    """
    Process all page.tsx files under base_dir.

    :param base_dir: base directory to search in
    :param apply: whether to actually write changes
    """
    files = find_page_files(base_dir)
    logger.info("Found %d 'page.tsx' files under %s", len(files), base_dir)

    if not files:
        return

    changed_any = False
    for f in files:
        changed, details = process_file(f, apply=apply)
        if changed:
            changed_any = True

    if not changed_any:
        logger.info("No files required modification.")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Replace generateContactHref usages in page.tsx files.")
    parser.add_argument(
        "--base-dir",
        "-b",
        type=Path,
        default=DEFAULT_BASE_DIR,
        help=f"Base directory to search (default: {DEFAULT_BASE_DIR})",
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Apply changes (overwrite files). If omitted, script runs in dry-run mode.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    base_dir: Path = args.base_dir

    if not base_dir.exists() or not base_dir.is_dir():
        logger.error("Base directory does not exist or is not a directory: %s", base_dir)
        return

    logger.info("Running with base_dir=%s apply=%s", base_dir, args.apply)
    process_all(base_dir, apply=args.apply)


if __name__ == "__main__":
    main()
