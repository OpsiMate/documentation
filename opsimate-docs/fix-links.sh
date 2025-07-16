#!/bin/bash

# Find all markdown files in the docs directory
find docs -name "*.md" -type f | while read -r file; do
  # Replace all occurrences of /docs/ with / in links
  sed -i '' 's|href="/docs/|href="/|g' "$file"
  sed -i '' 's|\[.*\](/docs/|\[&\](/|g' "$file"
  echo "Fixed links in $file"
done

echo "All links have been fixed!"
