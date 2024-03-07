import { FaGolang, FaRust } from "react-icons/fa6";
import { useI18n } from "../../../../locales/client";
import SkillCarouselItem from "./skillCarouselItem";
import { SkillCarouselItemProps } from "./skillCarouselItem";
import { SiNginx } from "react-icons/si";

const skills = {
  rust: { icon: <FaRust />, name: "rust", link: "https://www.rust-lang.org/" },
  go: { icon: <FaGolang />, link: "https://go.dev", name: "golang" },
  nginx: { icon: <SiNginx />, link: "https://nginx.org", name: "nginx" },
};

export default function Skills() {
  const t = useI18n();
  const carouselItems: Array<SkillCarouselItemProps> = [
    {
      title: "Network Programming",
      description: "I love doing this",
      imageDescription: "kdsjfksdjf",
      imageURL: "sdklfjskdfj",
      skills: [skills.rust, skills.go, skills.nginx],
    },
  ];
  return (
    <section
      id="skills"
      className="flex h-screen snap-start flex-col items-center justify-center gap-6 p-6 md:gap-24 xl:p-24"
    >
      <h2 className="text-2xl font-black">{t("skills")}</h2>
      <div className="drop-shadow-primary carousel carousel-vertical carousel-center h-[60dvh] max-w-6xl space-y-6 rounded-box bg-neutral p-6">
        {carouselItems.map((item) => {
          return (
            <SkillCarouselItem
              key={item.title}
              title={item.title}
              description={item.description}
              imageDescription={item.imageDescription}
              imageURL={item.imageURL}
              skills={item.skills}
            />
          );
        })}
      </div>
    </section>
  );
}
