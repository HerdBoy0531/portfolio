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
    title: "ST-Hub (삼성전자 기업 연계 프로젝트)",
    subtitle: "AI 기반 이력서 자동 등록 및 인재 추천 서비스",
    period: "2025.10 - 2025.12",
    thumbnail: "/thumb-samsung.png",
    stack: ["Vue.js", "TypeScript", "Tailwind", "Pinia", "REST API"],
    role: ["Project Leader", "Frontend 개발", "UI/UX 설계", "API 연동"],
    links: { github: "https://github.com/yourid/samsung-project" },

    summary: [
      "AI 인재 추천 탭 UI 설계 및 구현",
      "LLM 응답 Parsing 및 추천 결과 정렬 로직 개발",
      "추천 탭 전용 Skeleton UI 및 Pinia 기반 전역 상태 관리",
      "Polling 기반 AI 연산 단계 실시간 표시 시스템 구축"
    ],

    details: {
      problem: [
        "AI 응답 시간이 길어 사용자 대기 경험이 불명확함",
        "LLM 응답이 비정형 텍스트 형태로 제공되어 화면 일관성 유지가 어려움",
        "요구사항 변경이 잦아 UI 및 상태 수정 비용이 큼"
      ],

      solution: [
        "추천 탭 전용 로딩 UI와 상태 기반 화면 전환으로 UX 개선",
        "LLM 응답 Parsing 및 정렬 규칙을 정의해 일관된 추천 결과 제공",
        "컴포넌트 분리 및 상태 단일화로 변경 비용 최소화"
      ],

      features: [
        "AI 인재 추천 탭 UI 설계 및 구현",
        "추천 결과 비교가 쉬운 카드형 UI 및 상태 기반 뷰 전환 로직 적용",
        "LLM 비정형 텍스트 Parsing → 구조화(JSON) 처리",
        "추천 기준 기반 정렬 로직 설계",
        "추천 탭 영역에 한정된 Skeleton UI 로딩 경험 구현",
        "Pinia 기반 전역 상태로 AI 연산 진행 상태 제어",
        "Polling 방식으로 AI 처리 단계(대기 → 분석 → 결과 생성) 실시간 표시",
        "오류 발생 시에도 polling 유지하여 사용자 중단 최소화"
      ],

      trouble: [
        {
          title: "잦은 요구사항 변경 대응",
          what: "화면과 상태가 강결합되어 수정 범위가 커지는 문제",
          how: "UI 컴포넌트 분리 및 도메인 상태 단일화",
          result: "변경 대응 시간 단축 및 QA 이슈 감소"
        }
      ],

      takeaways: [
        "AI 기능을 실제 사용자 경험으로 연결하는 UI 설계 경험",
        "LLM 응답을 서비스에 맞게 구조화하는 데이터 가공 경험",
        "팀 리딩 및 협업 커뮤니케이션 역량 강화",
        "기존 코드 개선 및 확장 가능한 구조 설계 경험"
      ]
    }
  },
  {
    id: "yeshadoop",
    title: "오늘의 큐레이션",
    subtitle: "LangChain & AI Agent 기반 TPO 옷 추천 서비스",
    period: "2025.08 - 2025.10",
    thumbnail: "/thumb-curation.png",
    stack: ["React", "TypeScript", "Zustand", "Tailwind", "LangChain", "AI Agent"],
    role: ["Project Leader", "Frontend 개발", "UI/UX 구현", "AI 기능 연동"],
    links: { github: "https://github.com/yourid/today-curation" },

    summary: [
      "AI 기반 옷 착장(Try-On) UI 및 외부 API 연동",
      "AI 추천 결과 챗 인터페이스 및 스트리밍 렌더링 구현",
      "이미지 업로드/처리/최적화 전반 구조 설계",
      "서비스 운영 환경 이슈 해결 및 유지보수"
    ],

    details: {
      problem: [
        "AI 연산 결과 반영 시 전체 페이지 리로드로 UX 저하",
        "이미지 업로드/처리 과정에서 브라우저 및 렌더링 불안정",
        "AI 응답 지연으로 사용자 체감 대기 시간 증가",
        "운영 환경(AWS/Docker/TS) 이슈로 배포 안정성 저하"
      ],

      solution: [
        "Try-On 영역 부분 업데이트 구조로 개선하여 UX 향상",
        "이미지 처리 파이프라인 정비 및 즉시 반영 구조 구현",
        "AI 응답 스트리밍 렌더링으로 자연스러운 대화 경험 제공",
        "운영 환경 설정 및 타입 이슈 정비로 서비스 안정화"
      ],

      features: [
        "AI 기반 옷 착장(Try-On) UI 구현",
        "외부 Try-On Model API 연동 및 의상 적용 로직 개발",
        "이미지 파일 업로드 / URL 입력 방식 모두 지원",
        "전체 페이지 리로드 → 부분 업데이트 방식으로 UX 개선",
        "AI 추천 결과 챗 UI 및 추천 모달 연동",
        "AI 응답 스트리밍 렌더링 처리(한 글자씩 출력)",
        "추천 UI 텍스트 및 시각적 표현 개선",
        "이미지 디코더 적용으로 브라우저 파일 처리 안정화",
        "이미지 압축 및 업로드 즉시 반영 구조 구현",
        "모델/프로필 이미지 리렌더링 오류 수정",
        "Chat UI 스타일 깨짐 및 추천 모달 데이터 렌더링 오류 해결",
        "AWS S3 이미지 CORS 에러 해결",
        "Docker 환경변수(DB_HOST) 적용 및 빌드 환경 대응",
        "NodeJS.Timeout 타입 오류 해결로 TypeScript 환경 안정화"
      ],

      trouble: [
        {
          title: "AI 착장 결과 반영 시 UX 저하",
          what: "착장 결과 적용 시 전체 페이지가 새로고침되는 구조",
          how: "Try-On 영역 단위 상태 관리 및 부분 렌더링 구조로 개선",
          result: "착장 반영 속도 체감 개선 및 사용자 이탈 감소"
        },
        {
          title: "이미지 업로드 후 반영 지연 문제",
          what: "모델/프로필 이미지 업로드 후 즉시 반영되지 않음",
          how: "이미지 경로 상태 관리 개선 및 리렌더링 트리거 정비",
          result: "업로드 즉시 화면 반영으로 사용성 개선"
        }
      ],

      takeaways: [
        "AI 모델 결과를 실제 사용자 경험으로 연결하는 프론트엔드 설계 경험",
        "스트리밍 UI 및 비동기 렌더링 처리 경험",
        "이미지 처리 및 최적화 전반에 대한 이해도 향상",
        "운영 환경(AWS/Docker/TypeScript) 문제 해결 경험",
        "프로젝트 리딩 및 기능 품질 관리 경험"
      ]
    }
  },
  {
    id: "yolo",
    title: "YOLO Bring It",
    subtitle: "WebRTC 기반 실시간 멀티플레이어 게임 플랫폼",
    period: "2025.07 - 2025.08",
    thumbnail: "/thumb-yolo.png",
    stack: [
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind",
      "WebRTC",
      "WebSocket(STOMP)",
      "Three.js",
      "Blender",
      "Generative AI"
    ],
    role: [
      "Frontend Leader",
      "실시간 통신 구조 설계",
      "게임 UI 아키텍처 설계"
    ],
    links: { github: "https://github.com/yourid/yolo-bring-it" },

    summary: [
      "WebRTC 기반 실시간 멀티플레이어 게임 플랫폼 프론트엔드 설계 및 구현",
      "Lobby부터 Result까지 전체 게임 흐름 UI 및 상태 구조 설계",
      "WebSocket 기반 실시간 채팅 및 친구 시스템 구축",
      "3D 캐릭터 렌더링 최적화 및 로딩 성능 개선"
    ],

    details: {
      problem: [
        "게임 상태(Lobby / 대기 / 플레이 / 결과)가 복잡하게 전환되며 상태 관리 난이도 증가",
        "실시간 통신(WebRTC, WebSocket)과 UI 상태 간 동기화 필요",
        "3D 캐릭터 렌더링으로 인한 초기 로딩 시간 증가",
        "다양한 기능(상점, 친구, 업적 등)으로 프론트 구조 복잡도 상승"
      ],

      solution: [
        "게임 단계별 화면 흐름을 명확히 분리하고 전역 상태로 단일 관리",
        "실시간 통신 이벤트와 UI 상태를 연결하는 구조 설계",
        "3D 리소스 최적화 및 Lazy Loading 전략으로 렌더링 성능 개선",
        "공통 UI 컴포넌트 및 도메인 단위 분리로 유지보수성 확보"
      ],

      features: [
        "Lobby → WaitingRoom → GameScreen → Result 전체 게임 플로우 UI 설계 및 구현",
        "랜딩 페이지 및 메인 페이지 UI/UX 구현",
        "상점, 보관함, 업적 시스템 UI 및 상태 관리",
        "친구 추가 / 목록 / 상태 표시 기능 구현",
        "WebSocket(STOMP) 기반 1:1 실시간 채팅 기능 개발",
        "WebRTC 기반 멀티플레이어 게임 통신 구조 연동",
        "생성형 AI + Blender를 활용한 3D 캐릭터 18종 제작",
        "Three.js 기반 캐릭터 렌더링 및 씬 구성",
        "폴리곤 수 최적화 및 텍스처 경량화",
        "Lazy Loading(Lazy Landing) 기법 적용",
        "초기 렌더링 시간 5초 → 2초로 단축"
      ],

      trouble: [
        {
          title: "복잡한 게임 상태 전환 관리",
          what: "게임 단계가 많아 화면 전환 및 상태 동기화 오류 발생",
          how: "게임 단계별 상태를 Zustand 전역 스토어로 단일화",
          result: "상태 전환 오류 감소 및 UI 흐름 안정화"
        },
        {
          title: "3D 캐릭터 로딩 성능 문제",
          what: "초기 진입 시 3D 리소스 로딩으로 대기 시간 증가",
          how: "폴리곤 최적화 + Lazy Loading 전략 적용",
          result: "초기 로딩 시간 약 60% 이상 단축"
        }
      ],

      takeaways: [
        "실시간 서비스(WebRTC/WebSocket) 프론트엔드 구조 설계 경험",
        "복잡한 상태 전환을 가진 서비스의 상태 관리 노하우",
        "3D 렌더링 성능 최적화 및 사용자 체감 성능 개선 경험",
        "대규모 UI 기능을 가진 프로젝트에서의 프론트엔드 리더 경험",
        "팀 내 기술 의사결정 및 구조 설계 주도 경험"
      ]
    }
  },

];
