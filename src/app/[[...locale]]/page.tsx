"use client";

import { useRef } from "react";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ToastToTop from "./components/toastToTop";
import Top from "./components/top";
import { useScroll } from "react-use";
import { Metadata } from "next";
import { useI18n } from "../../../locales/client";

export default function Home() {
  const scrollRef = useRef(null);
  const { y: scrollY } = useScroll(scrollRef);
  const t = useI18n();

  return (
    <div
      ref={scrollRef}
      className="h-[100dvh] snap-y snap-mandatory overflow-y-scroll scroll-smooth p-0"
    >
      <title>{t("about.me.heading")}</title>
      <meta name="description" content={t("about.me.description")} />
      <meta property="og:title" content={t("about.me.heading")} />
      <meta property="og:description" content={t("about.me.description")} />
      <meta property="og:image" content="/myFace.webp" />
      <Top />
      <Skills />
      {/*<Projects />*/}
      {/* <ToastToTop scrollPositon={scrollY} /> */}
    </div>
  );
}
