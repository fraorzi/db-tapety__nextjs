import { cn } from "@/lib/cn";

/**
 * Strzałka: cienka linia z grotem, rozmiar od font-size rodzica.
 * Przy hoverze linku lub przycisku, w którym siedzi, trzonek się wydłuża, a grot jedzie za nim
 * (zapas mieści się w paddingu przycisku). W karcie realizacji reaguje na hover `group/arrow`.
 */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        "inline-block h-[0.72em] w-[calc(0.72em*18/12)] flex-none overflow-visible fill-none stroke-current stroke-[1.5] align-[-0.02em]",
        className,
      )}
      viewBox="0 0 18 12"
      aria-hidden="true"
    >
      <path className="origin-left transition-transform duration-450 [transform-box:fill-box] icon-hover:scale-x-[1.38]" d="M0 6h17" />
      <path className="transition-transform duration-450 icon-hover:translate-x-[6.5px]" d="M12 1l5 5-5 5" />
    </svg>
  );
}
