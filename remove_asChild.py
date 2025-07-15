import os
import re

base_path = r"C:\Dev\Cascade\fuelmedia"

# List of files we know have the issue
files_to_fix = [
    r"app\(site)\locations\edinburgh\page.tsx",
    r"app\(site)\locations\london\page.tsx",
    r"app\(site)\locations\manchester\page.tsx",
    r"app\(site)\locations\birmingham\page.tsx",
    r"app\(site)\locations\leeds\page.tsx",
    r"app\(site)\services\uk-media-audit\page.tsx",
    r"app\(site)\services\agency-pitch-management\page.tsx",
    r"app\(site)\services\contract-negotiation\page.tsx",
    r"app\(site)\services\performance-review\page.tsx",
    r"app\(site)\case-studies\financial-services-pitch\page.tsx",
    r"app\(site)\case-studies\fmcg-contract-negotiation\page.tsx",
    r"app\(site)\case-studies\retail-media-audit\page.tsx"
]

def remove_asChild_from_buttons(content):
    """Simply remove asChild prop from all Button components"""
    # Remove asChild from Button tags
    content = re.sub(r'(\<Button[^>]*?)\s+asChild\s*([^>]*?>)', r'\1\2', content)
    return content

for file_path in files_to_fix:
    full_path = os.path.join(base_path, file_path)
    print(f"Processing: {file_path}")
    
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = remove_asChild_from_buttons(content)
        
        if content != new_content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  ✓ Removed asChild from {file_path}")
        else:
            print(f"  - No asChild found in {file_path}")
            
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {e}")

print("\nDone!")