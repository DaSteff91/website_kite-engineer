"""Script to add IDs to React components in page.tsx files for better navigation."""

import os
import re
from pathlib import Path
from typing import Tuple, Optional, Pattern, Match


def add_ids_to_page(file_path: str) -> bool:
    """
    Add missing IDs to various elements in a page.tsx file.
    
    Args:
        file_path: Path to the page.tsx file to process
        
    Returns:
        True if modifications were made, False otherwise
    """
    # Read the file content
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Process each type of element and get the modified content back
    content, modified1 = _process_content_sections(content, file_path)
    content, modified2 = _process_service_sections(content, file_path)
    content, modified3 = _process_accordion_items(content, file_path)
    
    modified = modified1 or modified2 or modified3
    
    # Write back to file if modifications were made
    if modified:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content)
    
    return modified


def _process_content_sections(content: str, file_path: str) -> Tuple[str, bool]:
    """
    Process main content sections by adding IDs based on directory names.
    
    Args:
        content: The file content to process
        file_path: Path to the file (for directory name extraction)
        
    Returns:
        Tuple of (modified_content, was_modified)
    """
    modified = False
    # Pattern to find content sections with comments
    content_section_pattern: Pattern = re.compile(
        r'(\{\s*/\*\s*Content Section\s*\*/\s*\})(\s*<section[^>]*class="[^"]*py-\d+[^"]*"[^>]*)>', 
        re.IGNORECASE
    )
    
    content_section_match: Optional[Match] = content_section_pattern.search(content)
    
    if content_section_match:
        # Get the last directory name from the file path
        last_dir: str = Path(file_path).parent.name
        section_id: str = f"{last_dir}_content_section"
        
        # Check if ID already exists to avoid duplicates
        if 'id=' not in content_section_match.group(2):
            replacement: str = f"{content_section_match.group(1)}{content_section_match.group(2)} id=\"{section_id}\">"
            content = content.replace(content_section_match.group(0), replacement)
            modified = True
            print(f"Added ID '{section_id}' to content section in {file_path}")
    
    return content, modified


def _process_service_sections(content: str, file_path: str) -> Tuple[str, bool]:
    """
    Process service sections by adding IDs to h3 elements based on preceding comments.
    
    Args:
        content: The file content to process
        file_path: Path to the file (for logging)
        
    Returns:
        Tuple of (modified_content, was_modified)
    """
    modified = False
    # Pattern to find service section comments and the following h3 elements
    service_section_pattern: Pattern = re.compile(
        r'(\{\s*/\*\s*([^*]+)\s*Section\s*\*/\s*\})(\s*<div[^>]*>\s*<h3[^>]*)>', 
        re.IGNORECASE
    )
    
    # Find all service section matches
    for match in service_section_pattern.finditer(content):
        comment_text: str = match.group(2).strip()
        # Convert to kebab-case for the ID
        section_id: str = f"{comment_text.lower().replace(' ', '-')}-section"
        
        # Check if ID already exists to avoid duplicates
        if 'id=' not in match.group(3):
            replacement: str = f"{match.group(1)}{match.group(3)} id=\"{section_id}\">"
            content = content.replace(match.group(0), replacement)
            modified = True
            print(f"Added ID '{section_id}' to service section in {file_path}")
    
    return content, modified


def _process_accordion_items(content: str, file_path: str) -> Tuple[str, bool]:
    """
    Process accordion items by adding IDs to trigger divs and content elements.
    
    Args:
        content: The file content to process
        file_path: Path to the file (for logging)
        
    Returns:
        Tuple of (modified_content, was_modified)
    """
    modified = False
    # Pattern to find accordion item values
    accordion_item_pattern: Pattern = re.compile(r'<AccordionItem\s+value="([^"]+)"[^>]*>')
    
    # Find all accordion item matches
    for match in accordion_item_pattern.finditer(content):
        value: str = match.group(1)
        # Remove trailing numbers and hyphens if present
        clean_value: str = re.sub(r'-\d+$', '', value)
        
        # Process the trigger div
        content, trigger_modified = _process_accordion_trigger(content, value, clean_value, file_path)
        modified = modified or trigger_modified
        
        # Process the content element
        content, content_modified = _process_accordion_content(content, value, clean_value, file_path)
        modified = modified or content_modified
    
    return content, modified


