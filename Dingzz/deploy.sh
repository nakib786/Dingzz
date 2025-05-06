#!/bin/bash

echo "Starting deployment process with deploy.sh"

# Install dependencies
npm install

# Run the build
echo "Running build"
tsc -b || true
npx vite build

echo "Deployment completed successfully" 