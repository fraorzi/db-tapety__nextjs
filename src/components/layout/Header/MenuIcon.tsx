import { cn } from "@/lib/cn";

const line = "absolute inset-x-0 h-0.5 bg-current transition-transform duration-450";

/** Dwie linie burgera; w otwartym menu (data-open na pasku `group/bar`) składają się w krzyżyk. */
export function MenuIcon() {
  return (
    <span className="relative h-2.5 w-4" aria-hidden="true">
      <span className={cn(line, "top-0 group-data-open/bar:translate-y-1 group-data-open/bar:rotate-45")} />
      <span className={cn(line, "bottom-0 group-data-open/bar:-translate-y-1 group-data-open/bar:-rotate-45")} />
    </span>
  );
}
