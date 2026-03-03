import { useState } from "react";
import { Container } from "../layout/Container";
import { skillsData } from "../../app/data/skillsData";
import { Section } from "../layout/Section";

const categories = Object.keys(skillsData);

const categoryColors: Record<string, string> = {
  Core: "bg-blue-600",
  "State & Architecture": "bg-emerald-600",
  "Real-time & Async": "bg-purple-600",
  Performance: "bg-orange-500",
  "Styling & UX": "bg-pink-600",
};

export function Skills() {
  const [active, setActive] = useState(categories[0]);
  const skills = skillsData[active as keyof typeof skillsData];

  return (
    <Section id="skills" title="Skills">
      <Container>

        {/* 탭 */}
        <div className="flex flex-wrap justify-center gap-4 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-xl font-medium transition-colors ${
                active === cat
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 카드 리스트 */}
        <div className="mt-10 space-y-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-zinc-200 p-5 shadow-sm hover:shadow-md transition dark:border-zinc-800"
            >
              {/* 상단 */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-xl font-semibold">
                  {skill.name}
                </p>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`h-3.5 w-6 rounded-full ${
                        i <= skill.level
                          ? categoryColors[active]
                          : "bg-zinc-300 dark:bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 하단 */}
              <div className="flex items-center gap-4">
                {skill.logo ? (
                  <img src={skill.logo} className="w-12 h-12 object-contain" />
                ) : skill.icon ? (
                  <skill.icon className="w-12 h-12 text-zinc-600 dark:text-zinc-300" />
                ) : null}


                <div className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                    {skill.descriptions.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}