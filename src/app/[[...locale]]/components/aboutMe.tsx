import { useI18n } from "../../../../locales/client";

export default function AboutMe() {
  const t = useI18n();
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-black">{t("about.me.heading")}</h1>
      <p>{t("about.me.description")}</p>
    </div>
  );
}
