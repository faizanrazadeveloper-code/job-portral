import { Flame } from "lucide-react";

export default function BrandButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex shrink-0 items-center gap-2.5 lg:hidden"
      aria-label="Open menu"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg">
        <Flame className="h-8 w-8 fill-brand-500 text-brand-500" strokeWidth={1} />
      </span>
      <span className="text-[16px] font-extrabold tracking-tight text-ink-900">
        ENERGY <span className="text-brand-500">TAIL</span>
      </span>
    </button>
  );
}