import React, { CSSProperties, useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Gauge,
  Play,
  Sparkles,
  Volume2,
} from 'lucide-react';
import './WaxballPage.css';

const WEB_APP_URL = 'https://waxball.akra.kr/';

const stages = [
  {
    label: 'Surface',
    korean: '왁스 표면',
    reveal: 82,
  },
  {
    label: 'Fracture',
    korean: '균열 진행',
    reveal: 52,
  },
  {
    label: 'Core',
    korean: '말랑 코어',
    reveal: 18,
  },
];

const materials = [
  {
    name: 'Opal Bloom',
    korean: '오팔 블룸',
    detail: '진주빛 왁스 · 맑은 파열 · 말랑 코어',
    image: '/waxball/select-opal.webp',
    width: 480,
    height: 600,
    accent: '#d8c7ff',
  },
  {
    name: 'Chocolat',
    korean: '쇼콜라',
    detail: '짙은 왁스 · 오도독 파손 · 묵직한 촉감',
    image: '/waxball/select-chocolate.webp',
    width: 480,
    height: 852,
    accent: '#ca7d4d',
  },
  {
    name: 'Glacier',
    korean: '글레이셔',
    detail: '얼음결 균열 · 유리 파편 · 차가운 클릭',
    image: '/waxball/select-ice.webp',
    width: 480,
    height: 598,
    accent: '#76cfff',
  },
  {
    name: 'Nebula Veil',
    korean: '네뷸라 베일',
    detail: '공명 게이지 · 빠른 연타 · 생명체 부화',
    image: '/waxball/select-xeno.webp',
    width: 480,
    height: 598,
    accent: '#9d68ff',
  },
  {
    name: 'Luma',
    korean: '루마',
    detail: '연두 발광 · 밝은 균열 · 젤리 코어',
    image: '/waxball/select-luma.webp',
    width: 480,
    height: 600,
    accent: '#a4f68a',
  },
  {
    name: 'Phosphor',
    korean: '포스포르',
    detail: '보랏빛 발광 · 네온 파열 · 낯선 코어',
    image: '/waxball/select-phosphor.webp',
    width: 480,
    height: 600,
    accent: '#b667ff',
  },
];

