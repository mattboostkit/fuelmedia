@echo off
echo Adding files...
git add "app/(site)/blog/[slug]/page.tsx"
git add next.config.ts
echo.
echo Committing...
git commit -m "Fix Netlify build errors - ESLint and import issues"
echo.
echo Pushing...
git push origin main
echo.
echo Done!