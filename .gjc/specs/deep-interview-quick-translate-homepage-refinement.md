# Deep Interview Spec: Quick Translate Homepage Refinement

## Metadata
- Interview ID: b0e3eac9-b281-490d-8585-844a39979133
- Rounds: 11
- Final Ambiguity Score: 4%
- Type: brownfield
- Generated: 2026-06-20T08:25:49.813Z
- Threshold: 0.05
- Threshold Source: default
- Initial Context Summarized: no
- Status: PASSED
- Auto-Researched Rounds: []
- Auto-Answered Rounds: []
- Architect Failures: 0
- Lateral Reviews: 3 milestone panels (initial→progress, progress→refined, refined→ready)
- Lateral Panel Failures: 0
- Refined Rounds: [5, 9]
- Closure Overrides: none
- Restated Goal: 홈의 4~5개 작업 카드 안에서 Quick Translate를 Akra가 직접 만든 최신 대표 Chrome 확장으로 가장 먼저 읽히게 하고, 상세 페이지는 임시 ZIP 다운로드와 추후 Web Store 전환을 차분히 안내하며, 카피·디자인은 신뢰, 가독성, 자연스러운 한국어를 기준으로 정리하고 필요한 제품 메타데이터는 `data/products.ts`로 일부 통합한다.

## Clarity Breakdown
| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Goal Clarity | 0.95 | 0.35 | 0.333 |
| Constraint Clarity | 0.94 | 0.25 | 0.235 |
| Success Criteria | 0.95 | 0.25 | 0.238 |
| Context Clarity | 0.94 | 0.15 | 0.141 |
| **Total Clarity** | | | **0.96** |
| **Ambiguity** | | | **0.04** |

## Topology
| Component | Status | Description | Coverage / Deferral Note |
|-----------|--------|-------------|--------------------------|
| 홈 작업 목록 | active | 복구된 mock 리스트와 신규 Quick Translate 카드를 홈 쇼케이스에서 어떤 우선순위와 표현으로 보여줄지 정한다. | 4~5개 카드 유지, Quick Translate 첫 번째 또는 최고 우선순위, mock/concept는 보조. 향후 목록 증가 시 페이징/넘김 느낌은 future affordance로 둔다. |
| Quick Translate 상세 페이지 | active | `/quick-translate`, `/quick-translate/support`, `/quick-translate/privacy`의 정보 구조, CTA, 불필요 섹션을 정리한다. | 최신 Chrome 확장 제품 소개와 다운로드 연결이 목표. ZIP은 Web Store 전 임시 CTA로 차분히 노출하고, 추후 공식 스토어 링크로 교체 가능해야 한다. |
| 한국어 카피 톤 | active | 홈페이지와 제품 페이지의 번역체·AI식 표현을 한국 사용자에게 자연스럽게 맞춘다. | AI식 추상어·과장, 대행사 영업 톤, 번역체, 불필요한 영어 라벨을 피한다. 주요 섹션은 기능·제약·다음 행동을 말한다. |
| 시각 디자인 정리 | active | 카드, 섹션, 라벨, 여백, 강조 방식을 더 보기 좋게 다듬는다. | 신뢰와 가독성을 우선한다. Quick Translate가 최신 대표 제품으로 먼저 읽히고, ZIP 다운로드는 임시 CTA로 차분하게 보여야 한다. |

