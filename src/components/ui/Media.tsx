import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentProps<"div"> & {
  /** Wypełnia pozycjonowanego rodzica (absolute inset-0) zamiast być w przepływie. */
  fill?: boolean;
};

/**
 * Kadr na zdjęcie: przycina, daje tło na czas ładowania, a obraz jest lekko powiększony,
 * żeby paralaksa (ScrollMotion, WorkGrid, WorkMotion) nie odsłaniała krawędzi.
 */
export function Media({ fill, className, ...rest }: Props) {
  return (
    <div
      data-media
      className={cn(fill ? "absolute inset-0" : "relative", "overflow-hidden bg-paper-2 [&_img]:transform-[scale(1.1)]", className)}
      {...rest}
    />
  );
}

/** Zdjęcie przybliża się przy hoverze najbliższego rodzica z klasą `group` (karta, kafel). */
export function MediaZoom({ subtle, children }: { subtle?: boolean; children: React.ReactNode }) {
  return (
    <span className={cn("absolute inset-0 transition-transform duration-1200", subtle ? "group-hover:scale-[1.03]" : "group-hover:scale-105")}>
      {children}
    </span>
  );
}
