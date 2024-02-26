import Projects from "./components/projects";
import Skills from "./components/skills";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="p-8 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
