import Link from "next/link";
import { useI18n } from "../../../../locales/client";

export default function NavigationButtons() {
  const t = useI18n();
  return (
    <div className="grid grid-cols-2 gap-4">
      <Link className="btn btn-outline btn-primary btn-block" href="#skills">
        {t("skills")}
      </Link>
      <Link
        className="btn btn-outline btn-secondary btn-block"
        href="#projects"
      >
        {t("projects")}
      </Link>
    </div>
  );
}
