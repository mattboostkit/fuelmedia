import subprocess
import os

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

print("=== Pushing Variant Fix ===")

# Check git status
stdout, stderr, code = run_command("git status --porcelain")
print(f"\nModified files:\n{stdout}")

# Add all changes
print("\nAdding all changes...")
stdout, stderr, code = run_command("git add -A")

# Commit
print("\nCommitting...")
stdout, stderr, code = run_command('git commit -m "Fix Button variant error - change all outline to ghost"')
print(f"Commit result: {stdout}")
if stderr:
    print(f"Stderr: {stderr}")

# Push
print("\nPushing...")
stdout, stderr, code = run_command("git push origin main")
print(f"Push result: {stdout}")
if stderr:
    print(f"Push stderr: {stderr}")

# Show latest commits
print("\nLatest commits:")
stdout, stderr, code = run_command("git log --oneline -3")
print(stdout)

print("\n=== Done ===")