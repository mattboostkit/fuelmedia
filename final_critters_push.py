import subprocess
import sys

def run_command(cmd):
    """Run command and show output in real-time"""
    process = subprocess.Popen(
        cmd,
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        cwd=r"C:\Dev\Cascade\fuelmedia"
    )
    
    stdout, stderr = process.communicate()
    return stdout, stderr, process.returncode

print("=== FINAL CRITTERS PUSH ===")

# Check if package.json has changes
print("\n1. Checking for package.json changes...")
stdout, stderr, code = run_command("git diff package.json")
if stdout:
    print("package.json has changes")
else:
    print("package.json has no changes")

# Force add package files
print("\n2. Force adding package files...")
stdout, stderr, code = run_command("git add -f package.json package-lock.json")

# Check staged files
print("\n3. Checking staged files...")
stdout, stderr, code = run_command("git diff --cached --name-only")
print(f"Staged files: {stdout}")

# Commit with force
print("\n4. Committing...")
stdout, stderr, code = run_command('git commit -m "Add critters package to fix Netlify CSS optimization error"')
print(f"Commit result: {stdout}")
if stderr:
    print(f"Stderr: {stderr}")

if "nothing to commit" in stdout:
    print("\nNo changes to commit. Package may already be committed.")
else:
    # Push
    print("\n5. Pushing to origin main...")
    stdout, stderr, code = run_command("git push origin main")
    print(f"Push result: {stdout}")
    if stderr:
        print(f"Push stderr: {stderr}")

# Show latest commits with hash
print("\n6. Latest commits:")
stdout, stderr, code = run_command("git log --oneline -3")
print(stdout)

print("\n=== DONE ===")