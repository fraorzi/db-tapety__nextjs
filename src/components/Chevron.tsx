export function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg className={`chev chev--${dir}`} viewBox="0 0 14 14" aria-hidden="true">
      <path d="M5.5 2.5 10 7l-4.5 4.5" />
    </svg>
  );
}
