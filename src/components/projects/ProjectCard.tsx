import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../../app/data/projects";
import { ProjectDetails } from "./ProjectDetails";

export function ProjectCard({
  p,
  openId,
  setOpenId,
}: {
  p: Project;
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  const isOpen = openId === p.id;

  return (
    <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
      <div className="grid gap-4 sm:grid-cols-[180px_1fr]">
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
          {p.thumbnail ? (
            <img src={p.thumbnail} alt={p.title} className="h-[120px] w-full object-cover sm:h-[140px]" />
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

            <button
              onClick={() => setOpenId(isOpen ? null : p.id)}
              className="shrink-0 rounded-lg border border-zinc-200 px-3 py-2 text-xs hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              aria-expanded={isOpen}
            >
              {isOpen ? "닫기 ▲" : "자세히 보기 ▼"}
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-xs font-medium text-zinc-900 dark:text-white">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-900">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium text-zinc-900 dark:text-white">My Role</p>
              <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                {p.role.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="mb-1 text-xs font-medium text-zinc-900 dark:text-white">Quick Intro</p>
            <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
              {p.summary.map((x, i) => (
                <li key={i}>• {x}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-1 text-sm">
            {p.links.github && (
              <a className="underline text-zinc-700 dark:text-zinc-200" href={p.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {p.links.demo && (
              <a className="underline text-zinc-700 dark:text-zinc-200" href={p.links.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
            {p.links.docs && (
              <a className="underline text-zinc-700 dark:text-zinc-200" href={p.links.docs} target="_blank" rel="noreferrer">
                Docs
              </a>
            )}
          </div>

          <AnimatePresence initial={false}>
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
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
