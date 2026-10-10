/** Skleja klasy, pomija puste: cn("a", on && "b", undefined) → "a b". */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
