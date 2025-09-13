import re
from pathlib import Path

BASE_DIR = Path("/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/[locale]")

def process_file(file_path: Path) -> None:
    """
    Processes a single page.tsx file:
    - Ensures import is `getTranslations`.
    - Adds PageProps interface if missing.
    - Updates default export function to async with proper typing.
    - Handles files that are partly converted or already async.
    Idempotent: safe to run multiple times.
    """
    content = file_path.read_text(encoding="utf-8")

    # Step 1: Ensure correct import
    content = re.sub(
        r'import\s*\{\s*useTranslations\s*\}\s*from\s*["\']next-intl["\'];',
        'import { getTranslations } from "next-intl/server";',
        content,
        flags=re.MULTILINE
    )

    # Step 2: Find page name from default export function
    match = re.search(
        r'export\s+default\s+(async\s+)?function\s+(\w+)\s*\((.*?)\)\s*{',
        content,
        flags=re.DOTALL
    )
    if not match:
        print(f"Skipping {file_path}: no default function found.")
        return

    is_async, page_name, params = match.groups()

    # Step 3: Add interface after metadata if not present
    interface_pattern = rf'interface\s+{page_name}Props'
    if not re.search(interface_pattern, content):
        interface_str = f"\ninterface {page_name}Props {{\n  params: {{ locale: string }};\n}}\n"

        # Metadata export pattern (supports square brackets and multiline)
        metadata_pattern = r'(export\s+const\s+metadata\s*=\s*PAGE_METADATA\s*\[.*?\];)'
        content, count = re.subn(metadata_pattern, r'\1' + interface_str, content, count=1, flags=re.DOTALL)
        if count == 0:
            # Fallback: try normal dot notation
            metadata_pattern = r'(export\s+const\s+metadata\s*=\s*PAGE_METADATA\.\w+;)'
            content, count = re.subn(metadata_pattern, r'\1' + interface_str, content, count=1, flags=re.DOTALL)
        if count == 0:
            print(f"Warning: metadata export not found in {file_path}")

    # Step 4: Update function signature to async + PageProps
    def update_function_signature(match_obj: re.Match) -> str:
        return f"export default async function {page_name}({{ params }}: {page_name}Props) {{"

    func_pattern = rf'export\s+default\s+(async\s+)?function\s+{re.escape(page_name)}\s*\(.*?\)\s*{{'
    content, _ = re.subn(func_pattern, update_function_signature, content, flags=re.DOTALL)

    # Step 5: Ensure getTranslations call is correct
    t_pattern = rf'const\s+t\s*=\s*await?\s*getTranslations\s*\(\s*["\']{page_name}["\']\s*\);'
    if not re.search(t_pattern, content):
        # Replace existing useTranslations call or incorrect getTranslations
        content, _ = re.subn(
            rf'const\s+t\s*=\s*useTranslations\s*\(\s*["\'].*?["\']\s*\);',
            f'  const t = await getTranslations({{\n    locale: params.locale,\n    namespace: "{page_name}",\n  }});',
            content,
            flags=re.DOTALL
        )

    file_path.write_text(content, encoding="utf-8")
    print(f"Processed {file_path}")


def process_directory(directory: Path) -> None:
    """
    Recursively processes all page.tsx files in a given directory.

    Args:
        directory (Path): Root directory to start the search from.
    """
    for file_path in directory.rglob("page.tsx"):
        process_file(file_path)


if __name__ == "__main__":
    process_directory(BASE_DIR)
