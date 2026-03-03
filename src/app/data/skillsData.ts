import {logos} from "../../assets/logos/";
import type { ComponentType } from "react";
import {
  Link,
  LayoutGrid,
  Zap,
  RefreshCcw,
  Database,
  Monitor,
  MonitorSmartphone,
} from "lucide-react";

export type Skill = {
  name: string;
  level: number;
  logo?: string;
  icon?: ComponentType<{className?: string}>;
  descriptions: string[];
}

export const skillsData: Record<string, Skill[]> = {
  Core: [
    {
      name: "React",
      level: 3,
      logo: logos.react,
      descriptions: [
        "Hooks 기반 컴포넌트 설계 및 상태 흐름 관리",
        "실시간 기능(WebRTC/채팅 UI) 중심의 인터랙티브 화면 구성 경험",
        "재사용 가능한 UI 컴포넌트 구조로 확장/유지보수 고려",
      ],
    },
    {
      name: "Vue.js",
      level: 3,
      logo: logos.vuejs,
      descriptions: [
        "레거시 코드베이스 기반 유지보수 및 기능 확장 경험",
        "기존 구조 분석 후 버그 수정/리팩토링 및 품질 개선",
        "React 중심 개발과의 차이를 이해하고 협업/전환 관점 보유",
      ],
    },
    {
      name: "TypeScript",
      level: 2,
      logo: logos.typescript,
      descriptions: [
        "전역 상태/도메인 모델 타입 설계 및 인터페이스 정의",
        "API 응답 타입 기반의 안정적인 데이터 처리",
        "확장 가능한 타입 구조로 유지보수성 강화",
      ],
    },
    {
      name: "JavaScript (ES6+)",
      level: 3,
      logo: logos.javascript,
      descriptions: [
        "비동기 처리(Promise, async/await) 및 예외 처리 경험",
        "클로저/스코프/실행 컨텍스트 등 핵심 개념 이해",
        "ES6+ 문법을 활용한 깔끔한 코드 작성 및 리팩토링",
      ],
    },
  ],

  "State & Architecture": [
    {
      name: "Zustand",
      level: 2,
      logo: logos.zustand,
      descriptions: [
        "도메인 단위 store 분리로 전역 상태 구조 설계",
        "상태 변경에 따른 렌더링 영향 고려 및 선택적 구독 활용",
        "인증/친구/채팅 등 복합 상태를 일관된 흐름으로 관리",
      ],
    },
    {
      name: "Custom Hooks",
      level: 2,
      icon: Link,
      descriptions: [
        "비즈니스 로직과 UI 로직 분리로 재사용성 확보",
        "비동기 로딩/에러/로딩 상태를 공통 패턴으로 구성",
        "컴포넌트 의존성 최소화 및 테스트 가능한 구조 지향",
      ],
    },
    {
      name: "Component Architecture",
      level: 2,
      icon: LayoutGrid,
      descriptions: [
        "Container/Presentational 분리로 책임을 명확히 설계",
        "공통 카드/버튼 등 디자인 시스템 형태로 컴포넌트화",
        "Props 구조 최적화 및 데이터 흐름 단순화 경험",
      ],
    },
  ],

  "Real-time & Async": [
    {
      name: "WebRTC",
      level: 2,
      logo: logos.webrtc,
      descriptions: [
        "MediaStream 제어 및 카메라/마이크 토글 처리",
        "PeerConnection 기반 실시간 송수신 흐름 구현 경험",
        "실시간 화면 중심 UI 구성에서 상태/이벤트 흐름 관리",
      ],
    },
    {
      name: "WebSocket (SockJS + STOMP)",
      level: 2,
      logo: logos.websocket,
      descriptions: [
        "구독/발행(pub/sub) 구조로 실시간 채팅 기능 구현",
        "JWT 기반 인증 헤더 처리 및 연결/재연결 이슈 디버깅",
        "메시지 히스토리 로딩 + 실시간 수신 UI 동기화 경험",
      ],
    },
    {
      name: "Async Handling",
      level: 2,
      icon: Zap,
      descriptions: [
        "요청 흐름(로딩/성공/실패) 관리 및 사용자 피드백 처리",
        "경쟁 상태(race condition) 방지 및 상태 일관성 고려",
        "네트워크 오류/재시도/타임아웃 등 예외 상황 대응",
      ],
    },
  ],

  Performance: [
    {
      name: "React Rendering",
      level: 3,
      icon: RefreshCcw,
      descriptions: [
        "상태 변경 → 렌더링 영향 범위를 분석하고 개선",
        "컴포넌트 분리/메모 전략으로 리렌더링 최소화",
        "렌더링 병목을 찾기 위한 구조적 디버깅 경험",
      ],
    },
    {
      name: "Memoization",
      level: 2,
      icon: Database,
      descriptions: [
        "useMemo/useCallback 적용 기준을 세워 관리",
        "참조 동일성 유지로 자식 컴포넌트 리렌더 방지",
        "과한 최적화 방지(측정 기반 적용) 관점 보유",
      ],
    },
    {
      name: "Browser Rendering",
      level: 2,
      icon: Monitor,
      descriptions: [
        "Layout/Paint/Composite 단계와 비용 개념 이해",
        "애니메이션/레이아웃 변화가 성능에 미치는 영향 고려",
        "UI 변경을 ‘덜 비싼 변경’으로 유도하는 설계 지향",
      ],
    },
  ],

  "Styling & UX": [
    {
      name: "TailwindCSS",
      level: 3,
      logo: logos.tailwind,
      descriptions: [
        "Utility-first 방식으로 빠른 UI 구현 및 일관성 유지",
        "반응형 레이아웃 설계 및 컴포넌트 스타일 표준화",
        "UI 밀도/여백/타이포 등 시각적 완성도 개선 경험",
      ],
    },
    {
      name: "Framer Motion",
      level: 2,
      logo: logos.framer,
      descriptions: [
        "탭/모달/전환 애니메이션으로 인터랙션 개선",
        "레이아웃 이동 최소화하며 자연스러운 모션 적용",
        "UX 목적(주의 유도/피드백) 중심으로 모션 설계",
      ],
    },
    {
      name: "Responsive Design",
      level: 2,
      icon: MonitorSmartphone,
      descriptions: [
        "모바일/데스크탑 레이아웃 대응 및 컴포넌트 재배치 설계",
        "유동적인 너비/높이에서 깨짐 방지(UI 안정성) 고려",
        "반응형 타이포/그리드로 가독성 유지",
      ],
    },
  ],
};