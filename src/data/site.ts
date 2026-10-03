// Dane firmy — do uzupełnienia przez klienta. Każdy placeholder jest widoczny na stronie.
export const site = {
  name: "Damian Bożyk",
  tagline: "Tapetowanie wnętrz",
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

export const pexels = (path: string) => `https://videos.pexels.com/video-files/${path}`;

export const videos = {
  hero: pexels("36346753/15416237_1920_1080_24fps.mp4"),
  heroPoster: unsplash("photo-1577083165633-14ebcdb0f658", 1600),
  process: [
    pexels("7216709/7216709-hd_720_1280_24fps.mp4"),
    pexels("7490514/7490514-hd_1280_720_30fps.mp4"),
    pexels("6474074/6474074-hd_1280_720_25fps.mp4"),
    pexels("6474177/6474177-hd_1280_720_25fps.mp4"),
  ],
} as const;
