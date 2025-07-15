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

print("=== PUSHING CRITTERS DEPENDENCY FIX ===")

# Add package files
print("\n1. Adding package files...")
stdout, stderr, code = run_command("git add package.json package-lock.json")
print("Package files added.")

# Create commit
timestamp = datetime.datetime.now().strftime("%H:%M:%S")
commit_msg = f"Add critters dependency for Netlify build - {timestamp}"

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

print("\n=== CRITTERS FIX PUSHED! New build should start on Netlify ===")