import subprocess
import datetime

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

print("=== FORCING NEW COMMIT FOR NETLIFY ===")

# Add all files
print("\n1. Adding all files...")
stdout, stderr, code = run_command("git add -A")
print("Files added.")

# Create commit with timestamp
timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
commit_msg = f"Fix all Button variant errors for Netlify deployment - {timestamp}"

print(f"\n2. Creating commit: {commit_msg}")
stdout, stderr, code = run_command(f'git commit -m "{commit_msg}"')
print(f"Commit output: {stdout}")
if stderr:
    print(f"Stderr: {stderr}")

# Push to main
print("\n3. Pushing to origin main...")
stdout, stderr, code = run_command("git push origin main")
print(f"Push output: {stdout}")
if stderr:
    print(f"Push stderr: {stderr}")

# Show latest commit
print("\n4. Latest commit:")
stdout, stderr, code = run_command("git log --oneline -1")
print(stdout)

print("\n=== NEW COMMIT PUSHED! Check Netlify for new build ===")