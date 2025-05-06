#!/bin/bash
echo "Running vercel-build.sh"
export PATH="$PATH:./node_modules/.bin"
echo "PATH: $PATH"
npm list vite
ls -la ./node_modules/.bin/
node ./node_modules/vite/bin/vite.js build 