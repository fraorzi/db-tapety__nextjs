import { unsplash } from "./site";

// TODO(media, zalecane): zdjęcia stock (Unsplash) jako ilustracja usług — docelowo zdjęcia z realizacji klienta.
export const services = [
  { t: "Tapetowanie", d: "Flizelina, winyl, papier, tekstylia. Jedna ściana albo całe mieszkanie, z dopasowaniem wzoru na każdym łączeniu.", img: unsplash("photo-1577083165633-14ebcdb0f658", 1000) },
  { t: "Przygotowanie ścian", d: "Zdejmowanie starych tapet, szpachlowanie, szlifowanie, gruntowanie. Pod tapetą widać każdą nierówność.", img: unsplash("photo-1780672823896-fc266a8d5ecb", 1000) },
  { t: "Fototapety i murale", d: "Pomiar pod druk na wymiar z zapasem na krzywizny, przygotowanie podłoża, montaż wielkoformatowy.", img: unsplash("photo-1559508551-44bff1de756b", 1000) },
  { t: "Dobór i zamówienie", d: "Pomoc w wyborze wzoru i materiału pod światło i meble, liczenie rolek z zapasem, zamówienie u dostawcy.", img: unsplash("photo-1629772702080-6729491cbad5", 1000) },
] as const;

export type Audience = { t: string; d: string; img: string; href: string; link: string };

// TODO(media, zalecane): zdjęcia stock (Unsplash) — wnętrza nie są realizacjami klienta. Docelowo jego zdjęcia.
export const audiences: readonly Audience[] = [
  { t: "Mieszkania", d: "Sypialnia, salon, pokój dziecka, przedpokój. Jedna ściana albo cały pokój, zwykle w jeden lub dwa dni.", img: unsplash("photo-1780672823896-fc266a8d5ecb", 1400), href: "/wycena", link: "Umów wycenę" },
  { t: "Domy", d: "Większe metraże, wysokie ściany, klatki schodowe. Planuję kolejność pomieszczeń tak, żebyś mógł normalnie mieszkać.", img: unsplash("photo-1780672823983-6ab83c017906", 1400), href: "/wycena", link: "Umów wycenę" },
  { t: "Lokale usługowe", d: "Ściana ekspozycyjna, poczekalnia, wejście. Montaż po godzinach, rano lokal działa.", img: unsplash("photo-1559508551-44bff1de756b", 1400), href: "/dla-firm", link: "Oferta dla firm" },
  { t: "Biura", d: "Sale spotkań, recepcje, ściany z identyfikacją. Fototapety z Waszym projektem albo dobór z katalogów.", img: unsplash("photo-1602364557801-8908351b0c7e", 1400), href: "/dla-firm", link: "Oferta dla firm" },
  { t: "Apartamenty na wynajem", d: "Powtarzalny standard w kilku lokalach, materiały zmywalne, terminy między najmami.", img: unsplash("photo-1676454894072-fcb03c419cfa", 1400), href: "/dla-firm", link: "Oferta dla firm" },
  { t: "Wykończenia pod klucz", d: "Wejście po malarzu, przed meblami. Jedna wycena na kilka mieszkań, współpraca z ekipą wykończeniową.", img: unsplash("photo-1759262151424-7b8ed20a31a6", 1400), href: "/dla-firm", link: "Oferta dla firm" },
];
