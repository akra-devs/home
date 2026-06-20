import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Keyboard,
  Languages,
  Mail,
  MousePointerClick,
  RotateCcw,
  Settings,
  ShieldCheck,
} from 'lucide-react';

const product = {
  version: '0.1.0',
  downloadUrl: '/quick-translate/akra-quick-translate-0.1.0.zip',
  supportUrl: '/quick-translate/support',
  privacyUrl: '/quick-translate/privacy',
  contactEmail: 'contact@akradev.studio',
};

const features = [
  {
    icon: Keyboard,
    title: '단축키 토글',
    description: 'Windows와 Linux는 Alt+T, macOS는 Option+T로 페이지 번역과 원문 복구를 전환합니다.',
  },
  {
    icon: Languages,
    title: '언어쌍 선택',
    description: '팝업에서 원본 언어와 대상 언어를 고르고 기본 언어쌍을 옵션 페이지에 저장합니다.',
  },
  {
    icon: RotateCcw,
    title: '원문 복구',
    description: '한 번 더 실행하면 번역 전에 저장한 텍스트를 현재 페이지에서 다시 복구합니다.',
  },
  {
    icon: MousePointerClick,
    title: '우클릭 메뉴',
    description: '확장 아이콘, 단축키, 페이지 우클릭 메뉴 중 편한 진입점으로 번역을 실행합니다.',
  },
  {
    icon: Settings,
    title: '상태 오버레이',
    description: '번역 중, 완료, 복구, 오류 상태를 작은 오버레이로 표시하고 옵션에서 끌 수 있습니다.',
  },
  {
    icon: ShieldCheck,
    title: 'Akra 서버 미전송',
    description: '페이지 텍스트와 번역 결과를 Akra 서버로 전송하거나 저장하지 않습니다.',
  },
];

const screenshots = [
  {
    src: '/quick-translate/screenshot-1-popup-language-select.png',
    title: 'Popup language selection',
  },
  {
    src: '/quick-translate/screenshot-2-translation-restore-status.png',
    title: 'Translate and restore state',
  },
  {
    src: '/quick-translate/screenshot-3-options-shortcuts.png',
    title: 'Options and shortcuts',
  },
];

const usageSteps = [
  'Chrome 138 이상에서 웹페이지를 엽니다.',
  '확장 아이콘을 눌러 원본 언어와 대상 언어를 고릅니다.',
  'Translate / Restore 또는 Alt+T를 누릅니다.',
  '다시 누르면 저장해 둔 원문으로 복구됩니다.',
];

const limitations = [
  'chrome://, edge://, about: 같은 브라우저 내부 페이지에서는 동작하지 않습니다.',
  '로컬 파일에서 사용하려면 Chrome 확장 상세 페이지에서 Allow access to file URLs를 켜야 합니다.',
  'Chrome 내장 Translator API가 지원되지 않거나 언어 모델 다운로드가 필요한 경우 번역이 지연되거나 실패할 수 있습니다.',
];

const faqs = [
  {
    question: '어떤 Chrome 버전이 필요한가요?',
    answer: 'Chrome 138 이상이 필요합니다. 다른 Chromium 브라우저에서는 Chrome 내장 Translator API 지원 상태에 따라 동작하지 않을 수 있습니다.',
  },
  {
    question: '단축키를 바꿀 수 있나요?',
    answer: '예. 팝업이나 옵션 페이지에서 Shortcut을 누르거나 chrome://extensions/shortcuts에서 Akra Quick Translate의 단축키를 변경할 수 있습니다.',
  },
  {
    question: '번역이 느리거나 실패합니다.',
    answer: '처음 사용하는 언어쌍은 Chrome이 언어 모델을 다운로드해야 할 수 있습니다. Chrome 내장 Translator API가 해당 환경에서 지원되는지도 확인하세요.',
  },
];

interface DocumentTitleProps {
  title: string;
  children: React.ReactNode;
}

const DocumentTitle: React.FC<DocumentTitleProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

