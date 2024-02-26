import Link from "next/link";
import { useParams } from "next/navigation";
import { FaGlobeEurope } from "react-icons/fa";

export default function LanguageLink() {
  // find locale
  const locale = useParams().locale.at(-1);
  if (locale === "en") {
    return (
      <Link href="/de" className="link flex items-center gap-2">
        <FaGlobeEurope />
        <span>deutsch</span>
      </Link>
    );
  }
  return (
    <Link href="/en" className="link flex items-center gap-2">
      <FaGlobeEurope />
      <span>english</span>
    </Link>
  );
}
