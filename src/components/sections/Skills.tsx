import { useState } from "react";
import { Container } from "../layout/Container";
import { skillsData } from "../../app/data/profile";
import { Section } from "../layout/Section";

const categories = Object.keys(skillsData);

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-600",
  Backend: "bg-green-600",
  Language: "bg-purple-600",
  DataBase: "bg-yellow-500",
  AI: "bg-pink-600",
};

export function Skills() {
  const [active, setActive] = useState(categories[0]);
  const skills = skillsData[active as keyof typeof skillsData];

  return (
    <Section id="skills" title="Skills">
      <Container>

        {/* 🔥 상단 탭 */}
        <div className="flex flex-wrap justify-between border-b border-zinc-300 pb-6 text-xl font-semibold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`pb-2 transition-all ${
                active === cat
                  ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                  : "text-zinc-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 기술 카드 리스트 */}
        <div className="mt-16 space-y-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-zinc-200 p-8 shadow-sm dark:border-zinc-800"
            >
              {/* 🔥 상단: 이름 + 숙련도 */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-2xl font-semibold">
                  {skill.name}
                </p>

                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`h-2 w-7 rounded-full ${
                        i <= skill.level
                          ? categoryColors[active]
                          : "bg-zinc-300 dark:bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* 🔥 하단: 로고 + 설명 */}
              <div className="flex items-center gap-8">
                {/* 로고 */}
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* 설명 */}
                <div className="text-zinc-600 dark:text-zinc-300">
                  <p className="mb-2 font-medium">
                    {skill.description}
                  </p>

                  {/* 필요하면 추가 설명 가능 */}
                  {/* <p className="text-sm text-zinc-500">
                    주요 사용: 상태 관리, 컴포넌트 설계, 최적화 경험
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
