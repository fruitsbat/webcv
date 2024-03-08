import { ReactNode } from "react";

export default function SkillLabel({
  icon,
  name,
  link,
}: {
  icon: ReactNode;
  name: string;
  link: string;
}) {
  return (
    <li key={name}>
      <a href={link} className="flex gap-2 items-center flex-nowrap link link-hover">
        {icon}
        <span className="font-extrabold">{name}</span>
      </a>
    </li>
  );
}
