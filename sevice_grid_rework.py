#!/usr/bin/env python3
"""
Script to modernize typography and list styling in Next.js/React page files.

This script recursively processes all `page.tsx` files in a given directory,
making specific modifications to heading sizes, list font sizes, and implementing
hanging indents for list items.
"""

import re
from pathlib import Path
from typing import List, Set
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class PageModernizer:
    """A class to handle modernization of React page files."""
    
    def __init__(self, base_directory: Path) -> None:
        """
        Initialize the modernizer with base directory.
        
        Args:
            base_directory: Path to the root directory to search for page.tsx files
        """
        self.base_directory = base_directory
        self.modified_files: Set[Path] = set()
        
        # Compile regex patterns for efficiency
        self.h3_pattern = re.compile(
            r'(<h3\s+'  # Opening h3 tag
            r'[^>]*\bid\s*=\s*["\'][^"\']*["\']'  # id attribute
            r'[^>]*\bclassName\s*=\s*["\'][^"\']*["\']'  # className attribute
            r'[^>]*>)'  # Rest of opening tag
        )
        
        self.ul_pattern = re.compile(
            r'(<ul\s+'  # Opening ul tag
            r'[^>]*\bclassName\s*=\s*["\'][^"\']*["\']'  # className attribute
            r'[^>]*>)'  # Rest of opening tag
        )
        
        self.li_pattern = re.compile(
            r'(<li\s+'  # Opening li tag
            r'[^>]*\bid\s*=\s*["\'][^"\']*["\']'  # id attribute
            r'(?:[^>]*\bclassName\s*=\s*["\'][^"\']*["\'])?'  # Optional className
            r'[^>]*>)'  # Rest of opening tag
        )

    def find_page_files(self) -> List[Path]:
        """
        Recursively find all page.tsx files in the base directory.
        
        Returns:
            List of Path objects for found page.tsx files
        """
        pattern = "**/page.tsx"
        page_files = list(self.base_directory.glob(pattern))
        logger.info(f"Found {len(page_files)} page.tsx files in {self.base_directory}")
        return page_files

    def update_classname(self, class_string: str, replacements: List[tuple], additions: List[str] | None = None) -> str:
        """
        Update a className string with replacements and additions.
        
        Args:
            class_string: The original className string
            replacements: List of (old, new) tuples for text replacements
            additions: List of classes to add if not present
            
        Returns:
            Updated className string
        """
        # Apply replacements
        for old_text, new_text in replacements:
            if old_text in class_string:
                class_string = class_string.replace(old_text, new_text)
                logger.debug(f"Replaced '{old_text}' with '{new_text}'")
        
        # Add new classes if not present (only if additions is provided)
        if additions:
            existing_classes = set(class_string.split())
            for addition in additions:
                if addition not in existing_classes:
                    class_string += f" {addition}"
                    logger.debug(f"Added class '{addition}'")
        
        return class_string.strip()

    def process_h3_elements(self, content: str) -> str:
        """
        Process all h3 elements to update their text size classes.
        
        Args:
            content: The file content to process
            
        Returns:
            Content with updated h3 elements
        """
        def replace_h3_class(match: re.Match) -> str:
            h3_tag = match.group(1)
            
            # Extract className value
            class_match = re.search(r'className\s*=\s*["\']([^"\']*)["\']', h3_tag)
            if not class_match:
                return h3_tag
                
            old_class = class_match.group(1)
            new_class = self.update_classname(
                old_class, 
                [("text-lg", "text-xl sm:text-xl md:text-2xl")]
            )
            
            # Replace the className in the h3 tag
            new_h3_tag = h3_tag.replace(f'"{old_class}"', f'"{new_class}"')
            new_h3_tag = new_h3_tag.replace(f"'{old_class}'", f"'{new_class}'")
            
            return new_h3_tag
        
        return self.h3_pattern.sub(replace_h3_class, content)

    def process_ul_elements(self, content: str) -> str:
        """
        Process all ul elements and their child li elements.
        
        Args:
            content: The file content to process
            
        Returns:
            Content with updated ul and li elements
        """
        # First pass: process UL elements
        def replace_ul_class(match: re.Match) -> str:
            ul_tag = match.group(1)
            
            # Extract className value
            class_match = re.search(r'className\s*=\s*["\']([^"\']*)["\']', ul_tag)
            if not class_match:
                return ul_tag
                
            old_class = class_match.group(1)
            new_class = self.update_classname(
                old_class, 
                [("text-sm", "text-md")],
                ["list-none", "pl-0"]
            )
            
            # Replace the className in the ul tag
            new_ul_tag = ul_tag.replace(f'"{old_class}"', f'"{new_class}"')
            new_ul_tag = new_ul_tag.replace(f"'{old_class}'", f"'{new_class}'")
            
            return new_ul_tag
        
        content = self.ul_pattern.sub(replace_ul_class, content)
        
        # Second pass: process LI elements within the context of UL elements
        # This is a simplified approach - for more complex cases, a proper HTML parser would be better
        def replace_li_class(match: re.Match) -> str:
            li_tag = match.group(1)
            
            # Check if this li has a className attribute
            class_match = re.search(r'className\s*=\s*["\']([^"\']*)["\']', li_tag)
            
            if class_match:
                # Update existing className
                old_class = class_match.group(1)
                new_class = self.update_classname(
                    old_class, 
                    [],
                    ["pl-3", "-indent-3"]
                )
                new_li_tag = li_tag.replace(f'"{old_class}"', f'"{new_class}"')
                new_li_tag = new_li_tag.replace(f"'{old_class}'", f"'{new_class}'")
            else:
                # Add className attribute
                if li_tag.endswith('>'):
                    new_li_tag = li_tag[:-1] + ' className="pl-3 -indent-3">'
                else:
                    new_li_tag = li_tag
            
            return new_li_tag
        
        # Apply li processing only to lis that have id attributes (as per your example)
        content = self.li_pattern.sub(replace_li_class, content)
        
        return content

    def process_file(self, file_path: Path) -> bool:
        """
        Process a single page.tsx file.
        
        Args:
            file_path: Path to the file to process
            
        Returns:
            True if file was modified, False otherwise
        """
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            original_content = content
            
            # Apply all transformations
            content = self.process_h3_elements(content)
            content = self.process_ul_elements(content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(content)
                
                self.modified_files.add(file_path)
                logger.info(f"Modified: {file_path}")
                return True
            else:
                logger.debug(f"No changes needed: {file_path}")
                return False
                
        except Exception as e:
            logger.error(f"Error processing {file_path}: {e}")
            return False

    def run(self) -> None:
        """Execute the modernization process on all found page files."""
        if not self.base_directory.exists():
            logger.error(f"Base directory does not exist: {self.base_directory}")
            return
        
        page_files = self.find_page_files()
        
        if not page_files:
            logger.warning("No page.tsx files found")
            return
        
        modified_count = 0
        for file_path in page_files:
            if self.process_file(file_path):
                modified_count += 1
        
        logger.info(f"Modernization complete. Modified {modified_count} out of {len(page_files)} files")
        
        if self.modified_files:
            logger.info("Modified files:")
            for file_path in sorted(self.modified_files):
                logger.info(f"  - {file_path}")

def main() -> None:
    """Main function to execute the script."""
    base_directory = Path("/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/[locale]/engineer")
    
    if not base_directory.exists():
        logger.error(f"Base directory not found: {base_directory}")
        logger.info("Please update the base_directory path in the script")
        return
    
    modernizer = PageModernizer(base_directory)
    modernizer.run()

if __name__ == "__main__":
    main()