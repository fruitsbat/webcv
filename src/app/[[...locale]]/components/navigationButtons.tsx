import { useI18n } from "../../../../locales/client";
import { FaCode, FaFilePdf, FaPaintBrush } from "react-icons/fa";

export default function NavigationButtons() {
  const t = useI18n();
  return (
    <div className="flex w-full flex-wrap justify-center gap-4">
      <a className="btn btn-ghost" href="#skills">
        <FaCode />
        {t("skills")}
      </a>
      {/*
      <a className="btn  btn-ghost" href="#projects">
        <FaPaintBrush />
        {t("projects")}
      </a> */}
      <a className="btn btn-ghost" href={t("cv.link")}>
        <FaFilePdf />
        {t("cv.name")}
      </a>
    </div>
  );
}
