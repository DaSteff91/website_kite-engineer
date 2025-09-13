import re
from pathlib import Path

BASE_DIR = Path("/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/[locale]")

def process_file(file_path: Path) -> None:
    """
    Processes a single page.tsx file:
    - Replaces `useTranslations` import with `getTranslations`.
    - Inserts a PageProps interface after the metadata export.
    - Converts the default function to an async function with getTranslations.

    Args:
        file_path (Path): Path to the page.tsx file.
    """
    content = file_path.read_text(encoding="utf-8")

    # Replace the import statement
    content = re.sub(
        r'import\s+\{\s*useTranslations\s*\}\s+from\s+"next-intl";',
        'import { getTranslations } from "next-intl/server";',
        content
    )

    # Find the page name from the default export function
    match = re.search(r'export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{', content)
    if not match:
        print(f"Skipping {file_path}, no default function found.")
        return
    page_name = match.group(1)

    # Insert the interface after the metadata export
    interface_str = f"\ninterface {page_name}Props {{\n  params: {{ locale: string }};\n}}\n"
    content = re.sub(
        r'(export\s+const\s+metadata\s*=\s*PAGE_METADATA\.\w+;)',
        r'\1' + interface_str,
        content
    )

    # Replace the default function with an async version
    def transform_function(match_obj: re.Match) -> str:
        return (
            f"export default async function {page_name}({{ params }}: {page_name}Props) {{\n"
            f"  const t = await getTranslations({{\n"
            f"    locale: params.locale,\n"
            f"    namespace: \"{page_name}\",\n"
            f"  }});"
        )

    content = re.sub(
        r'export\s+default\s+function\s+' + re.escape(page_name) + r'\s*\(\s*\)\s*{\s*const\s+t\s*=\s*useTranslations\(".*?"\);',
        transform_function,
        content
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
