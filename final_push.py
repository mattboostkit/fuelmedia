import subprocess
import os
import time

def run_command(cmd):
    """Run a command and return output"""
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            cwd=r"C:\Dev\Cascade\fuelmedia"
        )
        return result.stdout, result.stderr, result.returncode
    except Exception as e:
        return "", str(e), 1

print("=== Final Push for Netlify Build ===")

# First, let's see what files are modified
print("\n1. Checking for modified files...")
stdout, stderr, code = run_command("git diff --name-only")
if stdout:
    print(f"Modified files:\n{stdout}")
else:
    print("No modified files found.")

# Check for untracked files
stdout, stderr, code = run_command("git ls-files --others --exclude-standard")
if stdout:
    print(f"\nUntracked files:\n{stdout}")

# Add all TypeScript/TSX files that might have the variant change
print("\n2. Adding all TypeScript files...")
files_to_add = [
    "app/(site)/case-studies/financial-services-pitch/page.tsx",
    "app/(site)/case-studies/fmcg-contract-negotiation/page.tsx",
    "app/(site)/case-studies/retail-media-audit/page.tsx",
    "app/(site)/case-studies/page.tsx",
    "components/sections/ServicesSection.tsx",
    "app/(site)/locations/leeds/page.tsx",
    "app/(site)/locations/edinburgh/page.tsx",
    "app/(site)/locations/birmingham/page.tsx",
    "app/(site)/locations/manchester/page.tsx",
    "app/(site)/locations/london/page.tsx",
    "app/(site)/locations/page.tsx",
    "app/(site)/services/page.tsx",
    "app/(site)/services/performance-review/page.tsx",
    "app/(site)/services/contract-negotiation/page.tsx",
    "app/(site)/services/agency-pitch-management/page.tsx",
    "app/(site)/services/uk-media-audit/page.tsx"
]

for file in files_to_add:
    stdout, stderr, code = run_command(f'git add "{file}"')
    
# Check what's staged
print("\n3. Checking staged files...")
stdout, stderr, code = run_command("git diff --cached --name-only")
if stdout:
    print(f"Staged files:\n{stdout}")
    
    # Commit if there are staged changes
    print("\n4. Committing changes...")
    commit_msg = "Fix all Button variant='outline' to variant='ghost' for Netlify build"
    stdout, stderr, code = run_command(f'git commit -m "{commit_msg}"')
    print(f"Commit output: {stdout}")
    if stderr:
        print(f"Commit stderr: {stderr}")
    
    # Push changes
    print("\n5. Pushing to origin main...")
    stdout, stderr, code = run_command("git push origin main")
    print(f"Push output: {stdout}")
    if stderr:
        print(f"Push stderr: {stderr}")
else:
    print("No changes to commit.")

# Show recent commits
print("\n6. Recent commits:")
stdout, stderr, code = run_command("git log --oneline -5")
print(stdout)

print(f"\n=== Completed at {time.strftime('%Y-%m-%d %H:%M:%S')} ===")