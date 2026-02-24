import { Container } from "../layout/Container";
import { Mail, Github, PenTool } from "lucide-react";
import { profile } from "../../app/data/profile";

export function Hero() {
  return (
    <section className="py-32">
      <Container>
        <div className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight space-y-9 ">
          <div className="text-center">
            사용자의 경험과 성능을 기준으로
          </div>
          <div className="text-center">
            기술을 선택하는 프론트엔드 개발자
          </div>
        </div>

        {/* 🔥 중앙 아이콘 영역 */}
        <div className="mt-16 flex justify-center gap-8">
          <a
            href={`mailto:${profile.contact.email}`}
            className="group transition-transform duration-300 hover:scale-110"
          >
            <Mail
              size={28}
              className="text-zinc-500 transition-colors group-hover:text-black dark:group-hover:text-white"
            />
          </a>

          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <Github
              size={28}
              className="text-zinc-500 transition-colors group-hover:text-black dark:group-hover:text-white"
            />
          </a>

          <a
            href={profile.contact.blog}
            target="_blank"
            rel="noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <PenTool
              size={28}
              className="text-zinc-500 transition-colors group-hover:text-black dark:group-hover:text-white"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
