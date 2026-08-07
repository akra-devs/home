import { createServer } from 'vite';

const server = await createServer({
  configFile: false,
  appType: 'custom',
  optimizeDeps: { noDiscovery: true },
  server: { middlewareMode: true },
});

try {
  const { messages, locales, translate, validateTranslationCatalogs } = await server.ssrLoadModule('/i18n/messages.ts');
  const { resolveInitialLocale } = await server.ssrLoadModule('/i18n/index.tsx');

  validateTranslationCatalogs();

  const expectedKeys = Object.keys(messages.ko).sort();
  for (const locale of locales) {
    const actualKeys = Object.keys(messages[locale]).sort();
    if (actualKeys.join('\n') !== expectedKeys.join('\n')) {
      throw new Error(`Translation key mismatch for ${locale}.`);
    }
  }

  const interpolatedCopyright = translate('en', 'footer.copyright', { year: '2026' });
  const interpolatedCollection = translate('ja', 'waxball.collection.artAlt', { material: 'Opal Bloom' });
  if (interpolatedCopyright.includes('{year}') || !interpolatedCopyright.includes('2026')) {
    throw new Error('Translation interpolation failed for footer.copyright.');
  }
  if (interpolatedCollection.includes('{material}') || !interpolatedCollection.includes('Opal Bloom')) {
    throw new Error('Translation interpolation failed for waxball.collection.artAlt.');
  }

  const technicalKeys = [
    'tech.typescript',
    'tech.flutter',
    'tech.realtime3d',
    'tech.sensoryGame',
    'tech.node',
    'tech.aws',
    'tech.react',
    'tech.supabase',
    'tech.saas',
    'tech.next',
    'tech.nest',
    'tech.msa',
    'tech.python',
    'tech.data',
    'tech.fintech',
  ];
  for (const key of technicalKeys) {
    const term = messages.ko[key];
    if (!locales.every((locale) => messages[locale][key] === term)) {
      throw new Error(`Technical term must remain in English across locales: ${key}.`);
    }
  }

  const browserLocaleCases = [
    { saved: null, languages: ['en-US', 'ko-KR'], expected: 'en' },
    { saved: null, languages: ['ja-JP', 'en-US'], expected: 'ja' },
    { saved: null, languages: ['zh-Hant', 'en-US'], expected: 'zh' },
    { saved: null, languages: ['fr-FR', 'de-DE'], expected: 'ko' },
    { saved: 'en', languages: ['ko-KR'], expected: 'en' },
  ];
  for (const { saved, languages, expected } of browserLocaleCases) {
    if (resolveInitialLocale(saved, languages) !== expected) {
      throw new Error(`Browser locale resolution failed for ${languages.join(', ')}.`);
    }
  }

  console.log(`Validated ${expectedKeys.length} translation keys for ${locales.length} locales.`);
} finally {
  await server.close();
}
