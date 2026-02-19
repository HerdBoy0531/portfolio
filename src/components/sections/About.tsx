// import { Section } from "../layout/Section";
// import { profile } from "../../app/data/profile";
// import { forwardRef } from "react";

// function SkillBlock({ title, items }: { title: string; items: string[] }) {
//   return (
//     <div className="rounded-2xl border border-zinc-200 p-5 transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:hover:shadow-zinc-900/40">
//       <p className="mb-3 text-sm font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
//         {title}
//       </p>
//       <div className="flex flex-wrap gap-2">
//         {items.map((x) => (
//           <span
//             key={x}
//             className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
//           >
//             {x}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export const About = forwardRef<HTMLElement>((_, ref) => {
//   return (
//     <Section id="about" title="About Me" ref={ref}>
//       <div className="grid gap-12 sm:grid-cols-2">
        
//         {/* 왼쪽 영역 */}
//         <div className="space-y-6">
//           <div>
//             <p className="text-2xl font-semibold">
//               {profile.name}
//             </p>
//             <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
//               사용자 경험과 성능을 함께 고민하는 프론트엔드 개발자입니다.
//             </p>
//           </div>

//           <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
//             <p>
//               📧 {profile.contact.email}
//             </p>
//             <p>
//               🔗{" "}
//               <a
//                 className="underline hover:text-black dark:hover:text-white"
//                 href={profile.contact.github}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 GitHub
//               </a>
//             </p>
//             <p>
//               📝{" "}
//               <a
//                 className="underline hover:text-black dark:hover:text-white"
//                 href={profile.contact.blog}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Blog
//               </a>
//             </p>
//           </div>

//           <div>
//             <p className="mb-2 text-sm font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
//               Background
//             </p>
//             <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
//               {profile.background.map((b) => (
//                 <li key={b}>• {b}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* 오른쪽 영역 */}
//         <div className="grid gap-4">
//           <SkillBlock title="Frontend" items={profile.skills.frontend} />
//           <SkillBlock title="State / Data" items={profile.skills.state} />
//           <SkillBlock title="Realtime" items={profile.skills.realtime} />
//           <SkillBlock
//             title="Backend / Tools"
//             items={[
//               ...profile.skills.backend,
//               ...profile.skills.tools,
//             ]}
//           />
//         </div>
//       </div>
//     </Section>
//   );
// });

import { Section } from "../layout/Section";
import { forwardRef } from "react";
import { Container } from "../layout/Container";
import { profile } from "../../app/data/profile";

export const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section id="about" title="About Me" ref={ref}>
      <Container>

        <div className="grid gap-12 lg:grid-cols-3">

          {/* 🔥 1️⃣ 왼쪽 - 사진 */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-64 h-64 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <img
                src={profile.image}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 🔥 2️⃣ 가운데 - 정보 */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">{profile.name}</h2>

            <div>
              <p className="mb-3 text-lg font-semibold">교육사항</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                {profile.education.map((edu) => (
                  <li key={edu.name}>• {edu.name}({edu.result}) - {edu.period}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-lg font-semibold">자격증</p>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                {profile.certificates.map((cert) => (
                  <li key={cert.name}>• {cert.name} - {cert.date}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 🔥 3️⃣ 오른쪽 - 키워드 */}
          <div className="flex flex-col justify-center space-y-6 text-right">
            {profile.keywords.map((keyword) => (
              <div
                key={keyword}
                className="text-xl font-semibold text-zinc-500 dark:text-zinc-400"
              >
                #{keyword}
              </div>
            ))}
          </div>

        </div>

      </Container>
    </Section>
  );
});