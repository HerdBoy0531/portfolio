import type { Project } from "../../app/data/projects";

export function ProjectDetails({ p }: { p: Project }) {
  return (
    <div className="mt-4 space-y-6 text-sm text-zinc-600 dark:text-zinc-300">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-2 font-medium text-zinc-900 dark:text-white">Problem</p>
          <ul className="space-y-1">
            {p.details.problem.map((x, i) => (
              <li key={i}>• {x}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 font-medium text-zinc-900 dark:text-white">Solution</p>
          <ul className="space-y-1">
            {p.details.solution.map((x, i) => (
              <li key={i}>• {x}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="mb-2 font-medium text-zinc-900 dark:text-white">Key Features</p>
        <ul className="space-y-1">
          {p.details.features.map((x, i) => (
            <li key={i}>• {x}</li>
          ))}
        </ul>
      </div>

      {p.details.trouble.length > 0 && (
        <div>
          <p className="mb-2 font-medium text-zinc-900 dark:text-white">Troubleshooting</p>
          <div className="space-y-3">
            {p.details.trouble.map((t, i) => (
              <div key={i} className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                <p className="font-medium text-zinc-900 dark:text-white">{t.title}</p>
                <p className="mt-2">• 문제: {t.what}</p>
                <p>• 접근: {t.how}</p>
                <p>• 결과: {t.result}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="mb-2 font-medium text-zinc-900 dark:text-white">Takeaways</p>
        <ul className="space-y-1">
          {p.details.takeaways.map((x, i) => (
            <li key={i}>• {x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
