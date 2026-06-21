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
import { quickTranslateProduct } from '../data/products';


const product = quickTranslateProduct;
const release = product.release;
const webStoreUrl = release.webStoreUrl?.trim() || null;
const primaryDownloadHref = webStoreUrl ?? release.temporaryDownloadUrl;
const primaryDownloadText = webStoreUrl ? 'Chrome Web Store에서 설치' : '임시 ZIP 내려받기';

const features = [
  {
    icon: Keyboard,
    title: '단축키로 켜고 끄기',
    description: `Windows/Linux는 ${release.shortcutLabel}, macOS는 ${release.macShortcutLabel}. 한 번 더 누르면 번역 전 원문으로 돌아갑니다.`,
  },
  {
    icon: Languages,
    title: '언어쌍 저장',
    description: '팝업에서 원문 언어와 번역할 언어를 고르면 다음 번에도 그대로 쓸 수 있습니다.',
  },
  {
    icon: RotateCcw,
    title: '원문 복구',
    description: '번역 전에 문장을 보관해 두었다가 같은 자리의 원문으로 되돌립니다.',
  },
  {
    icon: MousePointerClick,
    title: '편한 실행 방식',
    description: '확장 아이콘, 단축키, 우클릭 메뉴 중 지금 가장 편한 방식으로 실행합니다.',
  },
  {
    icon: Settings,
    title: '작은 상태 알림',
    description: '번역 중인지, 끝났는지, 원문으로 돌아왔는지를 페이지 위에 짧게 보여줍니다.',
  },
  {
    icon: ShieldCheck,
    title: '텍스트 미수집',
    description: '페이지 텍스트와 번역 결과를 Akra 서버로 보내거나 저장하지 않습니다.',
  },
];

const screenshots = [
  {
    src: '/quick-translate/screenshot-1-popup-language-select.png',
    title: '언어 선택 팝업',
  },
  {
    src: '/quick-translate/screenshot-2-translation-restore-status.png',
    title: '번역·원문 복구 상태',
  },
  {
    src: '/quick-translate/screenshot-3-options-shortcuts.png',
    title: '옵션과 단축키 안내',
  },
];

const usageSteps = [
  `${release.browserRequirement}에서 번역할 페이지를 엽니다.`,
  '확장 아이콘을 눌러 원문 언어와 번역할 언어를 고릅니다.',
  `버튼을 누르거나 ${release.shortcutLabel}(맥은 ${release.macShortcutLabel})를 입력합니다.`,
  '한 번 더 실행하면 번역 전 원문으로 돌아갑니다.',
];

const temporaryInstallSteps = [
  'ZIP 파일을 내려받아 압축을 풉니다.',
  'Chrome 주소창에 chrome://extensions를 입력합니다.',
  "개발자 모드를 켜고 '압축해제된 확장 프로그램 로드'를 누릅니다.",
  '압축을 푼 폴더를 선택합니다.',
];

const limitations = [
  '브라우저 설정, 확장 관리 화면처럼 Chrome 내부 페이지에서는 사용할 수 없습니다.',
  "로컬 파일에서 쓰려면 Chrome 확장 상세 화면에서 '파일 URL에 대한 액세스 허용'을 켜야 합니다.",
  '처음 쓰는 언어는 Chrome이 모델을 내려받느라 시간이 걸릴 수 있습니다.',
];

