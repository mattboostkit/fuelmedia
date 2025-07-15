import os
import re

# Files to fix
files = [
    r"app\(site)\case-studies\fmcg-contract-negotiation\page.tsx",
    r"app\(site)\case-studies\retail-media-audit\page.tsx",
    r"app\(site)\case-studies\page.tsx",
    r"components\sections\ServicesSection.tsx",
    r"app\(site)\locations\leeds\page.tsx",
    r"app\(site)\locations\edinburgh\page.tsx",
    r"app\(site)\locations\birmingham\page.tsx",
    r"app\(site)\locations\manchester\page.tsx",
    r"app\(site)\locations\london\page.tsx",
    r"app\(site)\locations\page.tsx",
    r"app\(site)\services\page.tsx",
    r"app\(site)\services\performance-review\page.tsx",
    r"app\(site)\services\contract-negotiation\page.tsx",
    r"app\(site)\services\agency-pitch-management\page.tsx",
    r"app\(site)\services\uk-media-audit\page.tsx"
]

base_path = r"C:\Dev\Cascade\fuelmedia"

for file_path in files:
    full_path = os.path.join(base_path, file_path)
    print(f"Processing: {file_path}")
    
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace variant="outline" with variant="ghost"
        new_content = content.replace('variant="outline"', 'variant="ghost"')
        
        if content != new_content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  ✓ Fixed variant in {file_path}")
        else:
            print(f"  - No changes needed in {file_path}")
            
    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {e}")

print("\nDone!")