const WaxballPage: React.FC = () => {
  const [reveal, setReveal] = useState(52);
  const [activeMaterial, setActiveMaterial] = useState(0);

  const activeStage = useMemo(() => {
    if (reveal > 69) return 0;
    if (reveal > 35) return 1;
    return 2;
  }, [reveal]);

  const fractureProgress = Math.round(((88 - reveal) / 76) * 100);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = 'WAXBALL | 단단한 왁스, 그 안의 말랑이 — Akra Dev';
    if (description) {
      description.content =
        '단단한 왁스의 균열과 말랑한 코어의 변형을 동시에 즐기는 Akra의 3D 감각 게임, WAXBALL을 만나보세요.';
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  const selectedMaterial = materials[activeMaterial];

  return (
    <article className="waxball-page">
      <section className="wb-hero" aria-labelledby="waxball-title">
        <div className="wb-hero-aurora wb-hero-aurora-left" aria-hidden="true" />
        <div className="wb-hero-aurora wb-hero-aurora-right" aria-hidden="true" />

        <div className="wb-container wb-hero-grid">
          <div className="wb-hero-copy">
            <h1 id="waxball-title">
              <span className="wb-wordmark">WAXBALL</span>
              <span className="wb-hero-statement">단단한 왁스, 그 안의 말랑이.</span>
            </h1>
            <p className="wb-hero-description">
              손끝으로 표면을 누르면 말랑하게 휘고, 그 위로 왁스 균열이 번집니다.
              끝까지 깨뜨린 뒤에는 숨어 있던 코어를 직접 주물러 보세요.
            </p>

            <div className="wb-hero-actions">
              <a className="wb-button wb-button-primary" href={WEB_APP_URL} target="_blank" rel="noreferrer">
                웹에서 바로 체험
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="wb-button wb-button-secondary" href="#play-preview">
                <Play size={17} fill="currentColor" aria-hidden="true" />
                26초 플레이 보기
              </a>
            </div>

            <div className="wb-hero-facts" aria-label="왁뿌볼 주요 정보">
              <span>12 MATERIALS</span>
              <span>NO LOGIN</span>
              <span>WEB PLAY</span>
            </div>
          </div>

          <figure className="wb-hero-visual">
            <div
              className="wb-comparison"
              style={{ '--wb-reveal': `${reveal}%` } as CSSProperties}
            >
              <div className="wb-comparison-glow" aria-hidden="true" />
              <img
                className="wb-orb-image wb-orb-base"
                src="/waxball/hero-stage0.webp"
                alt="균열 전의 단단하고 반투명한 오팔 왁스볼"
                width="900"
                height="900"
                fetchPriority="high"
              />
              <div className="wb-orb-reveal" aria-hidden="true">
                <img
                  className="wb-orb-image"
                  src="/waxball/hero-cutaway.webp"
                  alt=""
                  width="900"
                  height="900"
                  fetchPriority="high"
                />
              </div>

              <span className="wb-comparison-label wb-comparison-label-left">WAX SHELL</span>
              <span className="wb-comparison-label wb-comparison-label-right">SOFT CORE</span>

              <input
                className="wb-comparison-range"
                type="range"
                min="12"
                max="88"
                value={reveal}
                onChange={(event) => setReveal(Number(event.target.value))}
                aria-label="왁스 표면과 말랑이 코어 비교"
                aria-valuetext={`${stages[activeStage].korean} 보기`}
                aria-describedby="waxball-comparison-caption"
              />
              <div className="wb-comparison-seam" aria-hidden="true">
                <span className="wb-comparison-handle">
                  <ChevronRight className="wb-handle-left" size={18} />
                  <ChevronRight size={18} />
                </span>
              </div>
            </div>

            <figcaption id="waxball-comparison-caption" className="wb-sr-only">
              세로 손잡이를 움직이면 온전한 왁스 표면과 깨진 뒤의 말랑이 코어를 한 구체에서 비교할 수 있습니다.
            </figcaption>
          </figure>

          <div className="wb-stage-rail" aria-label="파손 단계 빠른 선택">
            <span className="wb-stage-line" aria-hidden="true">
              <span style={{ transform: `scaleX(${fractureProgress / 100})` }} />
            </span>
            {stages.map((stage, index) => (
              <button
                key={stage.label}
                className={index === activeStage ? 'is-active' : ''}
                type="button"
                onClick={() => setReveal(stage.reveal)}
                aria-pressed={index === activeStage}
              >
                <span className="wb-stage-dot">{index + 1}</span>
                <span>
                  <strong>{stage.label}</strong>
                  <small>{stage.korean}</small>
                </span>
              </button>
            ))}
          </div>
        </div>

        <a className="wb-scroll-cue" href="#mechanism" aria-label="제품 작동 방식으로 이동">
          어떻게 깨지는지 보기
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </section>

      <section id="mechanism" className="wb-section wb-mechanism-section" aria-labelledby="mechanism-title">
        <div className="wb-container">
          <div className="wb-section-heading">
            <span aria-hidden="true">01</span>
            <div>
              <h2 id="mechanism-title">눌리는 말랑이, 번지는 왁스 균열</h2>
              <p>
                왁뿌볼의 핵심은 ‘찌그러짐’과 ‘파손’을 따로 보여주지 않는 데 있습니다.
                누르는 힘이 형태를 바꾸고, 같은 순간 표면의 균열 단계도 앞으로 나아갑니다.
              </p>
            </div>
          </div>

          <div className="wb-mechanism-overview">
            <figure className="wb-mechanism-art">
              <img
                src="/waxball/feature-tactile.webp"
                alt="서로 다른 왁스 재질이 갈라지며 내부 캐릭터가 드러나는 왁뿌볼 장면"
                width="1024"
                height="500"
                loading="lazy"
              />
              <figcaption>실제 게임 자산을 바탕으로 제작한 촉각 플레이 키 아트</figcaption>
            </figure>

            <ol className="wb-mechanism-steps">
              <li>
                <span>1</span>
                <div>
                  <h3>누르면, 먼저 휘어집니다</h3>
                  <p>짧게 누르거나 꾹 누르는 동안 볼의 실루엣이 힘의 방향에 맞춰 변형됩니다.</p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <h3>그 위로 균열이 누적됩니다</h3>
                  <p>한 번에 끝나지 않는 8단계 균열과 파손 직전의 떨림이 다음 순간을 예고합니다.</p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <h3>깨진 뒤에도 끝나지 않습니다</h3>
                  <p>껍질 속 캐릭터가 드러나면 드래그해 늘리고 눌러 보는 말랑이 플레이로 이어집니다.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="wb-device-proof" aria-label="실제 Android 플레이 화면">
            <figure className="wb-device-card wb-device-card-main">
              <div className="wb-device-frame">
                <img
                  src="/waxball/proof-fracture.webp"
                  alt="실제 Android 기기에서 왁스볼 균열이 진행되는 화면"
                  width="640"
                  height="1138"
                  loading="lazy"
                />
              </div>
              <figcaption><strong>표면</strong> 누르는 자리에서 형태와 광택이 함께 반응합니다.</figcaption>
            </figure>
            <figure className="wb-device-card wb-device-card-shifted">
              <div className="wb-device-frame">
                <img
                  src="/waxball/proof-sound.webp"
                  alt="실제 Android 게임의 재질별 파손과 사운드 화면"
                  width="640"
                  height="1138"
                  loading="lazy"
                />
              </div>
              <figcaption><strong>균열</strong> 재질의 결을 따라 단계적으로 선명해집니다.</figcaption>
            </figure>
            <figure className="wb-device-card wb-device-card-low">
              <div className="wb-device-frame">
                <img
                  src="/waxball/proof-core.webp"
                  alt="왁스 껍질이 깨진 뒤 말랑한 코어를 드래그하는 실제 Android 화면"
                  width="640"
                  height="1138"
                  loading="lazy"
                />
              </div>
              <figcaption><strong>코어</strong> 깨진 뒤에는 캐릭터를 계속 주물럭할 수 있습니다.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="wb-section wb-collection-section" aria-labelledby="collection-title">
        <div className="wb-container">
          <div className="wb-section-heading wb-section-heading-compact">
            <span aria-hidden="true">02</span>
            <div>
              <h2 id="collection-title">12가지 왁스볼, 12가지 개성</h2>
              <p>색만 바꾼 스킨이 아닙니다. 표면의 결, 균열의 빛, 파손음과 코어의 분위기를 각 볼에 맞춰 설계했습니다.</p>
            </div>
          </div>

          <div className="wb-collection-lab">
            <div
              className="wb-collection-stage"
              style={{ '--material-accent': selectedMaterial.accent } as CSSProperties}
            >
              <div className="wb-collection-orbit" aria-hidden="true" />
              <img
                key={selectedMaterial.image}
                src={selectedMaterial.image}
                alt={`${selectedMaterial.korean} 왁스볼 컬렉션 아트`}
                width={selectedMaterial.width}
                height={selectedMaterial.height}
                loading="lazy"
              />
              <div className="wb-collection-stage-copy" aria-live="polite">
                <span>{String(activeMaterial + 1).padStart(2, '0')} / 12</span>
                <strong>{selectedMaterial.name}</strong>
                <small>{selectedMaterial.korean}</small>
              </div>
            </div>

            <div className="wb-material-list" role="group" aria-label="왁스볼 종류 선택">
              {materials.map((material, index) => (
                <button
                  key={material.name}
                  type="button"
                  aria-pressed={index === activeMaterial}
                  className={index === activeMaterial ? 'is-active' : ''}
                  onClick={() => setActiveMaterial(index)}
                  style={{ '--material-accent': material.accent } as CSSProperties}
                >
                  <span className="wb-material-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="wb-material-name">
                    <strong>{material.name}</strong>
                    <small>{material.detail}</small>
                  </span>
                  <ChevronRight size={19} aria-hidden="true" />
                </button>
              ))}
              <p>대표 6종을 먼저 보여드립니다. 게임 안에서는 총 12종의 왁스볼을 만날 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wb-section wb-sound-section" aria-labelledby="sound-title">
        <div className="wb-container wb-sound-grid">
          <div className="wb-sound-copy">
            <Volume2 size={34} strokeWidth={1.5} aria-hidden="true" />
            <h2 id="sound-title">보이는 균열만큼,<br />들리는 재질도 다르게.</h2>
            <p>
              쇼콜라는 도각도각 부러지고, 얼음은 맑게 갈라지며, 네뷸라는 낯선 공명을 남깁니다.
              짧은 터치와 연속 누르기에도 서로 다른 사운드 레이어가 반응합니다.
            </p>
            <a href="#play-preview" className="wb-text-link">
              실제 사운드가 담긴 영상 보기
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="wb-sound-media">
            <img
              className="wb-sound-wide"
              src="/waxball/feature-tactile.webp"
              alt="오팔, 초콜릿, 앰버 왁스볼의 서로 다른 표면과 파손 표현"
              width="1024"
              height="500"
              loading="lazy"
            />
            <img
              className="wb-sound-phone"
              src="/waxball/proof-ice.webp"
              alt="얼음 왁스볼이 실제 플레이 중 갈라지는 화면"
              width="640"
              height="1138"
              loading="lazy"
            />
            <span className="wb-sound-wave" aria-hidden="true">DRR · DAK · CRACK</span>
          </div>
        </div>
      </section>

      <section className="wb-section wb-nebula-section" aria-labelledby="nebula-title">
        <div className="wb-container">
          <div className="wb-nebula-stage">
            <img
              src="/waxball/feature-nebula.webp"
              alt="어두운 우주빛 알 속에서 외계 생명체가 깨어나는 네뷸라 베일 장면"
              width="1024"
              height="500"
              loading="lazy"
            />
            <div className="wb-nebula-vignette" aria-hidden="true" />
            <div className="wb-nebula-copy">
              <Sparkles size={30} aria-hidden="true" />
              <h2 id="nebula-title">마지막 균열은<br />부화가 됩니다.</h2>
              <p>
                네뷸라 베일의 7단계에서는 빠르게 연타해 공명 게이지를 채워야 합니다.
                속도가 떨어지면 게이지도 내려가고, 끝까지 채우면 수상한 생명체가 모습을 드러냅니다.
              </p>
              <div className="wb-nebula-facts">
                <span><Gauge size={17} /> 속도 반응형 게이지</span>
                <span><Sparkles size={17} /> 부화 성공 연출</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="play-preview" className="wb-section wb-preview-section" aria-labelledby="preview-title">
        <div className="wb-container wb-preview-grid">
          <div className="wb-preview-copy">
            <span className="wb-preview-time">00:26</span>
            <h2 id="preview-title">설명보다,<br />직접 움직이는 장면으로.</h2>
            <p>
              실제 Pixel 4에서 캡처한 플레이입니다. 얼음 균열, 최종 파손, 코어 드래그,
              네뷸라 공명과 부화까지 한 흐름으로 확인해 보세요.
            </p>
            <ul>
              <li>실제 Android 플레이 화면</li>
              <li>앱에 포함된 배경음과 재질별 효과음</li>
              <li>한국어 자막 포함</li>
            </ul>
          </div>

          <div className="wb-video-shell">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/waxball/proof-fracture.webp"
              aria-label="왁뿌볼 실제 플레이 26초 미리보기"
            >
              <source src="/waxball/waxball-play-preview-ko.mp4" type="video/mp4" />
              브라우저가 동영상 재생을 지원하지 않습니다.
            </video>
          </div>
        </div>
      </section>

      <section className="wb-final-cta" aria-labelledby="final-cta-title">
        <div className="wb-container wb-final-cta-inner">
          <div>
            <h2 id="final-cta-title">이제, 직접 깨뜨려 보세요.</h2>
          </div>
          <a className="wb-button wb-button-primary" href={WEB_APP_URL} target="_blank" rel="noreferrer">
            왁뿌볼 시작하기
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <div className="wb-container wb-legal-links">
          <a href="https://waxball.akra.kr/privacy/" target="_blank" rel="noreferrer">개인정보처리방침</a>
          <a href="https://waxball.akra.kr/terms/" target="_blank" rel="noreferrer">이용약관</a>
          <span>로그인 없이 시작 · 진행 정보는 기기에 저장</span>
        </div>
      </section>
    </article>
  );
};

export default WaxballPage;
