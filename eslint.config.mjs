import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Ikony i separatory nigdy jako znaki w JSX: proste kształty jako span/div (np. Separator), złożone jako SVG (Arrow, Chevron).
const iconGlyphs = "[\\u2190-\\u21FF\\u2794-\\u27BF\\u27F0-\\u27FF\\u2303\\u2304\\u2630\\u2605\\u2606\\u2713-\\u2718\\u25B2-\\u25C4\\u2039\\u203A\\u00AB\\u00BB\\u00D7\\u2212\\u00B7\\u2022]";
const iconMessage = "Ikona/separator jako znak: użyj span/div (np. Separator) albo SVG (Arrow, Chevron).";
const iconRules = [
  { selector: `JSXText[value=/${iconGlyphs}/]`, message: iconMessage },
  { selector: `JSXExpressionContainer Literal[value=/${iconGlyphs}/]`, message: iconMessage },
];

// Sierotki: po jednoliterowym słowie twarda spacja (U+00A0), żeby nie zostawało na końcu linii.
const orphan = "/(^|\\s)[aiouwzAIOUWZ] /";
const orphanMessage = "Jednoliterowe słowo przed zwykłą spacją: wstaw twardą spację (U+00A0).";
const orphanRules = [
  { selector: `Literal[value=${orphan}]`, message: orphanMessage },
  { selector: `TemplateElement[value.raw=${orphan}]`, message: orphanMessage },
  { selector: `JSXText[value=${orphan}]`, message: orphanMessage },
];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/**/*.ts"],
    rules: { "no-restricted-syntax": ["error", ...orphanRules] },
  },
  {
    files: ["src/**/*.tsx"],
    rules: { "no-restricted-syntax": ["error", ...iconRules, ...orphanRules] },
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
