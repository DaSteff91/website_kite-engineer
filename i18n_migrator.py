import os
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple, Optional, Set, Any
import argparse
import shutil

class EnhancedI18nMigrator:
    def __init__(self, base_dir: str, messages_path: str):
        self.base_dir = Path(base_dir)
        self.messages_path = Path(messages_path)
        self.messages_data = self._load_messages()
        
        # Next.js imports to replace with i18n equivalents
        self.next_imports_to_replace = {
            "next/link": ["Link"],
            "next/navigation": ["redirect", "usePathname", "useRouter", "getPathname"]
        }
        
        # Regex patterns
        self.import_pattern = re.compile(r'import\s+(?:\{([^}]+)\}|([^\{;\n]+))\s+from\s+["\']([^"\']+)["\'];?', re.DOTALL | re.MULTILINE)
        self.function_declaration_pattern = re.compile(r'export\s+default\s+function\s+(\w+)')
        self.jsx_text_pattern = re.compile(r'(<([A-Za-z][A-Za-z0-9]*)(?:\s+[^>]*)?>)(.*?)(</\2>)', re.DOTALL)
        self.comment_pattern = re.compile(r'/\*.*?\*/|//.*?$', re.DOTALL | re.MULTILINE)
        self.use_translations_pattern = re.compile(r'import\s*{\s*useTranslations\s*}\s*from\s*["\']next-intl["\']')
        self.js_expression_pattern = re.compile(r'\{[^}]*\}')
        self.template_literal_pattern = re.compile(r'`[^`]*`')
        self.multi_line_text_pattern = re.compile(r'>(?:\s*\n\s*)([^<{]+)(?:\s*\n\s*)<', re.DOTALL)

        # Standard HTML tags that typically contain text
        self.html_text_tags = {
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 
            'a', 'li', 'td', 'th', 'label', 'button', 'figcaption'
        }
        
        # React component names that contain text (from your examples)
        self.react_text_components = {
            'AccordionContent', 'Link'  # Add more as needed
        }
        
        # All tags/components that should be processed for text
        self.all_text_elements = self.html_text_tags | self.react_text_components
        
    def _load_messages(self) -> Dict:
        """Load the existing messages JSON file."""
        if self.messages_path.exists():
            with open(self.messages_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        return {}
    
    def _save_messages(self):
        """Save the updated messages back to the JSON file."""
        # Create backup
        backup_path = self.messages_path.with_suffix('.json.bak')
        shutil.copy2(self.messages_path, backup_path)
        
        with open(self.messages_path, 'w', encoding='utf-8') as f:
            json.dump(self.messages_data, f, indent=2, ensure_ascii=False)
    
    def _find_page_files(self) -> List[Path]:
        """Find all page.tsx files recursively in the base directory."""
        page_files = []
        for root, _, files in os.walk(self.base_dir):
            for file in files:
                if file == 'page.tsx':
                    page_files.append(Path(root) / file)
        return page_files
    
    def _extract_page_name(self, content: str) -> Optional[str]:
        """Extract the page function name from the content."""
        match = self.function_declaration_pattern.search(content)
        if match:
            return match.group(1)
        return None
    
    def _has_use_translations_import(self, content: str) -> bool:
        """Check if the useTranslations import is already present."""
        return bool(self.use_translations_pattern.search(content))
    
    def _add_use_translations_import(self, content: str) -> str:
        """Add the useTranslations import to the content."""
        lines = content.split('\n')
        
        # Find the last import statement
        last_import_line = -1
        for i, line in enumerate(lines):
            if line.strip().startswith('import '):
                last_import_line = i
        
        # Insert after the last import
        if last_import_line >= 0:
            lines.insert(last_import_line + 1, 'import { useTranslations } from "next-intl";')
        else:
            # If no imports found, add at the top
            lines.insert(0, 'import { useTranslations } from "next-intl";')
        
        return '\n'.join(lines)
    
    def _replace_next_imports(self, content: str) -> str:
        """Replace Next.js imports with i18n equivalents, handling multi-line imports."""
        lines = content.split('\n')
        new_lines = []
        i18n_imports = set()
        i = 0
        
        while i < len(lines):
            line = lines[i]
            
            # Check if this line starts an import statement
            if line.strip().startswith('import '):
                import_lines = [line]
                
                # Check if this is a multi-line import
                if '{' in line and '}' not in line:
                    # Collect all lines until we find the closing brace
                    j = i + 1
                    while j < len(lines) and '}' not in lines[j]:
                        import_lines.append(lines[j])
                        j += 1
                    if j < len(lines):
                        import_lines.append(lines[j])  # Add the line with closing brace
                        i = j  # Skip the lines we've processed
                
                # Process the complete import statement (single or multi-line)
                import_statement = '\n'.join(import_lines)
                match = self.import_pattern.search(import_statement)
                
                if match:
                    imported_items = match.group(1) or match.group(2)
                    source = match.group(3)
                    
                    if source in self.next_imports_to_replace:
                        # Extract items that need to be replaced
                        items = []
                        if match.group(1):  # Braced import: { item1, item2 }
                            items = [item.strip() for item in imported_items.split(',')]
                        else:  # Default import: Item
                            items = [imported_items.strip()]
                        
                        items_to_replace = []
                        items_to_keep = []
                        
                        for item in items:
                            if any(item == i for i in self.next_imports_to_replace[source]):
                                items_to_replace.append(item)
                            else:
                                items_to_keep.append(item)
                        
                        # Add to i18n imports
                        if items_to_replace:
                            i18n_imports.update(items_to_replace)
                        
                        # Reconstruct the import line if there are items to keep
                        if items_to_keep:
                            if len(items_to_keep) == 1 and not match.group(1):
                                # Default import
                                new_line = f'import {items_to_keep[0]} from "{source}";'
                                new_lines.append(new_line)
                            else:
                                # Braced import - need to handle multi-line
                                if len(import_lines) > 1:
                                    # Multi-line import - preserve formatting
                                    import_text = '\n'.join(import_lines)
                                    for item in items_to_replace:
                                        import_text = re.sub(r'\b' + item + r'\b,?\s*', '', import_text)
                                    # Clean up empty lines and formatting
                                    import_text = re.sub(r',\s*\n\s*}', '\n}', import_text)
                                    new_lines.append(import_text)
                                else:
                                    # Single-line braced import
                                    new_imports = ", ".join(items_to_keep)
                                    new_line = f'import {{{new_imports}}} from "{source}";'
                                    new_lines.append(new_line)
                        else:
                            # Skip the import entirely if all items were replaced
                            pass
                    else:
                        # Not an import we need to replace, keep as is
                        new_lines.extend(import_lines)
                else:
                    # Couldn't parse import, keep as is
                    new_lines.extend(import_lines)
            else:
                # Not an import line, keep as is
                new_lines.append(line)
            
            i += 1
        
        # Add i18n import if needed
        if i18n_imports:
            i18n_import_line = f'import {{{", ".join(sorted(i18n_imports))}}} from "@/i18n/navigation";'
            
            # Find the best place to insert the i18n import (after the last import)
            insert_index = 0
            for i, line in enumerate(new_lines):
                if line.strip().startswith('import '):
                    insert_index = i + 1
                elif line.strip() and not line.strip().startswith('import '):
                    break
            
            new_lines.insert(insert_index, i18n_import_line)
        
        return '\n'.join(new_lines)

    def _add_translations_hook(self, content: str, page_name: str) -> str:
        """Add the useTranslations hook to the function body."""
        function_start_pattern = re.compile(r'export\s+default\s+function\s+' + page_name + r'\s*\([^)]*\)\s*{')
        match = function_start_pattern.search(content)
        
        if not match:
            return content
        
        function_start = match.end()
        # Find the first line inside the function
        lines = content.split('\n')
        function_line = -1
        
        for i, line in enumerate(lines):
            if match.group(0) in line:
                function_line = i
                break
        
        if function_line == -1:
            return content
        
        # Find the first non-empty line inside the function
        hook_insert_line = function_line + 1
        while hook_insert_line < len(lines) and not lines[hook_insert_line].strip():
            hook_insert_line += 1
        
        # Add the translations hook
        hook_line = f'  const t = useTranslations("{page_name}");'
        lines.insert(hook_insert_line, hook_line)
        
        return '\n'.join(lines)
    
    def _contains_js_expression(self, text: str) -> bool:
        """Check if text contains JavaScript expressions."""
        return bool(self.js_expression_pattern.search(text)) or bool(self.template_literal_pattern.search(text))
    
    def _is_commented_out(self, content: str, position: int) -> bool:
        """Check if the text at the given position is inside a comment."""
        # Look backwards for comment start
        comment_start = content.rfind('/*', 0, position)
        comment_end = content.rfind('*/', 0, position)
        
        # If we found a comment start but no end before our position, we're inside a comment
        if comment_start != -1 and (comment_end == -1 or comment_end < comment_start):
            return True
            
        # Check for single-line comments
        line_start = content.rfind('\n', 0, position)
        if line_start == -1:
            line_start = 0
            
        line_content = content[line_start:position]
        return '//' in line_content and not ('://' in line_content)  # Avoid mistaking URLs for comments
    
    def _extract_text_from_jsx(self, content: str) -> List[Tuple[str, str, str, int]]:
        """Extract text content from specific JSX elements while avoiding containers."""
        elements_with_text = []
        
        # Pattern to find target elements with simple text content (no nested tags)
        pattern = re.compile(
            r'(<([A-Za-z][A-Za-z0-9]*)(?:\s+[^>]*)?>)\s*([^<{]+?)\s*(</\2>)', 
            re.DOTALL
        )
        
        for match in pattern.finditer(content):
            full_match = match.group(0)
            opening_tag, tag_name, text, closing_tag = match.groups()
            
            # Skip if not in our target elements
            if tag_name not in self.all_text_elements:
                continue
                
            # Skip if this is inside a comment
            if self._is_commented_out(content, match.start()):
                continue
            
            text = text.strip()
            
            # Skip empty text or text that's too short
            if not text or len(text) < 3 or text.isspace():
                continue
                
            # Skip if text contains JS expressions
            if self._contains_js_expression(text):
                continue
                
            # Handle multi-line text
            text = re.sub(r'\s+', ' ', text)
            
            elements_with_text.append((tag_name, text, full_match, match.start()))
        
        return elements_with_text
    
    def _replace_text_with_translations(self, content: str, page_name: str) -> Tuple[str, Dict]:
        """Replace text in JSX elements with translation keys and return updated content and translations."""
        elements = self._extract_text_from_jsx(content)
        updated_content = content
        translations = {}
        counter = 1
        
        # Process elements in reverse order to avoid position shifting issues
        for tag_name, text, original, position in sorted(elements, key=lambda x: x[3], reverse=True):
            # Additional filtering: skip text that's too short or seems like placeholder
            if len(text) < 3 or text in ['...', '>>', '<<', '→', '←']:
                continue
                
            # Skip text that looks like it might be a variable or complex content
            if any(char in text for char in ['{', '}', '$', '[', ']']):
                continue
                
            key = f"{tag_name}_{counter}"
            replacement = original.replace(text, f"{{t(\"{key}\")}}")
            
            # Replace the text with the translation key
            updated_content = updated_content[:position] + replacement + updated_content[position + len(original):]
            
            # Add to translations
            translations[key] = text
            counter += 1
        
        return updated_content, translations
    
    def _update_messages_data(self, page_name: str, translations: Dict):
        """Update the messages data with new translations for the page."""
        if page_name not in self.messages_data:
            self.messages_data[page_name] = {}
        
        self.messages_data[page_name].update(translations)
    
    def _create_backup(self, file_path: Path):
        """Create a backup of the original file."""
        backup_path = file_path.with_suffix('.tsx.bak')
        shutil.copy2(file_path, backup_path)
    

    def _contains_other_components(self, text: str) -> bool:
        """Check if text contains other React components (capitalized tags)."""
        return bool(re.search(r'<[A-Z][^>]*>', text))

    def process_page(self, file_path: Path) -> bool:
        """Process a single page.tsx file."""
        try:
            # Create backup
            self._create_backup(file_path)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if useTranslations import is already present
            if self._has_use_translations_import(content):
                print(f"Skipping {file_path} - useTranslations import already exists")
                return False
            
            # Extract page name
            page_name = self._extract_page_name(content)
            if not page_name:
                print(f"Warning: Could not extract page name from {file_path}")
                return False
            
            print(f"Processing {file_path} (page: {page_name})")
            
            # Add useTranslations import
            content = self._add_use_translations_import(content)
            
            # Replace Next.js imports with i18n equivalents
            content = self._replace_next_imports(content)
            
            # Add translations hook to function
            content = self._add_translations_hook(content, page_name)
            
            # Replace text with translation keys
            content, translations = self._replace_text_with_translations(content, page_name)
            
            # Update messages data
            self._update_messages_data(page_name, translations)
            
            # Write the updated content back to the file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Updated {file_path} with {len(translations)} translations")
            return True
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            return False
    
    def run(self):
        """Run the migration process on all page files."""
        page_files = self._find_page_files()
        print(f"Found {len(page_files)} page.tsx files")
        
        processed_count = 0
        for file_path in page_files:
            if self.process_page(file_path):
                processed_count += 1
        
        # Save the updated messages
        self._save_messages()
        print(f"Processed {processed_count} files and updated messages.json")
        print("Note: Some complex cases may require manual review. Please check the backup files.")

def main():
    parser = argparse.ArgumentParser(description='Migrate Next.js pages to use next-intl for i18n')
    parser.add_argument('--base-dir', default='/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/app/[locale]',
                    help='Base directory to search for page.tsx files')
    parser.add_argument('--messages-path', default='/home/steff/Projects/ongoing/Kite_engineer/website_kite-engineer/messages/en-US.json',
                    help='Path to the messages JSON file')
    
    args = parser.parse_args()
    
    migrator = EnhancedI18nMigrator(args.base_dir, args.messages_path)
    migrator.run()

if __name__ == '__main__':
    main()