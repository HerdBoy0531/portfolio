export type Project = {
  id: "samsung" | "yeshadoop" | "yolo";
  title: string;
  subtitle: string;
  period?: string;
  thumbnail?: string; // public/ 에 이미지 넣고 "/thumb.png" 형태로
  stack: string[];
  role: string[];
  links: { github?: string; demo?: string; docs?: string };
  summary: string[];
  details: {
    problem: string[];
    solution: string[];
    features: string[];
    trouble: { title: string; what: string; how: string; result: string }[];
    takeaways: string[];
  };
};

export const projects: Project[] = [
  {
    id: "samsung",
    title: "Samsung 연계 프로젝트",
    subtitle: "기업 연계 기반 협업 프로젝트",
    period: "YYYY.MM - YYYY.MM",
    thumbnail: "/thumb-samsung.png",
    stack: ["React", "TypeScript", "Tailwind", "REST API"],
    role: ["프론트엔드 개발", "UI 구현", "API 연동", "상태 관리"],
    links: { github: "https://github.com/yourid/samsung-project" },
    summary: [
      "요구사항 기반 UI 설계 및 구현",
      "핵심 기능 00, 00, 00 담당",
    ],
    details: {
      problem: ["요구사항 변경이 잦아 UI/상태 변경 비용이 컸음"],
      solution: ["컴포넌트 분리 + 상태 단일화로 변경 비용 최소화"],
      features: ["기능 A", "기능 B", "기능 C"],
      trouble: [
        {
          title: "요구사항 변경 대응",
          what: "화면/상태가 강결합이라 수정 범위가 넓어짐",
          how: "UI/도메인 상태 분리, 공통 컴포넌트화",
          result: "변경 대응 시간 단축, QA 이슈 감소",
        },
      ],
      takeaways: ["협업 커뮤니케이션/이슈 관리 방식 개선"],
    },
  },
  {
    id: "yeshadoop",
    title: "YesHadoop",
    subtitle: "TPO 기반 AI 옷 추천 서비스",
    period: "YYYY.MM - YYYY.MM",
    thumbnail: "/thumb-yeshadoop.png",
    stack: ["React", "TypeScript", "Zustand", "AI Recommendation"],
    role: ["추천 결과 UI/UX", "상태 관리", "검색/필터"],
    links: { github: "https://github.com/yourid/yeshadoop" },
    summary: [
      "TPO 입력 → 추천 결과 제공",
      "추천 결과를 사용자 관점으로 시각화",
    ],
    details: {
      problem: ["추천 결과 신뢰도를 UI에서 설득해야 함"],
      solution: ["근거(조건/태그) 노출 + 피드백 루프 설계"],
      features: ["TPO 입력", "추천 리스트/상세", "피드백(좋아요/싫어요)"],
      trouble: [],
      takeaways: ["추천 서비스는 ‘설명 가능한 UI’가 신뢰에 중요"],
    },
  },
  {
    id: "yolo",
    title: "YOLO BringIt",
    subtitle: "실시간 화상채팅 게임 (WebRTC)",
    period: "YYYY.MM - YYYY.MM",
    thumbnail: "/thumb-yolo.png",
    stack: ["React", "TypeScript", "WebRTC", "SockJS/STOMP", "Zustand"],
    role: ["WebRTC UI", "실시간 상태 동기화", "로비/매칭 화면"],
    links: { github: "https://github.com/yourid/yolo-bringit" },
    summary: [
      "WebRTC 기반 다자/실시간 상호작용",
      "로비/친구/채팅 상태를 전역 관리로 안정화",
    ],
    details: {
      problem: ["실시간 연결/상태 변화가 많아 UI가 쉽게 깨짐"],
      solution: ["상태 모델링 + 이벤트 흐름 정리 + 재연결 전략"],
      features: ["로비", "친구 시스템", "실시간 채팅", "화상/음성 토글"],
      trouble: [
        {
          title: "STOMP 연결 실패/무한 렌더링",
          what: "useEffect 의존성/상태 업데이트로 재연결 루프 발생",
          how: "클라이언트 생명주기 분리, ref로 client 보관, 핸들러 안정화",
          result: "연결 안정화 및 메시지 누락 감소",
        },
      ],
      takeaways: ["실시간 서비스는 상태/이벤트 설계가 성능과 UX를 좌우"],
    },
  },
];
