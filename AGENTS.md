# Damian Bożyk — strona firmy tapeciarskiej

Strona dla firmy Damiana Bożyka (chrzestny właściciela repo). Etap: **redesign v3 w Next.js, treści i dane klienta jako placeholdery**. Kontekst decyzji, gust użytkownika i otwarte pytania: [`docs/HANDOFF.md`](docs/HANDOFF.md). System designu (kolory, typografia, rodziny układów, zasady ruchu): [`design.md`](design.md). Przeczytaj oba przed zmianą projektu.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind 4 (style jako klasy w komponentach, tokeny w `@theme`) · GSAP + ScrollTrigger (`@gsap/react`) · Lenis. Menedżer pakietów: pnpm.

```bash
pnpm dev     # http://localhost:4310 (port 3000 bywa zajęty przez inny projekt)
pnpm lint && pnpm exec tsc --noEmit && pnpm build
```

## Struktura

- `src/app/` — tylko trasy, składane z sekcji: `/`, `/realizacje`, `/realizacje/[slug]`, `/dla-firm`, `/jak-pracuje`, `/wycena` (`?tel=` wstępnie wypełnia kontakt), `/polityka-prywatnosci` (szkic RODO, luki w `<mark>`), `not-found`, obrazki OG/ikony.
- `src/data/` — jedyne miejsce z treścią: `site.ts` (dane firmy, nawigacja, adresy mediów), `projects.ts` (realizacje), `process.ts` (etapy pracy, typ `Step`, FAQ), `home.ts` (usługi, „dla kogo”), `b2b.ts` (treści `/dla-firm`).
- `src/styles/` — `globals.css` (wejście, importowany w `layout.tsx`), `theme.css` (tokeny `@theme`: kolory OKLCH, rozmiary tekstu, odstępy, breakpointy, cienie), `base.css` (style elementów HTML, Lenis, kolor płótna), `utilities.css` (własne utility i warianty: `tone-deep`, `bands-t/-b/-y`, `menu-reveal`, `bg-hero-scrim`, `can-hover:`, `no-hover:`, `icon-hover:`).
- `src/components/ui/` — klocki bez treści: `Button` (warianty `primary` / `ink` / `soft` / `light` / `inverse`, rozmiary `sm` / `md` / `lg` / `icon`; z `href` renderuje link), `TextLink` (link z podkreśleniem, `active`), `Arrow` i `Chevron` (jedyne ikony, SVG), `Separator` (kwadrat w tekście), `Frame` (podwójna ramka tonalna), `Media` + `MediaZoom` (kadr na zdjęcie, zoom przy hoverze), `SectionHeading`, `Input` (pole „zostaw numer”, `tone`), `SliderControls`, `VideoSources`.
- `src/components/layout/` — `Header/` (`Header`: stan i efekty; `NavRow`: wiersz marka · linki · CTA, ten sam u góry i w przypiętym bakłażanowym pasku; `MobileMenu`: jasny panel na cały ekran, linki wjeżdżają z boku, scroll blokuje `lockScroll`; `MenuIcon`), `Footer/` (bakłażanowe CTA z polem „zostaw numer” + stopka Ft1 z uciętym wordmarkiem; props `title/text/cta`), `PageIntro` (h1 + opis na górze podstrony).
- `src/components/motion/` — `SmoothScroll` (Lenis, `scrollTo`, `lockScroll`), `ScrollMotion` (jedyne wspólne wejście: `data-reveal="clip"`).
- `src/components/sections/` — sekcje stron:
  - `home/` — `Hero` (przyklejony fold; następna sekcja nasuwa się, wideo tylko `transform/opacity`), `Services` (duże wiersze; przy hoverze zdjęcie wjeżdża jak pas), `Work` + `WorkMotion` (mozaika z etykietami, wejście i paralaksa), `Audiences` (slider z rozsuwanymi panelami).
  - `process/` — `ProcessCompact` (`/`: wideo w `Frame`, etapy jako tonalne pasy przełączane kliknięciem, inaczej niż FAQ), `ProcessFull` (`/jak-pracuje`: fakty po lewej, sticky wideo z licznikiem), wspólne `useProcessSteps` i `ProcessVideos`, `WallLayers` (wejście na `/jak-pracuje`: przekrój ściany).
  - `projects/` — `WorkGrid` (siatka + wejście i paralaksa kart, nie w `ScrollMotion`), `RoomTabs` (taby z jadącym podkreśleniem), `ProjectCard`.
  - `b2b/` — `B2bHero`, `SegmentPicker`, `Flow` (schody tonalne), `Terms`, `LokalSlider` (kadr z zapowiedzią następnej w szarości), `CallbackSection`.
  - `quote/` — `QuoteForm` (bez backendu), `Field` (`Field`, `TextInput`, `TextArea`, `Chips`), `PhotoDrop`.
  - `Faq.tsx`.
