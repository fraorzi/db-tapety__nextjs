"use client";

import { useState, type FormEvent } from "react";
import { Squircle } from "@/components/Squircle";

const kinds = ["Mieszkanie", "Dom", "Lokal / biuro", "Inwestycja (kilka lokali)"] as const;
const works = ["Tapetowanie", "Przygotowanie ścian", "Fototapeta na wymiar", "Dobór i zamówienie tapety", "Zdjęcie starej tapety"] as const;
const timing = ["Jak najszybciej", "W ciągu 1–3 miesięcy", "Później, orientuję się"] as const;

type Errors = Partial<Record<"name" | "contact" | "kind" | "consent", string>>;
type Status = "idle" | "sending" | "done";

export function QuoteForm({ defaultContact }: { defaultContact?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [files, setFiles] = useState<string[]>([]);
  const [over, setOver] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(fd.get("name") ?? "").trim()) next.name = "Podaj imię, żebym wiedział, jak się zwracać.";
    if (!String(fd.get("contact") ?? "").trim()) next.contact = "Potrzebuję telefonu albo e-maila, żeby odpisać.";
    if (!fd.get("kind")) next.kind = "Zaznacz, o jaki rodzaj miejsca chodzi.";
    if (!fd.get("consent")) next.consent = "Bez zgody nie mogę przetworzyć wiadomości.";
    setErrors(next);
    if (Object.keys(next).length) {
      e.currentTarget.querySelector<HTMLElement>('[data-invalid="true"] input, [data-invalid="true"] textarea')?.focus();
      return;
    }
    setStatus("sending");
    // Makieta: brak backendu. Docelowo wysyłka do API / e-mail.
    window.setTimeout(() => setStatus("done"), 900);
  };

  if (status === "done") {
    return (
      <div className="fdone" role="status">
        <h2 className="h2">Dziękuję, mam Twoją wiadomość.</h2>
        <p>Odpiszę z orientacyjnym kosztem i propozycją terminu oględzin. Jeśli dołączyłeś zdjęcia, obejrzę je przed kontaktem.</p>
        <p className="small">To makieta — formularz nie został jeszcze podpięty do wysyłki.</p>
      </div>
    );
  }

  return (
    <form className="quote__form" onSubmit={onSubmit} noValidate>
      <fieldset className="fset">
        <legend>Kontakt</legend>
        <div className="frow">
          <div className="field" data-invalid={!!errors.name}>
            <label htmlFor="q-name">Imię</label>
            <input id="q-name" name="name" autoComplete="given-name" aria-describedby={errors.name ? "q-name-err" : undefined} />
            {errors.name && <p className="err" id="q-name-err">{errors.name}</p>}
          </div>
          <div className="field" data-invalid={!!errors.contact}>
            <label htmlFor="q-contact">Telefon lub e-mail</label>
            <input id="q-contact" name="contact" autoComplete="tel" defaultValue={defaultContact} aria-describedby={errors.contact ? "q-contact-err" : undefined} />
            {errors.contact && <p className="err" id="q-contact-err">{errors.contact}</p>}
          </div>
        </div>
        <div className="field">
          <label htmlFor="q-city">Miejscowość <small>— żebym sprawdził dojazd</small></label>
          <input id="q-city" name="city" autoComplete="address-level2" />
        </div>
      </fieldset>

      <fieldset className="fset">
        <legend>Co i gdzie</legend>
        <div className="field" data-invalid={!!errors.kind}>
          <label>Rodzaj miejsca</label>
          <div className="chips" role="radiogroup" aria-describedby={errors.kind ? "q-kind-err" : undefined}>
            {kinds.map((k) => (
              <Squircle as="label" radius={10} key={k} className="chip"><input type="radio" name="kind" value={k} /><span>{k}</span></Squircle>
            ))}
          </div>
          {errors.kind && <p className="err" id="q-kind-err">{errors.kind}</p>}
        </div>
        <div className="field">
          <label>Zakres <small>— możesz zaznaczyć kilka</small></label>
          <div className="chips">
            {works.map((w) => (
              <Squircle as="label" radius={10} key={w} className="chip"><input type="checkbox" name="work" value={w} /><span>{w}</span></Squircle>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="q-size">Wymiary lub metraż <small>— orientacyjnie</small></label>
          <input id="q-size" name="size" placeholder="np. jedna ściana 4 × 2,7 m" />
        </div>
        <div className="field">
          <label>Termin</label>
          <div className="chips">
            {timing.map((t) => (
              <Squircle as="label" radius={10} key={t} className="chip"><input type="radio" name="timing" value={t} /><span>{t}</span></Squircle>
            ))}
          </div>
        </div>
      </fieldset>

      <fieldset className="fset">
        <legend>Szczegóły</legend>
        <div className="field">
          <label htmlFor="q-msg">Wiadomość <small>— wzór, link do tapety, stan ściany, pytania</small></label>
          <textarea id="q-msg" name="message" rows={4} />
        </div>
        <div className="field">
          <label htmlFor="q-files">Zdjęcia ściany</label>
          <Squircle
            radius={14}
            className="drop"
            data-over={over}
            onDragOver={(e) => { e.preventDefault(); setOver(true); }}
            onDragLeave={() => setOver(false)}
            onDrop={(e) => { e.preventDefault(); setOver(false); setFiles(Array.from(e.dataTransfer.files).map((f) => f.name)); }}
          >
            <input id="q-files" type="file" name="files" accept="image/*" multiple onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))} />
            <span className="ulink">Dodaj zdjęcia</span>
            <p>Przeciągnij tutaj albo kliknij. Najlepiej w dziennym świetle, z widoczną całą ścianą.</p>
            {files.length > 0 && <ul aria-label="Wybrane pliki">{files.map((f) => <li key={f}>{f}</li>)}</ul>}
          </Squircle>
        </div>
      </fieldset>

      <div className="field" data-invalid={!!errors.consent}>
        <label className="consent">
          <input type="checkbox" name="consent" aria-describedby={errors.consent ? "q-consent-err" : undefined} />
          <span>Zgadzam się na kontakt w sprawie wyceny. Dane służą tylko do odpowiedzi na tę wiadomość.</span>
        </label>
        {errors.consent && <p className="err" id="q-consent-err">{errors.consent}</p>}
      </div>

      <div className="fsubmit">
        <Squircle as="button" type="submit" className="btn btn--lg" disabled={status === "sending"}>
          {status === "sending" ? "Wysyłam…" : "Wyślij do wyceny"} {status !== "sending" && <span className="arr" aria-hidden="true">→</span>}
        </Squircle>
        <p>Odpowiadam na każdą wiadomość, także gdy chcesz tylko zapytać.</p>
      </div>
    </form>
  );
}
