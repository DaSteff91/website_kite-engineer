import os
import re
from pathlib import Path
from typing import List, Optional, Tuple

def find_page_files(base_dirs: List[str]) -> List[Path]:
    """
    Recursively finds all page.tsx files in the given directories. Uses os.walk() to recursively traverse each directory tree. 
    Checks each directory for a file named "page.tsx".
    When found, constructs the full file path using Path(root) and adds "page.tsx".
    
    Args:
        base_dirs: List of directory paths to search
        
    Returns:
        List of Path objects for each page.tsx file found
    """
    page_files = []
    for base_dir in base_dirs:
        for root, _, files in os.walk(base_dir):
            if "page.tsx" in files:
                page_files.append(Path(root) / "page.tsx")
    return page_files

def extract_contact_path(file_path: Path) -> str:
    """
    Extracts the contact path from a page.tsx file path.
    
    Args:
        file_path: Path to the page.tsx file
        
    Returns:
        The contact path in format "/kite/..." or "/engineer/..."
    """
    # Get relative path from project root
    try:
        rel_path = file_path.relative_to("/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer")
    except ValueError:
        # Fallback if running from different location
        rel_path = file_path
    
    # Convert to forward slashes and get path components
    parts = str(rel_path.parent).split(os.sep)
    
    # Find where 'app' is in the path
    try:
        app_index = parts.index('app')
    except ValueError:
        app_index = -1
    
    # Get everything after 'app' and join with forward slashes
    if app_index >= 0 and len(parts) > app_index + 1:
        return '/' + '/'.join(parts[app_index+1:])
    return '/' + '/'.join(parts)

def replace_contact_href(content: str, contact_path: str) -> str:
    """
    Replaces old-style contact hrefs with generateContactHref pattern by finding the old-style hrefs using regex and a typical pattern used in there
    
    Args:
        content: The file content to process
        contact_path: The path to use in generateContactHref
        
    Returns:
        Updated content with replaced hrefs
    """
    # Pattern to match old href format like href="/contact?subject=Some+Subject"
    pattern = r'href="/contact\?subject=[^"]+"'
    
    def replacer(match):
        return f'href={{generateContactHref("{contact_path}")}}'
    
    # The return line performs a regex substitution using Python's re module. It scans through the content string, finds all matches of the pattern, 
    # and replaces each match using the replacer function.
    return re.sub(pattern, replacer, content)

def add_import_if_missing(content: str) -> str:
    """
    Adds the generateContactHref import if not already present.
    
    Args:
        content: The file content to check
        
    Returns:
        Updated content with import if needed
    """
    import_statement = 'import { generateContactHref } from "@/lib/utils/contact-filler";'
    
    if import_statement not in content:
        # Add after the last existing import by looping through each line
        lines = content.splitlines()
        last_import = max(
            (i for i, line in enumerate(lines) if line.startswith("import ")),
            default=-1
        )
            # the list comprehension in last_import: Creates a generator of indices (i) where lines start with "import "
            # enumerate(lines) yields pairs of (index, line_content)
            # The condition if line.startswith("import ") filters only import
        if last_import >= 0:
            lines.insert(last_import + 1, import_statement)
        else:
            lines.insert(0, import_statement)
        content = "\n".join(lines)
    
    return content

def process_file(file_path: Path) -> None:
    """
    Processes a single page.tsx file to update contact hrefs.
    
    Args:
        file_path: Path to the file to process
    """
    contact_path = extract_contact_path(file_path)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    updated_content = replace_contact_href(content, contact_path)
    updated_content = add_import_if_missing(updated_content)
    
    if updated_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"Updated {file_path}")
    else:
        print(f"No changes needed for {file_path}")

def main() -> None:
    """
    Main function that processes all page.tsx files in kite and engineer directories.
    """
    base_dirs = [
        "/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/kite",
        "/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/engineer"
    ]
    
    # Verify base directories exist
    for base_dir in base_dirs:
        if not os.path.exists(base_dir):
            raise FileNotFoundError(f"Directory not found: {base_dir}")
    
    page_files = find_page_files(base_dirs)
    
    if not page_files:
        print("No page.tsx files found in the specified directories")
        return
    
    print(f"Found {len(page_files)} page.tsx files to process")
    
    for file_path in page_files:
        try:
            process_file(file_path)
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    main()