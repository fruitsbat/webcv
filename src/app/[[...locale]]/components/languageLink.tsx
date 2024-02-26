import Link from "next/link";
import { useParams } from "next/navigation";
import { FaGlobeEurope } from "react-icons/fa";

export default function LanguageLink({ locale }: { locale: string }) {
  // find locale
  if (locale === "en") {
    return (
      <Link href="/de" className="btn btn-ghost flex items-center gap-2">
        <FaGlobeEurope />
        <span>deutsch</span>
      </Link>
    );
  }
  return (
    <Link href="/en" className="btn btn-ghost flex items-center gap-2">
      <FaGlobeEurope />
      <span>english</span>
    </Link>
  );
}
