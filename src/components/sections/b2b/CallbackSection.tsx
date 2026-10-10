import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TextLink } from "@/components/ui/TextLink";

/** CTA jako formularz w linii: numer przechodzi do /wycena?tel=, tam można dopisać szczegóły. */
export function CallbackSection() {
  return (
    <section className="grid grid-cols-12 items-center gap-x-gutter gap-y-8 border-t border-rule px-page py-section" aria-labelledby="iform-title">
      <div className="col-span-5 grid gap-4 max-md:col-span-full">
        <h2 className="text-h2" id="iform-title">Zostawcie numer, oddzwonię</h2>
        <p className="max-w-[36ch] text-muted">Oddzwonię w ciągu dnia roboczego. Rzuty i zdjęcia możecie też od razu wysłać przez formularz wyceny.</p>
      </div>
      <form action="/wycena" method="get" className="col-span-6 col-start-7 grid gap-3 max-md:col-span-full">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-stretch gap-3 max-md:grid-cols-1">
          <Input type="tel" name="tel" placeholder="Numer telefonu" aria-label="Numer telefonu" autoComplete="tel" />
          <Button type="submit">Oddzwoń <Arrow /></Button>
        </div>
        <small className="text-xs text-muted">
          Numer przeniesie się do formularza wyceny, tam możecie dopisać szczegóły. <TextLink href="/polityka-prywatnosci">Polityka prywatności</TextLink>.
        </small>
      </form>
    </section>
  );
}
