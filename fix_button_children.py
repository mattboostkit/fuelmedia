import os
import re

# Files to fix
location_files = [
    r"app\(site)\locations\edinburgh\page.tsx",
    r"app\(site)\locations\london\page.tsx",
    r"app\(site)\locations\manchester\page.tsx",
    r"app\(site)\locations\birmingham\page.tsx",
    r"app\(site)\locations\leeds\page.tsx"
]

base_path = r"C:\Dev\Cascade\fuelmedia"

def fix_button_children(content):
    """Fix Button asChild issues by ensuring single child"""
    # Pattern to match Button with asChild
    pattern = r'(<Button[^>]*asChild[^>]*>)\s*\n?\s*(<Link[^>]*>.*?</Link>)\s*\n?\s*(</Button>)'
    
    # Replace with cleaned version (no extra whitespace)
    def replacer(match):
        button_open = match.group(1)
        link = match.group(2)
        button_close = match.group(3)
        return f"{button_open}{link}{button_close}"
    
    return re.sub(pattern, replacer, content, flags=re.DOTALL)

for file_path in location_files:
    full_path = os.path.join(base_path, file_path)
    print(f"Processing: {file_path}")
    
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix Button asChild issues
        new_content = fix_button_children(content)
        
        if content != new_content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  ✓ Fixed Button asChild in {file_path}")
        else:
            print(f"  - No changes needed in {file_path}")
            
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {e}")

# Also check case studies and services
other_files = [
    r"app\(site)\case-studies\financial-services-pitch\page.tsx",
    r"app\(site)\case-studies\fmcg-contract-negotiation\page.tsx",
    r"app\(site)\case-studies\retail-media-audit\page.tsx",
    r"app\(site)\services\uk-media-audit\page.tsx",
    r"app\(site)\services\agency-pitch-management\page.tsx",
    r"app\(site)\services\contract-negotiation\page.tsx",
    r"app\(site)\services\performance-review\page.tsx"
]

print("\nChecking other files...")
for file_path in other_files:
    full_path = os.path.join(base_path, file_path)
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = fix_button_children(content)
        
        if content != new_content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  ✓ Fixed Button asChild in {file_path}")
            
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {e}")

print("\nDone!")