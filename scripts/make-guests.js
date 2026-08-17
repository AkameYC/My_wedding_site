/* ============================================================
   宾客专属入口页生成脚本
   用法:
     1. 把宾客名单填到下方 GUESTS 数组(一行一个名字)
     2. 运行: node scripts/make-guests.js
     3. 生成 guest/ 目录下的专属页面 + 名单对照.txt
   每个专属页面:
     - <title> 为该宾客的专属标题(微信转发卡片显示用)
     - 打开后自动跳转 index.html?guest=宾客名
   ============================================================ */
const fs = require('fs');
const path = require('path');

const GROOM = '王宇晨';
const BRIDE = '周婷';
const SITE = 'https://akameyc.github.io'; // 部署地址,换了托管要改这里
const GUESTS = [
  // ★ 宾客名单填这里(示例名单,确定后替换)
  '张三',
  '李四',
  '王五',
  '赵六',
  '陈七',
  '周八',
];

const outDir = path.join(__dirname, '..', 'guest');
fs.mkdirSync(outDir, { recursive: true });

// 清掉旧的生成文件,避免名单删减后残留
fs.readdirSync(outDir).forEach((f) => {
  if (/^guest-\d+\.html$/.test(f)) fs.unlinkSync(path.join(outDir, f));
});

const lines = [];
const csvLines = ['姓名,专属链接'];
GUESTS.forEach((name, i) => {
  const slug = `guest-${String(i + 1).padStart(3, '0')}`;
  const title = `${name} · ${GROOM} & ${BRIDE}的婚礼邀请函`;
  const target = `../index.html?guest=${encodeURIComponent(name)}`;
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<meta name="description" content="${name},${GROOM}与${BRIDE}诚邀您参加婚礼 · 2026年10月10日 · 嘉兴">
<meta property="og:title" content="${title}">
<meta property="og:description" content="2026年10月10日 18:18 · 嘉兴市南湖区中山东路875号 隆聚时令海鲜金悦店">
<meta http-equiv="refresh" content="0;url=${target}">
<script>location.replace('${target}');</script>
</head>
<body style="font-family:sans-serif;text-align:center;padding-top:42vh;color:#5C5B52;background:#FBF7F0;">
<p>正在打开婚礼邀请函…</p>
<p style="margin-top:12px;"><a href="${target}">如未自动跳转,请点击这里</a></p>
</body>
</html>
`;
  fs.writeFileSync(path.join(outDir, `${slug}.html`), html, 'utf8');
  lines.push(`${name}\t${SITE}/guest/${slug}.html`);
  csvLines.push(`${name},${SITE}/guest/${slug}.html`);
});

fs.writeFileSync(path.join(outDir, '名单对照.txt'), lines.join('\n'), 'utf8');
// CSV 带 UTF-8 BOM,Excel 直接打开不乱码
fs.writeFileSync(path.join(outDir, '名单对照.csv'), '﻿' + csvLines.join('\r\n'), 'utf8');
console.log(`已生成 ${GUESTS.length} 个专属页面`);
console.log('对照表:guest/名单对照.csv(Excel 打开)');
console.log(lines.join('\n'));
