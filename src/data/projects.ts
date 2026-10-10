import { unsplash } from "./site";

export type ProjectCategory = "Mieszkanie" | "Dom" | "Lokal";

export type Project = {
  slug: string;
  title: string;
  room: string;
  category: ProjectCategory;
  material: string;
  scope: string;
  cover: string;
  alt: string;
  gallery: readonly [string, string, string];
  statement: string;
  body: readonly string[];
};

// TODO(media, wymagane): wszystkie zdjęcia i opisy w tym pliku to stock (Unsplash) i przykładowe teksty przedstawione jako realizacje klienta.
// Przed publikacją wymienić na zdjęcia prawdziwych realizacji albo ukryć /realizacje: cudza praca pokazana jako własna wprowadza klientów w błąd.
// Do uzupełnienia przy prawdziwych realizacjach: miejscowość i czas pracy (pola usunięte z widoku, żeby nie pokazywać placeholderów).
export const projects: readonly Project[] = [
  {
    slug: "salon-ciemna-dzungla",
    title: "Ciemna dżungla w salonie",
    room: "Salon",
    category: "Mieszkanie",
    material: "Flizelina, wzór z raportem 64 cm",
    scope: "Przygotowanie ściany, tapetowanie jednej ściany",
    cover: unsplash("photo-1602364557801-8908351b0c7e", 1800),
    alt: "Salon z ciemną tapetą w tropikalne liście",
    gallery: [
      unsplash("photo-1602364557801-8908351b0c7e", 1200),
      unsplash("photo-1559508551-44bff1de756b", 1600),
      unsplash("photo-1676454894072-fcb03c419cfa", 1600),
    ],
    statement: "Duży wzór na jednej ścianie. Najważniejsze, żeby liście przechodziły przez łączenia bez przesunięcia.",
    body: [
      "Ściana za sofą, cała szerokość salonu. Stara farba trzymała się dobrze, więc wystarczyło zmyć, zagruntować i wyrównać dwa miejsca po kołkach.",
      "Przy wzorze z dużym raportem najwięcej odpadu idzie na dopasowanie. Policzyłem rolki z zapasem na jeden pełny raport na pas, resztę klient oddał do sklepu.",
    ],
  },
  {
    slug: "lazienka-botanika",
    title: "Botanika na ciemnym tle",
    room: "Łazienka",
    category: "Mieszkanie",
    material: "Winyl na flizelinie, odporny na wilgoć",
    scope: "Gruntowanie, tapetowanie strefy nad umywalką",
    cover: unsplash("photo-1759262151424-7b8ed20a31a6", 1200),
    alt: "Łazienka z tapetą botaniczną",
    gallery: [
      unsplash("photo-1759262151424-7b8ed20a31a6", 1200),
      unsplash("photo-1577083165633-14ebcdb0f658", 1600),
      unsplash("photo-1629772702080-6729491cbad5", 1600),
    ],
    statement: "Tapeta w łazience wytrzyma, jeśli materiał jest odporny na wilgoć, a krawędzie dobrze zabezpieczone.",
    body: [
      "Fragment ściany nad umywalką i lustrem, poza strefą bezpośredniego zalewania. Winyl na flizelinie, krawędzie zabezpieczone przy fugach.",
      "Pod tapetą stary tynk po płytkach: dwie warstwy szpachli, szlif, grunt. Bez tego każde wgłębienie byłoby widać pod połyskiem.",
    ],
  },
  {
    slug: "kuchnia-kwiaty-na-granacie",
    title: "Kwiaty na granacie",
    room: "Kuchnia",
    category: "Dom",
    material: "Flizelina zmywalna",
    scope: "Tapetowanie ściany jadalnianej, docinki przy listwach",
    cover: unsplash("photo-1676454894072-fcb03c419cfa", 1200),
    alt: "Półka na tle ciemnej tapety w kwiaty",
    gallery: [
      unsplash("photo-1676454894072-fcb03c419cfa", 1200),
      unsplash("photo-1517196084897-498e0abd7c2d", 1600),
      unsplash("photo-1602364557801-8908351b0c7e", 1600),
    ],
    statement: "Ściana w części jadalnianej, z dala od płyty. Dużo docinania przy półkach i gniazdkach.",
    body: [
      "Kilka gniazdek i półki na jednej ścianie. Każde wycięcie robię po przyklejeniu pasa, przy wyjętej ramce, żeby krawędź schowała się pod osprzętem.",
      "Flizelina zmywalna, bo kuchnia. Klient dostał kawałek z zapasu na ewentualną naprawę.",
    ],
  },
  {
    slug: "sypialnia-jasne-pasy",
    title: "Jasne pasy w sypialni",
    room: "Sypialnia",
    category: "Mieszkanie",
    material: "Papier gładki, wzór pionowy",
    scope: "Przygotowanie czterech ścian, tapetowanie całego pokoju",
    cover: unsplash("photo-1780672823896-fc266a8d5ecb", 1600),
    alt: "Sypialnia z tapetą w delikatne pionowe pasy",
    gallery: [
      unsplash("photo-1780672823896-fc266a8d5ecb", 1200),
      unsplash("photo-1780672823983-6ab83c017906", 1600),
      unsplash("photo-1695624794480-7449b7e5a0b4", 1600),
    ],
    statement: "Cały pokój w pasy. Pion musi się zgadzać na każdej ścianie, bo oko wyłapie pół stopnia.",
    body: [
      "Cztery ściany, dwa okna, drzwi. Zacząłem od ściany bez okna, pion z poziomicy laserowej, a łączenie narożne schowane za szafą.",
      "Papier gładki jest mniej wybaczający niż flizelina: ściany szpachlowane na gładko i dwukrotnie gruntowane.",
    ],
  },
  {
    slug: "lokal-botanika-wypoczynek",
    title: "Botanika w strefie wypoczynku",
    room: "Lokal usługowy",
    category: "Lokal",
    material: "Fototapeta na flizelinie, druk na wymiar",
    scope: "Pomiar pod druk, przygotowanie ściany, montaż poza godzinami otwarcia",
    cover: unsplash("photo-1559508551-44bff1de756b", 2200),
    alt: "Zielony fotel na tle tapety z roślinami",
    gallery: [
      unsplash("photo-1559508551-44bff1de756b", 1200),
      unsplash("photo-1675231693372-8020bfa3daa9", 1600),
      unsplash("photo-1602364557801-8908351b0c7e", 1600),
    ],
    statement: "Fototapeta na wymiar dla lokalu. Pomiar musi uwzględnić krzywizny ścian, inaczej wzór ucieknie.",
    body: [
      "Długa ściana w poczekalni. Pomiar w trzech punktach wysokości, druk z zapasem na każdą krawędź.",
      "Montaż wieczorem, po zamknięciu lokalu, w jeden dzień roboczy. Rano wszystko gotowe do przyjęcia klientów.",
    ],
  },
  {
    slug: "przedpokoj-galazki-boazeria",
    title: "Gałązki nad boazerią",
    room: "Przedpokój",
    category: "Dom",
    material: "Flizelina, wzór drobny",
    scope: "Tapetowanie górnej części ściany nad boazerią",
    cover: unsplash("photo-1780672823983-6ab83c017906", 1200),
    alt: "Tapeta w gałązki nad białą boazerią",
    gallery: [
      unsplash("photo-1780672823983-6ab83c017906", 1200),
      unsplash("photo-1780672823896-fc266a8d5ecb", 1600),
      unsplash("photo-1577083165633-14ebcdb0f658", 1600),
    ],
    statement: "Tapeta styka się z listwą boazerii. Od tej krawędzi zależy, czy całość wygląda porządnie.",
    body: [
      "Górna część ściany w przedpokoju, ponad boazerią montowaną przez stolarza. Docinka na styk z listwą, bez silikonu i bez szczeliny.",
      "Drobny wzór, więc mało odpadu. Cztery ściany zrobione w jeden dzień.",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
