# Damian Bożyk — strona firmy tapeciarskiej

Strona dla firmy Damiana Bożyka (chrzestny właściciela repo). Etap: **redesign v3 w Next.js, treści i dane klienta jako placeholdery**. Kontekst decyzji, gust użytkownika i otwarte pytania: [`docs/HANDOFF.md`](docs/HANDOFF.md). System designu (kolory, typografia, rodziny układów, zasady ruchu): [`design.md`](design.md). Przeczytaj oba przed zmianą projektu.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind 4 (tylko tokeny w `@theme`, style w `src/app/globals.css`) · GSAP + ScrollTrigger (`@gsap/react`) · Lenis. Menedżer pakietów: pnpm.

```bash
pnpm dev     # http://localhost:4310 (port 3000 bywa zajęty przez inny projekt)
pnpm lint && pnpm exec tsc --noEmit && pnpm build
```

## Struktura

- `src/app/` — strony: `/`, `/realizacje` (taby po pomieszczeniu z jadącym podkreśleniem, `WorkGrid.tsx`), `/realizacje/[slug]`, `/dla-firm` (`SegmentPicker.tsx`, `Flow.tsx`: schody tonalne rosnące przy wejściu w widok, `LokalSlider.tsx`: kadr z zapowiedzią następnej realizacji), `/jak-pracuje`, `/wycena` (formularz bez backendu, `QuoteForm.tsx`; `?tel=` wstępnie wypełnia kontakt), `/polityka-prywatnosci` (szkic RODO, pola do uzupełnienia w `<mark>`).
- `src/data/` — jedyne miejsce z treścią: `site.ts` (dane firmy, nawigacja, adresy mediów), `projects.ts` (realizacje), `process.ts` (etapy pracy z polami `outcome`/`time`, FAQ), `home.ts` (usługi, „dla kogo”), `b2b.ts` (treści `/dla-firm`).
- `src/components/` — `Header` (statyczny pasek u góry + przypięty bakłażanowy pasek o tym samym układzie po scrollu; na mobile „Menu” rozwija panel), `Frame` (podwójna ramka tonalna wokół zdjęcia/wideo), `WallLayers` (wejście na `/jak-pracuje`: przekrój ściany z warstw), `Footer` (bakłażanowe CTA + stopka Ft1 z dużym wordmarkiem; props `title/text/cta`), pasy tonalne na krawędziach sekcji: klasy `.bands-t` / `.bands-b`, `home/Hero` (przyklejony fold; następna sekcja nasuwa się, wideo tylko `transform/opacity`), `home/Services` (duże wiersze; przy hoverze zdjęcie wjeżdża jak przyklejany pas), `home/Work` (mozaika z etykietami), `home/Audiences` (slider z rozsuwanymi panelami), `ProcessPinned` (`variant="compact"` na `/`: bez pinu, wideo w `Frame`, lista akordeonowa na ciemnym tle przełączana kliknięciem; `variant="full"` na `/jak-pracuje`: tekst z faktami po lewej, sticky wideo z licznikiem po prawej), `ProjectCard` (podpis jako etykieta wcięta w róg zdjęcia), `Arrow` i `Chevron` (jedyne ikony, SVG), `Faq`, `ScrollMotion` (tylko `data-reveal="clip"`), `SmoothScroll` (Lenis).
- `src/app/globals.css` — tokeny (`:root`, OKLCH), wszystkie klasy komponentów, media queries (`max-width: 900px`). Fonty przez `next/font/google` w `layout.tsx` (Archivo z osią `wdth`, nagłówki w `font-stretch: 78%` + Instrument Sans). Obrazek OG bierze statyczne pliki z `src/fonts/`.
- `public/video/` — wideo hostowane u nas: AV1 w WebM + H.264 w MP4 (fallback), poster hero w WebP. Nowe nagrania kodować przez `scripts/encode-video.sh` (wymaga `ffmpeg` z `libsvtav1`), w kodzie przez `videos` w `site.ts` i `<VideoSources>`.
- `.hallmark/log.json` — rejestr wyborów ze skilla `hallmark` (nie powtarzać tych samych kombinacji).
- `makiety/` — makiety HTML z poprzedniego etapu (kierunek D i odrzucone A–C). Tylko do wglądu.

## Zasady

- Treści strony i rozmowa po polsku.
- Zdjęcia i wideo: stock z licencją (Unsplash, Pexels) jako zastępstwo, docelowo zdjęcia realizacji klienta. Cudze realizacje odpadają.
- Dane firmy (telefon, e-mail, region, nazwa, liczby, opinie, czas pracy) tylko od użytkownika; do tego czasu widoczny placeholder w `src/data/site.ts`. Nie wymyślać liczb ani opinii.
- Nowe animacje: najpierw `data-reveal` w `ScrollMotion`, osobny `useGSAP` tylko gdy sekcja ma własną logikę (jak `Hero`, `ProcessPinned`). Animować tylko `transform` i `opacity` (clip-path ze zmiennymi CSS skakał). ScrollTrigger `end` w px, nie `vh`. Nie dodawać `prefers-reduced-motion` (decyzja użytkownika).
- Ikony i separatory nigdy jako znaki (→, ›, ×, ✓, ★, ·, •…), także nie w CSS `content`. Proste kształty jako `span`/`div` albo pseudo-element z tłem (separator `.sep`, burger, plus w FAQ), złożone jako SVG (`Arrow`, `Chevron` w `src/components/`). JSX pilnuje reguła `no-restricted-syntax` w `eslint.config.mjs`.
- Estetyka kwadratowa: żadnego `border-radius` ani `clip-path` z zaokrągleniami. Kolor główny to bakłażan (`--accent` = `--deep`), nie fiolet.
- Nie wracać do: niebieskiego ani fioletowego akcentu, zaokrągleń (squircle też), hovera wypełniającego całą kartę tłem, numeracji list i pasków postępu (wyjątek w `design.md`), nawigacji zwijanej w pigułkę u góry, pigułkowych przycisków, akapitów z odsłanianiem słów, kart na całą szerokość w `/realizacje`, układu z makiety `makiety/index.html`.
- Przed oddaniem: `pnpm lint`, `tsc`, `pnpm build`, podgląd 1440 i 375 px, brak poziomego scrolla, konsola bez błędów.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
