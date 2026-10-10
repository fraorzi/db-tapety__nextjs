import type { ComponentProps, ElementType } from "react";
import { cn } from "@/lib/cn";

const tones = {
  /** Bez tła: leży na tle strony. */
  none: "",
  /** Jasna sekcja nad przyklejonym hero (nasuwa się na niego). */
  paper: "relative z-1 bg-paper",
  /** Bakłażanowa sekcja: tło, jasny tekst i fokus, odwrócone pasy. */
  deep: "relative z-1 tone-deep",
} as const;

const spacings = {
  none: "",
  /** Zwykły pionowy oddech sekcji. */
  md: "py-section",
  lg: "py-section-lg",
  /** Góra podstrony, pod paskiem nawigacji (bez dołu). */
  top: "pt-page-top",
} as const;

const bandsClass = { top: "bands-t", bottom: "bands-b", both: "bands-y" } as const;

type Props = Omit<ComponentProps<"section">, "ref"> & {
  as?: "section" | "article" | "footer" | "main" | "div";
  tone?: keyof typeof tones;
  spacing?: keyof typeof spacings;
  /** Pasy tonalne na krawędzi, jak brzeg kolejnego pasa tapety. */
  bands?: keyof typeof bandsClass;
  /** Siatka 12 kolumn (jak <Grid>) bezpośrednio na sekcji. */
  grid?: boolean;
  /** Bez bocznego marginesu treści (px-page), np. gdy pełną szerokość mają dzieci. */
  bleed?: boolean;
  ref?: React.Ref<HTMLElement>;
};

/**
 * Sekcja strony: boczny margines treści, pionowy rytm, ton i pasy w jednym miejscu.
 * Odstępy inne niż w wariantach przez className (np. "pt-0", "pb-section-lg"), nadpiszą domyślne.
 *
 *   <Section tone="paper" spacing="lg" aria-labelledby="work-title">…</Section>
 *   <Section tone="deep" bands="both">…</Section>
 */
export function Section({ as = "section", tone = "none", spacing = "md", bands, grid, bleed, className, ...rest }: Props) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={cn(
        tones[tone],
        bands && bandsClass[bands],
        !bleed && "px-page",
        spacings[spacing],
        grid && "grid grid-cols-12 gap-x-gutter",
        className,
      )}
      {...rest}
    />
  );
}
