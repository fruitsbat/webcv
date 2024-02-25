"use client";

import Link from "next/link";
import { useI18n, useCurrentLocale } from "../../../../locales/client";
import LanguageLink from "./languageLink";

export default function Projects() {
  const t = useI18n();
  const locale = useCurrentLocale();
  return (
    <div
      id="top"
      className="flex h-screen snap-start flex-col items-center justify-center gap-6"
    >
      <div className="grid grid-cols-3 gap-12">
        <div className="avatar aspect-square h-full">
          <div className="w-full rounded ring ring-primary"></div>
        </div>
        <div className="col-span-2 flex h-full flex-col justify-center gap-3">
          <h1 className="text-6xl">{t("about.me.heading")}</h1>
          <p>{t("about.me.description")}</p>
          <div className="grid grid-cols-2 gap-4">
            <Link
              className="btn btn-outline btn-neutral btn-block"
              href="#skills"
            >
              {t("skills")}
            </Link>
            <Link
              className="btn btn-outline btn-neutral btn-block"
              href="#projects"
            >
              {t("projects")}
            </Link>
          </div>
        </div>
      </div>
      <LanguageLink />
    </div>
  );
}
