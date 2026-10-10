import { MenuIcon } from "./MenuIcon";

type Props = { open: boolean; onToggle: () => void };

/** „Menu” / „Zamknij” na mobile; na desktopie ukryty. `data-burger` pozwala zignorować go przy kliknięciu poza menu. */
export function MenuToggle({ open, onToggle }: Props) {
  return (
    <button
      type="button"
      data-burger
      className="hidden min-h-[2.6rem] items-center gap-[0.6rem] text-md font-medium max-md:inline-flex"
      aria-expanded={open}
      aria-controls="nav-panel"
      onClick={onToggle}
    >
      <MenuIcon />
      {open ? "Zamknij" : "Menu"}
    </button>
  );
}
