import { ReactNode } from "react";

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
    <div className="card carousel-item rounded-2xl bg-base-100 shadow-xl lg:card-side">
      <figure>
        <img alt={imageDescription} src={imageURL} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">New album is released!</h3>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Listen</button> */}
        </div>
      </div>
    </div>
  );
}
