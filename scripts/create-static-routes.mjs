import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(root, 'dist');
const indexPath = join(distDir, 'index.html');

const routes = [
  {
    path: 'waxball',
    title: 'WAXBALL | 단단한 왁스, 그 안의 말랑이 — Akra Dev',
    description: '단단한 왁스의 균열과 말랑한 코어의 변형을 동시에 즐기는 Akra의 3D 감각 게임, WAXBALL을 만나보세요.',
    canonical: 'https://akra.kr/waxball/',
    image: 'https://akra.kr/waxball/feature-tactile.webp',
  },
  {
    path: 'quick-translate',
    title: 'Akra Quick Translate | Chrome 번역 확장',
    description: 'Alt+T 한 번으로 웹페이지를 번역하고 같은 단축키로 원문까지 되돌리는 Akra의 Chrome 확장입니다.',
    canonical: 'https://akra.kr/quick-translate/',
    image: 'https://akra.kr/quick-translate/promo-small-440x280.png',
  },
  {
    path: 'quick-translate/privacy',
    title: '개인정보처리방침 | Akra Quick Translate',
    description: 'Akra Quick Translate 개인정보처리방침입니다.',
    canonical: 'https://akra.kr/quick-translate/privacy/',
    image: 'https://akra.kr/quick-translate/promo-small-440x280.png',
  },
  {
    path: 'quick-translate/support',
    title: '지원 | Akra Quick Translate',
    description: 'Akra Quick Translate 사용법과 지원 정보를 확인하세요.',
    canonical: 'https://akra.kr/quick-translate/support/',
    image: 'https://akra.kr/quick-translate/promo-small-440x280.png',
  },
];

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run this script after vite build.');
}

const baseHtml = readFileSync(indexPath, 'utf8');

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');

for (const route of routes) {
  const routeDir = join(distDir, route.path);
  mkdirSync(routeDir, { recursive: true });

  const html = baseHtml
    .replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/s, `<meta name="description" content="${escapeAttribute(route.description)}" />`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>/s, `<meta property="og:title" content="${escapeAttribute(route.title)}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/s, `<meta property="og:description" content="${escapeAttribute(route.description)}" />`)
    .replace(/<meta property="og:image" content=".*?"\s*\/>/s, `<meta property="og:image" content="${route.image}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/s, `<link rel="canonical" href="${route.canonical}" />`);

  writeFileSync(join(routeDir, 'index.html'), html);
}

console.log(`Created static route entries for ${routes.length} routes.`);
