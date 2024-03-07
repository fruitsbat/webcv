import { ReactNode } from "react";
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
      className="@container carousel-item join join-vertical flex w-4/5 max-w-4xl flex-col rounded-2xl bg-base-200 md:min-w-96"
    >
      <div className="@2xl:card-side card join-item w-full">
        <figure className="aspect-video lg:aspect-square lg:h-full lg:w-1/3">
          <img
            className="h-full w-full object-cover"
            alt={imageDescription}
            src={imageURL}
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>{description}</p>
          <ul className="card-actions justify-stretch">
            {skills.map((skill) => (
              <li key={skill.name} className="flex-1">
                <a
                  href={skill.link}
                  className="btn btn-outline btn-neutral btn-block"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="join join-item join-horizontal flex-wrap justify-between bg-base-300">
        <a
          className="btn join-item flex-1"
          href={`#skillCarousel-${previousIndex()}`}
        >
          previous
        </a>
        <a
          className="btn join-item flex-1"
          href={`#skillCarousel-${nextIndex()}`}
        >
          next
        </a>
      </div>
    </div>
  );
}
