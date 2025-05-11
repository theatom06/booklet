#!/bin/bash
# Made by Copilot

# Step 1: Run the bun build command and output to test.js
bun build --target=browser --minify index.js --outfile=test.js

# Step 2: Create a bookmarklet from the test.js file
FORMAT='javascript:(function(){/*HERE*/})();'

# Read the contents of test.js
CONTENT=$(<test.js)

# Escape the content for use in the JavaScript bookmarklet
ESCAPED_CONTENT=$(echo "$CONTENT" | sed -e ':a' -e 'N' -e '$!ba' -e 's/\n/ /g' -e 's/"/\\"/g')

# Replace /*HERE*/ in the FORMAT with the escaped content
BOOKMARKLET=$(echo "$FORMAT" | awk -v content="$ESCAPED_CONTENT" '{gsub("/\\*HERE\\*/", content); print}')

# Write the bookmarklet to a new file
echo "$BOOKMARKLET" > bookmarklet.js
echo "Bookmarklet created in bookmarklet.js file.\nDeleting test.js file..."
# Step 3: Delete the test.js file
rm test.js
echo "test.js file deleted."
# Step 4: Print the bookmarklet and copy it to the clipboard
echo "Bookmarklet:"
echo "$BOOKMARKLET"
echo "$BOOKMARKLET" | xsel --clipboard --input
echo "Bookmarklet copied to clipboard."