const faqs = [
  {
    question: 'Chrome 몇 버전부터 되나요?',
    answer: `${release.browserRequirement}이 필요합니다. 다른 Chromium 브라우저는 내장 Translator API 지원 상태에 따라 동작이 달라질 수 있습니다.`,
  },
  {
    question: 'ZIP 다운로드는 임시인가요?',
    answer: `${release.webStoreStatus}이라 테스트용 ZIP을 임시로 제공합니다. 등록 후에는 공식 Chrome Web Store 링크로 교체합니다.`,
  },
  {
    question: '단축키는 바꿀 수 있나요?',
    answer: '네. 팝업/옵션의 단축키 안내를 누르거나 chrome://extensions/shortcuts에서 Akra Quick Translate 단축키를 바꾸면 됩니다.',
  },
  {
    question: '번역이 안 되거나 오래 걸려요.',
    answer: '처음 쓰는 언어쌍은 Chrome이 언어 모델을 준비해야 할 수 있습니다. Chrome 버전과 Translator API 지원 상태도 함께 확인해 주세요.',
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
    작업 목록으로
  </a>
);

export const QuickTranslatePage: React.FC = () => {
  return (
    <DocumentTitle title="Akra Quick Translate | Akra Dev">
      <div className="bg-zinc-950 overflow-hidden">
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_38%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%)] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6">
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
                  <span className="px-3 py-1 rounded-md bg-white text-black text-xs font-bold tracking-wider">
                    {product.highlightLabel}
                  </span>
                  <span className="px-3 py-1 rounded-md border border-white/10 text-zinc-300 text-xs font-medium">
                    v{release.version}
                  </span>
                  <span className="px-3 py-1 rounded-md border border-blue-400/30 text-blue-200 text-xs font-medium">
                    {release.browserRequirement}
                  </span>
                </div>

                <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] mb-8">
                  Akra가 만든 최신 Chrome 확장,
                  <span className="block text-blue-100">페이지 번역을 가볍게.</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
                  Akra Quick Translate는 Chrome 내장 Translator API로 현재 페이지를 번역하고,
                  같은 버튼으로 번역 전 문장까지 되돌립니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={primaryDownloadHref}
                    download={!webStoreUrl}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors"
                  >
                    <Download size={18} />
                    {primaryDownloadText}
                  </a>
                  <a
                    href={release.supportUrl}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/15 text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    설치·문의 보기
                    <ArrowRight size={18} />
                  </a>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-500">
                  {release.webStoreStatus}입니다. 지금은 테스트용 ZIP을 임시로 제공하며,
                  등록 후 공식 스토어 링크로 교체할 예정입니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-blue-950/30 ring-1 ring-white/5">
                  <img
                    src="/quick-translate/marquee-1400x560.png"
                    alt="Akra Quick Translate 미리보기"
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
              ['브라우저', 'Chrome MV3'],
              ['단축키', release.shortcutLabel],
              ['데이터', 'Akra 서버에 저장 안 함'],
              ['배포', release.webStoreStatus],
            ].map(([label, value]) => (
              <div key={label} className="border-l border-white/10 pl-5">
                <p className="text-xs font-semibold tracking-wider text-zinc-500 mb-2">{label}</p>
                <p className="text-white font-serif text-xl">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-blue-300 text-sm tracking-wider font-bold">핵심 기능</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white">딱 필요한 번역 흐름만 남겼습니다.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-blue-300/30 hover:bg-white/[0.06]">
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
                <span className="text-blue-300 text-sm tracking-wider font-bold">화면 구성</span>
                <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white">작게 열고, 바로 실행합니다.</h2>
              </div>
              <p className="text-zinc-400 max-w-lg leading-relaxed">
                언어 선택, 번역·원문 복구, 단축키 설정으로 가는 길을 확장 안에서 짧게 정리했습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {screenshots.map((shot) => (
                <figure key={shot.src} className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/70 shadow-lg shadow-black/20">
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
              <span className="text-blue-300 text-sm tracking-wider font-bold">사용 방법</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white mb-8">번역은 이렇게 씁니다.</h2>
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
              <span className="text-blue-300 text-sm tracking-wider font-bold">알아둘 점</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white mb-8">사용 전 확인</h2>
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

        <section className="py-20 bg-gradient-to-br from-white to-blue-100 text-black">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-center gap-8">
            <div>
              <p className="text-sm tracking-wider font-bold text-zinc-500 mb-3">{release.webStoreStatus}</p>
              <h2 className="text-3xl md:text-5xl font-serif">정식 등록 전 임시로 제공 중입니다.</h2>
              <p className="mt-4 max-w-2xl text-zinc-700 leading-relaxed">
                ZIP 파일은 테스트 설치를 위한 임시 경로입니다. 공식 스토어 등록 후에는 같은 자리에서
                Chrome Web Store 설치 링크로 안내합니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={release.supportUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-black text-white rounded-lg font-bold hover:bg-zinc-800 transition-colors"
              >
                설치·지원 확인
                <ArrowRight size={18} />
              </a>
              <a
                href={release.privacyUrl}
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
          <span className="text-blue-300 text-sm tracking-wider font-bold">{eyebrow}</span>
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
    eyebrow="개인정보"
    heading="Akra Quick Translate 개인정보 처리방침"
    description="Akra Quick Translate는 현재 페이지의 보이는 텍스트를 번역하기 위해 Chrome 내장 Translator API를 사용합니다."
  >
    <div className="space-y-8">
      <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
          <FileText size={20} />
          처리하는 정보
        </h2>
        <ul className="space-y-3 text-zinc-400 leading-relaxed">
          <li>사용자가 고른 원문 언어, 번역할 언어, 상태 알림 설정</li>
          <li>현재 탭에서 번역 대상이 되는 페이지 텍스트</li>
        </ul>
      </section>

      <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
          <ShieldCheck size={20} />
          저장 위치와 외부 전송 여부
        </h2>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            언어와 상태 알림 설정은 Chrome storage.sync에 저장되어 사용자의 Chrome 프로필에서 동기화될 수 있습니다.
            페이지 텍스트와 번역 결과는 확장 기능을 실행하는 동안 현재 탭 안에서만 쓰이며 Akra 서버에 저장되지 않습니다.
          </p>
          <p>
            Akra는 페이지 텍스트, 번역 결과, 방문 URL, 사용 기록을 자체 서버로 보내지 않습니다.
            번역 가능 여부와 실제 번역 처리는 Chrome 내장 Translator API와 Chrome 정책을 따릅니다.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
          <Mail size={20} />
          문의
        </h2>
        <a href={`mailto:${release.contactEmail}`} className="text-blue-200 hover:text-white transition-colors">
          {release.contactEmail}
        </a>
      </section>
    </div>
  </StaticPage>
);

export const QuickTranslateSupportPage: React.FC = () => (
  <StaticPage
    title="지원"
    eyebrow="도움말"
    heading="Akra Quick Translate 지원"
    description="임시 ZIP 설치, 단축키, 번역 동작에서 막히는 부분이 있으면 아래 내용을 확인하거나 이메일로 알려 주세요."
  >
    <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6 mb-8">
      <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
        <Download size={20} />
        임시 ZIP 설치
      </h2>
      <p className="text-zinc-400 leading-relaxed mb-5">
        Chrome Web Store 등록 전까지 제공하는 테스트 설치 경로입니다. 정식 등록 후에는 공식 스토어 링크로 안내합니다.
      </p>
      <ol className="space-y-3">
        {temporaryInstallSteps.map((step, index) => (
          <li key={step} className="flex gap-3 text-zinc-300 leading-relaxed">
            <span className="w-7 h-7 shrink-0 rounded-md bg-white text-black flex items-center justify-center text-xs font-bold">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>

    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 mb-8">
      <h2 className="flex items-center gap-2 text-xl font-serif text-white mb-4">
        <Mail size={20} />
        문의
      </h2>
      <a href={`mailto:${release.contactEmail}`} className="text-blue-200 hover:text-white transition-colors">
        {release.contactEmail}
      </a>
      <p className="mt-4 text-zinc-500 text-sm">
        문의할 때 Chrome 버전, 운영체제, 문제가 생긴 페이지와 재현 방법을 함께 보내 주시면 더 빨리 확인할 수 있습니다.
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
