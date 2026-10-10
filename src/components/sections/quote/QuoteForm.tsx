"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";
import { Chips, Field, TextArea, TextInput } from "./Field";
import { PhotoDrop } from "./PhotoDrop";

const kinds = ["Mieszkanie", "Dom", "Lokal / biuro", "Inwestycja (kilka lokali)"] as const;
const works = ["Tapetowanie", "Przygotowanie ścian", "Fototapeta na wymiar", "Dobór i zamówienie tapety", "Zdjęcie starej tapety"] as const;
const timing = ["Jak najszybciej", "W ciągu trzech miesięcy", "Później, orientuję się"] as const;

type Errors = Partial<Record<"name" | "contact" | "kind" | "consent", string>>;
type Status = "idle" | "sending" | "done";

const fieldset = "grid gap-5";

/** Tytuł grupy pól: krój nagłówka w rozmiarze h3, ale z interlinią tekstu i bez zwężenia. */
function Legend({ children }: { children: React.ReactNode }) {
  return <Heading as="legend" level={3} className="mb-5 leading-[1.55] font-stretch-normal">{children}</Heading>;
}

/** Formularz wyceny (bez backendu): walidacja po stronie klienta, fokus na pierwszym błędnym polu. */
export function QuoteForm({ defaultContact }: { defaultContact?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(fd.get("name") ?? "").trim()) next.name = "Podaj imię, żebym wiedział, jak się zwracać.";
    if (!String(fd.get("contact") ?? "").trim()) next.contact = "Potrzebuję telefonu albo e-maila, żeby odpisać.";
    if (!fd.get("kind")) next.kind = "Zaznacz, o jaki rodzaj miejsca chodzi.";
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
      <div className="col-span-7 col-start-6 grid content-start gap-6 pt-2 max-md:col-span-full" role="status">
        <Heading level={2}>Dziękuję, mam Twoją wiadomość.</Heading>
        <p className="max-w-[44ch] text-muted">Odpiszę z orientacyjnym kosztem i propozycją terminu oględzin. Zdjęcia, jeśli są, obejrzę przed kontaktem.</p>
      </div>
    );
  }

  return (
    <form className="col-span-7 col-start-6 grid gap-11 pt-2 max-md:col-span-full" onSubmit={onSubmit} noValidate>
      <fieldset className={fieldset}>
        <Legend>Kontakt</Legend>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <Field label="Imię" htmlFor="q-name" error={errors.name} errorId="q-name-err">
            <TextInput id="q-name" name="name" autoComplete="given-name" invalid={!!errors.name} aria-describedby={errors.name ? "q-name-err" : undefined} />
          </Field>
          <Field label="Telefon lub e-mail" htmlFor="q-contact" error={errors.contact} errorId="q-contact-err">
            <TextInput
              id="q-contact"
              name="contact"
              autoComplete="tel"
              defaultValue={defaultContact}
              invalid={!!errors.contact}
              aria-describedby={errors.contact ? "q-contact-err" : undefined}
            />
          </Field>
        </div>
        <Field label="Miejscowość" hint="(żeby sprawdzić dojazd)" htmlFor="q-city">
          <TextInput id="q-city" name="city" autoComplete="address-level2" />
        </Field>
      </fieldset>

      <fieldset className={fieldset}>
        <Legend>Co i gdzie</Legend>
        <Field label="Rodzaj miejsca" error={errors.kind} errorId="q-kind-err">
          <Chips type="radio" name="kind" options={kinds} role="radiogroup" aria-describedby={errors.kind ? "q-kind-err" : undefined} />
        </Field>
        <Field label="Zakres" hint="(można zaznaczyć kilka)">
          <Chips type="checkbox" name="work" options={works} />
        </Field>
        <Field label="Wymiary lub metraż" hint="(orientacyjnie)" htmlFor="q-size">
          <TextInput id="q-size" name="size" placeholder="np. jedna ściana 4 × 2,7 m" />
        </Field>
        <Field label="Termin">
          <Chips type="radio" name="timing" options={timing} />
        </Field>
      </fieldset>

      <fieldset className={fieldset}>
        <Legend>Szczegóły</Legend>
        <Field label="Wiadomość" hint="(wzór, link do tapety, stan ściany, pytania)" htmlFor="q-msg">
          <TextArea id="q-msg" name="message" rows={4} />
        </Field>
        <Field label="Zdjęcia ściany" htmlFor="q-files">
          <PhotoDrop id="q-files" name="files" />
        </Field>
      </fieldset>

      <div className="grid gap-2" data-invalid={!!errors.consent}>
        <label className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-[0.8rem] text-md font-medium text-muted">
          <input type="checkbox" name="consent" className={cn("mt-1 size-4 accent-accent", errors.consent && "shadow-inset-accent")} aria-describedby={errors.consent ? "q-consent-err" : undefined} />
          <span>Zgadzam się na kontakt w sprawie wyceny. Dane służą tylko do odpowiedzi na tę wiadomość.</span>
        </label>
        {errors.consent && <p className="text-xs text-accent-ink" id="q-consent-err">{errors.consent}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <Button type="submit" size="lg" disabled={status === "sending"} arrow={status !== "sending"}>
          {status === "sending" ? "Wysyłam…" : "Wyślij do wyceny"}
        </Button>
      </div>
    </form>
  );
}
