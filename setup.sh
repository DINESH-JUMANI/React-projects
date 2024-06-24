#!/bin/bash

# Check if directory name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <directory_name>"
  exit 1
fi

# Change to the provided directory
cd "$1" || { echo "Directory not found: $1"; exit 1; }

# Run npm install
npm install

# Install tailwindcss, postcss, and autoprefixer
npm install -D tailwindcss postcss autoprefixer

# Initialize tailwindcss with a postcss configuration
npx tailwindcss init -p

# Replace content array in tailwind.config.js
sed -i '' 's/content: \[\]/content: ["\.\/index\.html", "\.\/src\/\*\*\/\*\.{js,ts,jsx,tsx}"]/' tailwind.config.js

# Clear /src/index.css and add the tailwind directives
echo '@tailwind base;' > src/index.css
echo '@tailwind components;' >> src/index.css
echo '@tailwind utilities;' >> src/index.css

echo "Tailwind CSS setup is complete."
