---
version: 1
slug: "components-waxballpage-tsx"
primary_target: "components/WaxballPage.tsx"
related_targets: ["data/products.ts","App.tsx"]
---

# Waxball Product Page Surface Brief

## Scope and mode

- Target: `components/WaxballPage.tsx`, `/waxball/`
- Mode: Persuade
- Role: Akra `제품과 작업` 목록의 최상위 대표 제품 상세 페이지

## Audience, job, and action

- 방문자는 처음 수 초 안에 ‘단단한 왁스 균열과 말랑이 변형이 동시에 일어나는 3D 감각 게임’을 이해해야 한다.
- 가장 중요한 행동은 `https://waxball.akra.kr/`에서 웹 버전을 바로 체험하는 것이다.
- 보조 행동은 실제 플레이 영상을 재생하고, 컬렉션·네뷸라 부화·법적 정보를 확인하는 것이다.

## Proof and content

- 실제 Blender `stage0/cutaway` 렌더를 같은 좌표에 겹친 비교 인터랙션
- 실제 Android 게임 스크린샷 7장
- 실제 플레이 미리보기 영상 1개
- 실제 12종 선택 이미지와 오팔·초콜릿·앰버·네뷸라 프로모션 이미지
- 확인되지 않은 평점, 사용자 수, 수상, 스토어 공개 상태는 사용하지 않는다.

## Chosen direction

- Approved comp: `.impeccable/mocks/waxball-desktop-b.png`
- Direction: **Fracture Chamber** — 첫 화면의 거대한 볼을 좌우 비교해 표면에서 코어로 넘어가는 변화를 직접 본다.
- Memorable moment: 세로 손잡이를 움직이면 한 구체 안에서 온전한 왁스와 파손된 말랑이 코어가 맞물린다.
- Seed key: `872264a4`; grounded surface candidate 6.

## Component grammar

- Akra 전역 캡슐 내비게이션과 검은 무대는 유지한다.
- 큰 제품 오브젝트에는 둥근 카드 컨테이너를 씌우지 않고 화면 자체에 놓는다.
- 정보 패널은 20~28px 둥근 모서리, 한 겹의 반투명 경계, 낮은 명도 차를 사용한다.
- CTA는 흰색 기본 버튼과 투명 보조 버튼의 두 단계만 사용한다.
- 타이포그래피는 짧은 대형 세리프 선언과 Pretendard 본문을 결합한다.

## Implementation inventory

| Ingredient | Commitment | Medium |
|---|---|---|
| Floating Akra navigation | 기존 전역 컴포넌트, 키보드·모바일 메뉴 유지 | Existing React component |
| Hero copy | `WAXBALL`, 한 문장 가치 제안, 두 CTA | Semantic HTML |
| Split waxball | 동일 크기의 stage0/cutaway 렌더, 드래그·키보드 Range 입력 | Existing PNG + HTML/CSS |
| Split handle | 세로 seam, 44px 손잡이, 현재 퍼센트 접근성 레이블 | Semantic range input + CSS |
| Stage rail | Surface / Fracture / Core를 한 줄로 연결 | HTML/CSS |
| Material collection | 실제 선택 이미지 6종 이상, 가로 스크롤 없이 반응형 | Existing raster assets |
| Three-act proof | 실제 Android 화면으로 표면·균열·코어 설명 | Existing raster assets |
| Nebula finale | 실제 프로모션 이미지와 부화 설명 | Existing raster asset |
| Preview | 실제 무음 자동재생 금지, 사용자 제어 제공 | Existing MP4 + native video |
| Final CTA | 웹 체험 링크와 법적 링크 | Semantic links |

## Responsive and motion constraints

- 375px부터 1440px까지 가로 스크롤이 없어야 한다.
- 모바일에서는 split ball을 텍스트 아래로 내려 화면 폭에 맞추고 조작 손잡이를 유지한다.
- `prefers-reduced-motion`에서는 반복 부유, 시차, 장식 회전을 제거한다.
- 이미지에는 고정 aspect ratio와 `loading` 우선순위를 지정해 CLS를 줄인다.
- 페이지 콘텐츠는 JavaScript 애니메이션이 실행되지 않아도 보인다.

## Unresolved decisions

- Google Play 공개 URL은 확인 전까지 노출하지 않는다.
