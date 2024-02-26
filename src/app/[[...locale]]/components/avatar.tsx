import Image from "next/image";
import { useI18n } from "../../../../locales/client";

export default function AboutMe() {
  const t = useI18n();
  return (
    <div className="avatar aspect-square h-full flex-1 flex-grow-0">
      <Image
        src="myFace.webp"
        width={1}
        height={1}
        alt={t("avatar.alt")}
        className="aspect-square rounded-full shadow ring"
      />
    </div>
  );
}
