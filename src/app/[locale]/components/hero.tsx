"use client";

import LanguageLink from "./languageLink";
import NavigationButtons from "./navigationButtons";
import AboutMe from "./aboutMe";

export default function Projects() {
  return (
    <div
      id="top"
      className="flex h-screen snap-start flex-col items-center justify-center gap-6"
    >
      <div className="grid grid-cols-3 gap-12">
        <div className="avatar aspect-square w-full">
          <div className="w-full rounded-full ring ring-neutral"></div>
        </div>
        <div className="col-span-2 flex h-full flex-col justify-center gap-6">
          <AboutMe />
          <NavigationButtons />
        </div>
      </div>
      <LanguageLink />
    </div>
  );
}
