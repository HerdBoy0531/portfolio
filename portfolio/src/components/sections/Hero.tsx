import { Container } from "../layout/Container";
import { profile } from "../../app/data/profile";

export function Hero() {
  return (
    <section id="top" className="py-16 sm:py-20">
      <Container>
        <div className="space-y-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">{profile.role}</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {profile.oneLiner}
          </h1>
          <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
            React · TypeScript · 상태 관리 · 실시간 서비스(WebRTC/WebSocket)
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="rounded-lg border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              href="#projects"
            >
              Projects 보기
            </a>
            <a
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-zinc-900"
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
