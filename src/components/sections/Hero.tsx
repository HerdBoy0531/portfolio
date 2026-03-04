import { Container } from "../layout/Container";
import { profile } from "../../app/data/profile";
import { logos } from "../../assets/logos/";

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

        <div className="mt-16 flex justify-center gap-8">
          <a
            href={`mailto:${profile.contact.email}`}
            className="group transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logos.gmail}
              alt="GitHub"
              className="h-[30px] w-[30px] text-zinc-500 transition-colors group-hover:text-black dark:group-hover:text-white"
            />
          </a>

          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logos.github}
              alt="GitHub"
              className="h-[30px] w-[30px] text-zinc-500 transition-colors group-hover:text-black dark:group-hover:text-white dark:invert"
            />
          </a>

          <a
            href={profile.contact.blog}
            target="_blank"
            rel="noreferrer"
            className="group transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logos.tistory}
              alt="GitHub"
              className="h-[29px] w-[25px] text-zinc-500 transition-colors group-hover:text-black dark:group-hover:text-white"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
