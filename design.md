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

Metafora: ściana po gruntowaniu + fiolet kwiatu z wideo w hero (próbka z klatek: oklch ≈ 51% 0.13 322).

- `--paper`      oklch(94.5% 0.006 300) — papier z lekkim lawendowym odcieniem (jak tło tapety w hero)
- `--paper-2`    oklch(89.5% 0.009 300)
- `--paper-3`    oklch(84% 0.012 300)
- `--ink`        oklch(17% 0.014 305)
- `--muted`      oklch(44% 0.016 305)
- `--rule`       oklch(80% 0.012 300)
- `--accent`     oklch(52% 0.15 322) — fiolet z kwiatu w wideo hero, tylko CTA i aktywny stan
- `--accent-ink` oklch(42% 0.14 322)
- `--deep`       oklch(21% 0.045 310) — bakłażanowa sekcja zamiast czerni
- `--deep-2`     oklch(27% 0.05 310) — dock nawigacji, tło wideo na ciemnym
- Akcent ≤ 5 % widoku. Zero gradientów na tle, zero czystej czerni i bieli.

## Typografia

- Display: **Bricolage Grotesque** (Google, zmienne `wght`/`wdth`/`opsz`), nagłówki 700, numeracja 800 w zwężonej szerokości `font-stretch: 85%`. Tracking −0.03…−0.045em. Zawsze roman.
- Body: **Instrument Sans** 400/500.
- Dwie rodziny, bez outliera. Ładowane przez `next/font/google` (subset `latin-ext`).
- Skala: body 1rem; display `clamp(2.6rem, 5vw + 1rem, 5.5rem)`; h2 `clamp(2rem, 3.6vw, 3.8rem)`.

## Kształt i komponenty

- **Squircle** zamiast pigułek i zwykłych zaokrągleń na elementach klikalnych: `clip-path: path()` liczony z superelipsy (`src/components/Squircle.tsx`), fallback `border-radius`. Promień 14 px (przyciski), 10 px (chipy, taby), 18 px (karty).
- Przyciski: wypełnione (`accent` / `ink` / `paper-2`), bez obrysów. Focus: wewnętrzny ring `box-shadow: inset 0 0 0 2px`.
- Nagłówki sekcji: pojedyncza kolumna, bez eyebrow.
- Bez numeracji list i bez pasków postępu. Jedyny wyjątek: licznik `02 / 05` na wideo w `/jak-pracuje` (pięć etapów po ekranie każdy, bez niego łatwo się zgubić). Kolejność pokazują układ i stan aktywny, nie cyfry.
- Obrazy: zdjęcia realizacji w ramkach squircle 18 px na stronach, 4 px na gridzie portfolio. Hairline `--rule` tylko w spec sheet / FAQ.
- Nav: **Dock** — u góry zwykły pasek (`position: absolute`), który odjeżdża z treścią. Po przewinięciu ~60 % ekranu u dołu, na środku, wysuwa się dock (squircle, `--deep-2`): „Menu” + „Bezpłatna wycena”. „Menu” rozwija dock w górę w panel z linkami i kontaktem. Dock chowa się nad stopką (tam jest własne CTA). Ten sam panel na desktopie i mobile; na mobile „Menu” w górnym pasku też go otwiera. Escape i klik poza zamykają.
- Footer: **Ft1 Mast-headed** — duży wordmark, kontakt, 4 linki, linia prawna.

## Ruch

- Easing: `--ease: cubic-bezier(0.16, 1, 0.3, 1)`. Czas 250–900 ms.
- Scroll: GSAP ScrollTrigger ze `scrub: 0.8`, animowane tylko `transform` i `opacity` (nigdy `clip-path` z `var()` — to powoduje skoki).
- Jedno wejście orkiestrowane (hero). Poza tym obrazy odsłaniają się raz (`data-reveal="clip"`); tekst po prostu jest.
- `prefers-reduced-motion`: brak pinów, brak paralaksy, przejścia ≤ 150 ms.

## Głos CTA

- Główne: „Bezpłatna wycena” → `/wycena`. Drugorzędne: typograficzny link z podkreśleniem.
- Zero wymyślonych liczb, opinii i logotypów. Dane firmy jako widoczne placeholdery z `src/data/site.ts`.
