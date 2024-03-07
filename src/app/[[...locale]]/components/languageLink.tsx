import Link from "next/link";
import { FaLanguage } from "react-icons/fa";

export default function LanguageLink({ locale }: { locale: string }) {
  // find locale
  if (locale === "en") {
    return (
      <Link href="/de" className="btn btn-ghost flex items-center gap-2">
        <FaLanguage className="h-6 w-6" />
        <span lang="de">deutsch</span>
      </Link>
    );
  }
  return (
    <Link href="/en" className="btn btn-ghost flex items-center gap-2">
      <FaLanguage className="h-6 w-6" />
      <span lang="en">english</span>
    </Link>
  );
}
