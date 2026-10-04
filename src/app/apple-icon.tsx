import { ImageResponse } from "next/og";
import { shareFonts, TabMark } from "@/lib/share-card";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(<TabMark size={size.width} />, {
    ...size,
    fonts: await shareFonts(),
  });
}
