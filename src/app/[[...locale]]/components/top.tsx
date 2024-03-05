"use client";

import Link from "next/link";
import Hero from "./hero";
import LanguageLink from "./languageLink";
import { useParams } from "next/navigation";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Top() {
  const locale = useParams().locale.at(-1)!;

  return (
    <div id="top" className="flex h-screen w-full snap-start flex-col">
      <div className="navbar flex flex-row items-center justify-between bg-gradient-to-t from-transparent to-base-300 p-4 gap-2 px-6">
        <div className="flex flex-row gap-2">
          <Link className="btn btn-ghost" href="mailto://mail@zoeoosting.de">
            <FaEnvelope />
            mail@zoeoosting.de
          </Link>
          <Link className="btn btn-ghost" href="https://github.com/fruitsbat">
            <FaGithub />
            github
          </Link>
        </div>
        <LanguageLink locale={locale} />
      </div>
      <div className="flex flex-1 flex-grow flex-col items-center justify-center">
        <Hero />
      </div>
    </div>
  );
}
