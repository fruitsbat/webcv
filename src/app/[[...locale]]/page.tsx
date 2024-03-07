"use client";

import { useRef } from "react";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ToastToTop from "./components/toastToTop";
import Top from "./components/top";
import { useScroll } from "react-use";

export default function Home() {
  const scrollRef = useRef(null);
  const { y: scrollY } = useScroll(scrollRef);

  return (
    <div
      ref={scrollRef}
      className="h-[100dvh] snap-y snap-mandatory overflow-y-scroll scroll-smooth p-0"
    >
      <Top />
      {/* <Skills />
      <Projects />
      <ToastToTop scrollPositon={scrollY} /> */}
    </div>
  );
}
