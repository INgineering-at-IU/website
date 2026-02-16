const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn, exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

console.log('🚀 GitHub Pages Deployment Simulation Test');
console.log('==========================================\n');

class GitHubPagesTest {
  constructor() {
    this.issues = [];
    this.fixes = [];
    this.testPassed = true;
  }

  log(message, type = 'info') {
    const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', error: '❌', test: '🧪' };
    console.log(`${icons[type] || 'ℹ️'} ${message}`);
  }

  addIssue(issue) {
    this.issues.push(issue);
    this.testPassed = false;
  }

  async runCommand(command) {
    try {
      const { stdout, stderr } = await execAsync(command);
      return { success: true, stdout, stderr };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async checkConfiguration() {
    this.log('Step 1: Checking project configuration...', 'test');

    // Check package.json
    if (!fs.existsSync('package.json')) {
      this.addIssue('package.json not found');
      return false;
    }

    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Check homepage field
    if (!packageJson.homepage) {
      this.addIssue('Missing homepage field in package.json');
      this.log('Missing homepage field - this can cause asset loading issues', 'warning');
    } else if (!packageJson.homepage.includes('github.io')) {
      this.addIssue('Homepage field may be incorrect');
      this.log(`Homepage: ${packageJson.homepage}`, 'info');
    } else {
      this.log(`✓ Homepage configured: ${packageJson.homepage}`, 'success');
    }

    // Check vite config
    if (fs.existsSync('vite.config.ts')) {
      const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
      if (!viteConfig.includes("base:") || !viteConfig.includes("/website/")) {
        this.addIssue('Vite base path may be incorrect');
        this.log('Vite config may not have correct base path for GitHub Pages', 'warning');
      } else {
        this.log('✓ Vite base path looks correct', 'success');
      }
    }

    // Check router setup
    if (fs.existsSync('src/main.tsx')) {
      const mainContent = fs.readFileSync('src/main.tsx', 'utf8');
      if (mainContent.includes('BrowserRouter')) {
        this.addIssue('Using BrowserRouter instead of HashRouter');
        this.log('BrowserRouter detected - this commonly causes blank pages on GitHub Pages', 'warning');
      } else if (mainContent.includes('HashRouter')) {
        this.log('✓ Using HashRouter - good for GitHub Pages', 'success');
      }
    }

    return true;
  }

  async buildProject() {
    this.log('Step 2: Building project for production...', 'test');

    // Clean previous build
    if (fs.existsSync('dist')) {
      fs.rmSync('dist', { recursive: true, force: true });
    }

    process.env.NODE_ENV = 'production';
    
    this.log('Installing dependencies...', 'info');
    const installResult = await this.runCommand('npm ci');
    if (!installResult.success) {
      this.addIssue(`Failed to install dependencies: ${installResult.error}`);
      return false;
    }

    this.log('Building project...', 'info');
    const buildResult = await this.runCommand('npm run build');
    if (!buildResult.success) {
      this.addIssue(`Build failed: ${buildResult.error}`);
      return false;
    }

    this.log('✓ Build completed successfully', 'success');
    return true;
  }

  async analyzeBuildOutput() {
    this.log('Step 3: Analyzing build output...', 'test');

    if (!fs.existsSync('dist')) {
      this.addIssue('dist directory not found after build');
      return false;
    }

    const distContents = fs.readdirSync('dist');
    this.log(`Build contains: ${distContents.join(', ')}`, 'info');

    // Check for index.html
    if (!distContents.includes('index.html')) {
      this.addIssue('index.html not found in build output');
      return false;
    }

    // Analyze index.html
    const indexPath = path.join('dist', 'index.html');
    const indexContent = fs.readFileSync(indexPath, 'utf8');

    // Check for common issues that cause blank pages
    this.checkIndexHtmlIssues(indexContent);

    // Check for assets
    const hasAssets = distContents.some(item => item.includes('assets') || item.endsWith('.js') || item.endsWith('.css'));
    if (!hasAssets) {
      this.addIssue('No assets found in build - this will cause a blank page');
    } else {
      this.log('✓ Assets found in build', 'success');
    }

    return true;
  }

  checkIndexHtmlIssues(content) {
    // Check for absolute paths
    const absolutePaths = content.match(/(href|src)="\/(?!\/)/g);
    if (absolutePaths && !content.includes('/website/')) {
      this.addIssue('Found absolute paths without base path - will cause 404s on GitHub Pages');
      this.log('Found absolute paths that may not work on GitHub Pages', 'warning');
    }

    // Check for base path
    if (!content.includes('/website/')) {
      this.addIssue('Base path /website/ not found in HTML - likely cause of blank page');
      this.log('Base path not found - this is likely why your page is blank', 'error');
    } else {
      this.log('✓ Base path found in HTML', 'success');
    }

    // Check for script tags
    const scriptTags = content.match(/<script[^>]*src="[^"]*"[^>]*>/g) || [];
    if (scriptTags.length === 0) {
      this.addIssue('No script tags found - page will be blank');
    } else {
      this.log(`✓ Found ${scriptTags.length} script tags`, 'success');
    }

    // Check for CSS links
    const cssLinks = content.match(/<link[^>]*rel="stylesheet"[^>]*>/g) || [];
    if (cssLinks.length === 0) {
      this.log('No CSS links found - page may appear unstyled', 'warning');
    } else {
      this.log(`✓ Found ${cssLinks.length} CSS links`, 'success');
    }
  }

  async startSimulationServer() {
    this.log('Step 4: Starting GitHub Pages simulation server...', 'test');

    return new Promise((resolve) => {
      const server = http.createServer((req, res) => {
        this.handleRequest(req, res);
      });

      const port = 8080;
      server.listen(port, () => {
        this.log(`🌐 GitHub Pages simulation running at: http://localhost:${port}/website/`, 'success');
        this.log('📋 Test checklist:', 'info');
        this.log('   1. Open the URL above in your browser', 'info');
        this.log('   2. Check if the page loads (not blank)', 'info');
        this.log('   3. Open browser dev tools and check for errors', 'info');
        this.log('   4. Test all navigation links', 'info');
        this.log('   5. Verify all images and assets load', 'info');
        
        console.log('\\n🔗 Test URLs:');
        console.log(`   • Home: http://localhost:${port}/website/`);
        console.log(`   • Join: http://localhost:${port}/website/#/join`);
        console.log(`   • Exec: http://localhost:${port}/website/#/exec`);
        console.log(`   • Events: http://localhost:${port}/website/#/events`);
        
        this.log('\\n⏹️  Press Ctrl+C to stop server and see report', 'info');
        
        setTimeout(() => resolve(), 1000);
      });
    });
  }

  handleRequest(req, res) {
    let url = req.url;
    
    // Simulate GitHub Pages subdirectory behavior
    const basePath = '/website';
    
    // GitHub Pages serves from subdirectory
    if (!url.startsWith(basePath) && url !== '/') {
      url = basePath + url;
    }
    
    // Remove base path for file serving
    let filePath = url.replace(basePath, '') || '/';
    
    // Handle SPA routing - serve index.html for routes
    if (!filePath.includes('.') && filePath !== '/') {
      filePath = '/index.html';
    } else if (filePath === '/') {
      filePath = '/index.html';
    }
    
    const fullPath = path.join(__dirname, 'dist', filePath);
    
    try {
      if (!fs.existsSync(fullPath)) {
        throw new Error('File not found');
      }
      
      const content = fs.readFileSync(fullPath);
      const ext = path.extname(fullPath);
      
      const contentTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.json': 'application/json'
      };
      
      const contentType = contentTypes[ext] || 'text/plain';
      
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
      
      console.log(`✅ ${req.url} -> ${filePath}`);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      console.log(`❌ 404: ${req.url} -> ${filePath}`);
      
      if (!this.issues.includes('404 errors detected')) {
        this.addIssue('404 errors detected - missing files will cause blank page');
      }
    }
  }

  generateReport() {
    console.log('\\n📊 GITHUB PAGES TEST REPORT');
    console.log('============================\\n');

    if (this.testPassed && this.issues.length === 0) {
      this.log('🎉 All tests passed! Your site should work on GitHub Pages.', 'success');
    } else {
      this.log('❌ Issues found that may cause blank page on GitHub Pages:', 'error');
      this.issues.forEach((issue, i) => {
        console.log(`   ${i + 1}. ${issue}`);
      });
    }

    console.log('\\n🔧 RECOMMENDED FIXES:');
    
    if (this.issues.some(i => i.includes('base path'))) {
      console.log('   • Ensure vite.config.ts has: base: "/website/" for production');
    }
    
    if (this.issues.some(i => i.includes('BrowserRouter'))) {
      console.log('   • Switch from BrowserRouter to HashRouter in src/main.tsx');
    }
    
    if (this.issues.some(i => i.includes('homepage'))) {
      console.log('   • Add "homepage": "https://ingineering-at-iu.github.io/website" to package.json');
    }
    
    if (this.issues.some(i => i.includes('404'))) {
      console.log('   • Check that all asset paths are relative to base path');
    }

    console.log('\\n📝 NEXT STEPS:');
    console.log('   1. Fix any issues listed above');
    console.log('   2. Re-run this test script');
    console.log('   3. When test passes, deploy to GitHub Pages');
    console.log('   4. Compare local simulation with actual GitHub Pages');
  }

  async runFullTest() {
    try {
      await this.checkConfiguration();
      await this.buildProject();
      await this.analyzeBuildOutput();
      await this.startSimulationServer();
      
      // Keep server running until user stops it
      process.on('SIGINT', () => {
        console.log('\\n\\n🛑 Stopping server...');
        this.generateReport();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'error');
      this.addIssue(`Fatal error: ${error.message}`);
      this.generateReport();
    }
  }
}

// Run the test
const test = new GitHubPagesTest();
test.runFullTest();