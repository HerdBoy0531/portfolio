import { Section } from "../layout/Section";
import { profile } from "../../app/data/profile";

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
      <p className="mb-2 text-sm font-medium">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((x) => (
          <span
            key={x}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            <span className="font-medium text-zinc-900 dark:text-white">{profile.name}</span>
          </p>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li>• Email: {profile.contact.email}</li>
            <li>
              • GitHub:{" "}
              <a className="underline" href={profile.contact.github} target="_blank" rel="noreferrer">
                {profile.contact.github}
              </a>
            </li>
            <li>
              • Blog:{" "}
              <a className="underline" href={profile.contact.blog} target="_blank" rel="noreferrer">
                {profile.contact.blog}
              </a>
            </li>
          </ul>

          <div className="pt-2">
            <p className="mb-2 text-sm font-medium">Background</p>
            <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
              {profile.background.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-3">
          <SkillBlock title="Frontend" items={profile.skills.frontend} />
          <SkillBlock title="State / Data" items={profile.skills.state} />
          <SkillBlock title="Realtime" items={profile.skills.realtime} />
          <SkillBlock title="Backend / Tools" items={[...profile.skills.backend, ...profile.skills.tools]} />
        </div>
      </div>
    </Section>
  );
}
