import { Section } from "../layout/Section";
import { profile } from "../../app/data/profile";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-zinc-200 p-6 text-sm dark:border-zinc-800">
        <p className="text-zinc-600 dark:text-zinc-300">
          채용/협업 관련 연락은 이메일로 부탁드립니다.
        </p>
        <div className="mt-4 space-y-2">
          <p>• Email: {profile.contact.email}</p>
          <p>
            • GitHub:{" "}
            <a className="underline" href={profile.contact.github} target="_blank" rel="noreferrer">
              {profile.contact.github}
            </a>
          </p>
          <p>
            • Blog:{" "}
            <a className="underline" href={profile.contact.blog} target="_blank" rel="noreferrer">
              {profile.contact.blog}
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
