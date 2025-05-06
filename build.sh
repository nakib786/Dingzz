#!/bin/bash
set -e

# Log environment info
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "PATH: $PATH"

# Install dependencies
npm install

# Verify vite is available 
echo "Vite version: $(npx vite --version)"

# Run build
npx tsc -b || true
npx vite build 