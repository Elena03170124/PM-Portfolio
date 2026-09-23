import type { Project } from './types'

/** The six full case studies from Cassandra's current role across
 *  南一集團 (Nani) — 南一書局 (parent) and 萬通教育 (subsidiary).
 *  Ordered chronologically by start date. */
export const southoneProjects: Project[] = [
  {
    id: 'leave-flow-rebuild',
    company: 'southone',
    companyLabel: { zh: '南一集團子公司【萬通教育】', en: 'Nani — OneClass (subsidiary)' },
    period: { zh: '2024.08 – 2024.10', en: '2024.08 – 2024.10' },
    title: {
      zh: 'Live App 學生請假新流程｜補課機制重構',
      en: 'Live App Leave & Makeup-Class Flow Rebuild',
    },
    summary: {
      zh: '把「取消或補課」雙選項改為「請假即補課」的履約導向機制，將人工協調流程自動化。',
      en: 'Replaced a "cancel or reschedule" choice with a commitment-first "leave means makeup class" rule, and automated what used to be manual coordination.',
    },
    star: {
      situation: {
        zh: '既有請假流程同時提供「取消課程」與「補課安排」兩種選項：取消會直接壓低課程履約率，補課則高度仰賴後勤人工媒合師生與往返溝通，整體流程分散且難以控管。',
        en: 'The old leave flow offered two paths — cancel outright, or arrange a makeup — and both were costly: cancellations directly eroded the lesson fulfillment rate, while makeups depended on heavy manual coordination between staff, teachers, and families.',
      },
      task: {
        zh: '重構跨系統的請假與補課機制，串接 Live App、MMS 課程管理、教師端與通知頻道，用自動化取代人工協調，同時提升履約率並建立一致可控的流程。',
        en: 'Rebuild the leave/makeup mechanism across Live App, the MMS course system, the teacher-facing app, and notification channels — replacing manual coordination with automation while raising the fulfillment rate.',
      },
      action: {
        zh: '取消「直接取消課程」選項，統一改為「請假即需指定補課時間」；設計「代課優先、原師其次、人工兜底」的媒合策略；把選時邏輯轉為系統可計算規則（自動排除已排課/已請假/過去時段，限制補課時間窗）；串接 Live App／MMS／Teacher／通知系統，讓補課單狀態全程自動追蹤。',
        en: 'Removed the "cancel outright" option and made "leave means picking a makeup slot" the only path; designed a substitute-teacher-first, then-original-teacher, then-manual-fallback matching strategy; turned time-slot selection into computable rules (auto-excluding booked/leave/past slots, bounding the makeup window); and wired Live App, MMS, the teacher app, and notifications together so every makeup request is tracked automatically end to end.',
      },
      result: {
        zh: '落實「請假＝需補課」的新規則，大幅降低課程直接取消的情境；建立「請假→媒合→建課→通知」的跨系統自動化流程，並顯著減少後勤在補課安排與往返溝通上的作業負擔。',
        en: 'The new "leave means a makeup" rule sharply reduced outright cancellations, and the leave → match → schedule → notify pipeline now runs automatically end to end — cutting the manual coordination load on operations substantially.',
      },
      reflection: {
        zh: '即使是被動承接的需求，也主動補齊了決策與例外情境的設計缺口——這讓我從單一功能思維，升級為跨系統、跨角色的整體流程設計能力，也體會到：產品價值需要在專案初期就定義好可驗證的衡量方式，才能支撐後續的決策與優化。',
        en: "Even inheriting a passively-scoped request, I filled the gaps in decision logic and edge-case design on my own initiative — the project pushed me from single-feature thinking toward designing whole cross-system, cross-role flows, and taught me that a measurable success definition needs to exist from day one, not be retrofitted later.",
      },
    },
    metrics: [
      { value: { zh: '請假即補課', en: '"Leave = makeup"' }, label: { zh: '新產品規則', en: 'new product rule' } },
      { value: { zh: '4 系統', en: '4 systems' }, label: { zh: '跨系統流程串接', en: 'wired together end to end' } },
    ],
    competencyIds: ['product-strategy', 'tech', 'project-mgmt'],
    highlights: [
      { zh: '履約導向的產品規則重構', en: 'commitment-first product rule redesign' },
      { zh: '人工協調流程自動化', en: 'automated a manual coordination flow' },
      { zh: '跨系統狀態追蹤', en: 'cross-system status tracking' },
    ],
    summaryOnly: false,
    quote: {
      zh: '產品經理的價值，在不完整甚至被動的需求中，仍能主動定義問題、重構規則，並用系統設計影響最終營運結果。',
      en: 'A PM\'s value shows up precisely when the requirement is incomplete or handed to you passively — you still define the real problem, rewrite the rule, and let the system design shape the operating outcome.',
    },
  },
  {
    id: 'dual-system-merge',
    company: 'southone',
    companyLabel: { zh: '南一集團子公司【萬通教育】', en: 'Nani — OneClass (subsidiary)' },
    period: { zh: '2024.11 – 2025.04', en: '2024.11 – 2025.04' },
    title: {
      zh: '補教 × 家教雙系統合併｜跨服務資料對齊與流程重構',
      en: 'Tutoring × Home-Tutoring System Merge',
    },
    summary: {
      zh: '首次主導的大型跨系統整合：把模糊的「系統合併」目標拆成分階段落地策略，班級結構收斂 5000→60 個。',
      en: "My first large cross-system integration: turned a vague 'merge the two systems' mandate into a phased rollout, and consolidated class structures from ~5,000 down to 60.",
    },
    star: {
      situation: {
        zh: '子公司決定把「一對一家教系統」併入「補習班系統」，但整合決策初期沒有明確策略目標與路徑。兩套系統在會員資料、課程結構、訂單模型與使用流程上落差極大，貿然遷移將直接衝擊既有付費用戶的服務穩定性。',
        en: 'The subsidiary decided to fold its one-on-one tutoring system into its group-class system — with no clear strategy or path defined up front. The two systems diverged sharply in member data, course structure, and order models, and a careless migration risked destabilizing service for paying users.',
      },
      task: {
        zh: '把「系統合併」這個抽象目標，拆解成「使用者端轉移→營運端整合」的分階段落地策略，定義第一階段最小可行範圍（登入、看課、上課），並主導資料結構重構與跨系統上線風險控管。',
        en: "Break down the abstract 'merge the systems' goal into a phased 'migrate users first, then operations' strategy, define a minimum viable first phase (log in, view courses, attend class), and lead both the data restructuring and the cross-system launch risk plan.",
      },
      action: {
        zh: '第一階段不強制完成雙系統資料全整併，優先確保學生能無痛轉移；把家教「一人一班」的高度分散結構，重構為以年級為核心的班級模型，班級數從約 5000 收斂到 60，大幅降低整併後的系統負載風險；針對「身份自動轉換導致權限誤判」的問題，設計依功能情境判斷身份的白名單機制；主動盤點推版順序、前置條件與跨系統相依關係，整理成完整的上線檢核指引。',
        en: "Rather than force a full data merge in phase one, prioritized a painless migration path for students; restructured tutoring's highly fragmented 'one student, one class' model into a grade-based class structure, consolidating roughly 5,000 classes down to 60 and sharply cutting post-merge system load risk; designed a context-aware allowlist to fix a permission bug caused by automatic identity switching; and proactively mapped release sequencing, prerequisites, and cross-system dependencies into a full go-live checklist.",
      },
      result: {
        zh: '將模糊需求轉為可推進的執行計畫；班級數降幅約 98%，大幅降低系統整合的效能超載風險；家教會員可沿用既有帳號登入新系統，家長仍可跨系統追蹤學習狀況；第一階段整併順利上線，過程無重大系統異常或客訴，主管並將這份上線檢核機制回饋為專案成功落地的關鍵因素。',
        en: 'Turned a vague ask into an executable plan; the ~98% reduction in class count sharply lowered the post-merge overload risk; tutoring members kept their existing login on the new system, and parents could still track learning progress across both systems; phase one launched cleanly with no major incidents or complaints, and my manager cited the go-live checklist as the key factor behind the smooth rollout.',
      },
      reflection: {
        zh: '這是我擔任 PM 以來首次面對的大型系統整合專案，在目標不明確的情況下與團隊合力訂出首要目標、逐步建立落地方向。這段經驗讓我在後續進入母公司後，更有意識地把大型專案拆成分階段可落地的目標，並且不只釐清「要做什麼」，更對齊「為什麼要做」。',
        en: 'This was the first large-scale system integration I owned as a PM, and working through an unclear mandate with the team to establish first goals and a step-by-step path shaped how I approach every large project since — breaking it into phased, landable milestones, and aligning on "why" a piece of work matters, not just "what" it is.',
      },
    },
    metrics: [
      { value: { zh: '5000 → 60', en: '5,000 → 60' }, label: { zh: '班級結構收斂', en: 'classes consolidated' } },
      { value: { zh: '約 98%', en: '~98%' }, label: { zh: '班級數降幅', en: 'reduction in class count' } },
      { value: { zh: '8 個月', en: '8 months' }, label: { zh: '推進至第一階段上線', en: 'to phase-one launch' } },
    ],
    competencyIds: ['requirements', 'tech', 'risk', 'project-mgmt', 'ux'],
    highlights: [
      { zh: '首個大型跨系統整合專案', en: 'my first large cross-system integration' },
      { zh: '資料重構與來源統一化', en: 'data restructuring & source unification' },
      { zh: '高風險專案落地推進', en: 'high-risk launch, delivered cleanly' },
    ],
    summaryOnly: false,
    quote: {
      zh: '由功能規劃者，成長為具系統整合思維的 PM。',
      en: 'The project that grew me from a feature planner into a PM who thinks in systems.',
    },
  },
  {
    id: 'edu-service-integration',
    company: 'southone',
    companyLabel: { zh: '南一集團母公司【南一書局企業】', en: 'Nani (parent company)' },
    period: { zh: '2025.08 – 2026.01', en: '2025.08 – 2026.01' },
    title: {
      zh: '各大教用服務整合｜由公部門合規性反推服務定位',
      en: 'Cross-Product Login via the National EduCloud',
    },
    summary: {
      zh: '推動教育部教育雲帳號登入介接，在教育部規範不透明、公司內部行政流程分散的三重限制下持續推進。',
      en: "Drove integration with Taiwan's national EduCloud login — the education-sector equivalent of 'Sign in with Google' — navigating unclear ministry requirements and fragmented internal processes.",
    },
    star: {
      situation: {
        zh: '南一旗下多個教用產品（電子書、雲端出題等）逐步整合至會員中心作為統一入口，公司希望支援教育部「教育雲」帳號登入以降低使用門檻——教育雲帳號之於教育體系使用者，相當於 Google 帳號之於一般網路服務。',
        en: "Nani's teaching products (e-books, cloud test-authoring, etc.) were consolidating behind a single member center, and the company wanted to support login via Taiwan's national EduCloud account — the education-sector equivalent of 'Sign in with Google' for teachers and students.",
      },
      task: {
        zh: '作為跨組織溝通與推進的窗口，負責推動會員中心完成教育部「教育雲身份認證服務」介接，同時在教育部規範資訊不完整、公司內部行政流程不透明、系統架構與資安弱掃要求相衝突的三重限制下持續推進。',
        en: 'As the cross-organization point of contact, drove the member center through the ministry\'s EduCloud identity-verification integration — while navigating three simultaneous constraints: incomplete ministry guidance, opaque internal approval processes, and a conflict between the existing architecture and the required security scan standard.',
      },
      action: {
        zh: '主動向教育部承辦單位借閱過往通過案例，把申請文件改為分批送審，並在書信中用選項式提問取代開放式詢問，降低退件與延誤風險；協調公司內部用印流程，並協請工程團隊備妥測試環境與弱掃報告；因應教育部對「無償教育服務平台」定位的審查疑慮，與研發討論後實作「產品中心」模組，清楚呈現會員中心的產品整合入口定位；針對既有系統套件老舊、恐因弱掃修正影響重點功能的兩難，協議建立一個簡化版服務網站首頁，專用於通過弱掃驗證，同時降低未來每年重新提交報告的維護成本。',
        en: 'Proactively borrowed past approved case files from the ministry contact, split the application into staged submissions, and swapped open-ended questions for multiple-choice ones in correspondence to cut rejection and delay risk; coordinated the internal sign-off chain and had engineering prep a test environment and scan report; when the ministry questioned whether the member center qualified as a "free educational platform," worked with engineering to ship a "Product Center" module that made that positioning explicit; and, facing outdated legacy packages where a full security-scan fix risked breaking core functionality, agreed on a simplified stand-in homepage built specifically to pass the scan — which also lowered the cost of re-certifying every year going forward.',
      },
      result: {
        zh: '2025/09/18 通過教育部複審取得測試資料介接資格；2026/01/16 提交合規弱掃報告，取得正式資料介接資格；2026 年 2 月初完成南一服務的教育雲登入流程實作。',
        en: 'Passed the ministry\'s second-round review and earned test-integration approval on 2025-09-18; submitted a compliant security-scan report and earned full production approval on 2026-01-16; shipped the EduCloud login flow across Nani\'s services in early February 2026.',
      },
      reflection: {
        zh: '累積了第三方平台整合的風險管理能力，也強化了跨部門、跨組織之間的資訊轉譯能力——把教育部的條款轉譯給研發，把技術限制轉譯給教育部；同時也累積了把合規需求轉化為產品建設機會的經驗，藉審查壓力順勢規劃出「產品中心」模組。',
        en: 'Built real risk-management muscle for third-party platform integrations, and sharpened the ability to translate in both directions — ministry requirements into engineering terms, technical constraints into ministry-legible ones — while turning what could have been pure compliance overhead into an actual product feature, the "Product Center" module.',
      },
    },
    metrics: [
      { value: { zh: '6 服務', en: '6 services' }, label: { zh: '合規弱掃通過並取得介接資格', en: 'passed compliance scan & approved' } },
      { value: { zh: '5 個月', en: '5 months' }, label: { zh: '從送審到正式核准', en: 'from submission to full approval' } },
    ],
    competencyIds: ['stakeholder', 'tech', 'risk', 'project-mgmt'],
    highlights: [
      { zh: '公部門第三方服務整合', en: 'government third-party integration' },
      { zh: '技術與合規需求平衡', en: 'balancing engineering & compliance' },
      { zh: '跨產品入口整合', en: 'unified cross-product entry point' },
    ],
    summaryOnly: false,
    quote: {
      zh: '由公部門合規性反推，重新定義服務定位。',
      en: "Worked backward from a regulator's requirement to redefine what the product actually was.",
    },
  },
  {
    id: 'teacher-auth',
    company: 'southone',
    companyLabel: { zh: '南一集團母公司【南一書局企業】', en: 'Nani (parent company)' },
    period: { zh: '2025.09 – 2025.11', en: '2025.09 – 2025.11' },
    title: {
      zh: '教師身份驗證機制建構｜跨系統資料整合與驗證流程簡化',
      en: 'Teacher Identity Verification System',
    },
    summary: {
      zh: '建構「自動為主、人工為輔」的雙軌教師驗證機制，並釐清會員中心與業管系統之間的資料治理邊界。',
      en: 'Built an automatic-first, manual-fallback teacher verification system, and drew a clean data-ownership line between the member center and the internal sales-ops system.',
    },
    star: {
      situation: {
        zh: '為確保教用功能僅提供給真正的教師使用者，需以「在職學校」與「負責該校業務手機」建構白名單驗證機制。但驗證資料源來自既有業務管理系統而非會員系統，存在跨系統資料結構不一致、更新時間差，以及僑校等特殊學校資料缺漏等現實挑戰。',
        en: 'To keep teacher-only features restricted to verified teachers, the plan was an allowlist check against "current school" plus "the assigned sales rep\'s phone number" — but that data lived in the sales-ops system, not the member system, and came with mismatched schemas, sync lag, and gaps for edge cases like overseas Chinese schools.',
      },
      task: {
        zh: '規劃「自動為主、人工為輔」的雙軌驗證機制，兼顧驗證效率與例外資料彈性，同時釐清會員中心與業管系統間的資料關聯、主鍵與交換格式，劃分資料維護邊界，避免研發團隊承擔額外的重複維護成本。',
        en: 'Design an automatic-first, manual-fallback verification flow that stays fast for the common case while staying flexible for messy exceptions — and separately, pin down the data relationship, primary key, and exchange format between the two systems so engineering isn\'t stuck maintaining a duplicate database.',
      },
      action: {
        zh: '把教師註冊過程可能出現的資料狀態歸納為 4 種驗證情境，各自導向明確的自動或人工路徑；代表研發團隊向外部單位溝通，確立以「教育部學校代碼」作為跨系統比對主鍵，並定義標準 JSON 交換格式；堅持把資料維護責任留在源頭業管系統，避免研發重複開發維護 API；把原先橫跨會員中心、Zendesk、Teams 三個服務的人工驗證流程，收攏重構至單一 Microsoft Teams 平台運作。',
        en: 'Reduced the range of real-world teacher registration states into 4 clear scenarios, each routed to an automatic or manual path; represented engineering in talks with the external sales unit to fix on the Ministry of Education\'s school code as the cross-system matching key and define a standard JSON exchange format; insisted the source-of-truth for the data stay in the sales-ops system rather than have engineering build and maintain a duplicate API; and consolidated a manual-verification flow that originally spanned the member center, Zendesk, and Teams into a single Microsoft Teams workflow.',
      },
      result: {
        zh: '大多數教師能在註冊當下即完成自動驗證，例外情境自然轉入人工審核，維持高可用性與註冊完成率；確立跨系統資料治理邊界，研發團隊免於重複維護學校與業務資料庫的負擔；人工驗證作業集中於 Teams 一鍵審核，大幅簡化跨部門操作流程。',
        en: 'Most teachers now clear automatic verification at the moment of registration, with edge cases falling cleanly into manual review without breaking the completion rate; the data-ownership boundary held, sparing engineering a duplicate-database maintenance burden; and manual review now happens with one click inside Teams, sharply simplifying what used to be a cross-department chore.',
      },
      reflection: {
        zh: '初期未與工程團隊先對齊建立白名單所需的最小必要欄位，導致工程需額外花時間整理合併資料——這讓我理解到，跨系統資料介接前應先與工程對齊必要／非必要欄位，才能降低整理成本。這個案子也讓我建構起「系統整合維護成本」與「流程與資料驗證需求平衡點取捨」更深化的決策思維，是我成為系統規劃型 PM 的代表案例。',
        en: 'Not aligning with engineering up front on the minimum required fields cost real cleanup time later — the lesson being: agree on necessary vs. unnecessary fields with engineering before any cross-system data integration starts, not after. This case sharpened my thinking on integration maintenance cost versus verification-flow trade-offs, and it\'s the project I\'d point to as the moment I became a systems-minded PM.',
      },
    },
    metrics: [
      { value: { zh: '4 種情境', en: '4 scenarios' }, label: { zh: '涵蓋所有驗證路徑', en: 'covering every verification path' } },
      { value: { zh: '3 → 1 平台', en: '3 → 1 platform' }, label: { zh: '人工驗證流程收攏', en: 'manual review consolidated' } },
    ],
    competencyIds: ['stakeholder', 'tech', 'requirements', 'risk'],
    highlights: [
      { zh: '資料治理邊界釐清', en: 'clear data-ownership boundary' },
      { zh: '身份識別與資料對應設計', en: 'identity & data-mapping design' },
      { zh: '技術流程理解與轉譯溝通', en: 'technical translation across teams' },
    ],
    summaryOnly: false,
  },
  {
    id: 'member-auth-unification',
    company: 'southone',
    companyLabel: { zh: '南一集團母公司【南一書局企業】', en: 'Nani (parent company)' },
    period: { zh: '2025.11 – 2026.01', en: '2025.11 – 2026.01' },
    title: {
      zh: '會員身份驗證模式統一化｜跨系統登入整併與身份治理',
      en: 'Unified Identity & SSO Across the Platform',
    },
    summary: {
      zh: '從「重複登入」的體驗問題，回推到底層身份治理架構問題，導入 OIDC 建立跨服務 SSO。',
      en: 'Traced a "why do I keep logging in" UX complaint back to a missing identity architecture, and introduced OIDC-based single sign-on across every service.',
    },
    star: {
      situation: {
        zh: '公司內部多個教用服務（電子書、教學資源、雲端出題等）過去分散開發，登入與身份識別驗證邏輯各自獨立，且新舊會員資料庫並存，導致使用者需重複登入、甚至出現身份判斷錯誤。',
        en: "The company's teaching products — e-books, teaching-resource downloads, cloud test authoring — had each been built with their own login logic, and old and new member databases coexisted, so users kept hitting repeat logins and occasional identity mismatches.",
      },
      task: {
        zh: '推動身份治理架構與登入驗證流程統一化，導入 OIDC 機制，以會員中心作為統一入口，建立跨系統的單一登入（SSO）架構。',
        en: 'Drive a unified identity-governance architecture and login flow — adopt OIDC, make the member center the single entry point, and stand up true cross-system single sign-on.',
      },
      action: {
        zh: '主動研究 OIDC 運作邏輯，把個人理解繪製為流程圖，作為與工程討論、對齊進度的共同語言；推動由會員中心統一發放登入憑證，建立跨系統的身份對應機制，讓各服務用同一組憑證辨識同一使用者；逐步將各子系統的驗證邏輯，從分散改為統一走會員中心驗證。',
        en: "Studied OIDC on my own and turned my understanding into a flow diagram both engineering and non-technical stakeholders could discuss from; drove the member center to become the sole issuer of login credentials and the cross-system identity mapping layer, so every service recognizes the same user from the same credential; and migrated each subsystem's verification logic from standalone to routed-through-the-member-center.",
      },
      result: {
        zh: '改善跨系統登入體驗，減少重複登入與身份判讀錯誤情境；統一流程升級為可複用的平台能力，新服務可直接沿用登入驗證流程，無需重複設計開發，降低未來整合的重工維運成本。',
        en: 'Cross-system login got noticeably smoother, with far fewer repeat logins or identity mismatches; the unified flow became a reusable platform capability, so new services can plug straight into the existing login system instead of reinventing it — cutting the cost of every future integration.',
      },
      reflection: {
        zh: '這個過程讓我理解到，無法完成單一登入其實只是體驗層問題，關鍵在於身份來源不一致、識別與驗證標準尚未統一化。也讓我體會到：PM 不必懂技術細節，但必須理解架構邏輯，到能在技術與非技術之間做轉譯溝通的程度——這個案子讓我從單純做體驗優化，進一步提升到用架構與平台思維去解決問題。',
        en: "The project taught me that 'can't do SSO' is only ever a symptom — the real cause was inconsistent identity sources and no shared verification standard. I don't need to know the technical details, but I do need to understand the architecture well enough to translate it in both directions. It's the case that moved me from optimizing experience to solving problems with architecture and platform thinking.",
      },
    },
    metrics: [
      { value: { zh: '1 組憑證', en: '1 credential' }, label: { zh: '跨全服務單一登入', en: 'single sign-on across every service' } },
      { value: { zh: 'OIDC', en: 'OIDC' }, label: { zh: '自主研究並落地的協議', en: 'protocol I self-studied and shipped' } },
    ],
    competencyIds: ['tech', 'stakeholder', 'product-strategy'],
    highlights: [
      { zh: '平台架構可擴展性思維', en: 'platform-scale architectural thinking' },
      { zh: '身份識別與資料對應設計', en: 'identity & data-mapping design' },
      { zh: '陌生技術的自主學習', en: 'self-taught unfamiliar technology' },
    ],
    summaryOnly: false,
    quote: {
      zh: '這個專案讓我從單純做體驗優化，進一步提升到用架構與平台思維去解決問題。',
      en: 'The project that moved me from optimizing experience to solving problems with architecture and platform thinking.',
    },
  },
  {
    id: 'edu-cloud-integration',
    company: 'southone',
    companyLabel: { zh: '南一集團母公司【南一書局企業】', en: 'Nani (parent company)' },
    period: { zh: '2025.11 – 2026.01', en: '2025.11 – 2026.01' },
    title: {
      zh: '教育部雲端資料介接｜既有系統限制下推動平衡決策',
      en: 'National EduCloud Data Integration Under Legacy Constraints',
    },
    summary: {
      zh: '在合規、架構限制、系統穩定性之間找到折衷解法，避免了 6–8 個月級的高成本架構重構。',
      en: 'Found a middle path between compliance, legacy architecture, and stability — avoiding what would have been a 6–8 month rebuild.',
    },
    star: {
      situation: {
        zh: '申請教育部雲端資料介接前須提交高、中風險數皆為 0 的資安弱掃報告，但部分資安問題與既有系統架構、歷史技術選型緊密相關，全面修正需高成本重構，且可能影響既有服務穩定性。',
        en: "Getting approved for the ministry's cloud data integration required a security scan report with zero high- or medium-risk findings — but several of those findings traced straight back to the legacy architecture, and fixing them properly meant an expensive rebuild that risked destabilizing live services.",
      },
      task: {
        zh: '釐清弱掃問題的技術成因與修正可行性，整合外部審查要求與內部技術討論，協助管理層在合規、成本、風險間做決策，並推動 DevOps、資訊處、研發處跨部門協作落地。',
        en: 'Trace each scan finding to its technical root cause and feasible fix, reconcile the external compliance requirement with internal engineering constraints, help leadership decide across compliance/cost/risk, and land the fix through DevOps, IT, and engineering.',
      },
      action: {
        zh: '把弱掃問題拆解為「可直接修正」與「受限於架構、難以修正」兩類，逐一評估成本與風險；對教育部爭取審查彈性，對管理層說明方案優劣的技術轉譯；最終推動「UA（User Agent）分流機制」的折衷解法——系統偵測到弱掃機器人時，導向架構單純無風險的簡化頁面；協調 DevOps、前端、資訊處完成部署，並在上線後即時處理 CSP 白名單未完整盤點導致的多項跨服務異常。',
        en: 'Split the findings into "directly fixable" and "architecture-constrained," costing and risk-rating each; negotiated review flexibility with the ministry while translating the trade-offs for leadership; landed on a User-Agent-routing workaround — when the scanner is detected, it\'s served a minimal, architecturally clean page instead of the real site — coordinated DevOps, frontend, and IT through deployment, and triaged the cross-service breakage that surfaced afterward from an incomplete CSP allowlist.',
      },
      result: {
        zh: '避免投入 6–8 個月級的高成本架構重構；成功產出高、中風險皆為 0 的合規弱掃報告，取得教育雲正式資料介接權限；建立起跨服務的風險控管與協作機制，例如先在本地端 Release 環境讓 QA 測試、於寒假離峰期發布降低影響範圍。',
        en: 'Avoided a 6–8 month, high-cost architecture rebuild entirely; delivered a compliant zero-high/medium-risk scan report and won full production access to the EduCloud integration; and stood up a cross-service risk process along the way — QA testing on a local release environment first, and shipping during the winter-break low-traffic window to limit blast radius.',
      },
      reflection: {
        zh: '這個案子讓我更重視技術調整前的風險揭露與責任界定，不歸咎單一成員，而是視為跨服務共同承擔；也讓我更確定 PM 存在的價值在於補位溝通斷點、適度爭取團隊權益。長期維運上，我們也改用低維護成本方式支撐合規需求——UA 分流的週期性開關機制，而不是一次性大改。',
        en: "This project sharpened how seriously I take risk disclosure before any technical change — treating it as a shared responsibility across services, not any one person's fault — and reinforced that a PM's real value is closing communication gaps and advocating for the team. Long-term, we also chose a low-maintenance way to sustain compliance — a togglable UA-routing rule instead of a one-time architectural overhaul.",
      },
    },
    metrics: [
      { value: { zh: '3', en: '3' }, label: { zh: '建議解決方案', en: 'proposed solutions' } },
      { value: { zh: '省下 6–8 個月', en: '6–8 months saved' }, label: { zh: '避免的架構重構工期', en: 'of avoided architecture rebuild' } },
    ],
    competencyIds: ['stakeholder', 'tech', 'risk', 'product-strategy'],
    highlights: [
      { zh: '技術轉譯後協助管理層決策', en: 'technical translation that unblocked a leadership decision' },
      { zh: '低維護成本的長期合規方案', en: 'a low-maintenance, durable compliance fix' },
      { zh: '跨服務風險共同承擔機制', en: 'shared cross-service risk process' },
    ],
    summaryOnly: false,
    quote: {
      zh: '在不完全理想的技術條件下，協助團隊做出可行且可維運的決策。',
      en: 'Helping a team make a workable, maintainable call under technical conditions that were never going to be ideal.',
    },
  },
]
