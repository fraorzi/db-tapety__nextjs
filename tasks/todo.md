# Plan — etap po v3 (2026-10-04)

## Zrobione
- [x] Usunięty `prefers-reduced-motion` (CSS, `lib/gsap.ts`, 4 komponenty) + zakaz w `AGENTS.md`/`design.md`.
- [x] TODO(media) w `src/data/*` — `wymagane` (stock udający realizacje / osoby brane za klienta) i `zalecane` (ilustracje).

## Agent pomocniczy — branch `chore/tooling-seo-analytics`
- [ ] React Scan (tylko dev) + React Doctor (skrypt `pnpm doctor`)
- [ ] Vercel Web Analytics
- [ ] SEO: `metadataBase`, `sitemap.ts`, `robots.ts`, metadane podstron, JSON-LD `LocalBusiness` z placeholderami

## Ja
- [ ] Wideo w `public/`: hero AV1 WebM + H.264 MP4 (najwyższa dostępna rozdzielczość źródła, `faststart`), proces tak samo; usunąć preconnect do Pexels
- [ ] Backend formularzy `/wycena` i „zostaw numer”: Server Action, walidacja na serwerze, honeypot, wysyłka na `fo.testowy@gmail.com` (env `QUOTE_TO_EMAIL`)
- [ ] Strona 404 w stylu systemu
- [ ] FAQ: fallback dla Safari bez `interpolate-size`
- [ ] OG image + favicon (placeholder w stylu systemu)
- [ ] Przegląd dostępności (fokus, kontrast) — bez `prefers-reduced-motion`

## Otwarte pytania
- Resend: użytkownik zakłada konto (fo.testowy@gmail.com), klucz `RESEND_API_KEY` w `.env.local` i Vercel.
- Zdjęcia w formularzu: kompresja w przeglądarce (limit Vercel 4,5 MB) czy Vercel Blob?
