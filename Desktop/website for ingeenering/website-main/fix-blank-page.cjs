const fs = require('fs');
const path = require('path');

console.log('🔧 GitHub Pages Quick Fix for Blank Page Issues');
console.log('==============================================\\n');

const fixes = [];
const issues = [];

// Fix 1: Check and fix favicon path in index.html
console.log('🖼️  Checking favicon path...');
if (fs.existsSync('index.html')) {
  let indexContent = fs.readFileSync('index.html', 'utf8');
  
  if (indexContent.includes('href="/public/')) {
    console.log('🔍 Found incorrect favicon path: /public/');
    indexContent = indexContent.replace(/href="\/public\//g, 'href="/');
    fs.writeFileSync('index.html', indexContent);
    console.log('✅ Fixed favicon path');
    fixes.push('Fixed favicon paths in index.html');
  } else {
    console.log('✅ Favicon path looks correct');
  }
}

// Fix 2: Ensure .nojekyll file exists
console.log('\\n📄 Checking .nojekyll file...');
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

if (!fs.existsSync('public/.nojekyll')) {
  fs.writeFileSync('public/.nojekyll', '');
  console.log('✅ Created .nojekyll file');
  fixes.push('Created .nojekyll file to prevent Jekyll processing');
} else {
  console.log('✅ .nojekyll file exists');
}

// Fix 3: Check router configuration
console.log('\\n🔀 Checking router configuration...');
if (fs.existsSync('src/main.tsx')) {
  const mainContent = fs.readFileSync('src/main.tsx', 'utf8');
  
  if (mainContent.includes('BrowserRouter')) {
    console.log('⚠️  WARNING: Using BrowserRouter');
    console.log('   This commonly causes blank pages on GitHub Pages');
    console.log('   Consider switching to HashRouter for better compatibility');
    issues.push('Using BrowserRouter - may cause blank pages on GitHub Pages');
  } else if (mainContent.includes('HashRouter')) {
    console.log('✅ Using HashRouter - good for GitHub Pages');
  }
}

// Fix 4: Check vite.config.ts base path
console.log('\\n⚙️  Checking Vite configuration...');
if (fs.existsSync('vite.config.ts')) {
  const viteContent = fs.readFileSync('vite.config.ts', 'utf8');
  
  if (!viteContent.includes('base:') || !viteContent.includes('/website/')) {
    console.log('⚠️  WARNING: Vite base path may be incorrect');
    console.log('   Your vite.config.ts should have:');
    console.log('   base: mode === "production" ? "/website/" : "/"');
    issues.push('Vite base path configuration may be incorrect');
  } else {
    console.log('✅ Vite base path looks correct');
  }
}

// Fix 5: Check package.json homepage
console.log('\\n📦 Checking package.json...');
if (fs.existsSync('package.json')) {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  if (!packageJson.homepage) {
    console.log('⚠️  WARNING: No homepage field in package.json');
    console.log('   Add: "homepage": "https://ingineering-at-iu.github.io/website"');
    issues.push('Missing homepage field in package.json');
  } else if (!packageJson.homepage.includes('github.io')) {
    console.log('⚠️  WARNING: Homepage field may be incorrect');
    console.log(`   Current: ${packageJson.homepage}`);
    issues.push('Homepage field may be incorrect');
  } else {
    console.log('✅ Homepage field looks correct');
  }
}

// Summary
console.log('\\n📊 SUMMARY');
console.log('===========');

if (fixes.length > 0) {
  console.log('\\n✅ Applied fixes:');
  fixes.forEach(fix => console.log(`   • ${fix}`));
}

if (issues.length > 0) {
  console.log('\\n⚠️  Issues to review:');
  issues.forEach(issue => console.log(`   • ${issue}`));
}

if (fixes.length === 0 && issues.length === 0) {
  console.log('\\n🎉 No obvious issues found!');
  console.log('If you are still getting a blank page, run the full test script.');
}

console.log('\\n📝 Next steps:');
console.log('   1. Run: node test-github-pages.js');
console.log('   2. Test your site in the simulation server');
console.log('   3. Check browser console for errors');
console.log('   4. Deploy when tests pass');

console.log('\\n🚀 Ready for testing!');