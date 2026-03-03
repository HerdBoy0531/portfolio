import { useEffect, useState } from "react";
import { Section } from "../layout/Section";
import { projects } from "../../app/data/projects";
import { ProjectCard } from "../projects/ProjectCard";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "projects") return;
    const exists = projects.some((p) => p.id === hash);
    if (exists) setOpenId(hash);
  }, []);

  return (
    <Section id="projects" title="Projects">
      <div className="space-y-4">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} openId={openId} setOpenId={setOpenId} />
        ))}
      </div>
    </Section>
  );
}
