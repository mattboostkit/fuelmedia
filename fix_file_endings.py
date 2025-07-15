import os

files_to_fix = [
    r"app\(site)\locations\page.tsx",
    r"app\(site)\services\page.tsx",
    r"app\(site)\locations\edinburgh\page.tsx",
    r"app\(site)\locations\london\page.tsx",
    r"app\(site)\locations\manchester\page.tsx",
    r"app\(site)\locations\birmingham\page.tsx",
    r"app\(site)\locations\leeds\page.tsx",
    r"app\(site)\case-studies\financial-services-pitch\page.tsx",
]

base_path = r"C:\Dev\Cascade\fuelmedia"

for file_path in files_to_fix:
    full_path = os.path.join(base_path, file_path)
    print(f"Fixing {file_path}")
    
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove any trailing whitespace and ensure single newline at end
        content = content.rstrip() + '\n'
        
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"  ✓ Fixed")
            
    except Exception as e:
        print(f"  ✗ Error: {e}")

print("\nDone!")