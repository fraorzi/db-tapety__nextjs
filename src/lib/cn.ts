import { extendTailwindMerge } from "tailwind-merge";

/*
 * tailwind-merge musi znać nazwy tokenów z theme.css, inaczej np. `text-h2` (rozmiar)
 * pomyliłby z `text-ink` (kolor). Nowy token w theme.css → dopisz go tutaj.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["xs", "sm", "md", "base", "lead", "h4", "h3", "h2", "display"],
      spacing: ["gutter", "page", "section", "section-lg", "page-top", "stack", "stack-lg", "band", "frame", "panel-w", "panel-h", "panel-gap"],
      shadow: ["frame", "bands", "inset-ink", "inset-accent", "inset-on-deep", "inset-light", "inset-bar"],
      breakpoint: ["md", "xl"],
    },
  },
});

/**
 * Skleja klasy i rozwiązuje konflikty: późniejsza wygrywa.
 * cn("px-4 text-h2", on && "text-ink", "px-6") → "text-h2 text-ink px-6".
 * Dzięki temu `className` podany komponentowi zawsze nadpisuje jego domyślne klasy.
 */
export function cn(...classes: (string | false | null | undefined)[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}
