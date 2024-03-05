import Link from "next/link";
import { useI18n } from "../../../../locales/client";
import { FaCode, FaFilePdf, FaPaintBrush } from "react-icons/fa";

export default function NavigationButtons() {
  const t = useI18n();
  return (
    <div className="grid w-full grid-cols-3 gap-4">
      <Link className="btn btn-primary btn-block" href="#skills">
        <FaCode />
        {t("skills")}
      </Link>
      <Link className="btn  btn-secondary btn-block" href="#projects">
        <FaPaintBrush />
        {t("projects")}
      </Link>
      <Link className="btn btn-neutral btn-block" href={t("cv.link")}>
        <FaFilePdf />
        {t("cv.name")}
      </Link>
    </div>
  );
}
