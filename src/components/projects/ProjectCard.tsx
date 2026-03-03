import type { Project } from "../../app/data/projects";
import {logos} from "../../assets/logos/";

export function ProjectCard({
  p,
  openId,
}: {
  p: Project;
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  const isOpen = openId === p.id;

  return (
    <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
      <div className="grid gap-4 sm:grid-cols-[minmax(220px,260px)_1fr] items-center">
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 aspect-square w-full">
          {p.thumbnail ? (
            <img
              src={p.thumbnail}
              alt={p.title}
              className="h-full w-full object-cover "
            />
          ) : (
            <div className="flex h-[120px] items-center justify-center bg-zinc-100 text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400 sm:h-[140px]">
              Thumbnail
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                {p.title}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{p.subtitle}</p>
              {p.period && <p className="mt-1 text-xs text-zinc-500">{p.period}</p>}
            </div>
              <div className="flex gap-3">
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="h-[25px] w-[25px] transition duration-200 group-hover:scale-110 group-hover:opacity-80 dark:invert"
                  >
                    <img
                      src={logos.github}
                      alt="GitHub"
                      className="h-[25px] w-[25px] transition-transform duration-300 ease-out hover:scale-125 hover:-translate-y-1 dark:invert"
                    />
                  </a>
                )}

                {p.links.notion && (
                  <a
                    href={p.links.notion}
                    target="_blank"
                    rel="noreferrer"
                    className="h-[25px] w-[25px] transition duration-200 group-hover:scale-110 group-hover:opacity-80 dark:invert"
                  >
                    <img
                      src={logos.notion}
                      alt="Notion"
                      className="h-[25px] w-[25px] transition-transform duration-300 ease-out hover:scale-125 hover:-translate-y-1 dark:invert"
                    />
                  </a>
                )}
              </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-md font-semibold text-zinc-900 dark:text-white">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-900">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1 text-md font-semibold text-zinc-900 dark:text-white">My Role</p>
              <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                {p.role.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="mb-1 text-md font-semibold text-zinc-900 dark:text-white">Quick Intro</p>
            <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
              {p.summary.map((x, i) => (
                <li key={i}>• {x}</li>
              ))}
            </ul>
          </div>



          {/* <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <ProjectDetails p={p} />
              </motion.div>
            )}
          </AnimatePresence> */}
        </div>
      </div>
    </div>
  );
}
