#!/bin/bash

# sh ./scripts/react_tailwind_setup.sh <directory_name>

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

# Clear the content of tailwind.config.js and add the new content
cat > tailwind.config.js <<EOL
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Clear /src/index.css and add the tailwind directives
echo '@tailwind base;' > src/index.css
echo '@tailwind components;' >> src/index.css
echo '@tailwind utilities;' >> src/index.css

# Clear the content of ./src/App.jsx and add the new content
cat > src/App.jsx <<EOL
import { useState } from 'react'

function App() {
  return (
    <>
      <div></div>
    </>
  )
}

export default App
EOL

echo "Tailwind CSS setup is complete."

