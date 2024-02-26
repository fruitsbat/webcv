import Projects from "./components/projects";
import Skills from "./components/skills";
import Top from "./components/top";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth p-0">
      <Top />
      <Skills />
      <Projects />
    </div>
  );
}
