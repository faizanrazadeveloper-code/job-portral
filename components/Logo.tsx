import { Droplet } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
        <Droplet className="w-5 h-5 text-white fill-white" />
      </div>
      <div className="leading-tight">
        <div className={`font-extrabold tracking-wide text-lg ${light ? "text-white" : "text-slate-900"}`}>
          ENERGY <span className="text-blue-500">TAIL</span>
        </div>
        <div className={`text-[10px] tracking-wide ${light ? "text-slate-400" : "text-slate-400"}`}>
          Oil, Gas &amp; Energy Jobs
        </div>
      </div>
    </div>
  );
}
