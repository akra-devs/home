export type ProjectCategory = 'Own Service' | 'Partnership';

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  href?: string;
  isPrivate?: boolean;
}

export const quickTranslateProduct: Project = {
  id: 'akra-quick-translate',
  category: 'Own Service',
  title: 'Akra Quick Translate',
  description:
    'Chrome 내장 Translator API로 현재 페이지를 번역하고, 같은 단축키로 원문을 다시 복구하는 무료 Chrome 확장 프로그램입니다.',
  tags: ['Chrome MV3', 'Translator API', 'TypeScript'],
  imageUrl: '/quick-translate/promo-small-440x280.png',
  href: '/quick-translate',
};

export const projects: Project[] = [quickTranslateProduct];
