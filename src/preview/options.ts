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
    key: "font",
    label: "Fonty (nagłówek + tekst)",
    options: [
      { id: "a", label: "Bricolage + Instrument Sans (obecne)" },
      { id: "b", label: "Fraunces + Hanken Grotesk" },
      { id: "c", label: "Instrument Serif + Geist" },
      { id: "d", label: "Archivo wąskie + Public Sans" },
      { id: "e", label: "Familjen Grotesk + Literata" },
      { id: "f", label: "Young Serif + Albert Sans" },
    ],
  },
  {
    key: "btn",
    label: "Przycisk główny",
    options: [
      { id: "a", label: "Bez obrysu (obecny)" },
      { id: "b", label: "Jasna ramka na zewnątrz" },
      { id: "c", label: "Podwójna ramka jak na zdjęciach" },
      { id: "d", label: "Pasy na dole jak przy sekcjach" },
      { id: "e", label: "Jasna linia wewnątrz" },
    ],
  },
  {
    key: "arrow",
    label: "Strzałka",
    options: [
      { id: "a", label: "→ znak (obecna)" },
      { id: "b", label: "Cienka, długa" },
      { id: "c", label: "Pełny grot" },
      { id: "d", label: "Wydłuża się na hover" },
      { id: "e", label: "Szewron" },
    ],
  },
  {
    key: "spec",
    label: "„Jedna osoba…”",
    path: "/",
    anchor: "spec-title",
    options: [
      { id: "a", label: "Spec sheet (obecny)" },
      { id: "b", label: "Pasy tapety" },
      { id: "c", label: "Stos kart przy scrollu" },
      { id: "d", label: "Duże wiersze, zdjęcie wklejane" },
    ],
  },
  {
    key: "work",
    label: "Wybrane realizacje",
    path: "/",
    anchor: "work-title",
    options: [
      { id: "a", label: "Obecny układ, ciaśniej" },
      { id: "b", label: "Mozaika jak ściana galerii" },
      { id: "c", label: "Przejazd w poziomie (pin)" },
      { id: "d", label: "Kolumny z przesunięciem przy scrollu" },
    ],
  },
  {
    key: "aud",
    label: "Dla kogo pracuję",
    path: "/",
    anchor: "aud-title",
    options: [
      { id: "a", label: "Bez ramki (obecny)" },
      { id: "b", label: "Ramka wokół całego slidera" },
      { id: "c", label: "Ramka tylko na otwartym panelu" },
    ],
  },
  {
    key: "proc",
    label: "Jak pracuję (strona główna)",
    path: "/",
    anchor: "proces-title",
    options: [
      { id: "a", label: "Akordeon (obecny)" },
      { id: "b", label: "Bęben: tytuły przewijają się przez linię" },
      { id: "c", label: "Jeden etap naraz, wjeżdża jak pas" },
      { id: "d", label: "Stos kartek, wierzchnia odchodzi" },
    ],
  },
  {
    key: "tabs",
    label: "Taby",
    path: "/realizacje",
    options: [
      { id: "a", label: "Kafelki (obecne)" },
      { id: "b", label: "Podkreślenie, które jedzie" },
      { id: "c", label: "Duże słowa jak indeks" },
      { id: "d", label: "Listwa z ramką" },
    ],
  },
  {
    key: "card",
    label: "Karty realizacji",
    path: "/realizacje",
    options: [
      { id: "a", label: "Podpis pod zdjęciem (obecna)" },
      { id: "b", label: "Etykieta jak na rolce" },
      { id: "c", label: "Spec pod zdjęciem" },
      { id: "d", label: "Płyta z marginesem" },
    ],
  },
  {
    key: "flow",
    label: "Od zapytania do faktury",
    path: "/dla-firm",
    anchor: "flow-title",
    options: [
      { id: "a", label: "Oś z kwadratami (obecny)" },
      { id: "b", label: "Schody tonalne" },
      { id: "c", label: "Harmonogram schodkowy" },
      { id: "d", label: "Karta zlecenia" },
    ],
  },
  {
    key: "lokal",
    label: "Realizacje w lokalach",
    path: "/dla-firm",
    anchor: "b2bwork-title",
    options: [
      { id: "a", label: "Dwie karty (obecny)" },
      { id: "b", label: "Kadr z zapowiedzią następnej" },
      { id: "c", label: "Rozwijana rolka" },
      { id: "d", label: "Taśma do przeciągania" },
    ],
  },
] as const satisfies readonly Group[];

export type GroupKey = (typeof groups)[number]["key"];
export type OptionId<K extends GroupKey> = Extract<(typeof groups)[number], { key: K }>["options"][number]["id"];
export type Choices = { [K in GroupKey]: OptionId<K> };

export const defaults = Object.fromEntries(groups.map((g) => [g.key, g.options[0].id])) as Choices;
