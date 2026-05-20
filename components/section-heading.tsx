import { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-[clamp(2rem,8vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[clamp(1rem,4vw,1.125rem)] leading-8 text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