## Established Facts
- Intake: 인터뷰 대상은 현재 코드베이스의 홈페이지와 `/quick-translate` 통합 개선이다.
- Round 0: 범위는 홈 작업 목록, Quick Translate 상세 페이지, 한국어 카피 톤, 시각 디자인 정리 4개 활성 컴포넌트다.
- Round 1: 홈 작업 목록의 핵심 메시지는 Akra가 실제 제품을 만드는 팀이고 Quick Translate가 최신 대표 작업이라는 점이다.
- Round 2: Quick Translate 상세 페이지의 핵심 성공 기준은 Web Store 출시 전 ZIP 배포 상태와 설치 방법을 방문자가 안심하고 이해하는 것이다.
- Round 3: 카피는 AI식 추상어·과장, 대행사 영업 톤, 불필요한 영어 라벨과 직역 문장을 피하고 실제 제품팀의 차분한 한국어 설명을 선호한다.
- Round 4: 시각 디자인은 화려함보다 신뢰를 우선하며 ZIP 설치 방법, 주의점, 개인정보 신뢰를 잘 보이게 해야 한다.
- Round 5: 홈 작업 목록은 4~5개 정도로 깔끔하게 유지하고 Quick Translate를 첫 번째 또는 가장 눈에 띄는 카드로 두며, 향후 작업이 많아지면 가독성 좋은 페이징/넘김 느낌을 고려한다.
- Round 6: Quick Translate 상세 페이지는 Akra가 직접 만든 최신 Chrome 확장 제품을 소개하고 다운로드까지 연결하는 페이지다.
- Round 7: 카피 합격 기준은 최신 대표 작업 cue, 기능·제약·다음 행동 중심 문구, 신뢰를 높이는 필수 영어만 남기는 것이다.
- Round 8: Quick Translate 카드는 mock/concept 카드보다 명확히 높은 우선순위로 보여야 한다.
- Round 9: ZIP 다운로드는 Chrome Web Store 반영 전 임시 제공 방식이며, 출시 후 공식 스토어 링크로 교체할 수 있게 문구와 구조를 고려한다.
- Round 10: 디자인 최종 승인 기준은 Quick Translate가 최신 대표 제품으로 가장 먼저 읽히고 ZIP 다운로드가 임시 CTA로 차분하게 보이는 것이다.
- Round 11: 제품 메타데이터를 일부 통합하여 버전, 다운로드, Web Store 예정 링크 같은 값을 `data/products.ts` 쪽으로 옮긴다.

## Trigger Metadata
No ambiguity-raising triggers were accepted as active contradictions. Future paging, Web Store CTA, and product metadata consolidation were recorded as bounded constraints inside existing components, not new active top-level components.

## Lateral Review Panel
- Round 3, initial→progress: ZIP 설치 신뢰는 디자인 제약이며, Quick Translate를 실제 최신 제품으로 더 강하게 세우려면 mock/concept 작업의 시각적 존재감을 낮출 수 있다고 지적했다.
- Round 6, progress→refined: 카피 기준은 느낌이 아니라 observable UI checks여야 하며, 최신 대표 작업 cue, ZIP confidence, privacy boundary, essential-English whitelist를 제안했다.
- Round 11, refined→ready: spec is ready if metadata ownership, temporary ZIP, and paging are bounded. Recommendation: no router/CMS/catalog expansion; ZIP should be framed once as temporary and calm; paging remains future affordance.

## Goal
홈의 4~5개 작업 카드 안에서 Quick Translate를 Akra가 직접 만든 최신 대표 Chrome 확장으로 가장 먼저 읽히게 하고, 상세 페이지는 임시 ZIP 다운로드와 추후 Web Store 전환을 차분히 안내하며, 카피·디자인은 신뢰, 가독성, 자연스러운 한국어를 기준으로 정리하고 필요한 제품 메타데이터는 `data/products.ts`로 일부 통합한다.

## Constraints
- 기존 React/Vite 단일 페이지 구조를 유지한다.
- `App.tsx`의 수동 route map과 현재 product routes를 대체하는 라우터/404 작업은 이번 범위가 아니다.
- 제품 메타데이터 통합은 버전, 임시 다운로드 URL, Web Store 예정 링크, support/privacy/contact 같은 release/product facts에 한정한다.
- `data/products.ts`를 확장하되 CMS, 범용 제품 카탈로그, 복잡한 라우팅 모델을 새로 만들지 않는다.
- ZIP 다운로드는 Chrome Web Store 반영 전 임시 제공으로 보이게 한다.
- ZIP CTA는 차분하고 임시적이어야 하며, 페이지의 주 메시지를 ZIP 자체로 만들지 않는다.
- 카피는 AI식 추상어, 과장, 대행사 영업 톤, 번역체, 불필요한 영어 라벨을 피한다.
- 영어는 Akra Quick Translate, Chrome, Translator API, ZIP, Alt+T/Option+T, MV3, stack tags처럼 제품·플랫폼·단축키·기술 신뢰를 높이는 용어만 남긴다.
- 홈 카드 수는 현재 4~5개 수준으로 깔끔하게 유지한다.
- 페이징/넘김은 향후 목록 증가를 고려한 visual affordance로 기록하며, 현재 기능 구현 요구는 아니다.

## Non-Goals
- Chrome Web Store 실제 등록 또는 외부 배포 자동화.
- 새 라우터 도입, 404 페이지, canonical URL 정리.
- CMS 또는 범용 제품 상세 페이지 생성기 구축.
- 실제 functional pagination 구현.
- ZIP checksum/release signing 자동화.
- 확장 프로그램 내부 코드 변경.

