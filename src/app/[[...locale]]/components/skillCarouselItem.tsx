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

export default function SkillCarouselItem({
  title,
  description,
  skills,
  imageURL,
  imageDescription,
}: SkillCarouselItemProps) {
  return (
    <div className="card carousel-item rounded-2xl bg-base-100 drop-shadow-primary lg:card-side">
      <figure className="aspect-square lg:h-full lg:w-1/3">
        <img className="aspect-square object-cover" alt={imageDescription} src={imageURL} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
        <ul className="card-actions justify-end">
          {skills.map((skill) => (
            <li key={skill.name}>
              <a href={skill.link} className="btn btn-outline btn-neutral">
                {skill.icon}
                <span>{skill.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
