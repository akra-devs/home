import type { TranslationKey } from '../i18n/messages';

export enum ProjectId {
  Waxball = 'waxball',
  QuickTranslate = 'akra-quick-translate',
  Hookers = 'akra-hookers',
  WhyShutdown = 'akra-whyshutdown',
  Habitree = 'habitree',
  FnbConsole = 'fnb-console',
  EdulabsReform = 'edulabs-reform',
  CryptoSignal = 'crypto-signal',
}

export enum ProjectCategory {
  OwnService = 'ownService',
  Partnership = 'partnership',
}

export enum ProjectLifecycle {
  Live = 'live',
  Concept = 'concept',
  Private = 'private',
}

export enum ProjectSurface {
  Showcase = 'showcase',
  Footer = 'footer',
  Navigation = 'navigation',
}

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
  id: ProjectId;
  category: ProjectCategory;
  lifecycle: ProjectLifecycle;
  surfaces: readonly ProjectSurface[];
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  tagKeys: readonly TranslationKey[];
  imageUrl: string;
  imageAltKey?: TranslationKey;
  href?: string;
  isFeatured?: boolean;
  highlightLabelKey?: TranslationKey;
  release?: ProjectRelease;
}

export type ProjectWithRelease = Project & {
  release: ProjectRelease;
};

export type LinkedProject = Project & {
  href: string;
};

export const projectCatalog = {
  [ProjectId.Waxball]: {
    id: ProjectId.Waxball,
    category: ProjectCategory.OwnService,
    lifecycle: ProjectLifecycle.Live,
    surfaces: [ProjectSurface.Showcase, ProjectSurface.Footer, ProjectSurface.Navigation],
    titleKey: 'products.waxball.title',
    descriptionKey: 'products.waxball.description',
    tagKeys: ['tech.flutter', 'tech.realtime3d', 'tech.sensoryGame'],
    imageUrl: '/waxball/feature-tactile.webp',
    href: '/waxball',
    isFeatured: true,
    highlightLabelKey: 'products.waxball.highlight',
  },
  [ProjectId.QuickTranslate]: {
    id: ProjectId.QuickTranslate,
    category: ProjectCategory.OwnService,
    lifecycle: ProjectLifecycle.Live,
    surfaces: [ProjectSurface.Showcase, ProjectSurface.Footer],
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
  },
  [ProjectId.Hookers]: {
    id: ProjectId.Hookers,
    category: ProjectCategory.OwnService,
    lifecycle: ProjectLifecycle.Live,
    surfaces: [ProjectSurface.Showcase, ProjectSurface.Footer],
    titleKey: 'products.hookers.title',
    descriptionKey: 'products.hookers.description',
    tagKeys: [
      'products.hookers.tagWindows',
      'products.hookers.tagLocalFirst',
      'products.hookers.tagContextMap',
    ],
    imageUrl: '/product-cards/akra-hookers-context-map.webp',
    imageAltKey: 'products.hookers.imageAlt',
    href: '/akra-hookers/',
    highlightLabelKey: 'products.hookers.highlight',
  },
  [ProjectId.WhyShutdown]: {
    id: ProjectId.WhyShutdown,
    category: ProjectCategory.OwnService,
    lifecycle: ProjectLifecycle.Live,
    surfaces: [ProjectSurface.Showcase, ProjectSurface.Footer],
    titleKey: 'products.whyShutdown.title',
    descriptionKey: 'products.whyShutdown.description',
    tagKeys: [
      'products.whyShutdown.tagWindows',
      'products.whyShutdown.tagHardware',
      'products.whyShutdown.tagDiagnostics',
    ],
    imageUrl: '/whyshutdown/whyshutdown.png',
    href: '/akra-shutdown-checker-pages/',
  },
  [ProjectId.Habitree]: {
    id: ProjectId.Habitree,
    category: ProjectCategory.OwnService,
    lifecycle: ProjectLifecycle.Concept,
    surfaces: [ProjectSurface.Showcase],
    titleKey: 'products.habitree.title',
    descriptionKey: 'products.habitree.description',
    tagKeys: ['tech.flutter', 'tech.node', 'tech.aws'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  [ProjectId.FnbConsole]: {
    id: ProjectId.FnbConsole,
    category: ProjectCategory.OwnService,
    lifecycle: ProjectLifecycle.Concept,
    surfaces: [ProjectSurface.Showcase],
    titleKey: 'products.fnb.title',
    descriptionKey: 'products.fnb.description',
    tagKeys: ['tech.react', 'tech.supabase', 'tech.saas'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  [ProjectId.EdulabsReform]: {
    id: ProjectId.EdulabsReform,
    category: ProjectCategory.Partnership,
    lifecycle: ProjectLifecycle.Concept,
    surfaces: [ProjectSurface.Showcase],
    titleKey: 'products.edulabs.title',
    descriptionKey: 'products.edulabs.description',
    tagKeys: ['tech.next', 'tech.nest', 'tech.msa'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
  },
  [ProjectId.CryptoSignal]: {
    id: ProjectId.CryptoSignal,
    category: ProjectCategory.OwnService,
    lifecycle: ProjectLifecycle.Private,
    surfaces: [ProjectSurface.Showcase],
    titleKey: 'products.crypto.title',
    descriptionKey: 'products.crypto.description',
    tagKeys: ['tech.python', 'tech.data', 'tech.fintech'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
  },
} satisfies Record<ProjectId, Project>;

export const projects: readonly Project[] = Object.values(projectCatalog);

export const projectsForSurface = (surface: ProjectSurface): readonly Project[] =>
  projects.filter((project) => project.surfaces.includes(surface));

const hasHref = (project: Project): project is LinkedProject => Boolean(project.href);

export const showcaseProjects = projectsForSurface(ProjectSurface.Showcase);
export const footerProducts = projectsForSurface(ProjectSurface.Footer).filter(hasHref);
export const navigationProducts = projectsForSurface(ProjectSurface.Navigation).filter(hasHref);

export const quickTranslateProduct: ProjectWithRelease = projectCatalog[ProjectId.QuickTranslate];
export const waxballProduct = projectCatalog[ProjectId.Waxball];
export const hookersProduct = projectCatalog[ProjectId.Hookers];
export const whyShutdownProduct = projectCatalog[ProjectId.WhyShutdown];
