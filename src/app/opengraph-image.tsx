import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { ShareCard, shareFonts } from "@/lib/share-card";

export const alt = `${site.name}, ${site.tagline.toLowerCase()}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(<ShareCard />, {
    ...size,
    fonts: await shareFonts(),
  });
}
