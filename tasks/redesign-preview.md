# Podgląd redesignu — branch `feat/redesign-preview` (2026-10-04)

Worktree `../db-tapety__preview`, dev na `:4320`. Panel „Warianty” w lewym dolnym rogu przełącza propozycje na żywej stronie (zapis w `localStorage`). Litera A to zawsze stan obecny.

## Zrobione
- [x] Infrastruktura: `src/preview/` (`options.ts` lista grup, `store.tsx` stan + `Variant` + `data-pv-*` na `<html>`, `PreviewPanel.tsx`, `preview.css` ze wszystkimi stylami wariantów)
- [x] Fonty: 5 par (Fraunces + Hanken Grotesk, Instrument Serif + Geist, Archivo wąskie + Public Sans, Familjen Grotesk + Literata, Young Serif + Albert Sans), ładowane bez preloadu
- [x] Przycisk główny: 4 wersje jasnej ramki (na zewnątrz, podwójna, pasy u dołu, linia wewnątrz)
- [x] Strzałka: komponent `Arrow` zamiast znaku `→`/`←` wszędzie; 4 nowe kształty
- [x] „Jedna osoba…”: pasy tapety, stos kart, duże wiersze z wklejanym zdjęciem
- [x] „Wybrane realizacje”: obecny ciaśniej, mozaika, przejazd w poziomie, dwie kolumny z paralaksą
- [x] „Dla kogo pracuję”: ramka wokół slidera / tylko na otwartym panelu
- [x] „Jak pracuję” (/): bęben, jeden etap naraz, stos kartek; wideo w podwójnej ramce
- [x] `/realizacje`: taby (podkreślenie, duże słowa, listwa) i karty (etykieta, spec, płyta)
- [x] „Od zapytania do faktury”: schody tonalne, harmonogram schodkowy, karta zlecenia
- [x] „Realizacje w lokalach”: kadr z zapowiedzią następnej, rozwijana rolka, taśma do przeciągania
- [x] lint, tsc, build; zrzuty 1440 i 375 px, poziomy scroll 0 we wszystkich wariantach

## Po decyzji użytkownika
- [ ] Przenieść wybrane warianty do właściwych komponentów i `globals.css`, usunąć `src/preview/` i pozostałe warianty
- [ ] Zaktualizować `design.md` (fonty, przycisk, ramka), `AGENTS.md`, `.hallmark/log.json`

## Review
- Na mobile warianty z pinem (proces, przejazd w poziomie) przechodzą w zwykłą listę / przewijaną taśmę, tak jak obecna wersja.
- W danych jest tylko jedna realizacja z kategorii „Lokal”, więc slider w `/dla-firm` pokazuje ją jako pierwszą, a po niej pozostałe.
- Błąd zastany na main: przycisk „Bezpłatna wycena” na `/jak-pracuje` ma inline `gridColumn: "6 / span 7"` i na 375 px wychodzi poza ekran.
