import { useI18n } from "../../../../locales/client";
import { FaCode, FaFilePdf, FaPaintBrush } from "react-icons/fa";

export default function NavigationButtons() {
  const t = useI18n();
  return (
    <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-4">
      <a className="btn btn-neutral btn-block" href="#skills">
        <FaCode />
        {t("skills")}
      </a>
      <a className="btn  btn-neutral btn-block" href="#projects">
        <FaPaintBrush />
        {t("projects")}
      </a>
      <a className="btn btn-neutral btn-block col-span-2 md:col-span-1" href={t("cv.link")}>
        <FaFilePdf />
        {t("cv.name")}
      </a>
    </div>
  );
}
