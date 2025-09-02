"""Script to add IDs to React components in page.tsx files for better navigation."""

import os
import re
from pathlib import Path
from typing import Tuple, Optional, Pattern, Match, List


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
    content, modified4 = _process_service_grids(content, file_path)

    # Clean up any malformed tags that might have been created
    content = _cleanup_malformed_h3_tags(content)
    
    modified = modified1 or modified2 or modified3 or modified4
    
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


def _process_service_grids(content: str, file_path: str) -> Tuple[str, bool]:
    """
    Process service grid elements by adding IDs to h3 headings and list items.
    
    Args:
        content: The file content to process
        file_path: Path to the file (for logging)
        
    Returns:
        Tuple of (modified_content, was_modified)
    """
    modified = False
    
    print(f"\n=== DEBUG: Processing service grids in {file_path} ===")
    
    # More flexible pattern to find service grid items
    # Looks for divs containing both h3 and ul elements (likely service cards)
    service_grid_pattern: Pattern = re.compile(
        r'(<div[^>]*>.*?<h3)([^>]*)(>.*?</h3>.*?<ul[^>]*>.*?</ul>.*?</div>)',
        re.DOTALL | re.IGNORECASE
    )
    
    # Alternative: Look for service-like divs with common class patterns
    service_class_pattern: Pattern = re.compile(
        r'(<div[^>]*class="[^"]*(?:bg-|gradient|backdrop|card|service)[^"]*"[^>]*>.*?<h3)([^>]*)(>.*?</h3>.*?<ul[^>]*>.*?</ul>.*?</div>)',
        re.DOTALL | re.IGNORECASE
    )
    
    # Try both patterns
    matches = list(service_grid_pattern.finditer(content))
    if not matches:
        matches = list(service_class_pattern.finditer(content))
    
    print(f"Found {len(matches)} service grid matches")
    
    # Find all service grid matches
    for i, match in enumerate(matches):
        h3_attrs = match.group(2)
        h3_content = match.group(3)
        
        print(f"\nMatch {i+1}:")
        print(f"Full match preview: '{match.group(0)[:200]}...'")
        print(f"h3_attrs: '{h3_attrs}'")
        
        # Extract the text from the h3 element
        h3_text_match = re.search(r'>(.*?)</h3>', h3_content, re.DOTALL)
        if h3_text_match:
            h3_text = h3_text_match.group(1).strip()
            # Clean up text (remove HTML tags, extra spaces)
            h3_text = re.sub(r'<[^>]*>', '', h3_text)  # Remove any inner HTML tags
            h3_text = re.sub(r'\s+', ' ', h3_text).strip()  # Normalize whitespace
            
            print(f"Extracted h3 text: '{h3_text}'")
            
            # Convert to kebab-case for the ID
            service_id = re.sub(r'[^a-zA-Z0-9]+', '-', h3_text.lower()).strip('-')
            print(f"Generated service_id: '{service_id}'")
            
            # Add ID to h3 if not already present
            if 'id=' not in h3_attrs:
                print(f"Adding ID to h3: {service_id}-title")
                new_h3 = f'<h3 id="{service_id}-title"{h3_attrs}{h3_content}'
                content = content.replace(match.group(0), f'{match.group(1)}{new_h3}')
                modified = True
                print(f"Added ID '{service_id}-title' to service grid heading in {file_path}")
            else:
                print("h3 already has an ID attribute")
            
            # Process list items within this service grid
            content, list_modified = _process_service_grid_list_items(content, service_id, match.group(0))
            modified = modified or list_modified
        else:
            print("Could not extract h3 text from content")
            print(f"h3_content: '{h3_content}'")
    
    print(f"=== DEBUG: Finished processing service grids (modified: {modified}) ===\n")
    return content, modified


def _process_service_grid_list_items(content: str, service_id: str, grid_content: str) -> Tuple[str, bool]:
    """
    Process list items within a service grid by adding numbered IDs.
    Uses position-based replacement to avoid cross-contamination.
    
    Args:
        content: The file content to process
        service_id: The base ID for the service
        grid_content: The content of the service grid
        
    Returns:
        Tuple of (modified_content, was_modified)
    """
    modified = False
    
    # Find the position of this grid in the content
    grid_start = content.find(grid_content)
    if grid_start == -1:
        return content, False  # Grid not found (shouldn't happen)
    
    grid_end = grid_start + len(grid_content)
    
    # Extract this specific grid section
    before_grid = content[:grid_start]
    after_grid = content[grid_end:]
    current_grid = grid_content
    
    # Process list items within this grid only
    list_item_pattern: Pattern = re.compile(r'(<li)([^>]*)(>)', re.DOTALL)
    list_items = list(list_item_pattern.finditer(current_grid))
    
    # Process in reverse order to avoid position shifting
    for i in range(len(list_items) - 1, -1, -1):
        match = list_items[i]
        li_attrs = match.group(2)
        expected_id = f"{service_id}-list-element{i + 1}"
        
        # Check if the list item already has an ID
        id_match = re.search(r'id="([^"]*)"', li_attrs)
        
        if id_match:
            current_id = id_match.group(1)
            if current_id != expected_id:
                # Fix the incorrect ID
                new_attrs = re.sub(r'id="[^"]*"', f'id="{expected_id}"', li_attrs)
                new_li = f'<li{new_attrs}{match.group(3)}'
                current_grid = current_grid[:match.start()] + new_li + current_grid[match.end():]
                modified = True
                print(f"Fixed ID: '{current_id}' -> '{expected_id}'")
        else:
            # List item doesn't have an ID - add it
            new_li = f'<li id="{expected_id}"{li_attrs}{match.group(3)}'
            current_grid = current_grid[:match.start()] + new_li + current_grid[match.end():]
            modified = True
            print(f"Added ID: '{expected_id}'")
    
    # Reconstruct the content
    if modified:
        content = before_grid + current_grid + after_grid
    
    return content, modified


def _cleanup_malformed_h3_tags(content: str) -> str:
    """
    Clean up malformed H3 tags that have duplicate openings.
    Example: <h3<h3 id="some-id" className="..."> -> <h3 id="some-id" className="...">
    
    Args:
        content: The file content to clean up
        
    Returns:
        Cleaned content
    """
    # Pattern to find malformed h3 tags with duplicate openings
    malformed_h3_pattern: Pattern = re.compile(r'<h3<h3([^>]*)>', re.IGNORECASE)
    
    def replace_malformed(match):
        # Extract the attributes and return proper h3 tag
        return f'<h3{match.group(1)}>'
    
    # Replace all malformed h3 tags
    content = malformed_h3_pattern.sub(replace_malformed, content)
    
    return content


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