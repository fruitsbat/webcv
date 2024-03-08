import { ReactNode } from "react";
import SkillLabel from "./skillLabel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useI18n } from "../../../../locales/client";

/* eslint-disable @next/next/no-img-element */
export interface SkillCarouselItemProps {
  title: string;
  description: string;
  skills: Array<{ name: string; link: string; icon: ReactNode }>;
  imageURL: string;
  imageDescription: string;
}

export interface SkillCarouselMetaData {
  totalCount: number;
  index: number;
}

export default function SkillCarouselItem({
  title,
  description,
  skills,
  imageURL,
  imageDescription,
  totalCount,
  index,
}: SkillCarouselItemProps & SkillCarouselMetaData) {
  const t = useI18n();
  const previousIndex = () => {
    if (index <= 0) {
      return totalCount - 1;
    }
    return index - 1;
  };
  const nextIndex = () => {
    if (index >= totalCount - 1) {
      return 0;
    }
    return index + 1;
  };
  return (
    <div
      id={`skillCarousel-${index}`}
      className="drop-shadow-primary carousel-item join join-vertical flex h-full w-full flex-col justify-between overflow-y-auto rounded-2xl bg-base-100 @container md:min-w-96"
    >
      <div className="card join-item w-full flex-1 justify-between @2xl:card-side">
        <figure className="flex-1 flex-grow-[2] @2xl:flex-grow-[5]">
          <img
            className="h-full w-full object-cover ring-4 ring-neutral"
            alt={imageDescription}
            src={imageURL}
          />
        </figure>
        <div className="card-body text-sm @xs:text-md p-6 flex-1 flex-grow-[5]">
          <h3 className="card-title font-black">{title}</h3>
          <p className="">{description}</p>
          <ul className="card-actions flex items-center justify-between gap-6">
            {skills.map((skill) => (
              <SkillLabel
                key={skill.name}
                icon={skill.icon}
                link={skill.link}
                name={skill.name}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="join join-item join-horizontal flex-wrap justify-between bg-base-100">
        <a
          className="btn btn-ghost join-item left-0 flex-1"
          href={`#skillCarousel-${previousIndex()}`}
        >
          <FaChevronLeft />
          {t("previous")}
        </a>
        <a
          className="btn btn-ghost join-item flex-1"
          href={`#skillCarousel-${nextIndex()}`}
        >
          {t("next")}
          <FaChevronRight />
        </a>
      </div>
    </div>
  );
}
