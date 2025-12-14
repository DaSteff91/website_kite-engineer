#!/usr/bin/env python3
"""
Script to recursively process page.tsx files and replace hero sections with a standardized component.

This script:
1. Recursively finds all page.tsx files in the specified directory
2. Checks if the Hero component import exists
3. If not, adds the import and replaces the hero section
4. Extracts and preserves the h1 text content
5. Determines the route based on the file path
"""

import os
import re
from pathlib import Path
from typing import Optional, Tuple, List


def find_page_files(directory: Path) -> List[Path]:
    """
    Recursively find all page.tsx files in the given directory.
    
    Args:
        directory: The root directory to search in
        
    Returns:
        List of Path objects for all found page.tsx files
    """
    return list(directory.rglob("page.tsx"))


def has_hero_import(file_content: str) -> bool:
    """
    Check if the file already contains the Hero component import.
    
    Args:
        file_content: The content of the file as a string
        
    Returns:
        True if the import exists, False otherwise
    """
    return 'import { Hero } from "@/components/sections/Hero";' in file_content


def extract_h1_text(section_content: str) -> Optional[str]:
    """
    Extract the text content from the h1 tag within the section.
    
    Args:
        section_content: The content between section tags
        
    Returns:
        The h1 text content or None if not found
    """
    h1_pattern = r"<h1[^>]*>(.*?)</h1>"
    match = re.search(h1_pattern, section_content, re.DOTALL)
    if match:
        # Extract only the text content, stripping HTML tags inside
        h1_content = match.group(1)
        # Remove any inner HTML tags, keeping only text
        text_only = re.sub(r"<[^>]*>", "", h1_content).strip()
        return text_only
    return None


def find_hero_section(file_content: str) -> Optional[Tuple[int, int, str]]:
    """
    Find the first section that contains an Image with hero_image src.
    
    Args:
        file_content: The content of the file as a string
        
    Returns:
        Tuple of (start_index, end_index, section_content) or None if not found
    """
    # Pattern to find section tags with content
    section_pattern = r"(<section[^>]*>.*?</section>)"
    
    for match in re.finditer(section_pattern, file_content, re.DOTALL):
        section_content = match.group(1)
        # Check if this section contains an Image with hero_image
        if re.search(r"src=\{.*hero_image.*\}", section_content):
            return match.start(), match.end(), section_content
    
    return None


def determine_route(file_path: Path) -> str:
    """
    Determine the route based on the file's directory structure.
    Only uses the first subdirectory after 'app' to determine the route.
    
    Args:
        file_path: Path to the page.tsx file
        
    Returns:
        The route string (either '/kite' or '/engineer')
    """
    # Get all parts of the path
    parts = file_path.parts
    
    # Find the index of 'app' in the path
    try:
        app_index = parts.index('app')
    except ValueError:
        return "/"  # Fallback if 'app' not found
    
    # Check if there's at least one directory after 'app'
    if app_index + 1 < len(parts) - 1:  # -1 because the last part is 'page.tsx'
        first_subdir = parts[app_index + 1]
        
        # Return the route based on the first subdirectory
        if first_subdir == 'kite':
            return '/kite'
        elif first_subdir == 'engineer':
            return '/engineer'
    
    return "/"  # Fallback if no valid subdirectory found


def replace_hero_section(file_content: str, h1_text: str, route: str) -> str:
    """
    Replace the hero section with the new Hero component.
    
    Args:
        file_content: The original file content
        h1_text: The text to put in the h1 tag
        route: The route for the Hero component
        
    Returns:
        The modified file content
    """
    # Find the hero section to replace
    section_info = find_hero_section(file_content)
    if not section_info:
        return file_content
    
    start, end, old_section = section_info
    
    # Create the new Hero component section
    new_section = f"""      <Hero
        route="{route}"
        objectPosition="center 45%"
        brightness={{50}}
        minHeight="60vh"
      >
        <h1
          className="pb-1 text-4xl md:text-5xl font-bold mb-6 
           bg-gradient-to-r from-white via-gray-200 to-gray-300 
           bg-clip-text text-transparent 
           [text-shadow:0_0_8px_rgba(209,213,219,0.6)]"
        >
          {h1_text}
        </h1>
      </Hero>"""
    
    # Replace the old section with the new one
    return file_content[:start] + new_section + file_content[end:]


def add_hero_import(file_content: str) -> str:
    """
    Add the Hero component import to the file content.
    
    Args:
        file_content: The original file content
        
    Returns:
        The file content with the import added
    """
    # Look for existing imports to add after them
    # First: "Find lines that start with 'import' and continue with any characters until the end of the line"
    import_pattern = r"^import.*$"
    # Then return all non-overlapping matches of the pattern in the string as a list of strings
    imports = re.findall(import_pattern, file_content, re.MULTILINE)
    
    if imports:
        # Add the new import after the last existing import
        last_import = imports[-1]
        new_content = file_content.replace(
            last_import, 
            last_import + '\n' + 'import { Hero } from "@/components/sections/Hero";'
        )
        return new_content
    else:
        # If no imports found, add at the top
        return 'import { Hero } from "@/components/sections/Hero";\n' + file_content


def process_file(file_path: Path) -> None:
    """
    Process a single page.tsx file.
    
    Args:
        file_path: Path to the file to process
    """
    print(f"Processing: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Skip if Hero import already exists
        if has_hero_import(content):
            print(f"  ✓ Hero import already exists in {file_path}")
            return
        
        # Find the hero section to extract h1 text
        section_info = find_hero_section(content)
        if not section_info:
            print(f"  ⚠ No hero section found in {file_path}")
            return
        
        _, _, section_content = section_info
        h1_text = extract_h1_text(section_content)
        
        if not h1_text:
            print(f"  ⚠ No h1 text found in hero section of {file_path}")
            return
        
        # Determine the route based on file path
        route = determine_route(file_path)
        
        # Add the Hero import
        content = add_hero_import(content)
        
        # Replace the hero section
        content = replace_hero_section(content, h1_text, route)
        
        # Write the modified content back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content)
        
        print(f"  ✓ Successfully updated {file_path}")
        print(f"    - Added Hero import")
        print(f"    - Replaced hero section")
        print(f"    - Route: {route}")
        print(f"    - H1 text: '{h1_text}'")
        
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {e}")


def main() -> None:
    """
    Main function to orchestrate the file processing.
    """
    base_directory = Path("/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app")
    
    if not base_directory.exists():
        print(f"Error: Directory {base_directory} does not exist")
        return
    
    print(f"Searching for page.tsx files in: {base_directory}")
    page_files = find_page_files(base_directory)
    
    if not page_files:
        print("No page.tsx files found")
        return
    
    print(f"Found {len(page_files)} page.tsx files")
    
    for file_path in page_files:
        process_file(file_path)
    
    print("Processing complete!")


if __name__ == "__main__":
    main()