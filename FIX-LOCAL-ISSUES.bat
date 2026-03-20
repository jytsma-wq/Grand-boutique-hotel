@echo off
echo ============================================
echo  FIXING LOCAL ISSUES - Telegraph Theme
echo ============================================

:: Kill any stuck Node processes
taskkill /F /IM node.exe 2>nul

:: Clear Next.js cache
echo Clearing .next cache...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache

:: Fix translation placeholders (double to single braces)
echo Fixing translation files...
powershell -Command "Get-ChildItem -Path messages -Filter *.json -Recurse | ForEach-Object { (Get-Content $_.FullName -Raw) -replace '\{\{count\}\}', '{count}' -replace '\{\{km\}\}', '{km}' -replace '\{\{minutes\}\}', '{minutes}' -replace '\{\{savings\}\}', '{savings}' | Set-Content $_.FullName }"

:: Create .env.local if not exists
if not exist .env.local (
    echo Creating .env.local...
    echo # Google Gemini API Key - Get new key from https://makersuite.google.com/app/apikey
    echo GOOGLE_GENERATIVE_AI_API_KEY=your_new_api_key_here
    echo.
    echo IMPORTANT: Edit .env.local and add your NEW API key!
    echo Get it from: https://makersuite.google.com/app/apikey
) else (
    echo .env.local already exists - check your API key is valid
)

echo.
echo ============================================
echo  DONE! Now run: npm run dev
echo ============================================
echo.
echo If chat still shows 500 error:
echo 1. Get NEW API key: https://makersuite.google.com/app/apikey
echo 2. Edit .env.local with the new key
echo 3. Run: npm run dev
echo ============================================
pause
