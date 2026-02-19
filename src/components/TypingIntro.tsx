import { useEffect, useState } from "react";

type Props = {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
  startDelay?: number;
  className?: string;
  onComplete?: () => void;
};

export default function TypingIntro({
  lines,
  typingSpeed = 70,
  lineDelay = 100,
  startDelay = 300,
  className = "",
  onComplete,
}: Props) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      if (!done) {
        setDone(true);
        onComplete?.();
      }
      return;
    }

    const line = lines[currentLine];

    if (currentText.length < line.length) {
      const t = setTimeout(() => {
        setCurrentText(line.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentText("");
      }, lineDelay);
      return () => clearTimeout(t);
    }
  }, [
    currentText,
    currentLine,
    lines,
    typingSpeed,
    lineDelay,
    done,
    onComplete,
  ]);

  return (
    <div className={`${className} space-y-6`}>
      {lines.map((_, i) => (
        <div key={i}>
          {i < currentLine && lines[i]}
          {i === currentLine && currentText}
        </div>
      ))}
    </div>
  );
}