## Acceptance Criteria
- [ ] 홈 쇼케이스에서 Quick Translate가 첫 번째이거나 가장 눈에 띄는 카드로 보인다.
- [ ] Quick Translate 카드나 쇼케이스 문구에서 최신 대표 작업임을 한 번 명확히 보여준다.
- [ ] 홈 작업 목록은 4~5개 카드 수준의 깔끔한 밀도를 유지한다.
- [ ] mock/concept 작업은 Quick Translate보다 낮은 위계로 보이며, 실제 상세 페이지가 있는 항목과 없는 항목의 차이가 명확하다.
- [ ] Quick Translate 상세 페이지는 Akra가 직접 만든 최신 Chrome 확장 제품을 소개하고 다운로드까지 연결한다.
- [ ] ZIP 다운로드는 Chrome Web Store 반영 전 임시 제공임이 분명하다.
- [ ] ZIP CTA는 페이지 내에서 과하게 반복되거나 주 메시지로 승격되지 않는다.
- [ ] Web Store 출시 후 공식 스토어 CTA로 교체 가능한 메타데이터 구조를 갖는다.
- [ ] 제품 버전, 임시 다운로드 URL, Web Store 예정 링크, support/privacy/contact 메타데이터가 `data/products.ts` 쪽으로 일부 통합된다.
- [ ] 주요 섹션은 추상 구호 대신 기능, 제약, 다음 행동을 말한다.
- [ ] 개인정보 문구는 Akra 서버 미전송/미저장과 Chrome API·정책 경계를 함께 유지한다.
- [ ] 디자인은 화려한 효과보다 신뢰, 가독성, CTA 위계가 먼저 읽힌다.

## Deferrals
- Functional pagination is deferred until the project list grows beyond the current 4~5 card range.
- Full Chrome Web Store launch flow is deferred until the store listing is live.
- Router/404/canonical work is deferred.
- Convergence Pacing: no min-round floor, score-drop cap, or dampening was used; bidirectional scoring remained the pacing mechanism.

## Assumptions Exposed & Resolved
| Assumption | Challenge | Resolution |
|------------|-----------|------------|
| Quick Translate can be one card among many | It may not read as the latest real product | Make it first or visually dominant and add one latest representative cue. |
| ZIP download should be strongly promoted | Web Store listing is coming soon | Show ZIP as temporary and calm, not as the core product message. |
| Copy just needs to feel Korean | Subjective style can drift | Use observable criteria: latest cue, concrete actions/constraints, essential English only. |
| Visual polish means more effects | Trust-first design may require less flash | Reduce overdone effects and prioritize readability/CTA hierarchy. |
| Product metadata can remain split | Version/download/Web Store facts can drift | Partially consolidate release/product facts into `data/products.ts`. |

## Technical Context
- `App.tsx` owns manual pathname routing with `/quick-translate`, `/quick-translate/privacy`, and `/quick-translate/support` in `productRoutes`.
- `data/products.ts` defines `ProjectCategory`, `Project`, `quickTranslateProduct`, and `projects`; Quick Translate is already first and links to `/quick-translate`.
- `components/Showcase.tsx` derives tabs from `projects`, filters cards, and renders `HoloCard`.
- `components/HoloCard.tsx` renders clickable cards only for `href && !isPrivate`; otherwise cards are sample/private states.
- `components/QuickTranslatePages.tsx` currently owns Quick Translate version, ZIP URL, support/privacy URLs, contact email, features, screenshots, usage steps, limitations, FAQ, support, and privacy copy.

## Ontology (Key Entities)
| Entity | Type | Fields | Relationships |
|--------|------|--------|---------------|
| Visitor | user | homepage viewer, product page viewer | Sees Home Showcase; reads Installation Guidance. |
| Home Showcase | surface | 4~5 cards, project cards, category filters, latest-work cue | Presents Quick Translate and mock projects. |
| Quick Translate | core product | latest representative work, Chrome extension, ZIP asset, direct Akra product | Links to Product Detail Page. |
| Mock Project | supporting portfolio item | sample badge, category, description | Appears alongside Quick Translate. |
| Product Detail Page | surface | route, CTA, support/privacy links, product intro | Explains Quick Translate and connects to download. |
| CTA | interaction | download ZIP, support link, future Web Store link | Moves Visitor toward test install or official store. |
| ZIP Distribution | release channel | pre-Web-Store status, download file | Requires calm temporary wording. |
| Installation Guidance | supporting content | test install steps, trust wording, warnings | Reassures Visitor before download. |
| Copy Tone | content constraint | plain Korean, calm product-team voice, observable claims | Governs Home Showcase and Product Detail Page. |
| Forbidden Copy Pattern | constraint | AI abstraction, overclaim, agency sales tone, translationese | Restricts Copy Tone. |
| Trust Block | visual/content module | install/trust cue, privacy reassurance, known limitations | Supports ZIP Distribution without overemphasis. |
| Reduced Visual Effect | visual constraint | less flash, calmer card motion | Supports Visitor trust. |
| Paging Feel | future interaction constraint | readable pagination, next/previous browsing | Applies when project count grows. |
| Web Store CTA | future release channel | official store link, replacement CTA | Replaces ZIP Distribution when listing is live. |
| Product Metadata | data model | version, download URL, Web Store planned link, support/privacy/contact | Feeds Home Showcase and Product Detail Page. |

