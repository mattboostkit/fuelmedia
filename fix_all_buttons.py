import os
import re

base_path = r"C:\Dev\Cascade\fuelmedia"

# Find all TypeScript/TSX files
all_files = []
for root, dirs, files in os.walk(base_path):
    # Skip node_modules and .next
    if 'node_modules' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            all_files.append(os.path.join(root, file))

print(f"Found {len(all_files)} TypeScript files to check")

def fix_button_asChild(content):
    """Remove asChild from Button and wrap Link properly"""
    # Pattern to match Button with asChild containing a Link
    pattern = r'<Button([^>]*)\s+asChild([^>]*)>(<Link[^>]*>.*?</Link>)</Button>'
    
    def replacer(match):
        props1 = match.group(1)
        props2 = match.group(2)
        link = match.group(3)
        # Combine props and remove asChild
        all_props = (props1 + props2).strip()
        # Wrap the Link in a Button without asChild
        return f'<Link{link[5:]}<Button{(" " + all_props) if all_props else ""}>{link[link.find(">")+1:link.rfind("<")]}</Button></Link>'
    
    # Apply the fix
    new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    # Also handle multiline cases
    pattern2 = r'<Button([^>]*)\s+asChild([^>]*)>\s*\n\s*(<Link[^>]*>.*?</Link>)\s*\n\s*</Button>'
    new_content = re.sub(pattern2, replacer, new_content, flags=re.DOTALL)
    
    return new_content

fixed_count = 0
for file_path in all_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'asChild' in content and 'Button' in content:
            new_content = fix_button_asChild(content)
            
            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"✓ Fixed {file_path}")
                fixed_count += 1
                
    except Exception as e:
        print(f"✗ Error processing {file_path}: {e}")

print(f"\nFixed {fixed_count} files")