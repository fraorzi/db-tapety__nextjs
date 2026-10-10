import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/site";

// Hex z tokenów OKLCH w src/styles/theme.css. Satori (next/og) nie bierze oklch().
const paper = "#edecf0";
const ink = "#110e14";
const muted = "#54505a";
const deep = "#1f1228";
const deep2 = "#2e1f39";
const onDeep = "#eceaef";

function toArrayBuffer(buf: Buffer): ArrayBuffer {
  const copy = new ArrayBuffer(buf.byteLength);
  new Uint8Array(copy).set(buf);
  return copy;
}

export async function shareFonts() {
  const dir = join(process.cwd(), "src/fonts");
  const [display, body] = await Promise.all([
    readFile(join(dir, "Archivo-CondensedBold.ttf")),
    readFile(join(dir, "InstrumentSans-Regular.ttf")),
  ]);
  return [
    { name: "Archivo", data: toArrayBuffer(display), style: "normal" as const, weight: 700 as const },
    { name: "Instrument Sans", data: toArrayBuffer(body), style: "normal" as const, weight: 400 as const },
  ];
}

export function TabMark({ size }: { size: number }) {
  const band = Math.max(4, Math.round(size * 0.1));
  return (
    <div style={{ width: size, height: size, display: "flex", flexDirection: "column", background: deep }}>
      <div style={{ width: size, height: band, display: "flex", background: paper }} />
      <div
        style={{
          width: size,
          height: size - band,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: onDeep,
          fontFamily: "Archivo",
          fontWeight: 700,
          fontSize: Math.round(size * 0.52),
          letterSpacing: -1,
        }}
      >
        B
      </div>
    </div>
  );
}

export function ShareCard() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: paper }}>
      <div style={{ width: "100%", height: 18, display: "flex", background: deep }} />
      <div style={{ width: "100%", height: 18, display: "flex", background: deep2 }} />
      <div
        style={{
          width: "100%",
          height: 594,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px 64px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Archivo",
              fontWeight: 700,
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: -3,
              color: ink,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 20,
              fontFamily: "Instrument Sans",
              fontWeight: 400,
              fontSize: 36,
              color: muted,
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div style={{ width: 64, height: 6, display: "flex", background: deep }} />
      </div>
    </div>
  );
}
