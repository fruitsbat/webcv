import { useI18n } from "../../../../locales/client";
import SkillCarouselItem from "./skillCarouselItem";
import { SkillCarouselItemProps } from "./skillCarouselItem";
import {
  SiAlpinelinux,
  SiAngular,
  SiArchlinux,
  SiAseprite,
  SiBlender,
  SiCsharp,
  SiDebian,
  SiGit,
  SiGitea,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiGodotengine,
  SiGraphql,
  SiNextcloud,
  SiNginx,
  SiNixos,
  SiOpengl,
  SiOpensuse,
  SiPostgresql,
  SiReact,
  SiRust,
  SiTypescript,
  SiUbuntu,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";

const skills = {
  rust: {
    icon: <SiRust />,
    name: "Rust",
    link: "https://www.rust-lang.org/",
  },
  go: {
    icon: <SiGo />,
    link: "https://go.dev",
    name: "Go",
  },
  nginx: {
    icon: <SiNginx />,
    link: "https://nginx.org",
    name: "Nginx",
  },
  github: {
    icon: <SiGithub />,
    link: "https://github.com",
    name: "GitHub",
  },
  githubActions: {
    icon: <SiGithubactions />,
    link: "https://github.com/features/actions",
    name: "Github Actions",
  },
  gitea: {
    icon: <SiGitea />,
    link: "https://gitea.com",
    name: "Gitea",
  },
  gitCLI: {
    icon: <SiGit />,
    link: "https://git-scm.com/downloads",
    name: "Git CLI",
  },
  gitlab: {
    icon: <SiGitlab />,
    link: "https://gitlab.com",
    name: "Gitlab",
  },
  typescript: {
    icon: <SiTypescript />,
    link: "https://www.typescriptlang.org/",
    name: "TypeScript",
  },
  react: {
    icon: <SiReact />,
    link: "https://react.dev",
    name: "React",
  },
  vue: {
    icon: <SiVuedotjs />,
    link: "https://vuejs.org",
    name: "Vue.js",
  },
  angular: {
    icon: <SiAngular />,
    link: "https://angular.io",
    name: "Angular",
  },
  graphql: {
    icon: <SiGraphql />,
    link: "https://graphql.org/",
    name: "GraphQL",
  },
  postgres: {
    icon: <SiPostgresql />,
    link: "https://www.postgresql.org/",
    name: "PostgreSQL",
  },
  godot: {
    icon: <SiGodotengine />,
    link: "https://godotengine.org/",
    name: "Godot",
  },
  csharp: {
    icon: <SiCsharp />,
    link: "https://learn.microsoft.com/dotnet/csharp/tour-of-csharp/",
    name: "C#",
  },
  wordpress: {
    icon: <SiWordpress />,
    link: "https://wordpress.com/",
    name: "WordPress",
  },
  nextcloud: {
    link: "https://nextcloud.com/",
    name: "Nextcloud",
    icon: <SiNextcloud />,
  },
  glsl: {
    icon: <SiOpengl />,
    name: "GLSL",
    link: "https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)",
  },
  blender: {
    icon: <SiBlender />,
    name: "Blender",
    link: "https://www.blender.org/",
  },
  aseprite: {
    icon: <SiAseprite />,
    name: "Aseprite",
    link: "https://www.aseprite.org/",
  },
  debian: {
    icon: <SiDebian />,
    name: "Debian",
    link: "https://www.debian.org/",
  },
  nixos: {
    icon: <SiNixos />,
    name: "NixOS",
    link: "https://nixos.org",
  },
  opensuse: {
    icon: <SiOpensuse />,
    name: "OpenSuse",
    link: "https://www.opensuse.org/",
  },
  ubuntu: {
    icon: <SiUbuntu />,
    name: "Ubuntu",
    link: "https://ubuntu.com/",
  },
  alpine: {
    icon: <SiAlpinelinux />,
    name: "Alpine",
    link: "https://www.alpinelinux.org/",
  },
  arch: {
    icon: <SiArchlinux />,
    name: "Arch",
    link: "https://archlinux.org/",
  },
};

export default function Skills() {
  const t = useI18n();
  const carouselItems: Array<SkillCarouselItemProps> = [
    {
      title: t("frontend-web-development"),
      description: t("frontend-web-development.description"),
      imageDescription: t("frontend-web-development.image.description"),
      imageURL: "/frontend.webp",
      skills: [skills.typescript, skills.react, skills.vue, skills.angular],
    },
    {
      title: t("backend-web-development"),
      description: t("backend-web-development.description"),
      imageDescription: t("git-logo.description"),
      imageURL: "/backend.webp",
      skills: [
        skills.go,
        skills.typescript,
        skills.rust,
        skills.graphql,
        skills.postgres,
      ],
    },
    {
      title: t("homelab"),
      description: t("homelab.description"),
      imageDescription: t("homelab.image.description"),
      imageURL: "/homelab.webp",
      skills: [
        skills.wordpress,
        skills.gitea,
        skills.nextcloud,
        skills.postgres,
        skills.nginx,
      ],
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
    {
      title: t("linux"),
      description: t("linux.description"),
      imageDescription: t("linux.image.description"),
      imageURL: "/linux.webp",
      skills: [
        skills.debian,
        skills.ubuntu,
        skills.nixos,
        skills.opensuse,
        skills.alpine,
        skills.arch,
      ],
    },
    {
      title: t("gamedev"),
      description: t("gamedev.description"),
      imageDescription: t("gamedev.image.description"),
      imageURL: "/gamedev.webp",
      skills: [
        skills.csharp,
        skills.rust,
        skills.godot,
        skills.glsl,
        skills.aseprite,
        skills.blender,
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="flex h-[100dvh] snap-start flex-col items-center justify-center gap-6 p-6 @container md:gap-24 xl:p-24"
    >
      <h2 className="text-2xl font-black">{t("skills")}</h2>
      <div className="drop-shadow-primary carousel carousel-center h-full w-full space-x-2 rounded-3xl bg-neutral p-4">
        {carouselItems.map((item, index) => {
          return (
            <SkillCarouselItem
              key={item.title}
              title={item.title}
              description={item.description}
              imageDescription={item.imageDescription}
              imageURL={item.imageURL}
              skills={item.skills}
              index={index}
              totalCount={carouselItems.length}
            />
          );
        })}
      </div>
    </section>
  );
}
