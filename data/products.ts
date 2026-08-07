export type ProjectCategory = 'Own Service' | 'Partnership';

export interface ProjectRelease {
  version: string;
  webStoreUrl: string;
  webStoreStatus: string;
  supportUrl: string;
  privacyUrl: string;
  contactEmail: string;
  browserRequirement: string;
  shortcutLabel: string;
  macShortcutLabel: string;
  priceLabel: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  href?: string;
  isPrivate?: boolean;
  isFeatured?: boolean;
  highlightLabel?: string;
  release?: ProjectRelease;
}

export type ReleasedProject = Project & {
  release: ProjectRelease;
};

export const quickTranslateProduct: ReleasedProject = {
  id: 'akra-quick-translate',
  category: 'Own Service',
  title: 'Akra Quick Translate',
  description:
    'Akra가 직접 만든 최신 Chrome 확장입니다. 웹페이지를 번역하고, 같은 단축키로 원문까지 되돌립니다.',
  tags: ['Chrome 확장', '번역', 'TypeScript'],
  imageUrl: '/quick-translate/promo-small-440x280.png',
  href: '/quick-translate',
  highlightLabel: 'Chrome 확장',
  release: {
    version: '0.1.0',
    webStoreUrl:
      'https://chromewebstore.google.com/detail/akra-quick-translate/afacgkpmacdmecpmhbnegiegokdjfafc',
    webStoreStatus: 'Chrome Web Store 공개',
    supportUrl: '/quick-translate/support',
    privacyUrl: '/quick-translate/privacy',
    contactEmail: 'help@akra.kr',
    browserRequirement: 'Chrome 138 이상',
    shortcutLabel: 'Alt+T',
    macShortcutLabel: 'Option+T',
    priceLabel: '무료',
  },
};

export const waxballProduct: Project = {
  id: 'waxball',
  category: 'Own Service',
  title: 'WAXBALL',
  description:
    '단단한 왁스의 단계별 균열과 내부 말랑이의 변형을 한 터치 안에서 함께 즐기는 3D 감각 게임입니다.',
  tags: ['Flutter', 'Realtime 3D', 'Sensory Game'],
  imageUrl: '/waxball/feature-tactile.webp',
  href: '/waxball',
  isFeatured: true,
  highlightLabel: '대표 제품',
};

export const projects: Project[] = [
  waxballProduct,
  quickTranslateProduct,
  {
    id: 'habitree',
    category: 'Own Service',
    title: 'Habitree',
    description:
      '습관을 작은 미션으로 쌓아 가는 모바일 서비스 콘셉트입니다. 반복 사용과 성장감을 중심으로 설계했습니다.',
    tags: ['Flutter', 'Node.js', 'AWS'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 'fnb-console',
    category: 'Own Service',
    title: 'F&B Console',
    description:
      '매장 운영자가 재고, 발주, 매출 흐름을 한 화면에서 확인하는 프랜차이즈 운영 도구 콘셉트입니다.',
    tags: ['React', 'Supabase', 'SaaS'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 'edulabs-reform',
    category: 'Partnership',
    title: 'EduLabs Reform',
    description:
      '오래된 교육 플랫폼을 빠르게 고쳐 쓰기보다, 수업·결제·관리 흐름을 다시 정리한 리뉴얼 사례입니다.',
    tags: ['Next.js', 'NestJS', 'MSA'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: 'crypto-signal',
    category: 'Own Service',
    title: 'Crypto Signal',
    description:
      '실시간 시장 데이터를 읽기 쉽게 정리하는 투자 보조 도구 콘셉트입니다. 민감한 세부 내용은 공개하지 않습니다.',
    tags: ['Python', 'Data', 'Fintech'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    isPrivate: true,
  },
];
