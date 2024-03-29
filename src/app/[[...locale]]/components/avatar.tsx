import Image from "next/image";
import { useI18n } from "../../../../locales/client";

export default function AboutMe() {
  const t = useI18n();
  return (
    <div className="avatar sm:aspect-[3/4] flex-1 flex-grow-0 drop-shadow-primary">
      <Image
        src="myFace.webp"
        width={1}
        height={1}
        alt={t("avatar.alt")}
        className="-rotate-3 rounded-3xl ring-4 ring-neutral"
      />
    </div>
  );
}
