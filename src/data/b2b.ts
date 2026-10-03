import { unsplash } from "./site";

export const segments = [
  { t: "Lokale usługowe", d: "Ściana ekspozycyjna, poczekalnia, wejście. Wchodzę po zamknięciu, rano lokal działa.", img: unsplash("photo-1559508551-44bff1de756b", 1400) },
  { t: "Biura", d: "Sale spotkań, recepcje, ściany z identyfikacją. Fototapeta z Waszym projektem albo dobór z katalogów.", img: unsplash("photo-1602364557801-8908351b0c7e", 1400) },
  { t: "Apartamenty na wynajem", d: "Ten sam standard w kilku lokalach, materiały zmywalne, terminy wpasowane między najmami.", img: unsplash("photo-1676454894072-fcb03c419cfa", 1400) },
  { t: "Deweloperzy i wykończenia", d: "Wejście po malarzu, przed meblami. Jedna wycena na kilka mieszkań, rozliczenie etapami.", img: unsplash("photo-1759262151424-7b8ed20a31a6", 1400) },
  { t: "Architekci i projektanci", d: "Realizuję projekt tak, jak jest narysowany. Zgłaszam, jeśli materiał nie zadziała na danej ścianie, zanim go zamówicie.", img: unsplash("photo-1780672823896-fc266a8d5ecb", 1400) },
] as const;

export const flow = [
  { t: "Zapytanie", d: "Rzuty albo zdjęcia, metraż, termin. Odpowiadam w ciągu dnia roboczego." },
  { t: "Wizja lokalna", d: "Sprawdzam podłoże i dostęp. Po niej wycena z zakresem i harmonogramem." },
  { t: "Materiał", d: "Z Waszego projektu albo mój dobór. Liczę rolki z zapasem, pilnuję numerów partii." },
  { t: "Realizacja", d: "W godzinach, które Wam pasują, także nocą i w weekendy. Codziennie krótki raport." },
  { t: "Odbiór i faktura", d: "Protokół, zdjęcia, zapas materiału z tej samej partii. Faktura VAT." },
] as const;

export const need = [
  { t: "Rzuty lub zdjęcia ścian", d: "Z wymiarami, choćby orientacyjnymi." },
  { t: "Stan podłoża", d: "Świeży tynk, stara farba, płyta g-k. Jeśli nie wiecie, sprawdzę na miejscu." },
  { t: "Okno czasowe", d: "Kiedy lokal jest pusty albo kiedy mogę wejść bez przeszkadzania." },
  { t: "Osoba do kontaktu", d: "Jedna, która podejmuje decyzje o materiale i odbiorze." },
] as const;

export const get = [
  { t: "Jedna wycena na całość", d: "Z rozbiciem na lokale albo pomieszczenia, jeśli tego potrzebujecie." },
  { t: "Harmonogram, którego się trzymam", d: "Terminy ustalone na piśmie. Jeśli coś się przesuwa, wiecie pierwsi." },
  { t: "Praca poza godzinami", d: "Lokal działa normalnie, ja robię swoje po zamknięciu." },
  { t: "Protokół odbioru i zapas", d: "Zdjęcia każdej ściany, zapas tapety do napraw, faktura VAT." },
] as const;
