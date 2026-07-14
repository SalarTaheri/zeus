#!/usr/bin/env node
const fs = require('fs');

const cssPath = './src/output.css';
const targetPath = './zeus.js';
const commonHeadPattern = /const COMMON_HEAD = \`(<script src="https?:\/\/cdn\.tailwindcss\.com"><\/script>|<style>[\s\S]*?<\/style>)[\s\S]*?<\/script>\`;/g;

const outputCss = fs.readFileSync(cssPath, 'utf8').replace(/\\/g, '\\\\');
const targetContent = fs.readFileSync(targetPath, 'utf8');

const styleContent = `<style>\n${outputCss}\n</style>`;
const newHeadContent = "const COMMON_HEAD = `" + styleContent + `
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
<script>
	document.documentElement.classList.add('dark');
</script>\`;`;

const newContent = targetContent.replace(commonHeadPattern, newHeadContent);

fs.writeFileSync(targetPath, newContent);
console.log('CSS embedded into zeus.js');