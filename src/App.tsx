import { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Intro } from "./components/sections/Intro";
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Skills } from "./components/sections/Skills";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setTimeout(() => {
      setShowIntro(false);
    }, 800);
  };

  return (
    <div className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      

      <main>
        {showIntro ? (
          <Intro onFinish={handleIntroFinish} />
        ) : (
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
}
