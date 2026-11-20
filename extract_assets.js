const fs = require('fs');

const html = fs.readFileSync('site_index.html', 'utf8');
const css = fs.readFileSync('site_styles.css', 'utf8');

const imgRegex = /(?:src|href)=["']([^"']+\.(?:png|jpg|jpeg|svg|webp|gif))["']/gi;
const cssImgRegex = /url\(["']?([^"')]+\.(?:png|jpg|jpeg|svg|webp|gif))["']?\)/gi;

const htmlImgs = [];
let match;
while ((match = imgRegex.exec(html)) !== null) {
  htmlImgs.push(match[1]);
}

const cssImgs = [];
while ((match = cssImgRegex.exec(css)) !== null) {
  cssImgs.push(match[1]);
}

console.log('HTML Images:', Array.from(new Set(htmlImgs)));
console.log('CSS Images:', Array.from(new Set(cssImgs)));

