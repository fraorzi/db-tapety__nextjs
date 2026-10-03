(() => {
  const medallion = (ink, ground) => `
    <g class="${ink}">
      <path d="M0 -32 C7 -22 17 -15 17 -2 C17 11 8 18 0 32 C-8 18 -17 11 -17 -2 C-17 -15 -7 -22 0 -32Z"/>
      <path d="M17 -4 C24 -12 32 -6 29 2 C27 -3 22 -3 17 -4Z"/>
      <path d="M-17 -4 C-24 -12 -32 -6 -29 2 C-27 -3 -22 -3 -17 -4Z"/>
      <path d="M0 -32 C-4 -38 -10 -38 -12 -34 C-8 -35 -4 -34 0 -32Z M0 -32 C4 -38 10 -38 12 -34 C8 -35 4 -34 0 -32Z"/>
    </g>
    <path class="${ground}" d="M0 -22 C5 -14 11 -9 11 0 C11 9 5 14 0 23 C-5 14 -11 9 -11 0 C-11 -9 -5 -14 0 -22Z"/>
    <g class="${ink}">
      <path d="M0 -14 C3 -8 3 -3 0 2 C-3 -3 -3 -8 0 -14Z"/>
      <path d="M0 2 C5 -4 9 -2 8 3 C6 1 3 1 0 2Z"/>
      <path d="M0 2 C-5 -4 -9 -2 -8 3 C-6 1 -3 1 0 2Z"/>
      <path d="M-1 2 H1 V14 H-1Z"/>
      <circle cy="16" r="2"/>
    </g>`;

  const filler = (ink) => `<path class="${ink}" d="M0 -4 L3 0 L0 4 L-3 0Z"/>`;

  const damask = (id, ground, ink) => `
    <pattern id="${id}" width="60" height="84" patternUnits="userSpaceOnUse">
      <rect width="60" height="84" class="${ground}"/>
      ${[[30, 42], [0, 0], [60, 0], [0, 84], [60, 84]].map(([x, y]) => `<g transform="translate(${x} ${y})">${medallion(ink, ground)}</g>`).join("")}
      ${[[0, 42], [60, 42]].map(([x, y]) => `<g transform="translate(${x} ${y})">${filler(ink)}</g>`).join("")}
    </pattern>`;

  const leaf = "M0 0 C5 -7 15 -7 20 0 C15 7 5 7 0 0Z";
  const sprig = (stem, ink) => `
    <path class="${stem}" stroke-width="1.4" d="M0 22 C4 10 2 -4 -6 -20"/>
    <g class="${ink}">
      <path d="${leaf}" transform="translate(2 13) rotate(-24)"/>
      <path d="${leaf}" transform="translate(2 4) rotate(204)"/>
      <path d="${leaf}" transform="translate(0 -6) rotate(-48)"/>
      <path d="${leaf}" transform="translate(-3 -12) rotate(218)"/>
      <path d="${leaf}" transform="translate(-6 -20) rotate(-100) scale(.75)"/>
    </g>`;

  const botanic = (id, ground, stem, ink) => `
    <pattern id="${id}" width="90" height="90" patternUnits="userSpaceOnUse">
      <rect width="90" height="90" class="${ground}"/>
      <g transform="translate(24 40)">${sprig(stem, ink)}</g>
      <g transform="translate(68 66) scale(-1 1)">${sprig(stem, ink)}</g>
      <circle class="${ink}" cx="70" cy="16" r="2.2"/>
      <circle class="${ink}" cx="76" cy="20" r="1.6"/>
      <circle class="${ink}" cx="16" cy="80" r="2"/>
    </pattern>`;

  const fans = (id, ground, line, size) => {
    const k = size / 40;
    const c = (x, y) => `
      <g transform="translate(${x * k} ${y * k}) scale(${k})">
        <circle r="20" class="${ground}"/>
        <circle r="19.5" class="${line}" stroke-width="1"/>
        <circle r="14" class="${line}" stroke-width=".8"/>
        <circle r="8" class="${line}" stroke-width=".6"/>
      </g>`;
    return `
    <pattern id="${id}" width="${size}" height="${size}" patternUnits="userSpaceOnUse">
      <rect width="${size}" height="${size}" class="${ground}"/>
      ${c(0, 0)}${c(40, 0)}${c(20, 20)}${c(0, 40)}${c(40, 40)}
    </pattern>`;
  };

  const defs = `
  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
    <defs>
      ${damask("p-damask-graphite", "f-graphite", "f-gold")}
      ${damask("p-damask-sage", "f-sage", "f-sage-deep")}
      <pattern id="p-stripe-cream" width="36" height="10" patternUnits="userSpaceOnUse">
        <rect width="36" height="10" class="f-cream"/>
        <rect width="14" height="10" class="f-cream-deep"/>
        <rect x="21" width="1" height="10" class="f-gold"/>
      </pattern>
      ${botanic("p-botanic-green", "f-forest", "s-leaf-light", "f-leaf")}
      ${botanic("p-botanic-rose", "f-rose", "s-rose-stem", "f-rose-ink")}
      ${fans("p-deco-navy", "f-navy", "s-brass", 40)}
      ${fans("p-deco-night", "f-night", "s-night-line", 120)}
      <pattern id="p-trellis-terra" width="28" height="28" patternUnits="userSpaceOnUse">
        <rect width="28" height="28" class="f-sand"/>
        <path d="M0 14 L14 0 L28 14 L14 28Z" class="s-terra" stroke-width="1"/>
        <circle cx="14" cy="14" r="1.8" class="f-terra"/>
        <circle cx="0" cy="0" r="1.2" class="f-terra"/><circle cx="28" cy="0" r="1.2" class="f-terra"/>
        <circle cx="0" cy="28" r="1.2" class="f-terra"/><circle cx="28" cy="28" r="1.2" class="f-terra"/>
      </pattern>
      <pattern id="p-linen" width="6" height="6" patternUnits="userSpaceOnUse">
        <rect width="6" height="6" class="f-linen"/>
        <path d="M0 1.5 H6 M0 4.2 H6" class="s-linen-ink" stroke-width=".7"/>
        <path d="M1.2 0 V6 M4 0 V6" class="s-linen-ink" stroke-width=".5"/>
      </pattern>
      <pattern id="p-dots-mint" width="24" height="24" patternUnits="userSpaceOnUse">
        <rect width="24" height="24" class="f-mint"/>
        <circle cx="6" cy="6" r="3" class="f-mint-ink"/>
        <circle cx="18" cy="18" r="3" class="f-mint-ink"/>
      </pattern>
      <pattern id="p-mural-hills" width="480" height="250" patternUnits="userSpaceOnUse">
        <rect width="480" height="250" class="f-sky"/>
        <circle cx="356" cy="68" r="26" class="f-sun"/>
        <path d="M0 150 C80 110 140 120 220 140 C300 160 380 100 480 120 L480 250 L0 250Z" class="f-hill-3"/>
        <path d="M0 185 C90 150 170 170 250 180 C330 190 400 160 480 170 L480 250 L0 250Z" class="f-hill-2"/>
        <path d="M0 215 C100 195 200 210 300 205 C380 200 440 210 480 205 L480 250 L0 250Z" class="f-hill-1"/>
        <path d="M110 72 q6 -6 12 0 q6 -6 12 0 M150 58 q4 -4 8 0 q4 -4 8 0" class="s-hill-1" stroke-width="1.4"/>
      </pattern>
      <pattern id="p-floor" width="120" height="32" patternUnits="userSpaceOnUse">
        <rect width="120" height="32" class="r-floor"/>
        <path d="M0 15.5 H120 M0 31.5 H120 M30 0 V16 M90 16 V32" class="r-floor-line" stroke-width="1"/>
      </pattern>
    </defs>
  </svg>`;

  document.body.insertAdjacentHTML("afterbegin", defs);

  const furniture = {
    salon: `
      <rect x="200" y="70" width="80" height="62" class="r-frame" stroke-width="4"/>
      <rect x="130" y="170" width="210" height="42" rx="10" class="r-furn"/>
      <rect x="120" y="204" width="230" height="34" rx="6" class="r-furn"/>
      <rect x="112" y="190" width="26" height="48" rx="8" class="r-furn-2"/>
      <rect x="332" y="190" width="26" height="48" rx="8" class="r-furn-2"/>
      <path d="M235 208 V236" class="r-furn-2-s" stroke-width="2"/>
      <rect x="126" y="238" width="6" height="12" class="r-furn-2"/><rect x="338" y="238" width="6" height="12" class="r-furn-2"/>
      <path d="M402 250 V128" class="r-furn-2-s" stroke-width="3"/>
      <ellipse cx="402" cy="249" rx="16" ry="3" class="r-furn-2"/>
      <path d="M384 128 L420 128 L411 98 L393 98Z" class="r-linen"/>
      <rect x="56" y="212" width="44" height="4" class="r-furn-2"/>
      <path d="M62 216 V250 M94 216 V250" class="r-furn-2-s" stroke-width="2"/>
      <rect x="68" y="190" width="20" height="22" class="r-linen"/>
      <ellipse cx="72" cy="178" rx="7" ry="14" transform="rotate(-20 72 178)" class="r-plant"/>
      <ellipse cx="85" cy="174" rx="6" ry="16" transform="rotate(18 85 174)" class="r-plant"/>`,
    sypialnia: `
      <rect x="150" y="146" width="180" height="84" rx="14" class="r-furn"/>
      <rect x="140" y="210" width="200" height="34" rx="4" class="r-linen"/>
      <rect x="140" y="224" width="200" height="20" class="r-furn-2"/>
      <rect x="166" y="194" width="62" height="22" rx="9" class="r-linen"/>
      <rect x="252" y="194" width="62" height="22" rx="9" class="r-linen"/>
      <rect x="140" y="244" width="6" height="6" class="r-furn-2"/><rect x="334" y="244" width="6" height="6" class="r-furn-2"/>
      <rect x="86" y="214" width="44" height="36" rx="2" class="r-furn-2"/>
      <rect x="350" y="214" width="44" height="36" rx="2" class="r-furn-2"/>
      <path d="M108 214 V196 M372 214 V196" class="r-furn-2-s" stroke-width="2"/>
      <path d="M96 196 L120 196 L114 178 L102 178Z M360 196 L384 196 L378 178 L366 178Z" class="r-linen"/>`,
    dziecko: `
      <circle cx="225" cy="126" r="34" class="r-frame" stroke-width="4"/>
      <rect x="150" y="196" width="150" height="54" rx="3" class="r-furn"/>
      <path d="M150 214 H300 M150 232 H300" class="r-furn-2-s" stroke-width="1.5"/>
      <circle cx="225" cy="205" r="2.5" class="r-furn-2"/><circle cx="225" cy="223" r="2.5" class="r-furn-2"/><circle cx="225" cy="241" r="2.5" class="r-furn-2"/>
      <rect x="266" y="178" width="18" height="18" class="r-linen"/>
      <ellipse cx="270" cy="168" rx="5" ry="11" transform="rotate(-18 270 168)" class="r-plant"/>
      <ellipse cx="280" cy="166" rx="5" ry="12" transform="rotate(16 280 166)" class="r-plant"/>
      <circle cx="350" cy="238" r="12" class="r-furn-2"/>
      <rect x="76" y="210" width="50" height="40" rx="4" class="r-linen"/>`,
    przedpokoj: `
      <rect x="204" y="64" width="72" height="112" rx="36" class="r-frame" stroke-width="4"/>
      <rect x="166" y="196" width="148" height="6" class="r-furn-2"/>
      <path d="M174 202 V250 M306 202 V250" class="r-furn-2-s" stroke-width="2.5"/>
      <rect x="196" y="176" width="16" height="20" class="r-linen"/>
      <path d="M70 92 H130" class="r-furn-2-s" stroke-width="3"/>
      <path d="M82 92 C70 120 72 170 78 196 L98 196 C102 160 100 120 88 92Z" class="r-furn"/>
      <path d="M116 92 C108 116 108 150 112 172 L128 172 C130 146 128 116 120 92Z" class="r-furn-2"/>
      <rect x="360" y="218" width="44" height="6" rx="3" class="r-furn"/>
      <path d="M366 224 V250 M398 224 V250" class="r-furn-2-s" stroke-width="2"/>`,
    jadalnia: `
      <path d="M240 0 V96" class="r-furn-2-s" stroke-width="1.5"/>
      <path d="M214 120 C214 104 226 96 240 96 C254 96 266 104 266 120Z" class="r-furn-2"/>
      <rect x="140" y="196" width="200" height="8" class="r-furn-2"/>
      <path d="M156 204 V250 M324 204 V250" class="r-furn-2-s" stroke-width="3"/>
      <path d="M96 150 V250 M96 210 H130 V250" class="r-furn-2-s" stroke-width="3"/>
      <path d="M384 150 V250 M384 210 H350 V250" class="r-furn-2-s" stroke-width="3"/>
      <ellipse cx="240" cy="192" rx="26" ry="5" class="r-linen"/>
      <rect x="226" y="178" width="8" height="14" class="r-linen"/><rect x="246" y="174" width="8" height="18" class="r-linen"/>`,
    lokal: `
      ${[140, 240, 340].map((x) => `<path d="M${x} 0 V84" class="r-furn-2-s" stroke-width="1.5"/><path d="M${x - 16} 104 L${x + 16} 104 L${x + 8} 84 L${x - 8} 84Z" class="r-furn-2"/>`).join("")}
      <rect x="54" y="184" width="372" height="10" class="r-furn-2"/>
      <rect x="62" y="194" width="356" height="56" class="r-furn"/>
      <path d="M62 222 H418" class="r-furn-2-s" stroke-width="1.5"/>
      <rect x="110" y="160" width="20" height="24" class="r-linen"/><rect x="300" y="166" width="40" height="18" class="r-linen"/>`
  };

  const before = `
    <rect x="70" y="60" width="62" height="40" class="r-patch"/>
    <rect x="300" y="118" width="80" height="30" class="r-patch"/>
    <rect x="180" y="150" width="34" height="56" class="r-patch"/>
    <path d="M250 20 L246 48 L254 70 L249 96" class="r-crack" stroke-width="1.2"/>
    <rect x="300" y="226" width="18" height="12" rx="2" class="r-linen"/>
    <path d="M50 250 L76 106 M100 250 L76 106" class="r-furn-2-s" stroke-width="4"/>
    <path d="M56 218 H95 M61 190 H90 M66 162 H85 M71 134 H81" class="r-furn-2-s" stroke-width="2.5"/>
    <path d="M150 220 L186 220 L182 250 L154 250Z" class="r-furn"/>
    <path d="M152 220 C156 210 180 210 184 220" class="r-furn-2-s" stroke-width="1.5"/>
    <rect x="206" y="164" width="22" height="86" rx="8" transform="rotate(8 217 207)" class="r-linen"/>
    <path d="M211 180 H223 M210 196 H222" class="r-crack" stroke-width="1"/>`;

  window.Wall = {
    patterns: {
      "p-damask-graphite": "Damaszek grafitowy",
      "p-damask-sage": "Damaszek szałwiowy",
      "p-stripe-cream": "Pasy kremowe",
      "p-botanic-green": "Botanika butelkowa",
      "p-botanic-rose": "Botanika na różu",
      "p-deco-navy": "Wachlarze art déco",
      "p-trellis-terra": "Krata terakota",
      "p-linen": "Len naturalny",
      "p-dots-mint": "Groszki miętowe",
      "p-mural-hills": "Fototapeta „Wzgórza”"
    },
    swatch(id, label) {
      return `<svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${label || this.patterns[id] || ""}"><rect width="200" height="250" fill="url(#${id})"/></svg>`;
    },
    room(id, kind, opts = {}) {
      const isBefore = opts.before;
      const wall = isBefore ? `<rect width="480" height="250" class="r-bare"/>${before}` : `<rect width="480" height="250" fill="url(#${id})"/>`;
      const label = opts.label || (isBefore ? "Ściana przed tapetowaniem" : `Ściana po tapetowaniu: ${this.patterns[id] || ""}`);
      return `<svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${label}">
        ${wall}
        <rect width="480" height="5" class="r-shade" opacity=".18"/>
        <rect y="250" width="480" height="70" fill="url(#p-floor)"/>
        <rect y="246" width="480" height="8" class="r-skirt"/>
        ${isBefore ? "" : furniture[kind] || ""}
      </svg>`;
    }
  };
})();
