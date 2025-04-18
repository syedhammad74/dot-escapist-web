const { execSync } = require('child_process');
const path = require('path');

// Execute build
console.log('Building Next.js application...');
try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('Build completed successfully');
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}

// Start Next.js
console.log('Starting Next.js application...');
require('next/dist/bin/next'); 