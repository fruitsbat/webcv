import Link from "next/link";
import { FaGlobeEurope } from "react-icons/fa";
import { useCurrentLocale } from "../../../../locales/client";

export default function LanguageLink() {
  const locale = useCurrentLocale();
  if (locale === "en") {
    return (
      <Link href="/de" className="flex items-center gap-2">
        <FaGlobeEurope />
        <span>deutsch</span>
      </Link>
    );
  }
  return (
    <Link href="/en" className="flex items-center gap-2">
      <FaGlobeEurope />
      <span>english</span>
    </Link>
  );
}
