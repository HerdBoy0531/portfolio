import { Container } from "./Container";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a href="#top" className="text-sm font-semibold">
            Portfolio
          </a>
          <nav className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-300">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-zinc-900 dark:hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
