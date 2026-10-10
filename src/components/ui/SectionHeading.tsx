import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Kolor wstępu: na jasnym tle `muted`, w tone-deep jaśniejszy. */
  tone?: "paper" | "deep";
  className?: string;
};

/** Nagłówek sekcji: h2 i opcjonalny wstęp w jednej kolumnie, bez eyebrow. */
export function SectionHeading({ id, title, intro, tone = "paper", className }: Props) {
  return (
    <div className={cn("grid max-w-[40ch] gap-[0.9rem]", className)}>
      <h2 className="text-h2" id={id}>{title}</h2>
      {intro && <p className={tone === "deep" ? "text-on-deep-muted" : "text-muted"}>{intro}</p>}
    </div>
  );
}
