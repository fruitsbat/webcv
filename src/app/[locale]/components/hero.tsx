"use client";

import LanguageLink from "./languageLink";
import NavigationButtons from "./navigationButtons";
import AboutMe from "./aboutMe";
import Avatar from "./avatar";

export default function Projects() {
  return (
    <div
      id="top"
      className="flex h-screen snap-start flex-col items-center justify-center gap-24"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="hidden md:block">
          <Avatar />
        </div>
        <div className="flex flex-row gap-4 md:col-span-2">
          <div className="aspect-square h-full flex-1 flex-grow-0 md:hidden">
            <Avatar />
          </div>
          <div className="flex h-full flex-1 flex-grow flex-col justify-center gap-6">
            <AboutMe />
          </div>
        </div>
        <NavigationButtons />
      </div>
      <LanguageLink />
    </div>
  );
}
