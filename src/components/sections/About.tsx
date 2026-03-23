import { Section } from "../layout/Section";
import { forwardRef } from "react";
import { Container } from "../layout/Container";
import { profile } from "../../app/data/profile";

export const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section id="about" title="About Me" ref={ref}>
      <Container>

        <div className="space-y-12">

          {/* About Me */}
          <div className="max-w-5xl">
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
              {profile.about}
            </p>
          </div>

          {/* 3컬럼 */}
          <div className="grid md:grid-cols-3 gap-12">

            {/* 교육 */}
            <div>
              <p className="mb-3 text-lg font-semibold">교육</p>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-300">
                {profile.education.map((edu) => (
                  <li key={edu.name}>
                    <div className="font-medium text-zinc-900 dark:text-white">
                      • {edu.name} ({edu.result})
                    </div>
                    <div className="text-sm text-zinc-500">
                      {edu.period}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 자격증 */}
            <div>
              <p className="mb-3 text-lg font-semibold">자격증</p>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-300">
                {profile.certificates.map((cert) => (
                  <li key={cert.name}>
                    <div className="font-medium text-zinc-900 dark:text-white">
                      • {cert.name}
                    </div>
                    <div className="text-sm text-zinc-500">
                      {cert.date}
                    </div>
                  </li>
                ))}
              </ul>

              {/* 어학 */}
              <p className="mt-8 mb-3 text-lg font-semibold">어학</p>
              <ul className="space-y-4 text-zinc-600 dark:text-zinc-300">
                {profile.languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="font-medium text-zinc-900 dark:text-white">
                      • {lang.name}
                    </div>
                    <div className="text-sm text-zinc-500">
                      {lang.level}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 기술 스택 추가 */}
            <div>
              <p className="mb-3 text-lg font-semibold">Frontend</p>

              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                {profile.skills.frontend.map((skill) => (
                  <li key={skill} className="font-medium">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 키워드 */}
          {/* <div className="flex flex-wrap gap-6 justify-center">
            {profile.keywords.map((keyword) => (
              <span
                key={keyword}
                className="text-xl font-semibold text-zinc-400 hover:text-white transition"
              >
                #{keyword}
              </span>
            ))}
          </div> */}

        </div>

      </Container>
    </Section>
  );
});

