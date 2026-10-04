# Plan — etap po v3 (2026-10-04)

## Zrobione
- [x] Usunięty `prefers-reduced-motion` (CSS, `lib/gsap.ts`, 4 komponenty) + zakaz w `AGENTS.md`/`design.md`.
- [x] TODO(media) w `src/data/*` — `wymagane` (stock udający realizacje / osoby brane za klienta) i `zalecane` (ilustracje).

## Agent pomocniczy — branch `chore/tooling-seo-analytics`
- [ ] React Scan (tylko dev) + React Doctor (skrypt `pnpm doctor`)
- [ ] Vercel Web Analytics
- [ ] SEO: `metadataBase`, `sitemap.ts`, `robots.ts`, metadane podstron, JSON-LD `LocalBusiness` z placeholderami

## Ja
- [x] Wideo w `public/video/` (branch `feat/self-hosted-video`): AV1 WebM + H.264 MP4, hero 1080p (wyższej wersji na Pexels brak), proces 1440p tam, gdzie źródło pozwala, przycięty do 12 s; poster z pierwszej klatki; cache 7 dni; `scripts/encode-video.sh`. Zweryfikowane w Chromium i WebKit.
- [ ] Backend formularzy `/wycena` i „zostaw numer”: Server Action, walidacja na serwerze, honeypot, wysyłka na `fo.testowy@gmail.com` (env `QUOTE_TO_EMAIL`)
- [x] Strona 404 (`feat/not-found-page`): faktura tapety z brakującym pasem, wyjścia na `/`, `/realizacje`, `/wycena`; status 404 + noindex
- [x] FAQ (`fix/faq-safari-fallback`): Safari 26 ma `::details-content`, ale nie `interpolate-size` — tam odpowiedź wjeżdża `opacity`/`transform`, w Chromium wysokość animuje się jak dotąd
- [x] OG image + favicon — zrobione w `feat/frames-bands-top-bar` (`src/lib/share-card.tsx`)
- [x] Przegląd dostępności (`fix/a11y-review`): axe-core na 8 stronach × 1440/375, Tab przez 4 strony. Slider „dla kogo” przebudowany z `article[role=tab]` z linkiem w środku na przyciski `aria-expanded` (strzałki przenoszą fokus). Fokus widoczny wszędzie.
- [ ] Kontrast nieaktywnych etapów na `/jak-pracuje` (`opacity: 0.3` → 1,6–2:1) — decyzja użytkownika

## Inspiracja Tubądzin — branch `feat/frames-bands-top-bar`
- [x] `Frame`: podwójna tonalna ramka (paper-3 → deep-2 → zdjęcie), zagnieżdżone squircle 34/26/18; `/realizacje/[slug]` (zdjęcie główne) i `/jak-pracuje` (sticky wideo)
- [x] Pasy tonalne na krawędziach sekcji (`.bands-t` / `.bands-b`, border + inset shadow, bez dodatkowych elementów): Services pod hero, proces compact, flow `/dla-firm`, stopka
- [x] `ProjectCard`: hover wypełnia całą kartę bakłażanem (squircle tła poza układem, bez przesunięć)
- [x] Nawigacja: zamiast docka u dołu przypięty pasek u góry o tym samym układzie co pasek startowy (marka, linki, CTA), bakłażanowy, z pasami pod spodem; na mobile „Menu” rozwija panel pod paskiem
- [x] `design.md`, `AGENTS.md`, `.hallmark/log.json`
- [x] lint, tsc, build, podgląd 1440/375, push

### Review
- Ramka, pasy, hover kart i nowy pasek wdrożone; `Frame.tsx` nowy, dock usunięty z `Header.tsx` i CSS.
- Na mobile CTA z paska przeniesione do panelu menu (na 375 px marka + CTA + „Menu” się nie mieściły).
- Zweryfikowane: lint, tsc, build; zrzuty 1440/375 (`/`, slug, `/jak-pracuje`, `/dla-firm`, menu mobilne), brak poziomego scrolla na 7 stronach, konsola czysta.
- Podgląd na `next start -p 4311`: dev server na 4310 należy do `db-tapety__redesign` i wisiał.
- [x] Punkt 3 we własnej wersji: `WallLayers` na `/jak-pracuje` — przekrój ściany (ściana, grunt, klej, tapeta) nakładany od lewej, schodki z podpisami.

### Runda poprawek
- [x] Usunięty hover wypełniający kartę.
- [x] Estetyka kwadratowa: `Squircle.tsx` usunięty, wszystkie `border-radius` wycięte.
- [x] Kolor główny = bakłażan (`--accent` = `--deep`); aktywne kropki i focus na ciemnym tle w `--on-deep`.
- [x] Ramka 8 → 5 px, ciemna warstwa jaśniejsza (27 → 31%), jasna ciemniejsza (84 → 81%).

## Otwarte pytania
- Resend: użytkownik zakłada konto (fo.testowy@gmail.com), klucz `RESEND_API_KEY` w `.env.local` i Vercel.
- Zdjęcia w formularzu: kompresja w przeglądarce (limit Vercel 4,5 MB) czy Vercel Blob?
