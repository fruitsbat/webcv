"use client";

import Link from "next/link";
import Hero from "./hero";
import LanguageLink from "./languageLink";
import { useParams } from "next/navigation";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useI18n } from "../../../../locales/client";

export default function Top() {
  const locale = useParams().locale.at(-1)!;
  const t = useI18n();

  return (
    <div id="top" className="flex h-screen w-full snap-start flex-col">
      <div className="navbar flex flex-row items-center justify-between gap-2 bg-gradient-to-t from-transparent to-base-300 p-4 px-6">
        <div className="flex flex-row gap-0">
          {/* phone buttons */}
          <div className="tooltip tooltip-bottom sm:hidden" data-tip="mail">
            <Link
              className="btn btn-circle btn-ghost"
              href="mailto:mail@zoeoosting.de"
              aria-label={t("email-link.description")}
            >
              <FaEnvelope />
            </Link>
          </div>{" "}
          <div className="tooltip tooltip-bottom sm:hidden" data-tip="github">
            <Link
              className="btn btn-circle btn-ghost"
              href="https://github.com/fruitsbat"
              aria-label={t("github-link.description")}
            >
              <FaGithub />
            </Link>
          </div>
          {/* desktop buttons */}
          <Link
            className="btn btn-ghost hidden sm:flex"
            href="mailto:mail@zoeoosting.de"
          >
            <FaEnvelope />
            mail@zoeoosting.de
          </Link>
          <Link
            className="btn btn-ghost hidden sm:flex"
            href="https://github.com/fruitsbat"
          >
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
