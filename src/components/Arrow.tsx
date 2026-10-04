export function Arrow({ dir = "right" }: { dir?: "right" | "left" }) {
  return (
    <span className={dir === "left" ? "arr arr--left" : "arr"} aria-hidden="true">
      <span className="arr__a">{dir === "left" ? "←" : "→"}</span>
      <svg className="arr__b" viewBox="0 0 24 12"><path d="M0 6h22.5M17 .75 22.25 6 17 11.25" /></svg>
      <svg className="arr__c" viewBox="0 0 20 12"><path d="M0 4.6h11v2.8H0zM11 .5 19.5 6 11 11.5z" /></svg>
      <svg className="arr__d" viewBox="0 0 22 12"><path className="arr__line" d="M0 6h20.5" /><path className="arr__head" d="M15.5 1 20.5 6l-5 5" /></svg>
      <svg className="arr__e" viewBox="0 0 8 12"><path d="M1.5 1 6.5 6l-5 5" /></svg>
    </span>
  );
}
