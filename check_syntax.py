import os
import ast

files_to_check = [
    r"app\(site)\locations\page.tsx",
    r"app\(site)\services\page.tsx"
]

base_path = r"C:\Dev\Cascade\fuelmedia"

for file_path in files_to_check:
    full_path = os.path.join(base_path, file_path)
    print(f"\nChecking {file_path}:")
    
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for BOM
        if content.startswith('\ufeff'):
            print("  ⚠️  File has BOM")
        
        # Check for null bytes
        if '\x00' in content:
            print("  ⚠️  File contains null bytes")
            
        # Check line endings
        if '\r\n' in content:
            print("  - Has Windows line endings (CRLF)")
        elif '\r' in content:
            print("  - Has Mac line endings (CR)")
        else:
            print("  - Has Unix line endings (LF)")
            
        # Count lines
        lines = content.split('\n')
        print(f"  - Total lines: {len(lines)}")
        
        # Check last line
        if lines[-1] == '':
            print("  - File ends with newline")
        else:
            print("  - File does NOT end with newline")
            
        # Look for syntax patterns around problematic lines
        for i, line in enumerate(lines):
            if i == 105 and 'locations' in file_path:  # Line 106 in locations
                print(f"  Line {i+1}: {repr(line)}")
                if i > 0:
                    print(f"  Line {i}: {repr(lines[i-1])}")
            if i == 50 and 'services' in file_path:  # Line 51 in services
                print(f"  Line {i+1}: {repr(line)}")
                if i > 0:
                    print(f"  Line {i}: {repr(lines[i-1])}")
                    
    except Exception as e:
        print(f"  ✗ Error: {e}")

print("\nDone!")