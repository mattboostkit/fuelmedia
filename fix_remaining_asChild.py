import os
import re

base_path = r"C:\Dev\Cascade\fuelmedia"

# Remaining files that need fixing
files_to_fix = [
    r"app\(site)\locations\page.tsx",
    r"app\(site)\services\page.tsx",
    r"app\(site)\case-studies\page.tsx",
    r"components\sections\ServicesSection.tsx"
]

def remove_asChild_from_buttons(content):
    """Remove asChild prop from all Button components"""
    # Remove asChild from Button tags (handle various spacing)
    content = re.sub(r'(\<Button[^>]*?)\s+asChild\s*([^>]*?>)', r'\1\2', content)
    content = re.sub(r'(\<Button[^>]*?)\s+asChild([^>]*?>)', r'\1\2', content)
    content = re.sub(r'(\<Button[^>]*?)asChild\s*([^>]*?>)', r'\1\2', content)
    return content

for file_path in files_to_fix:
    full_path = os.path.join(base_path, file_path)
    print(f"Processing: {file_path}")
    
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        new_content = remove_asChild_from_buttons(content)
        
        if original_content != new_content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  ✓ Removed asChild from {file_path}")
            
            # Count how many instances were removed
            count = original_content.count('asChild') - new_content.count('asChild')
            print(f"    (Removed {count} instances)")
        else:
            if 'asChild' in content:
                print(f"  ! Still contains asChild but not in Button context")
            else:
                print(f"  - No asChild found")
            
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {e}")

print("\nDone!")