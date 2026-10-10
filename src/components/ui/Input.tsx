import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const tones = {
  paper: "bg-paper-2 placeholder:text-muted focus-visible:shadow-inset-ink",
  deep: "bg-deep-2 text-on-deep placeholder:text-on-deep-muted focus-visible:shadow-inset-on-deep",
} as const;

type Props = ComponentProps<"input"> & { tone?: keyof typeof tones };

/** Pole w jednej linii z przyciskiem obok („zostaw numer”). Wysokość jak przycisk `md`. */
export function Input({ tone = "paper", className, ...rest }: Props) {
  return <input className={cn("min-h-13 w-full px-[1.1rem] focus-visible:outline-none", tones[tone], className)} {...rest} />;
}
