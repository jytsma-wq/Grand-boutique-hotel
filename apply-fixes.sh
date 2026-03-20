#!/bin/bash

# Auto-apply script for Grand Boutique Hotel fixes
# Run this script to automatically apply code changes

set -e

echo "🔧 Applying fixes to Grand Boutique Hotel..."

# Fix 1: Update translation files - replace double braces with single braces
echo "📝 Fixing translation placeholder syntax..."

for lang in en ka ar he ru tr; do
    if [ -f "messages/${lang}.json" ]; then
        # Replace {{count}} with {count}, {{km}} with {km}, etc.
        sed -i.bak 's/{{count}}/{count}/g' "messages/${lang}.json"
        sed -i.bak 's/{{km}}/{km}/g' "messages/${lang}.json"
        sed -i.bak 's/{{minutes}}/{minutes}/g' "messages/${lang}.json"
        sed -i.bak 's/{{savings}}/{savings}/g' "messages/${lang}.json"
        rm -f "messages/${lang}.json.bak"
        echo "  ✓ Fixed messages/${lang}.json"
    fi
done

# Fix 2: Clear Next.js cache
echo "🗑️  Clearing Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache 2>/dev/null || true
echo "  ✓ Cache cleared"

echo ""
echo "✅ All fixes applied successfully!"
echo "🚀 Now run: npm run dev"