## Ontology Convergence
| Round | Entity Count | New | Changed | Stable | Stability Ratio |
|-------|--------------|-----|---------|--------|-----------------|
| 1 | 6 | 6 | - | - | - |
| 2 | 8 | 2 | 0 | 6 | 75% |
| 3 | 10 | 2 | 0 | 8 | 80% |
| 4 | 12 | 2 | 0 | 10 | 83% |
| 5 | 13 | 1 | 0 | 12 | 92% |
| 6 | 13 | 0 | 0 | 13 | 100% |
| 7 | 13 | 0 | 0 | 13 | 100% |
| 8 | 13 | 0 | 0 | 13 | 100% |
| 9 | 14 | 1 | 0 | 13 | 93% |
| 10 | 14 | 0 | 0 | 14 | 100% |
| 11 | 15 | 1 | 0 | 14 | 93% |

## Interview Transcript
<details>
<summary>Full Q&A (11 rounds)</summary>

### Round 0
**Q:** Confirm topology.
**A:** 4 components are correct: home showcase, Quick Translate pages, Korean copy tone, visual design polish.

### Round 1
**Q:** 홈 작업 목록에서 가장 먼저 이해해야 할 메시지는?
**A:** Akra가 실제 제품을 만드는 팀이고 Quick Translate가 최신 대표 작업이라는 점.
**Ambiguity:** 69%

### Round 2
**Q:** `/quick-translate` 상세 페이지가 성공했다고 판단할 기준은?
**A:** Web Store 출시 전 ZIP 배포 상태와 설치 방법을 안심하고 이해하면 성공.
**Ambiguity:** 62%

### Round 3
**Q:** 피해야 할 말투는?
**A:** AI식 추상어/과장, 대행사 영업 톤, 번역체와 영어식 라벨.
**Ambiguity:** 52%

### Round 4
**Q:** 디자인에서 가장 지켜야 할 방향은?
**A:** 신뢰 우선. 화려한 효과를 줄이고 ZIP 설치 방법, 주의점, 개인정보 신뢰를 잘 보이게 한다.
**Ambiguity:** 39%

### Round 5
**Q:** 홈 작업 목록의 최소 성공 기준은?
**A:** 4~5개 카드, Quick Translate 우선, 향후 목록 증가 시 가독성 높은 페이징/넘김 느낌.
**Ambiguity:** 34%

### Round 6
**Q:** Quick Translate 상세 페이지를 한 문장으로 요약하면?
**A:** Akra가 직접 만든 최신 Chrome 확장 제품을 소개하고 다운로드까지 연결하는 페이지.
**Ambiguity:** 28%

### Round 7
**Q:** 카피의 필수 합격 기준은?
**A:** 최신 대표 작업 cue, 기능·제약·다음 행동 중심 문구, 필수 영어만 유지.
**Ambiguity:** 21%

### Round 8
**Q:** 디자인 화면 기준은?
**A:** Quick Translate 카드가 mock/concept 카드보다 명확히 우선순위가 높아 보여야 한다.
**Ambiguity:** 17%

### Round 9
**Q:** ZIP 설치 안내 범위는?
**A:** ZIP/download는 Web Store 전 임시 제공 방식이며, 추후 공식 스토어 링크로 교체 가능해야 한다.
**Ambiguity:** 12%

### Round 10
**Q:** 디자인 결과물 최종 승인 기준은?
**A:** Quick Translate가 최신 대표 제품으로 가장 먼저 읽히고 ZIP 다운로드는 임시 CTA로 차분하게 보이면 승인.
**Ambiguity:** 8%

### Round 11
**Q:** 기존 구조는 어떻게 다룰까?
**A:** 제품 메타데이터를 일부 통합해 버전, 다운로드, Web Store 예정 링크 같은 값을 `data/products.ts` 쪽으로 옮긴다.
**Ambiguity:** 4%

</details>
