# Handoff — strona Damian Bożyk (tapety)

Stan na 2026-10-04 (redesign v3). Dokument dla agenta, który przejmuje pracę. Kod: `src/` (Next.js), struktura w [`../AGENTS.md`](../AGENTS.md), system designu w [`../design.md`](../design.md).

## Cel

Strona firmy tapeciarskiej. Strona główna ma przekonać firmę lub osobę prywatną do kontaktu; podstrony prowadzą do wyceny. Ścieżka: makieta HTML (kierunek D) → Next.js v1 → redesign v2 → **v3 (wdrożony do repo `db-tapety__nextjs`, czeka na feedback)** → dane i zdjęcia klienta → backend formularza → wdrożenie.

## Decyzje użytkownika

Runda 1 (2026-10-04): od razu Next.js, nowy projekt w tym repo. Z makiety D zostają tylko dwa koncepty: wideo w hero na cały pierwszy ekran i „przypięte wideo + zmieniający się tekst” w sekcji procesu. Podstrony: `/realizacje` (+ slug), `/dla-firm`, `/jak-pracuje`, `/wycena`. Firma nie ma brandbooka.

Runda 2 (feedback do v1, wszystko wdrożone w v2):

- v1 za bardzo przypominała makietę → nowy system (`design.md`) zrobiony ze skillem `hallmark`: inna paleta, typografia, struktura sekcji.
- Wideo w hero „snapowało” przy zmniejszaniu → hero jest przyklejony (`position: sticky`), następna sekcja nasuwa się na niego, wideo animuje tylko `transform`/`opacity` ze `scrub`. Zmierzone: liniowe przyrosty co 100 px scrolla.
- Przyciski-pigułki odrzucone → squircle przez `clip-path: path()` z superelipsy (`Squircle.tsx`), działa w każdej przeglądarce z `clip-path: path()`; `border-radius` jako fallback. Nie używamy `corner-shape`.
- Akapity z odsłanianiem słów → usunięte (`Words.tsx` skasowany).
- Dwie karty „dla kogo” → slider z 6 rozsuwanymi panelami (`Audiences.tsx`): klik/strzałki/klawiatura, na mobile akordeon pionowy.
- „Jak pracuję”: prawa strona przeprojektowana; wersje różnią się wyraźnie: `/` = granatowa, przypięta, lista akordeonowa z paskiem postępu, 4 etapy; `/jak-pracuje` = jasna, tekst z faktami („Co dostajesz”, „Czas”) po lewej, sticky wideo z licznikiem `02 / 05` po prawej, 5 etapów.
- `/dla-firm` zbudowana od zera: hero dyptyk z wideo, „Z kim pracuję” (lista przełączająca zdjęcie), „Od zapytania do faktury” (5 kroków na granacie), „Czego potrzebuję / Co dostajecie”, 2 realizacje, formularz „zostaw numer” przekazujący `?tel=` do `/wycena`.
- `/realizacje`: kategorie jako taby z licznikami, domyślnie „Wszystkie”; równa siatka 2 kolumny (3 od 1400 px), żadna karta nie zajmuje całej szerokości.
- Strona prawna: tak, potrzebna — formularz zbiera dane osobowe. Dodano `/polityka-prywatnosci` (szkic RODO, luki w `<mark>`) i link w stopce.

Runda 3 (feedback do v2, wdrożone w v3):

- Niebieski akcent → fiolet z kwiatu w wideo hero (próbka pikseli z klatek, `oklch(52% 0.15 322)`). Granat → bakłażan, papier z lekkim lawendowym odcieniem.
- Numeracja list i paski postępu usunięte wszędzie: „dla kogo”, segmenty i kroki `/dla-firm`, listy „Czego potrzebuję / Co dostajecie”, checklista `/jak-pracuje`, proces na `/`. Został tylko licznik `02 / 05` na wideo w `/jak-pracuje`.
- Nawigacja zwijana w pigułkę odrzucona → górny pasek odjeżdża z treścią, po scrollu dock u dołu ekranu z „Menu” i CTA; „Menu” rozwija dock w panel. Dock chowa się nad stopką.
- Kod przeniesiony do repo `db-tapety__nextjs` (GitHub `fraorzi/db-tapety__nextjs`) jako pełna podmiana starego projektu.

