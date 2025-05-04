#!/bin/bash

echo "Starting deployment with fallback mechanisms"

# First attempt - standard npm install
echo "Attempt 1: Standard npm install"
npm install --prefer-offline --no-audit --legacy-peer-deps

# Check if the first attempt failed
if [ $? -ne 0 ]; then
  echo "Attempt 1 failed, trying second approach"
  
  # Second attempt - clean cache and install with force
  echo "Attempt 2: Cleaning cache and installing with force"
  npm cache clean --force
  npm install --no-audit --legacy-peer-deps --force
  
  # Check if the second attempt failed
  if [ $? -ne 0 ]; then
    echo "Attempt 2 failed, trying third approach"
    
    # Third attempt - use yarn instead
    echo "Attempt 3: Using Yarn instead"
    yarn install --network-timeout 600000 --prefer-offline
    
    # Check if the third attempt failed
    if [ $? -ne 0 ]; then
      echo "Attempt 3 failed, trying minimal install"
      
      # Fourth attempt - minimal install of only production dependencies
      echo "Attempt 4: Minimal install (production only)"
      npm install --production --no-audit --legacy-peer-deps
      npm install vite --no-audit
    fi
  fi
fi

# Run build regardless of which installation method succeeded
echo "Running build"
npm run build || yarn build

echo "Deployment process completed" 