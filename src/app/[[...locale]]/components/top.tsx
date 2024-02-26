"use client";

import Hero from "./hero";
import LanguageLink from "./languageLink";
import { useParams } from "next/navigation";

export default function Top() {
  const locale = useParams().locale.at(-1)!;

  return (
    <div id="top" className="flex h-screen w-full snap-start flex-col">
      <div className="flex flex-row justify-end bg-gradient-to-t from-transparent to-base-200 p-4 px-2">
        <LanguageLink locale={locale} />
      </div>
      <div className="flex flex-1 flex-grow flex-col items-center justify-center">
        <Hero />
      </div>
    </div>
  );
}