Runda 4 (2026-10-04, inspiracja tubadzin.pl/salonedelmobile2026):

- Podwójna ramka tonalna (`Frame`), pasy tonalne na krawędziach sekcji, przekrój ściany jako wejście na `/jak-pracuje` (`WallLayers`).
- Dock odrzucony → po scrollu przypięty bakłażanowy pasek u góry o tym samym układzie co pasek startowy.
- Squircle odrzucone → cała strona kwadratowa, `Squircle.tsx` usunięty.
- Fioletowy akcent odrzucony → kolor główny = bakłażan z paska nawigacji.
- Hover karty wypełniający ją tłem odrzucony.

## Klient — co wiemy, czego nie

- Damian Bożyk, tapetowanie. Użytkownik nie zna szczegółów działalności.
- Nieznane: zakres, region, telefon, e-mail, nazwa/logo/NIP, zdjęcia realizacji, opinie, czasy pracy. Wszystko w `src/data/site.ts` jako widoczne placeholdery; czasy w `process.ts` i `b2b.ts` oznaczone jako orientacyjne.

## Gust użytkownika

- **Chce:** minimalizm + płynny, lekki ruch przy scrollu, wideo, technicznie nowoczesna strona, własny charakter zamiast szablonu.
- **Odrzuca:** niebieski akcent, numerowane listy i paski postępu tam, gdzie nie są potrzebne, nawigację zwijaną w pływającą pigułkę, rzeczy „jak z makiety/szablonu”, skaczące/snapujące animacje, pigułkowe przyciski, odsłanianie słów, duże puste karty, karty na całą szerokość w portfolio, slider w hero, liczniki, auto-karuzele, rysowane zastępniki zamiast zdjęć.

## Zweryfikowane

`pnpm lint`, `tsc`, `pnpm build` czyste. Zrzuty 1440 / 375 / 320 px na wszystkich stronach bez poziomego scrolla, konsola bez błędów. Testy interakcji (playwright-core): hero scrub liniowy, dock pojawia się po scrollu i rozwija w panel (1440 i 375 px), slider (next/klik/klawiatura), pin procesu zmienia etap i wideo w 4 równych odcinkach, taby filtrują, segment picker zmienia zdjęcie, `?tel=` wypełnia formularz, menu mobilne zamyka się po nawigacji.

## Treści do potwierdzenia z klientem

FAQ, etapy, zasady B2B i opisy realizacji są napisane z wiedzy branżowej, nie od klienta. Sprawdzić zwłaszcza: czasy („jedna ściana to jeden dzień”, „do godziny na miejscu”), praca nocą/w weekendy, faktura VAT, protokół odbioru, zostawianie zapasu tapety, zamawianie tapety za klienta, odpowiedź „w ciągu dnia roboczego”.

## Następne kroki

1. Feedback użytkownika do v3.
2. Dane firmy, zdjęcia/wideo z realizacji, opinie jeśli istnieją; uzupełnić `<mark>` w polityce prywatności i skonsultować ją z prawnikiem.
3. Backend formularza (`/wycena` i „zostaw numer” na `/dla-firm`): wysyłka e-mail lub API, antyspam, upload zdjęć.
4. SEO: `metadataBase`, OG image, sitemap, favicon.
5. Opcjonalnie: strona 404 w stylu systemu, `interpolate-size` fallback dla FAQ w Safari.

## Sugerowane skille

- `principle-prove-it-works` — podgląd w przeglądarce, mobile 320/375, konsola, build.
- `hallmark` — `audit` jako lista anty-wzorców; log wyborów w `.hallmark/log.json`.
- `typescript-best-practices` — przy kodzie w `src/`.
- `writing-for-agents` — przy edycji `AGENTS.md` / tego dokumentu.
