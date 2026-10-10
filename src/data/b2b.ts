import { unsplash } from "./site";

// TODO(media, zalecane): zdjęcia stock (Unsplash), docelowo realizacje klienta dla firm.
export const segments = [
  { t: "Lokale usługowe", d: "Ściana ekspozycyjna, poczekalnia, wejście. Pracuję po zamknięciu, rano lokal jest gotowy.", img: unsplash("photo-1559508551-44bff1de756b", 1400) },
  { t: "Biura", d: "Sale spotkań, recepcje, ściany z identyfikacją. Fototapeta z Waszym projektem albo dobór z katalogów.", img: unsplash("photo-1602364557801-8908351b0c7e", 1400) },
  { t: "Apartamenty na wynajem", d: "Ten sam standard w kilku mieszkaniach, zmywalne materiały, terminy między najmami.", img: unsplash("photo-1676454894072-fcb03c419cfa", 1400) },
  { t: "Deweloperzy i wykończenia", d: "Wejście po malarzu, przed meblami. Jedna wycena na kilka mieszkań, rozliczenie etapami.", img: unsplash("photo-1759262151424-7b8ed20a31a6", 1400) },
  { t: "Architekci i projektanci", d: "Kładę tapetę zgodnie z projektem. Jeśli materiał nie sprawdzi się na danej ścianie, mówię o tym przed zamówieniem.", img: unsplash("photo-1780672823896-fc266a8d5ecb", 1400) },
] as const;

export const flow = [
  { t: "Zapytanie", d: "Rzuty albo zdjęcia, metraż, termin. Odpowiadam w ciągu dnia roboczego." },
  { t: "Wizja lokalna", d: "Sprawdzam podłoże i dostęp. Potem wysyłam wycenę z zakresem prac i harmonogramem." },
  { t: "Materiał", d: "Według Waszego projektu albo mojego doboru. Liczę rolki z zapasem i pilnuję, żeby były z jednej partii." },
  { t: "Realizacja", d: "W godzinach, które Wam pasują, także wieczorem i w weekendy. Po każdym dniu krótka informacja, co jest zrobione." },
  { t: "Odbiór i faktura", d: "Protokół odbioru, zdjęcia i zapas tapety z tej samej partii. Faktura VAT." },
] as const;

export const need = [
  { t: "Rzuty lub zdjęcia ścian", d: "Z wymiarami, choćby orientacyjnymi." },
  { t: "Stan podłoża", d: "Świeży tynk, stara farba, płyta g-k. Jeśli nie wiecie, sprawdzę na miejscu." },
  { t: "Okno czasowe", d: "Kiedy lokal jest pusty albo kiedy mogę wejść bez przeszkadzania." },
  { t: "Osoba do kontaktu", d: "Jedna, która podejmuje decyzje o materiale i odbiorze." },
] as const;

export const get = [
  { t: "Jedna wycena na całość", d: "Z rozbiciem na lokale albo pomieszczenia, jeśli tego potrzebujecie." },
  { t: "Harmonogram na piśmie", d: "Jeśli coś się przesuwa, dowiadujecie się od razu, a nie w dniu montażu." },
  { t: "Praca poza godzinami", d: "Pracuję po zamknięciu, w ciągu dnia lokal działa normalnie." },
  { t: "Protokół odbioru i zapas", d: "Zdjęcia każdej ściany, zapas tapety do napraw, faktura VAT." },
] as const;
