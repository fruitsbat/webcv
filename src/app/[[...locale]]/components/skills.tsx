import { useI18n } from "../../../../locales/client";
import SkillCarouselItem from "./skillCarouselItem";
import { SkillCarouselItemProps } from "./skillCarouselItem";
import {
  SiGit,
  SiGitea,
  SiGithub,
  SiGithubactions,
  SiGo,
  SiNginx,
  SiRust,
} from "react-icons/si";
import { link } from "fs";

const skills = {
  rust: { icon: <SiRust />, name: "rust", link: "https://www.rust-lang.org/" },
  go: { icon: <SiGo />, link: "https://go.dev", name: "golang" },
  nginx: { icon: <SiNginx />, link: "https://nginx.org", name: "nginx" },
  github: { icon: <SiGithub />, link: "https://github.com", name: "github" },
  githubActions: {
    icon: <SiGithubactions />,
    link: "https://github.com/features/actions",
    name: "github actions",
  },
  gitea: { icon: <SiGitea />, link: "https://gitea.org", name: "gitea" },
  gitCLI: {
    icon: <SiGit />,
    link: "https://git-scm.com/downloads",
    name: "git cli",
  },
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
    {
      title: "Git",
      description: t("git.description"),
      imageDescription: t("git-logo.description"),
      imageURL: "/git.webp",
      skills: [
        skills.gitCLI,
        skills.github,
        skills.githubActions,
        skills.gitea,
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="flex h-screen snap-start flex-col items-center justify-center gap-6 p-6 md:gap-24 xl:p-24"
    >
      <h2 className="text-2xl font-black">{t("skills")}</h2>
      <div className="drop-shadow-primary carousel carousel-center h-[60dvh] max-w-6xl space-y-6 rounded-box bg-neutral p-6">
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
