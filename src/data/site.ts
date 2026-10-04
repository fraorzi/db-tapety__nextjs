// Dane firmy — do uzupełnienia przez klienta. Każdy placeholder jest widoczny na stronie.
export const site = {
  name: "Damian Bożyk",
  tagline: "Tapetowanie wnętrz",
  description:
    "Tapetowanie i przygotowanie ścian w mieszkaniach, domach i lokalach. Pomiar, dobór tapety, montaż bez widocznych łączeń.",
  // Placeholder, dopóki nie ma domeny. Przy wdrożeniu ustaw NEXT_PUBLIC_SITE_URL.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://do-uzupelnienia.pl").replace(/\/$/, ""),
  phone: "+48 ••• ••• •••",
  phoneHref: "tel:",
  email: "kontakt@•••••.pl",
  emailHref: "mailto:",
  region: "Region do uzupełnienia",
  regionNote: "Dojazd do klienta — zasięg do potwierdzenia.",
} as const;

export const nav = [
  { href: "/realizacje", label: "Realizacje" },
  { href: "/dla-firm", label: "Dla firm" },
  { href: "/jak-pracuje", label: "Jak pracuję" },
] as const;

export const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;

export type Video = { readonly webm: string; readonly mp4: string };

const video = (name: string): Video => ({ webm: `/video/${name}.webm`, mp4: `/video/${name}.mp4` });

export const videos = {
  // TODO(media, zalecane): stock Pexels (pexels.com/video/36346753), sama tapeta bez ludzi — może zostać, docelowo ujęcie z realizacji klienta.
  hero: video("hero"),
  heroPoster: "/video/hero-poster.webp",
  process: [
    // TODO(media, wymagane): stock Pexels (pexels.com/video/7216709), dwie rozpoznawalne osoby przy pracy, a strona mówi „pracuję” — sugeruje, że to klient i jego ekipa. Wymienić na nagranie klienta.
    video("process-1"),
    // TODO(media, zalecane): stock Pexels (pexels.com/video/7490514), dłonie nad próbkami — w sekcji „jak pracuję” docelowo nagranie klienta.
    video("process-2"),
    // TODO(media, zalecane): stock Pexels (pexels.com/video/6474074), mężczyzna tyłem przy ścianie — odbiorca weźmie go za klienta. Docelowo nagranie klienta.
    video("process-3"),
    // TODO(media, zalecane): stock Pexels (pexels.com/video/6474177), zbliżenie dłoni — docelowo nagranie klienta.
    video("process-4"),
  ],
} as const;
