"use client";

import { FaArrowUp } from "react-icons/fa";
import { useI18n } from "../../../../locales/client";

export default function ToastToTop({
  scrollPositon,
}: {
  scrollPositon: number;
}) {
  const t = useI18n();

  return (
    <div className={`toast toast-end ${scrollPositon > 0? "" : "hidden"}`}>
      <a className="btn btn-secondary" href="#top">
        <FaArrowUp />
        <span>{t("to-top")}</span>
      </a>
    </div>
  );
}
