# Plan — kontener szerokości (2026-10-05, branch `feat/layout-container`)

Tła sekcji, pasy, hero z wideo i paski nawigacji zostają na całą szerokość. Ograniczona jest tylko treść: boczny padding rośnie, gdy ekran jest szerszy niż kontener.

## Wdrożenie
- [x] Tokeny w `:root`: `--container: 90rem` (1440 px treści, MacBooki), w `@media (min-width: 1800px)` `--container: 105rem` (1680 px, monitory 1920+); `--pad-x: max(var(--gutter), (100% - var(--container)) / 2)`
- [x] Boczny padding `var(--gutter)` → `var(--pad-x)` w `.wrap`, `.nav__row`, `.hero__copy`, `.phero`, `.nf`, `.doc` (odstępy kolumn zostają na `--gutter`)
- [x] Wordmark w stopce: `font-size: min(17.5vw, var(--container) * 0.175)`, żeby nie wychodził poza kontener na 2560
- [ ] Pominięte: `sizes` obrazków (na szerokich ekranach `vw` lekko zawyża rozmiar, bez wpływu na wygląd)
- [x] Sprawdzić 375, 1280, 1470, 1512, 1728, 1920, 2560; lint, tsc, build

### Review
- Treść (zmierzona w `.wrap`, `.nav__row`, `.phero`, `.doc`): 1470 px: 1376 (margines 47), 1728: 1440 (144), 1920: 1680 (120), 2560: 1680 (440), 375: bez zmian (16).
- Bez poziomego scrolla na 8 stronach w 7 szerokościach. W konsoli tylko 404 na `/_vercel/insights/script.js`, który istnieje tylko na Vercelu (stan sprzed zmiany).
- lint, tsc, build OK.

## Poprawka: plus/minus w FAQ i w procesie na `/`
- [x] Linie 2 px zamiast 1.5 px, wymiary w pełnych px (14 × 2), bez `translate: -50%`
- Przyczyna (hipoteza, w headless nie da się odtworzyć migotania): `translate` robił z linii warstwę z transformacją, której przeglądarka nie dociąga do pikseli. Linia 1.5 px przesunięta o 0.75 px przy płynnym scrollu Lenisa (ułamkowe pozycje) co klatkę inaczej się wygładzała.
- [x] `top` ikon przez `round(…, 1px)` (było 30.53 px z `0.5lh`)
- [x] Burger: linie 2 px w pudełku 16 × 10 px, przesunięcie 4 px
- [x] `.ulink`: `width: fit-content`; w gridzie bez `justify-items: start` link „Zadaj pytanie” rozciągał się na całą kolumnę. Audyt wszystkich `.ulink` na 8 stronach (1440, 375): po poprawce żaden nie jest szerszy niż tekst ze strzałką
- Audyt elementów z transformacją na ułamkowych pozycjach: reszta to stany animacji GSAP, zdjęcia ze skalą, ukryty pasek `.bar` i obrócone etykiety `.aud__vt`, `.wl__label`. Bez poprawek

# Plan — poprawki wizualne (2026-10-05, branch `feat/visual-polish`)

## Wdrożenie
- [x] `/realizacje`: etykieta karty w ramce, wysunięta poza zdjęcie w odstęp siatki
- [x] `.sep`: kwadrat wyśrodkowany względem tekstu
- [x] Taby: kolor podkreślenia już był `--accent` = `--deep` (ten sam co pasek i stopka), bez zmian
- [x] Taby: krótka pionowa kreska między „Wszystkie” a resztą, na wysokość liter
- [x] Hero po powrocie z przewiniętej podstrony: reset scrolla przed utworzeniem ScrollTriggerów
- [x] FAQ: plus → minus, pionowa kreska znika od końców do środka (transform)
- [x] „Jak pracuję” na `/`: bez pinu, etapy przełączane kliknięciem; `/jak-pracuje` bez zmian

### Review
- Karta: etykieta w ramce 1px `--deep`, wysunięta 0.75rem w lewo i w dół, w odstęp siatki.
- `.sep`: przyczyną był selektor `figcaption span:first-child`, który łapał też `.sep` w `<small>` (kwadrat 1.2rem zamiast 0.875rem, za wysoko). Selektory zmienione na `>`, `.sep` wyrównany `vertical-align: middle` (środek wysokości x).
- Kreska w tabach: `.tabs__div` w `align-items: baseline`, wysokość 0.72em (wysokość wersalika Instrument Sans). Zmierzone przy zoomie ×4: kreska 96–139 px, „W” 95–140 px.
- Hero: Hero tworzył ScrollTriggery w layout effect, zanim `SmoothScroll` (zwykły `useEffect`) zresetował scroll, więc pierwsza klatka miała stan ze scrolla poprzedniej podstrony. Reset przeniesiony do `useLayoutEffect` (rodzeństwo przed `children`, odpala się wcześniej). Odtworzone w WebKit przed poprawką (1 zła klatka), po niej 0 na 12 przebiegów.
- FAQ: dwa pseudo-elementy, pionowy `scaleY(0)` od środka.
- Proces na `/`: bez pinu, etapy jako przyciski `aria-expanded` z tym samym plus/minus co FAQ; kliknięcie przełącza wideo. Na mobile tak samo (wcześniej wszystkie etapy rozwinięte).
- Przy okazji: strzałka „→” w `not-found.tsx` (łamała lint na `main`) zamieniona na `Arrow`.
- lint, tsc, build OK; 1440/375 bez poziomego scrolla na 5 stronach, konsola czysta.

## Propozycje — panel „Warianty” (lewy dolny róg, zapis w `localStorage` pod `db-preview-polish`)
- [x] `src/preview/` odtworzony z `8096f2c` (bez znaków jako ikon), podpięty w `layout.tsx`
- [x] Hero: układ (A–D), tekst (A–D), przyciski (A–B)
- [x] „Jedna osoba…”: A obecny, B dwie kolumny, C siatka 2×2, D lżejsze wiersze
- [x] „Wybrane realizacje”: wejście (A–D, `home/WorkMotion.tsx`) i hover (A–D)
- [x] Footer: A obecny, B zostaw numer, C kontakt, D jasny ze zdjęciem
- [x] Decyzja użytkownika (2026-10-05): hero układ A, tekst A, przyciski B (Zobacz realizacje + Dla firm); „Jedna osoba” A; realizacje: wejście B+D (nakładki w bok po kolei, potem etykiety), hover B (przygaszanie pozostałych, tylko `hover: hover`); footer B. Pozostałe warianty i `src/preview/` usunięte, `design.md` i `AGENTS.md` zaktualizowane.

Uwagi:
- `Services` trzyma jedną stałą `<section>`, bo `Hero` wiąże ScrollTrigger z następnym elementem; wariant podmienia tylko środek.
- Kafle w „Wybranych realizacjach” nie mają już `data-reveal`; odsłonięcie i paralaksę robi `WorkMotion` (żeby przełączanie wariantu odtwarzało animację).

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
- [x] Strona 404: wyśrodkowany układ — ilustracja SVG podartej tapety (wzór w pasy, poszarpana krawędź z białym włóknem, zawinięty płat z cieniem, ziarno tynku), nagłówek, akapit, CTA; status 404 + noindex. Pierwsza wersja (faktura z hero + szary pas) odrzucona.
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
