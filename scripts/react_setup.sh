#!/bin/bash

# sh ./scripts/react_setup.sh <project_name>

# Check if project name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <project_name>"
  exit 1
fi

PROJECT_NAME="$1"

# Create Vite project with React template
npm create vite@latest "$PROJECT_NAME" -- --template react

# Change to the project directory
cd "$PROJECT_NAME" || { echo "Directory not found: $PROJECT_NAME"; exit 1; }

# Run npm install
npm install

# Delete all files inside the public directory
rm -rf public/*

# Delete all files inside the src/assets directory
rm -rf src/assets/*

# Clear the content of src/App.jsx
echo 'rfce' > src/App.jsx

# Clear the content of src/index.css
echo '' > src/index.css

# Delete the src/App.css file
rm -f src/App.css

echo "Vite project setup is complete."
