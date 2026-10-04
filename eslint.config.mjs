import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Ikony i separatory nigdy jako znaki w JSX: proste kształty jako span/div w CSS (np. .sep), złożone jako SVG (Arrow, Chevron).
const iconGlyphs = "[\\u2190-\\u21FF\\u2794-\\u27BF\\u27F0-\\u27FF\\u2303\\u2304\\u2630\\u2605\\u2606\\u2713-\\u2718\\u25B2-\\u25C4\\u2039\\u203A\\u00AB\\u00BB\\u00D7\\u2212\\u00B7\\u2022]";
const iconMessage = "Ikona/separator jako znak: użyj span/div w CSS (np. .sep) albo SVG (Arrow, Chevron).";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/**/*.tsx"],
    rules: {
      "no-restricted-syntax": [
        "error",
        { selector: `JSXText[value=/${iconGlyphs}/]`, message: iconMessage },
        { selector: `JSXExpressionContainer Literal[value=/${iconGlyphs}/]`, message: iconMessage },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