- `src/lib/` — `cn` (sklejanie klas), `gsap` (rejestracja pluginów), `share-card` (OG i ikony; kolory jako hex, bo Satori nie bierze OKLCH). Fonty OG w `src/fonts/`, w stronie przez `next/font/google` w `layout.tsx` (Archivo z osią `wdth` jako `--font-archivo`, Instrument Sans jako `--font-instrument`).
- `public/video/` — wideo hostowane u nas: AV1 w WebM + H.264 w MP4 (fallback), poster hero w WebP. Nowe nagrania kodować przez `scripts/encode-video.sh` (wymaga `ffmpeg` z `libsvtav1`), w kodzie przez `videos` w `site.ts` i `<VideoSources>`.
- `.hallmark/log.json` — rejestr wyborów ze skilla `hallmark` (nie powtarzać tych samych kombinacji).
- `makiety/` — makiety HTML z poprzedniego etapu (kierunek D i odrzucone A–C). Tylko do wglądu.

## Style (Tailwind 4)

- Klasy Tailwinda w JSX. Długie listy dzielić przez `cn(...)` na linie z komentarzem (układ, stan, mobile). Wartości dynamiczne (np. indeks w schodach) przez `style`, bo Tailwind nie widzi klas sklejanych z `${}`.
- Tylko tokeny z `theme.css`: domyślna paleta, skala tekstu i breakpointy Tailwinda są wyłączone. Nowy kolor/odstęp najpierw jako token, potem klasa (`bg-paper-2`, `px-page`, `mt-stack`, `py-section`, `text-h2`).
- Desktop domyślnie, mobile przez `max-md:` (do 900 px). Inne breakpointy: `xl:` / `max-xl:` (1400 px). `hover:` w Tailwind 4 działa tylko na urządzeniach z hoverem.
- Ciemna sekcja: `tone-deep` (tło, tekst, jasny fokus przez `--focus`, odwrócone pasy). Pasy na krawędziach: `bands-t`, `bands-b`, obie naraz `bands-y`.
- Dwie utility zmieniające tę samą właściwość na jednym elemencie bez wariantu (np. `relative` i `absolute`) to błąd: kolejność w CSS nie zależy od kolejności w `className`. Stąd `Media fill`, a `Frame` dostaje `position` z zewnątrz.
- Elementy, które GSAP animuje przez `transform`, nie dostają `scale-*`/`translate-*` z Tailwinda (to osobne właściwości CSS, złożyłyby się z animacją); stały stan jako `transform-[...]`.
- Haki dla GSAP i JS jako atrybuty `data-*` (`data-step`, `data-tile`, `data-card`…), nie klasy. Stany przełączane przez `data-on` / `data-open` i warianty `data-on:` / `group-data-open/bar:`.

## Zasady

- Treści strony i rozmowa po polsku.
- Zdjęcia i wideo: stock z licencją (Unsplash, Pexels) jako zastępstwo, docelowo zdjęcia realizacji klienta. Cudze realizacje odpadają.
- Dane firmy (telefon, e-mail, region, nazwa, liczby, opinie, czas pracy) tylko od użytkownika; do tego czasu widoczny placeholder w `src/data/site.ts`. Nie wymyślać liczb ani opinii.
- Nowe animacje: najpierw `data-reveal` w `ScrollMotion`, osobny `useGSAP` tylko gdy sekcja ma własną logikę (jak `Hero`, `useProcessSteps`). Animować tylko `transform` i `opacity` (clip-path ze zmiennymi CSS skakał). ScrollTrigger `end` w px, nie `vh`. Nie dodawać `prefers-reduced-motion` (decyzja użytkownika).
- Ikony i separatory nigdy jako znaki (→, ›, ×, ✓, ★, ·, •…), także nie w CSS `content`. Proste kształty jako `span`/`div` z tłem (`Separator`, `MenuIcon`, plus w FAQ), złożone jako SVG (`Arrow`, `Chevron` w `src/components/ui/`). JSX pilnuje reguła `no-restricted-syntax` w `eslint.config.mjs`.
- Sierotki: po jednoliterowym słowie (a, i, o, u, w, z) twarda spacja U+00A0 zamiast zwykłej, w danych i w JSX. Pilnuje `no-restricted-syntax` w `eslint.config.mjs`.
- Estetyka kwadratowa: żadnego `border-radius` ani `clip-path` z zaokrągleniami. Kolor główny to bakłażan (`accent` = `deep`), nie fiolet.
- Nie wracać do: niebieskiego ani fioletowego akcentu, zaokrągleń (squircle też), hovera wypełniającego całą kartę tłem, numeracji list i pasków postępu (wyjątek w `design.md`), nawigacji zwijanej w pigułkę u góry, pigułkowych przycisków, akapitów z odsłanianiem słów, kart na całą szerokość w `/realizacje`, układu z makiety `makiety/index.html`.
- Przed oddaniem: `pnpm lint`, `tsc`, `pnpm build`, podgląd 1440 i 375 px, brak poziomego scrolla, konsola bez błędów.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
