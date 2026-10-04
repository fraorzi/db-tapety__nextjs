import { ImageResponse } from "next/og";
import { shareFonts, TabMark } from "@/lib/share-card";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(<TabMark size={size.width} />, {
    ...size,
    fonts: await shareFonts(),
  });
}
