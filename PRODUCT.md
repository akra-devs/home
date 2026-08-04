# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Akra가 직접 만든 제품을 확인하고 실제 제품을 체험하려는 방문자
- Akra의 제품 설계와 구현 역량을 검토하는 잠재 고객·협업 파트너
- Waxball의 촉각적 3D 플레이와 캐릭터 컬렉션에 관심 있는 모바일·웹 사용자

## Product Purpose

Akra 홈페이지는 직접 만들고 운영하는 제품과 공개 가능한 작업을 가장 먼저 보여주는 공식 제품 허브다. Waxball 상세 페이지는 방문자가 짧은 시간 안에 핵심 상호작용을 이해하고, 실제 웹 앱을 체험하거나 공식 출시 정보를 확인하도록 돕는다.

## Positioning

Waxball은 단단한 왁스 표면의 단계별 균열과 내부 말랑이의 실시간 변형을 한 터치 안에서 동시에 경험하게 하는 3D 감각 게임이다. 볼마다 표면, 파손음, 햅틱, 파손 이후의 캐릭터와 상호작용이 달라지는 것이 핵심 차별점이다.

## Operating Context

- 방문자는 Akra 메인 페이지의 `제품과 작업` 목록에서 Waxball을 최우선 대표 제품으로 발견한다.
- 상세 페이지에서 실제 플레이 장면, 12종 컬렉션, 재질별 파손, 네뷸라 알 부화, 파손 뒤 말랑이 조작을 확인한다.
- 기본 행동은 `https://waxball.akra.kr/`에서 웹 버전을 체험하는 것이다.
- 개인정보처리방침과 이용약관은 각각 `https://waxball.akra.kr/privacy/`, `https://waxball.akra.kr/terms/`에 공개돼 있다.

## Capabilities and Constraints

- 실제 앱은 Flutter 기반이며 웹과 Android 출시 자산을 보유한다.
- 짧게 누르기와 길게 누르기, 단계별 균열, 파손 직전 떨림, 최종 파손, 파손 후 말랑이 변형을 지원한다.
- 오팔, 솜사탕, 얼음, 초콜릿, 발광 볼, 네뷸라 알 등을 포함한 12가지 왁스볼을 제공한다.
- 기기 성능에 맞춘 자동 그래픽 품질과 수동 품질 설정을 지원한다.
- 로그인 없이 시작하며 진행 정보는 기기에 저장된다.
- 홈페이지는 React 19, Vite, Tailwind CDN, Framer Motion으로 구현되어 있다.
- Google Play 공개 URL은 아직 제품 근거에 포함하지 않는다. 확인 전에는 스토어 출시를 주장하거나 링크를 만들지 않는다.
- 사용자 수, 평점, 수상, 성능 수치 등 확인되지 않은 상업적 주장을 만들지 않는다.

## Brand Commitments

- 사이트 전역에서 Akra Dev의 기존 내비게이션, 푸터, 어두운 기반, 한국어 우선 구조를 유지한다.
- Waxball은 Akra의 제품과 작업 목록에서 최상위 대표 제품으로 다룬다.
- 제품명은 상세 페이지에서 `WAXBALL`, 한국어 설명에서는 `왁뿌볼`을 사용한다.
- 귀여운 캐릭터성과 하이퍼리얼한 표면·파손 감각을 함께 전달한다.
- 실제 플레이 자산과 검증된 제품 문구를 우선하며, 장식용 가짜 UI나 허구의 리뷰를 사용하지 않는다.

## Evidence on Hand

- 제품 문구: `C:/dev/waxball-flutter/docs/android-release/marketing/ko-KR/listing-metadata.json`
- 프로모션 카피: `C:/dev/waxball-flutter/docs/android-release/marketing/ko-KR/asset-copy.json`
- 실제 Android 플레이 스크린샷과 A/B 마케팅 이미지: `C:/dev/waxball-flutter/docs/android-release/marketing/ko-KR/`
- 실제 플레이 영상: `C:/dev/waxball-flutter/docs/android-release/marketing/ko-KR/video/waxball-play-preview-ko-v1.mp4`
- 캐릭터·선택 화면 이미지: `C:/dev/waxball-flutter/assets/images/`
- Blender 및 투명 배경 렌더: `C:/dev/waxball-flutter/assets/renders/`
- 제작 근거와 시행착오 기록: `C:/dev/waxball-flutter/docs/project-retrospective/index.html`
- 공개 웹 앱: `https://waxball.akra.kr/`
- 사용자 리뷰, 설치 수, 수상 기록은 현재 근거가 없으며 제작하지 않는다.

## Product Principles

1. 첫 화면에서 왁스 균열과 말랑한 변형이 동시에 일어나는 제품 메커니즘을 보여준다.
2. 설명보다 실제 플레이 화면과 실제 자산으로 제품을 증명한다.
3. 귀여움, 파손 쾌감, 재질별 소리의 세 축을 분리하지 않고 하나의 경험으로 전달한다.
4. 사용자가 기다리지 않고 바로 웹 체험으로 이동할 수 있게 한다.
5. 모션과 미디어는 저사양·모션 축소 환경에서도 콘텐츠 접근을 방해하지 않는다.

## Accessibility & Inclusion

- 키보드로 모든 링크와 컨트롤에 접근할 수 있어야 한다.
- 본문과 주요 UI는 WCAG AA 수준의 대비를 목표로 한다.
- 터치 대상은 최소 44×44px을 유지한다.
- 장식이 아닌 모든 이미지와 영상에는 의미 있는 대체 텍스트 또는 설명을 제공한다.
- `prefers-reduced-motion`에서는 반복 이동과 시차 효과를 제거한다.
