import { cn } from "@/lib/cn";

/** Szewron w sliderach: przy hoverze przycisku przesuwa się o ok. 2 px w swoją stronę. */
export function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      className={cn("size-[1.1rem] flex-none fill-none stroke-current stroke-[1.5]", dir === "left" && "-scale-x-100")}
      viewBox="0 0 14 14"
      aria-hidden="true"
    >
      <path className="transition-transform duration-450 icon-hover:translate-x-[1.6px]" d="M5.5 2.5 10 7l-4.5 4.5" />
    </svg>
  );
}
