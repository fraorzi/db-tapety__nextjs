export type Group = {
  key: string;
  label: string;
  /** Ścieżka, na której grupa ma sens; brak = globalna. */
  path?: string;
  /** Id sekcji, do której przewija klik w nazwę grupy. */
  anchor?: string;
  options: readonly { id: string; label: string }[];
};

export const groups = [
  {
    key: "hero",
    label: "Hero: układ",
    path: "/",
    anchor: "hero-title",
    options: [
      { id: "a", label: "Tytuł po lewej, tekst po prawej (obecny)" },
      { id: "b", label: "Tytuł na całą szerokość, pasek z tekstem pod nim" },
      { id: "c", label: "Pół na pół: tekst na bakłażanie, wideo w ramce" },
      { id: "d", label: "Krótki tytuł na środku" },
    ],
  },
  {
    key: "copy",
    label: "Hero: tekst",
    path: "/",
    anchor: "hero-title",
    options: [
      { id: "a", label: "„Tapety kładzione tak, że szwu nie widać.” (obecny)" },
      { id: "b", label: "„Kładę tapety. Tylko tapety.”" },
      { id: "c", label: "„Tapeta położona raz, porządnie.”" },
      { id: "d", label: "„Przygotuję ścianę i położę tapetę.”" },
    ],
  },
  {
    key: "cta",
    label: "Hero: przyciski",
    path: "/",
    anchor: "hero-title",
    options: [
      { id: "a", label: "Bezpłatna wycena + Zobacz realizacje (obecne)" },
      { id: "b", label: "Zobacz realizacje + Dla firm" },
    ],
  },
  {
    key: "spec",
    label: "„Jedna osoba…”",
    path: "/",
    anchor: "spec-title",
    options: [
      { id: "a", label: "Duże wiersze, zdjęcie wjeżdża przy hoverze (obecny)" },
      { id: "b", label: "Dwie kolumny: przyklejony tekst i zdjęcie, lista obok" },
      { id: "c", label: "Siatka 2×2 ze zdjęciami w ramce" },
      { id: "d", label: "Lżejsze wiersze, miniatura widoczna cały czas" },
    ],
  },
  {
    key: "wenter",
    label: "Wybrane realizacje: wejście",
    path: "/",
    anchor: "work-title",
    options: [
      { id: "a", label: "Odsłonięcie od góry (obecne)" },
      { id: "b", label: "Przyklejany pas: nakładka zjeżdża w bok, po kolei" },
      { id: "c", label: "Rozwijana rolka: kafle rozwijają się w dół" },
      { id: "d", label: "Najpierw zdjęcie, potem etykieta z rogu" },
    ],
  },
  {
    key: "whover",
    label: "Wybrane realizacje: hover",
    path: "/",
    anchor: "work-title",
    options: [
      { id: "a", label: "Przybliżenie zdjęcia (obecny)" },
      { id: "b", label: "Pozostałe kafle przygasają" },
      { id: "c", label: "Etykieta na bakłażanie, wysuwa materiał" },
      { id: "d", label: "Zdjęcie przesuwa się w bok" },
    ],
  },
  {
    key: "footer",
    label: "Footer",
    anchor: "kontakt",
    options: [
      { id: "a", label: "CTA + duży wordmark (obecny)" },
      { id: "b", label: "Pole „zostaw numer”, wordmark ucięty krawędzią" },
      { id: "c", label: "Telefon i e-mail jako główny element" },
      { id: "d", label: "Jasny, ze zdjęciem realizacji" },
    ],
  },
] as const satisfies readonly Group[];

export type GroupKey = (typeof groups)[number]["key"];
export type OptionId<K extends GroupKey> = Extract<(typeof groups)[number], { key: K }>["options"][number]["id"];
export type Choices = { [K in GroupKey]: OptionId<K> };

export const defaults = Object.fromEntries(groups.map((g) => [g.key, g.options[0].id])) as Choices;
