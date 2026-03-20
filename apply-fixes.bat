@echo off
REM Auto-apply script for Grand Boutique Hotel fixes (Windows)
REM Run this script to automatically apply code changes

echo 🔧 Applying fixes to Grand Boutique Hotel...

REM Fix 1: Update translation files - replace double braces with single braces
echo 📝 Fixing translation placeholder syntax...

for %%l in (en ka ar he ru tr) do (
    if exist "messages\%%l.json" (
        powershell -Command "(Get-Content 'messages\%%l.json') -replace '{{count}}','{count}' -replace '{{km}}','{km}' -replace '{{minutes}}','{minutes}' -replace '{{savings}}','{savings}' | Set-Content 'messages\%%l.json'"
        echo   ✓ Fixed messages\%%l.json
    )
)

REM Fix 2: Clear Next.js cache
echo 🗑️  Clearing Next.js cache...
if exist ".next" rmdir /s /q ".next"
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache"
echo   ✓ Cache cleared

echo.
echo ✅ All fixes applied successfully!
echo 🚀 Now run: npm run dev
