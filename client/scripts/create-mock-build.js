#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create mock build directory structure
const buildDir = path.join(__dirname, '..', 'build');
const staticDir = path.join(buildDir, 'static');
const jsDir = path.join(staticDir, 'js');
const cssDir = path.join(staticDir, 'css');

// Create directories if they don't exist
[buildDir, staticDir, jsDir, cssDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Create mock JS files with realistic content
const mockJsContent = `
// Mock React bundle content
const React = require('react');
const ReactDOM = require('react-dom');

// Simulate a typical React app bundle
const App = () => {
  return React.createElement('div', null, 'Hello World');
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));

// Add some bulk to simulate real bundle size
${'// '.repeat(1000)}padding content
`;

const mockCssContent = `
/* Mock CSS bundle content */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
}

/* Add some bulk to simulate real CSS bundle size */
${'/* padding */ '.repeat(500)}
`;

// Create mock files with realistic names and sizes
const files = [
  { path: path.join(jsDir, 'main.abc123.js'), content: mockJsContent },
  { path: path.join(jsDir, 'runtime-main.def456.js'), content: '// Runtime content\n'.repeat(50) },
  { path: path.join(jsDir, '2.ghi789.chunk.js'), content: '// Chunk content\n'.repeat(200) },
  { path: path.join(cssDir, 'main.jkl012.css'), content: mockCssContent },
];

files.forEach(({ path: filePath, content }) => {
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created mock file: ${path.relative(process.cwd(), filePath)}`);
});

console.log('\n🎉 Mock build files created successfully!');
console.log('📊 Files created:');
files.forEach(({ path: filePath }) => {
  const stats = fs.statSync(filePath);
  console.log(`   ${path.relative(process.cwd(), filePath)} (${(stats.size / 1024).toFixed(1)} KB)`);
}); 