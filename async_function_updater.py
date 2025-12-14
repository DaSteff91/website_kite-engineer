import re
from pathlib import Path

BASE_DIR = Path("/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/[locale]")


def process_file(file_path: Path) -> None:
    """
    Process a single page.tsx file and ensure the function uses the correct locale extraction.

    Ensures:
    1. Function starts with `const { locale } = await params;`
    2. Removes duplicate or incorrect `const { locale } = params;`
    3. Updates translation call to object form:
       ```
       const t = await getTranslations({
         locale,
         namespace: "<PageName>",
       });
       ```

    Args:
        file_path (Path): Path to the page.tsx file.
    """
    content = file_path.read_text(encoding="utf-8")

    # Match the default export async function
    match = re.search(
        r'export\s+default\s+async\s+function\s+(\w+)\s*\(\{[^}]*params[^}]*\}\s*:\s*(\w+)\)\s*{',
        content,
    )
    if not match:
        return  # skip files without proper function

    page_name = match.group(1)

    # --- Step 1: Ensure correct locale extraction line ---
    if "const { locale } = await params;" not in content:
        # Remove any incorrect variant first
        content = re.sub(
            r'^\s*const\s*\{\s*locale\s*\}\s*=\s*params;\s*\n',
            "",
            content,
            flags=re.MULTILINE,
        )

        # Insert correct line after function signature
        content = re.sub(
            rf'(export\s+default\s+async\s+function\s+{page_name}\s*\([^)]+\)\s*{{)',
            rf'\1\n  const {{ locale }} = await params;',
            content,
        )

    # --- Step 2: Ensure getTranslations uses new object form ---
    pattern_simple = rf'const\s+t\s*=\s*await\s+getTranslations\(\s*["\']{page_name}["\']\s*\);'
    replacement = (
        f'const t = await getTranslations({{\n'
        f'    locale,\n'
        f'    namespace: "{page_name}",\n'
        f'  }});'
    )
    content = re.sub(pattern_simple, replacement, content)

    file_path.write_text(content, encoding="utf-8")
    print(f"Processed {file_path}")


def process_directory(directory: Path) -> None:
    """
    Recursively process all page.tsx files in the given directory.

    Args:
        directory (Path): Root directory to start searching from.
    """
    for file_path in directory.rglob("page.tsx"):
        process_file(file_path)


if __name__ == "__main__":
    process_directory(BASE_DIR)
