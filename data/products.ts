import type { TranslationKey } from '../i18n/messages';

export type ProjectCategory = 'ownService' | 'partnership';

export interface ProjectRelease {
  version: string;
  webStoreUrl: string;
  webStoreStatusKey: TranslationKey;
  supportUrl: string;
  privacyUrl: string;
  contactEmail: string;
  browserRequirementKey: TranslationKey;
  shortcutLabel: string;
  macShortcutLabel: string;
  priceLabelKey: TranslationKey;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  tagKeys: TranslationKey[];
  imageUrl: string;
  href?: string;
  isPrivate?: boolean;
  isFeatured?: boolean;
  highlightLabelKey?: TranslationKey;
  release?: ProjectRelease;
}

export type ReleasedProject = Project & {
  release: ProjectRelease;
};

export const quickTranslateProduct: ReleasedProject = {
  id: 'akra-quick-translate',
  category: 'ownService',
  titleKey: 'products.quickTranslate.title',
  descriptionKey: 'products.quickTranslate.description',
  tagKeys: [
    'products.quickTranslate.tagExtension',
    'products.quickTranslate.tagTranslation',
    'tech.typescript',
  ],
  imageUrl: '/quick-translate/promo-small-440x280.png',
  href: '/quick-translate',
  highlightLabelKey: 'products.quickTranslate.highlight',
  release: {
    version: '0.1.0',
    webStoreUrl:
      'https://chromewebstore.google.com/detail/akra-quick-translate/afacgkpmacdmecpmhbnegiegokdjfafc',
    webStoreStatusKey: 'release.webStoreStatus',
    supportUrl: '/quick-translate/support',
    privacyUrl: '/quick-translate/privacy',
    contactEmail: 'help@akra.kr',
    browserRequirementKey: 'release.browserRequirement',
    shortcutLabel: 'Alt+T',
    macShortcutLabel: 'Option+T',
    priceLabelKey: 'release.price',
  },
};

export const waxballProduct: Project = {
  id: 'waxball',
  category: 'ownService',
  titleKey: 'products.waxball.title',
  descriptionKey: 'products.waxball.description',
  tagKeys: ['tech.flutter', 'tech.realtime3d', 'tech.sensoryGame'],
  imageUrl: '/waxball/feature-tactile.webp',
  href: '/waxball',
  isFeatured: true,
  highlightLabelKey: 'products.waxball.highlight',
};

export const whyShutdownProduct: Project = {
  id: 'akra-whyshutdown',
  category: 'ownService',
  titleKey: 'products.whyShutdown.title',
  descriptionKey: 'products.whyShutdown.description',
  tagKeys: [
    'products.whyShutdown.tagWindows',
    'products.whyShutdown.tagHardware',
    'products.whyShutdown.tagDiagnostics',
  ],
  imageUrl: '/whyshutdown/whyshutdown.png',
  href: '/akra-shutdown-checker-pages/',
};

export const projects: Project[] = [
  waxballProduct,
  quickTranslateProduct,
  whyShutdownProduct,
  {
    id: 'habitree',
    category: 'ownService',
    titleKey: 'products.habitree.title',
    descriptionKey: 'products.habitree.description',
    tagKeys: ['tech.flutter', 'tech.node', 'tech.aws'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 'fnb-console',
    category: 'ownService',
    titleKey: 'products.fnb.title',
    descriptionKey: 'products.fnb.description',
    tagKeys: ['tech.react', 'tech.supabase', 'tech.saas'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 'edulabs-reform',
    category: 'partnership',
    titleKey: 'products.edulabs.title',
    descriptionKey: 'products.edulabs.description',
    tagKeys: ['tech.next', 'tech.nest', 'tech.msa'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: 'crypto-signal',
    category: 'ownService',
    titleKey: 'products.crypto.title',
    descriptionKey: 'products.crypto.description',
    tagKeys: ['tech.python', 'tech.data', 'tech.fintech'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    isPrivate: true,
  },
];
