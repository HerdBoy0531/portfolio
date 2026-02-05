import type { PropsWithChildren } from "react";
import { Container } from "./Container";

export function Section({
  id,
  title,
  children,
}: PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <div className="mt-3 h-px w-full bg-zinc-200/70 dark:bg-zinc-800" />
        </div>
        {children}
      </Container>
    </section>
  );
}
