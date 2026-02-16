import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 GITHUB PAGES EXACT SIMULATION TEST');
console.log('====================================');
console.log('This test will tell you EXACTLY what will happen on GitHub Pages\n');

// Step 1: Build for production
console.log('📦 Building for production...');

// Clean build
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
  console.log('🧹 Cleaned previous build');
}

// Build using Vite directly (avoiding npm script issues)
const vite = spawn('npx', ['vite', 'build'], { stdio: 'inherit', shell: true });

vite.on('close', (code) => {
  if (code !== 0) {
    console.log('\n❌ BUILD FAILED! This is why your GitHub Pages site is blank.');
    console.log('Fix the build errors above, then run this test again.');
    return;
  }
  
  console.log('\n✅ BUILD SUCCESS!');
  
  // Step 2: Analyze the build
  console.log('\n🔍 Analyzing build for GitHub Pages compatibility...');
  
  if (!fs.existsSync('dist')) {
    console.log('❌ No dist folder found after build!');
    return;
  }
  
  const distFiles = fs.readdirSync('dist');
  console.log(`📂 Build output: ${distFiles.join(', ')}`);
  
  // Check critical files
  if (!fs.existsSync('dist/index.html')) {
    console.log('❌ CRITICAL: index.html missing from build!');
    return;
  }
  
  console.log('✅ index.html found');
  
  // Analyze index.html for GitHub Pages issues
  const indexContent = fs.readFileSync('dist/index.html', 'utf8');
  
  let issues = [];
  let warnings = [];
  
  // Check for absolute paths (main cause of blank pages)
  // Allow /website/ paths as they are correct for GitHub Pages
  const badAbsolutePaths = indexContent.match(/(?:href|src)="\/(?!website\/)[^\/].*?"/g);
  if (badAbsolutePaths) {
    issues.push(`❌ CRITICAL: Bad absolute paths found: ${badAbsolutePaths.join(', ')} - will cause blank page on GitHub Pages`);
  }
  
  // Check for base path
  if (indexContent.includes('/website/')) {
    console.log('✅ Base path /website/ correctly configured');
  } else {
    warnings.push('⚠️  Base path /website/ not found - may cause asset loading issues');
  }
  
  // Check for assets
  const assetsFolders = distFiles.filter(f => f.includes('assets') || f.endsWith('.js') || f.endsWith('.css'));
  if (assetsFolders.length > 0) {
    console.log(`✅ Assets found: ${assetsFolders.join(', ')}`);
  }
  
  // Report issues
  if (issues.length > 0) {
    console.log('\n🚨 CRITICAL ISSUES FOUND (will cause blank page):');
    issues.forEach(issue => console.log(`   ${issue}`));
    console.log('\nFIX THESE ISSUES BEFORE DEPLOYING!');
    return;
  }
  
  if (warnings.length > 0) {
    console.log('\n⚠️  WARNINGS:');
    warnings.forEach(warning => console.log(`   ${warning}`));
  }
  
  // Step 3: Start GitHub Pages simulation server
  console.log('\n🌐 Starting EXACT GitHub Pages simulation...');
  
  const server = http.createServer((req, res) => {
    let url = req.url;
    
    // EXACT GitHub Pages behavior: serve from /website/ subdirectory
    const basePath = '/website';
    
    // GitHub Pages redirects root to subdirectory
    if (url === '/') {
      res.writeHead(302, { 'Location': basePath + '/' });
      res.end();
      return;
    }
    
    // Must start with base path on GitHub Pages
    if (!url.startsWith(basePath)) {
      res.writeHead(404);
      res.end('404 - Not Found (GitHub Pages would return this)');
      console.log(`❌ 404: ${url} (missing base path)`);
      return;
    }
    
    // Remove base path for file serving
    let filePath = url.replace(basePath, '') || '/';
    
    // Handle SPA routing (HashRouter handles this client-side)
    if (!filePath.includes('.') && filePath !== '/') {
      filePath = '/index.html';
    } else if (filePath === '/') {
      filePath = '/index.html';
    }
    
    const fullPath = path.join(__dirname, 'dist', filePath);
    
    try {
      const content = fs.readFileSync(fullPath);
      const ext = path.extname(fullPath);
      const contentType = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2'
      }[ext] || 'text/plain';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
      
      console.log(`✅ ${req.url} -> ${filePath}`);
    } catch (error) {
      res.writeHead(404);
      res.end('404 - Not Found');
      console.log(`❌ 404: ${req.url} -> ${filePath} (file not found)`);
    }
  });

  const port = 8080;
  server.listen(port, () => {
    console.log(`\n🎯 EXACT GitHub Pages simulation running at:`);
    console.log(`   http://localhost:${port}/website/`);
    console.log(`\n🧪 TEST THESE URLS (same as your real GitHub Pages):`);
    console.log(`   • Main: http://localhost:${port}/website/`);
    console.log(`   • Join: http://localhost:${port}/website/#/join`);
    console.log(`   • Exec: http://localhost:${port}/website/#/exec`);
    console.log(`   • Events: http://localhost:${port}/website/#/events`);
    
    console.log(`\n✅ IF THESE WORK, YOUR GITHUB PAGES WILL WORK!`);
    console.log(`❌ IF THESE DON'T WORK, YOUR GITHUB PAGES WON'T WORK!`);
    console.log(`\n📋 CHECK LIST:`);
    console.log(`   1. Does the main page load without errors?`);
    console.log(`   2. Do all routes work?`);
    console.log(`   3. Do images and icons load?`);
    console.log(`   4. Check browser console for errors`);
    console.log(`\n⏹️  Press Ctrl+C when done testing`);
  });
});