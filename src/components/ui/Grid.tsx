import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentProps<"div"> & { as?: "div" | "ol" | "ul" | "dl" | "form" | "nav" };

/**
 * Siatka układu: 12 kolumn z odstępem gutter. Dzieci ustawiają się przez col-span-* / col-start-*,
 * na mobile zwykle max-md:col-span-full.
 */
export function Grid({ as: Tag = "div", className, ...rest }: Props) {
  return <Tag className={cn("grid grid-cols-12 gap-x-gutter", className)} {...(rest as object)} />;
}
