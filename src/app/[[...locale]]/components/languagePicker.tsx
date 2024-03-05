"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LanguagePicker() {
  /// navigate to matching locale if one is found
  const router = useRouter();
  useEffect(() => {
    function computeLocale(
      userLocales: Array<string>,
      supportedLocales: Array<string>,
    ): string | null {
      for (let userLocale in userLocales) {
        userLocale = userLocales[userLocale];
        /// first look for exact matches
        const exactMatch = supportedLocales.find((supportedLocale) => {
          return userLocale === supportedLocale;
        });
        if (exactMatch) {
          return exactMatch;
        }
        /// then try to match for the beginning
        const beginningMatch = supportedLocales.find((supportedLocale) => {
          return userLocale.startsWith(supportedLocale);
        });
        if (beginningMatch) {
          return beginningMatch;
        }
      }
      return null;
    }

    /// use language first
    const userLocales = navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    const supportedLocales = ["en", "de"];
    const matchingLocale = computeLocale(
      userLocales as Array<string>,
      supportedLocales,
    );

    if (matchingLocale) {
      router.push(`/${matchingLocale}`);
    }
  });

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-row flex-wrap gap-6">
          <Link className="btn" href="/en">
            <span lang="en">english</span>
          </Link>
          <Link className="btn" href="/de">
            <span lang="de">deutsch</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
