# Design — Damian Bożyk · tapetowanie

Zablokowany system designu dla całej witryny. Każda zmiana strony czyta ten plik; rozszerzaj go zamiast wymyślać per strona. Źródło wartości: `src/app/globals.css` (`:root`).

## Genre

editorial · rzemieślnicze portfolio z celem sprzedażowym. Minimalizm + płynny ruch przy scrollu + prawdziwe wideo. Bez liczników, karuzel automatycznych, rysowanych zastępników.

## Rodziny makrostruktur

- `/` — **Photographic** (wideo wypełnia fold, tekst jako adnotacja) z sekcjami nakładającymi się jak pasy tapety (sticky stack). Poniżej: spec sheet usług, realizacje w nieregularnej siatce, slider paneli „dla kogo”, przypięty proces (wariant compact), FAQ.
- `/realizacje` — **Portfolio Grid**: taby filtrujące + równy, uporządkowany grid.
- `/realizacje/[slug]` — **Photographic**: zdjęcie, meta w spec sheet, opis, galeria.
- `/dla-firm` — **Split Studio**: dyptyki tekst | dowód, naprzemienne; poziomy przebieg zlecenia; CTA jako formularz inline.
- `/jak-pracuje` — **Feature Stack** (wariant full): tekst po lewej, przypięte wideo po prawej, jasne tło, licznik etapów.
- `/wycena` — formularz dwukolumnowy ze stałym opisem po lewej.
- `/polityka-prywatnosci` — Long Document.

## Motyw (custom, bez brandbooka)

Metafora: ściana po gruntowaniu + bakłażan jako kolor główny (przyciski, pasek nawigacji, sekcje ciemne).

- `--paper`      oklch(94.5% 0.006 300) — papier z lekkim lawendowym odcieniem (jak tło tapety w hero)
- `--paper-2`    oklch(89.5% 0.009 300)
- `--paper-3`    oklch(84% 0.012 300)
- `--ink`        oklch(17% 0.014 305)
- `--muted`      oklch(44% 0.016 305)
- `--rule`       oklch(80% 0.012 300)
- `--accent`     oklch(21% 0.045 310) — kolor główny = `--deep` (bakłażan jak pasek nawigacji): CTA, focus, aktywny stan. Fiolet z kwiatu odrzucony (2026-10-04).
- `--accent-ink` oklch(30% 0.055 310) — hover przycisku (jaśniejszy)
- `--frame-out`  oklch(81% 0.013 300), `--frame-in` oklch(31% 0.052 310) — tylko podwójna ramka
- `--deep`       oklch(21% 0.045 310) — bakłażanowa sekcja zamiast czerni
- `--deep-2`     oklch(27% 0.05 310) — dock nawigacji, tło wideo na ciemnym
- Na ciemnym tle aktywny stan i focus w `--on-deep`. Zero gradientów na tle, zero czystej czerni i bieli.

## Typografia

- Display: **Bricolage Grotesque** (Google, zmienne `wght`/`wdth`/`opsz`), nagłówki 700, numeracja 800 w zwężonej szerokości `font-stretch: 85%`. Tracking −0.03…−0.045em. Zawsze roman.
- Body: **Instrument Sans** 400/500.
- Dwie rodziny, bez outliera. Ładowane przez `next/font/google` (subset `latin-ext`).
- Skala: body 1rem; display `clamp(2.6rem, 5vw + 1rem, 5.5rem)`; h2 `clamp(2rem, 3.6vw, 3.8rem)`.

## Kształt i komponenty

- **Kwadratowo**: zero zaokrągleń na całej stronie (przyciski, pola, chipy, taby, karty, obrazy, kropki). Decyzja użytkownika 2026-10-04, zastąpiła squircle.
- Przyciski: wypełnione (`accent` / `ink` / `paper-2`), bez obrysów. Focus: wewnętrzny ring `box-shadow: inset 0 0 0 2px`.
- Nagłówki sekcji: pojedyncza kolumna, bez eyebrow.
- Bez numeracji list i bez pasków postępu. Jedyny wyjątek: licznik `02 / 05` na wideo w `/jak-pracuje` (pięć etapów po ekranie każdy, bez niego łatwo się zgubić). Kolejność pokazują układ i stan aktywny, nie cyfry.
- Obrazy: kwadratowe krawędzie. Hairline `--rule` tylko w spec sheet / FAQ.
- Nav: **Top bar + przypięty pasek** — u góry zwykły pasek (`position: absolute`), który odjeżdża z treścią. Po przewinięciu ~60 % ekranu z góry zjeżdża przypięty pasek o tym samym układzie (marka · linki · CTA), ale bakłażanowy (`--deep`), z jasnym CTA i pasami tonalnymi pod spodem. Na mobile układ też jak u góry: marka + „Menu”; „Menu” rozwija panel pod paskiem (linki, CTA, kontakt). Escape i klik poza zamykają.
- **Podwójna ramka tonalna** (`Frame`): `--frame-out` → `--frame-in` → obraz, po 5 px. Tylko jako wyróżnik: zdjęcie główne w `/realizacje/[slug]`, sticky wideo w `/jak-pracuje`. Nie na kartach w siatkach.
- **Pasy tonalne** (`.bands-t` / `.bands-b`): dwa pasy po 8 px (6 px na mobile) na krawędzi sekcji, schodek tonów między jasnym a bakłażanem — jak brzeg kolejnego pasa tapety. Sekcja pod hero, proces na `/`, przebieg zlecenia w `/dla-firm`, stopka, spód przypiętego paska.
- Hover karty realizacji: tylko lekki zoom zdjęcia. Wypełnianie całej karty tłem odrzucone.
- Footer: **Ft1 Mast-headed** — duży wordmark, kontakt, 4 linki, linia prawna.

## Ruch

- Easing: `--ease: cubic-bezier(0.16, 1, 0.3, 1)`. Czas 250–900 ms.
- Scroll: GSAP ScrollTrigger ze `scrub: 0.8`, animowane tylko `transform` i `opacity` (nigdy `clip-path` z `var()` — to powoduje skoki).
- Jedno wejście orkiestrowane na stronę: hero na `/`, przekrój ściany na `/jak-pracuje` (`WallLayers`: ściana → grunt → klej → tapeta nakładają się od lewej `scaleX`, każda zostawia schodek z podpisem; nie koncentrycznie ze środka). Poza tym obrazy odsłaniają się raz (`data-reveal="clip"`); tekst po prostu jest.
- Bez `prefers-reduced-motion` — decyzja użytkownika (2026-10-04), ruch jest ten sam dla wszystkich.

## Głos CTA

- Główne: „Bezpłatna wycena” → `/wycena`. Drugorzędne: typograficzny link z podkreśleniem.
- Zero wymyślonych liczb, opinii i logotypów. Dane firmy jako widoczne placeholdery z `src/data/site.ts`.
