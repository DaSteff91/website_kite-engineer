import re
from pathlib import Path

BASE_DIR = Path("/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/[locale]")


def process_file(file_path: Path) -> None:
    """
    Processes a single page.tsx file:

    - Ensures import uses `getTranslations` from "next-intl/server".
    - Adds <PageName>Props interface if missing.
    - Updates default export function to `async` with proper typing.
    - Ensures function body starts with `const { locale } = await params;`.
    - Ensures `getTranslations` call uses the object form with { locale, namespace }.
    - Removes incorrect or duplicate locale extraction (`const { locale } = params;`).

    Idempotent: safe to run multiple times.
    """
    content = file_path.read_text(encoding="utf-8")

    # Step 1: Ensure correct import
    content = re.sub(
        r'import\s*\{\s*useTranslations\s*\}\s*from\s*["\']next-intl["\'];',
        'import { getTranslations } from "next-intl/server";',
        content,
        flags=re.MULTILINE,
    )

    # Step 2: Find page name from default export function
    match = re.search(
        r'export\s+default\s+(async\s+)?function\s+(\w+)\s*\((.*?)\)\s*{',
        content,
        flags=re.DOTALL,
    )
    if not match:
        print(f"Skipping {file_path}: no default function found.")
        return

    _, page_name, _ = match.groups()

    # Step 3: Add interface after metadata if not present
    interface_pattern = rf'interface\s+{page_name}Props'
    if not re.search(interface_pattern, content):
        interface_str = f"\ninterface {page_name}Props {{\n  params: {{ locale: string }};\n}}\n"

        # Metadata export pattern (supports square brackets and multiline)
        metadata_pattern = r'(export\s+const\s+metadata\s*=\s*PAGE_METADATA\s*\[.*?\];)'
        content, count = re.subn(
            metadata_pattern, r'\1' + interface_str, content, count=1, flags=re.DOTALL
        )
        if count == 0:
            # Fallback: try normal dot notation
            metadata_pattern = r'(export\s+const\s+metadata\s*=\s*PAGE_METADATA\.\w+;)'
            content, count = re.subn(
                metadata_pattern, r'\1' + interface_str, content, count=1, flags=re.DOTALL
            )
        if count == 0:
            print(f"Warning: metadata export not found in {file_path}")

    # Step 4: Update function signature to async + PageProps
    def update_function_signature(_: re.Match) -> str:
        return f"export default async function {page_name}({{ params }}: {page_name}Props) {{"

    func_pattern = (
        rf'export\s+default\s+(async\s+)?function\s+{re.escape(page_name)}\s*\(.*?\)\s*{{'
    )
    content, _ = re.subn(func_pattern, update_function_signature, content, flags=re.DOTALL)

    # Step 5: Ensure locale extraction line is correct
    if "const { locale } = await params;" not in content:
        # Remove any incorrect `const { locale } = params;`
        content = re.sub(
            r'^\s*const\s*\{\s*locale\s*\}\s*=\s*params;\s*\n',
            "",
            content,
            flags=re.MULTILINE,
        )
        # Insert correct line right after the function signature
        content = re.sub(
            rf'(export\s+default\s+async\s+function\s+{page_name}\s*\([^)]+\)\s*{{)',
            rf'\1\n  const {{ locale }} = await params;',
            content,
        )

    # Step 6: Ensure getTranslations call is correct
    pattern_simple = rf'const\s+t\s*=\s*await\s+getTranslations\(\s*["\']{page_name}["\']\s*\);'
    replacement = (
        f'const t = await getTranslations({{\n'
        f'    locale,\n'
        f'    namespace: "{page_name}",\n'
        f'  }});'
    )
    content = re.sub(pattern_simple, replacement, content)

    # Also replace legacy useTranslations if still present
    content = re.sub(
        rf'const\s+t\s*=\s*useTranslations\s*\(\s*["\'].*?["\']\s*\);',
        replacement,
        content,
        flags=re.DOTALL,
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
