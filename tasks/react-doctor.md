# React Doctor

Data: 2026-10-04. Wersja: react-doctor 0.9.14. Polecenie: `pnpm run doctor` (`pnpm dlx react-doctor@latest`). Zeskanowane 39 plików w projekcie `db-tapety`.

Wynik: **53 / 100**, ocena Critical. 12 ostrzeżeń, zero błędów. Nic z tej listy nie było naprawiane.

`pnpm doctor` bez `run` uruchamia wbudowaną diagnostykę pnpm, nie ten skrypt. Ten skrypt to `pnpm run doctor`.

## Bugs (2)

- `react-doctor/no-unguarded-browser-global-at-module-scope` w `makiety/index.html:267`. Odczyt `matchMedia` w zakresie modułu. Doctor twierdzi, że import podczas SSR rzuci `ReferenceError`.
- `react-doctor/no-non-literal-selector-query-without-try-catch` w `makiety/index.html:286`. `querySelector` dostaje selektor złożony z `href`/`hash` i może rzucić `DOMException`.

## Security (2)

Oba w `pnpm-workspace.yaml`, reguła `react-doctor/require-pnpm-hardening`:

- Brak `minimumReleaseAge`. Doctor proponuje `10080` (7 dni).
- Brak `trustPolicy`. Doctor proponuje `no-downgrade`.

## Accessibility (6)

Wszystkie w `src/app/wycena/QuoteForm.tsx`.

- `react-doctor/label-has-associated-control` na liniach 72, 81, 93. Etykieta nie jest powiązana z kontrolką (`htmlFor` albo owinięcie inputa).
- `react-doctor/control-has-associated-label` na liniach 75, 84, 96. Kontrolka nie ma nazwy dostępnej dla czytnika ekranu.

## Maintainability (2)

Reguła `react-doctor/only-export-components`. Plik eksportuje coś poza komponentem, więc Fast Refresh nie zachowa stanu.

- `src/components/SmoothScroll.tsx:10`
- `src/components/Squircle.tsx:11`
