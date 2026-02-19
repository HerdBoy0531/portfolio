import { useState } from "react";
import { Container } from "../layout/Container";
import TypingIntro from "../TypingIntro";

export function Intro({ onFinish }: { onFinish?: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleTypingComplete = () => {
    setFadeOut(true);

    setTimeout(() => {
      onFinish?.();
    }, 800);
  };

  return (
    <section
      className={`h-dvh flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Container>
        <div className="space-y-6 text-center">
          <TypingIntro
            lines={[
              "안녕하세요.",
              "프론트엔드 개발자",
              "문승현입니다."
            ]}
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            onComplete={handleTypingComplete}
          />
        </div>
      </Container>
    </section>
  );
}