const BackLink: React.FC = () => (
  <a
    href="/#showcase"
    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
  >
    <ArrowLeft size={16} />
    Products
  </a>
);

export const QuickTranslatePage: React.FC = () => {
  return (
    <DocumentTitle title="Akra Quick Translate | Akra Dev">
      <div className="bg-zinc-950">
        <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <BackLink />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <img
                    src="/quick-translate/icon-128.png"
                    alt=""
                    className="w-12 h-12 rounded-lg border border-white/10"
                  />
                  <span className="px-3 py-1 rounded-md bg-white text-black text-xs font-bold uppercase tracking-wider">
                    Free Chrome Extension
                  </span>
                  <span className="px-3 py-1 rounded-md border border-white/10 text-zinc-300 text-xs font-medium">
                    v{product.version}
                  </span>
                  <span className="px-3 py-1 rounded-md border border-blue-400/30 text-blue-200 text-xs font-medium">
                    Chrome 138+
                  </span>
                </div>

                <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] mb-8">
                  Akra Quick Translate
                </h1>
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
                  Chrome 내장 Translator API로 현재 페이지를 빠르게 번역하고,
                  같은 동작으로 원문을 다시 복구하는 무료 Chrome 확장 프로그램입니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={product.downloadUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors"
                  >
                    <Download size={18} />
                    Release ZIP 다운로드
                  </a>
                  <a
                    href={product.supportUrl}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/15 text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    지원 페이지
                    <ArrowRight size={18} />
                  </a>
                </div>

                <p className="mt-5 text-sm text-zinc-500">
                  Chrome Web Store 출시 후 설치 버튼을 공식 스토어 링크로 교체할 예정입니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
                  <img
                    src="/quick-translate/marquee-1400x560.png"
                    alt="Akra Quick Translate product preview"
                    className="w-full aspect-[5/2] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ['Platform', 'Chrome MV3'],
              ['Shortcut', 'Alt+T'],
              ['Privacy', 'No Akra server'],
              ['Price', 'Free'],
            ].map(([label, value]) => (
              <div key={label} className="border-l border-white/10 pl-5">
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">{label}</p>
                <p className="text-white font-serif text-xl">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-blue-300 text-sm uppercase tracking-wider font-bold">Features</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white">페이지 번역에 필요한 흐름만 남겼습니다.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                    <div className="w-11 h-11 rounded-lg bg-white/10 text-blue-200 flex items-center justify-center mb-5">
                      <Icon size={21} />
                    </div>
                    <h3 className="text-white font-serif text-xl mb-3">{feature.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900/40 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
              <div>
                <span className="text-blue-300 text-sm uppercase tracking-wider font-bold">Screens</span>
                <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white">팝업, 번역 상태, 옵션 화면</h2>
              </div>
              <p className="text-zinc-400 max-w-lg leading-relaxed">
                Chrome 확장 프로그램 안에서 언어 선택, 번역 토글, 단축키 설정으로 이동하는 흐름을 제공합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {screenshots.map((shot) => (
                <figure key={shot.src} className="rounded-lg overflow-hidden border border-white/10 bg-zinc-950">
                  <img src={shot.src} alt={shot.title} className="w-full aspect-[16/10] object-cover" />
                  <figcaption className="px-4 py-3 text-sm text-zinc-400 border-t border-white/10">{shot.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-blue-300 text-sm uppercase tracking-wider font-bold">Usage</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white mb-8">사용법</h2>
              <ol className="space-y-4">
                {usageSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-zinc-300 leading-relaxed">
                    <span className="w-8 h-8 shrink-0 rounded-lg bg-white text-black flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <span className="text-blue-300 text-sm uppercase tracking-wider font-bold">Notes</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white mb-8">제한사항</h2>
              <div className="space-y-4">
                {limitations.map((item) => (
                  <div key={item} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-5">
                    <AlertTriangle className="w-5 h-5 shrink-0 text-amber-300 mt-0.5" />
                    <p className="text-zinc-400 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white text-black">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-wider font-bold text-zinc-500 mb-3">Akra Quick Translate</p>
              <h2 className="text-3xl md:text-5xl font-serif">빠른 페이지 번역을 시작하세요.</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={product.downloadUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-lg font-bold hover:bg-zinc-800 transition-colors"
              >
                <Download size={18} />
                ZIP 다운로드
              </a>
              <a
                href={product.privacyUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-black/15 rounded-lg font-bold hover:bg-black/5 transition-colors"
              >
                개인정보 처리방침
              </a>
            </div>
          </div>
        </section>
      </div>
    </DocumentTitle>
  );
};

interface StaticPageProps {
  title: string;
  eyebrow: string;
  heading: string;
  description: string;
  children: React.ReactNode;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, eyebrow, heading, description, children }) => (
  <DocumentTitle title={`${heading} | Akra Dev`}>
    <div className="bg-zinc-950 min-h-screen pt-36 md:pt-44 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <BackLink />
        <div className="mt-10 mb-12">
          <span className="text-blue-300 text-sm uppercase tracking-wider font-bold">{eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-serif text-white leading-tight">{title}</h1>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">{description}</p>
        </div>
        {children}
      </div>
    </div>
  </DocumentTitle>
);

export const QuickTranslatePrivacyPage: React.FC = () => (
  <StaticPage
    title="개인정보 처리방침"
    eyebrow="Privacy"
    heading="Akra Quick Translate 개인정보 처리방침"
    description="Akra Quick Translate는 현재 페이지의 보이는 텍스트를 번역하기 위해 Chrome 브라우저의 내장 Translator API를 사용합니다."
  >
    <div className="space-y-8">
      <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
          <FileText size={20} />
          처리하는 정보
        </h2>
        <ul className="space-y-3 text-zinc-400 leading-relaxed">
          <li>사용자가 선택한 원본 언어, 대상 언어, 상태 오버레이 설정</li>
          <li>현재 탭에서 번역 대상이 되는 페이지 텍스트</li>
        </ul>
      </section>

      <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
          <ShieldCheck size={20} />
          저장 위치와 외부 전송
        </h2>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            언어와 오버레이 설정은 Chrome storage.sync에 저장되어 사용자의 Chrome 프로필에서 동기화될 수 있습니다.
            페이지 텍스트와 번역 결과는 확장 기능 실행 중 현재 탭 안에서만 사용되며 Akra 서버에 저장되지 않습니다.
          </p>
          <p>
            Akra는 페이지 텍스트, 번역 결과, 방문 URL, 사용 기록을 자체 서버로 전송하지 않습니다.
            번역 가능 여부와 실제 번역 처리는 Chrome 내장 Translator API의 동작과 Chrome 정책을 따릅니다.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
          <Mail size={20} />
          문의
        </h2>
        <a href={`mailto:${product.contactEmail}`} className="text-blue-200 hover:text-white transition-colors">
          {product.contactEmail}
        </a>
      </section>
    </div>
  </StaticPage>
);

export const QuickTranslateSupportPage: React.FC = () => (
  <StaticPage
    title="지원"
    eyebrow="Support"
    heading="Akra Quick Translate 지원"
    description="설치, 단축키, 번역 동작과 관련한 문의는 이메일로 보내 주세요."
  >
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 mb-8">
      <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
        <Mail size={20} />
        문의
      </h2>
      <a href={`mailto:${product.contactEmail}`} className="text-blue-200 hover:text-white transition-colors">
        {product.contactEmail}
      </a>
      <p className="mt-4 text-zinc-500 text-sm">
        버그 제보와 기능 요청은 GitHub Issues 연결 후 이 페이지에 링크를 추가할 수 있습니다.
      </p>
    </div>

    <div className="space-y-4">
      {faqs.map((faq) => (
        <section key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <h2 className="flex items-start gap-3 text-xl font-serif text-white mb-3">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-blue-200 mt-1" />
            {faq.question}
          </h2>
          <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
        </section>
      ))}
    </div>
  </StaticPage>
);
