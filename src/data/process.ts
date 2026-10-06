import type { Step } from "@/components/ProcessPinned";

// Czasy orientacyjne — do potwierdzenia z wykonawcą.
export const processSteps: readonly Step[] = [
  {
    title: "Oględziny i pomiar",
    text: "Przyjeżdżam, mierzę ściany i sprawdzam podłoże. Od tego zależy, czy tapetę można kłaść od razu, czy ściana wymaga pracy.",
    outcome: "Wycena z zakresem prac i termin.",
    time: "Do godziny na miejscu.",
  },
  {
    title: "Dobór wzoru i liczenie rolek",
    text: "Pomagam wybrać tapetę pod światło, meble i sposób użytkowania pokoju. Liczę rolki z zapasem na dopasowanie raportu.",
    outcome: "Lista materiału z numerami partii.",
    time: "Zależnie od dostawcy — do potwierdzenia.",
  },
  {
    title: "Przygotowanie ściany",
    text: "Szpachluję, szlifuję, gruntuję. Pod tapetą widać każdą nierówność, więc tu nie ma skrótów.",
    outcome: "Gładka, zagruntowana ściana gotowa pod każdy materiał.",
    time: "Zwykle jeden dzień z wysychaniem.",
  },
  {
    title: "Montaż",
    text: "Pas przy pasie, na styk. Docinam przy listwach, gniazdkach i oknach, pilnuję pionu i przejścia wzoru przez łączenia.",
    outcome: "Ściana bez widocznych łączeń.",
    time: "Jedna ściana to zwykle jeden dzień.",
  },
  {
    title: "Odbiór i sprzątanie",
    text: "Oglądamy ścianę razem, w dziennym świetle. Zabieram odpady, zostawiam zapas tapety na ewentualną naprawę.",
    outcome: "Czyste pomieszczenie i zapas z tej samej partii.",
    time: "Pół godziny.",
  },
];

/** Skrót na stronę główną: etapy, które najbardziej wpływają na efekt. */
export const processShort: readonly Step[] = [processSteps[0], processSteps[2], processSteps[3], processSteps[4]];

export const faq = [
  {
    q: "Ile trwa tapetowanie pokoju?",
    a: "Zwykle jedna ściana to jeden dzień razem z przygotowaniem. Cały pokój z czterema ścianami i oknami to dwa, trzy dni, zależnie od stanu podłoża i wzoru.",
  },
  {
    q: "Czy trzeba zrywać starą tapetę albo farbę?",
    a: "Starą tapetę tak, zawsze. Farbę tylko wtedy, gdy się łuszczy lub jest lateksowa i śliska. Oceniam to na oględzinach i mówię wprost, co trzeba zrobić.",
  },
  {
    q: "Pomagasz wybrać i zamówić tapetę?",
    a: "Tak. Doradzam materiał (flizelina, winyl, papier, tekstylia), liczę rolki i mogę zamówić tapetę za Ciebie. Możesz też przyjść z własną.",
  },
  {
    q: "Kładziesz fototapety i murale na wymiar?",
    a: "Tak. Robię pomiar pod druk z zapasem na krzywizny ścian, przygotowuję podłoże i montuję. Przy dużych formatach ustalamy wszystko przed złożeniem zamówienia.",
  },
  {
    q: "Jak wygląda wycena?",
    a: "Wyślij zdjęcie ściany w dziennym świetle, przybliżone wymiary i wzór, który Ci się podoba. Odpiszę z orientacyjnym kosztem i terminem. Ostateczna cena po oględzinach.",
  },
  {
    q: "Pracujesz też w lokalach i biurach?",
    a: "Tak, również poza godzinami otwarcia, żeby nie wstrzymywać pracy. Szczegóły na stronie Dla firm.",
  },
] as const;
