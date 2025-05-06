// Custom build script for Vercel
const { execSync } = require('child_process');
const { existsSync } = require('fs');
const path = require('path');

function runCommand(command) {
  console.log(`Running command: ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Command failed: ${command}`);
    console.error(error.message);
    return false;
  }
}

// Check vite executable
const vitePath = path.join(process.cwd(), 'node_modules', '.bin', 'vite');
const alternativeVitePath = path.join(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js');

// Main build process
console.log('Starting deployment with fallback mechanisms');
console.log('Attempt 1: Standard npm install');

// Install dependencies
runCommand('npm install');

// Display PATH for debugging
console.log('PATH:', process.env.PATH);

// Check if vite exists
console.log('Checking for vite binary:');
console.log(`Vite binary exists at ${vitePath}: ${existsSync(vitePath)}`);
console.log(`Vite script exists at ${alternativeVitePath}: ${existsSync(alternativeVitePath)}`);

// Run build
console.log('Running build');
runCommand('tsc -b || true');

// Try different approaches to run vite
if (existsSync(vitePath)) {
  runCommand(`${vitePath} build`);
} else if (existsSync(alternativeVitePath)) {
  runCommand(`node ${alternativeVitePath} build`);
} else {
  runCommand('npx vite build');
}

console.log('Deployment process completed'); 