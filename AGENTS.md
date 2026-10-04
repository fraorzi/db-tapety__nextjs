# Damian Bożyk — strona firmy tapeciarskiej

Strona dla firmy Damiana Bożyka (chrzestny właściciela repo). Etap: **redesign v3 w Next.js, treści i dane klienta jako placeholdery**. Kontekst decyzji, gust użytkownika i otwarte pytania: [`docs/HANDOFF.md`](docs/HANDOFF.md). System designu (kolory, typografia, rodziny układów, zasady ruchu): [`design.md`](design.md). Przeczytaj oba przed zmianą projektu.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind 4 (tylko tokeny w `@theme`, style w `src/app/globals.css`) · GSAP + ScrollTrigger (`@gsap/react`) · Lenis. Menedżer pakietów: pnpm.

```bash
pnpm dev     # http://localhost:4310 (port 3000 bywa zajęty przez inny projekt)
pnpm lint && pnpm exec tsc --noEmit && pnpm build
```

## Struktura

- `src/app/` — strony: `/`, `/realizacje` (taby po pomieszczeniu, `WorkGrid.tsx`), `/realizacje/[slug]`, `/dla-firm` (`SegmentPicker.tsx`), `/jak-pracuje`, `/wycena` (formularz bez backendu, `QuoteForm.tsx`; `?tel=` wstępnie wypełnia kontakt), `/polityka-prywatnosci` (szkic RODO, pola do uzupełnienia w `<mark>`).
- `src/data/` — jedyne miejsce z treścią: `site.ts` (dane firmy, nawigacja, adresy mediów), `projects.ts` (realizacje), `process.ts` (etapy pracy z polami `outcome`/`time`, FAQ), `home.ts` (usługi, „dla kogo”), `b2b.ts` (treści `/dla-firm`).
- `src/components/` — `Header` (statyczny pasek u góry + dock u dołu ekranu po scrollu, rozwijany w panel menu), `Footer` (bakłażanowe CTA + stopka Ft1 z dużym wordmarkiem; props `title/text/cta`), `Squircle` (+ `SquircleLink`) — kształt przycisków/kart przez `clip-path: path()` z superelipsy, `home/Hero` (przyklejony fold; następna sekcja nasuwa się, wideo tylko `transform/opacity`), `home/Services` (spec sheet), `home/Audiences` (slider z rozsuwanymi panelami), `ProcessPinned` (`variant="compact"` na `/`: pin + lista akordeonowa na ciemnym tle; `variant="full"` na `/jak-pracuje`: tekst z faktami po lewej, sticky wideo z licznikiem po prawej), `ProjectCard`, `Faq`, `ScrollMotion` (tylko `data-reveal="clip"`), `SmoothScroll` (Lenis).
- `src/app/globals.css` — tokeny (`:root`, OKLCH), wszystkie klasy komponentów, media queries (`max-width: 900px`). Fonty przez `next/font/google` w `layout.tsx` (Bricolage Grotesque + Instrument Sans).
- `.hallmark/log.json` — rejestr wyborów ze skilla `hallmark` (nie powtarzać tych samych kombinacji).
- `makiety/` — makiety HTML z poprzedniego etapu (kierunek D i odrzucone A–C). Tylko do wglądu.

## Zasady

- Treści strony i rozmowa po polsku.
- Zdjęcia i wideo: stock z licencją (Unsplash, Pexels) jako zastępstwo, docelowo zdjęcia realizacji klienta. Cudze realizacje odpadają.
- Dane firmy (telefon, e-mail, region, nazwa, liczby, opinie, czas pracy) tylko od użytkownika; do tego czasu widoczny placeholder w `src/data/site.ts`. Nie wymyślać liczb ani opinii.
- Nowe animacje: najpierw `data-reveal` w `ScrollMotion`, osobny `useGSAP` tylko gdy sekcja ma własną logikę (jak `Hero`, `ProcessPinned`). Animować tylko `transform` i `opacity` (clip-path ze zmiennymi CSS skakał). ScrollTrigger `end` w px, nie `vh`. Nie dodawać `prefers-reduced-motion` (decyzja użytkownika).
- Przyciski, chipy, taby, karty: `Squircle`/`SquircleLink`, nie `border-radius`. `Squircle` przyjmuje w `as` tylko nazwy tagów (działa z Server Components); linki przez `SquircleLink`.
- Nie wracać do: niebieskiego akcentu, numeracji list i pasków postępu (wyjątek w `design.md`), nawigacji zwijanej w pigułkę u góry, pigułkowych przycisków, akapitów z odsłanianiem słów, kart na całą szerokość w `/realizacje`, układu z makiety `makiety/index.html`.
- Przed oddaniem: `pnpm lint`, `tsc`, `pnpm build`, podgląd 1440 i 375 px, brak poziomego scrolla, konsola bez błędów.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
