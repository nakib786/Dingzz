#!/bin/bash
echo "Starting deployment with fallback mechanisms"
echo "Attempt 1: Standard npm install"
npm install
echo "Running build"
tsc -b || true
./node_modules/.bin/vite build 