def _process_accordion_trigger(content: str, value: str, clean_value: str, file_path: str) -> Tuple[str, bool]:
    """
    Process an accordion trigger div by adding an ID.
    
    Args:
        content: The file content to process
        value: The original value from the AccordionItem
        clean_value: The cleaned value (without trailing numbers)
        file_path: Path to the file (for logging)
        
    Returns:
        Tuple of (modified_content, was_modified)
    """
    modified = False
    
    # Create a more specific pattern that matches the exact AccordionItem with this value
    # and finds the div inside its AccordionTrigger
    trigger_pattern: Pattern = re.compile(
        rf'(<AccordionItem\s+value="{re.escape(value)}"[^>]*>.*?<AccordionTrigger[^>]*>.*?<div)([^>]*)(>.*?</AccordionTrigger>.*?</AccordionItem>)',
        re.DOTALL
    )
    
    trigger_match: Optional[Match] = trigger_pattern.search(content)
    
    if trigger_match:
        div_attrs = trigger_match.group(2)
        # Check if ID already exists to avoid duplicates
        if 'id=' not in div_attrs:
            div_id: str = f"{clean_value}-title"
            new_div: str = f'{trigger_match.group(1)} id="{div_id}"{div_attrs}{trigger_match.group(3)}'
            content = content.replace(trigger_match.group(0), new_div)
            modified = True
            print(f"Added ID '{div_id}' to accordion trigger in {file_path}")
    
    return content, modified


def _process_accordion_content(content: str, value: str, clean_value: str, file_path: str) -> Tuple[str, bool]:
    """
    Process an accordion content element by adding an ID.
    
    Args:
        content: The file content to process
        value: The original value from the AccordionItem
        clean_value: The cleaned value (without trailing numbers)
        file_path: Path to the file (for logging)
        
    Returns:
        Tuple of (modified_content, was_modified)
    """
    modified = False
    
    # Create a more specific pattern that matches the exact AccordionItem with this value
    # and finds the AccordionContent within it
    content_pattern: Pattern = re.compile(
        rf'(<AccordionItem\s+value="{re.escape(value)}"[^>]*>.*?<AccordionContent)([^>]*)(>.*?</AccordionContent>.*?</AccordionItem>)',
        re.DOTALL
    )
    
    content_match: Optional[Match] = content_pattern.search(content)
    
    if content_match:
        content_attrs = content_match.group(2)
        # Check if ID already exists to avoid duplicates
        if 'id=' not in content_attrs:
            content_id: str = f"{clean_value}-description"
            new_content: str = f'{content_match.group(1)} id="{content_id}"{content_attrs}{content_match.group(3)}'
            content = content.replace(content_match.group(0), new_content)
            modified = True
            print(f"Added ID '{content_id}' to accordion content in {file_path}")
    
    return content, modified


def process_directory(base_dir: str) -> None:
    """
    Recursively process all page.tsx files in a directory.
    
    Args:
        base_dir: The base directory to search for page.tsx files
    """
    processed_count: int = 0
    
    # Walk through all directories and files
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file == 'page.tsx':
                file_path: str = os.path.join(root, file)
                if add_ids_to_page(file_path):
                    processed_count += 1
    
    print(f"Processed {processed_count} files")


def main() -> None:
    """Main function to run the script."""
    base_dir: str = "/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/[locale]"
    
    # Validate the directory exists before processing
    if not os.path.exists(base_dir):
        print(f"Error: Directory '{base_dir}' does not exist.")
        return
    
    print(f"Starting to process files in: {base_dir}")
    process_directory(base_dir)
    print("Processing complete.")


if __name__ == "__main__":
    main()