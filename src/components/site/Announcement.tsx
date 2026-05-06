import { MapPin, Phone, ShieldCheck } from "lucide-react";
export function Announcement() {
  return (
    <div className="bg-ink text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-6 py-2 text-[11px] uppercase tracking-[0.22em] text-silver">
        <span className="inline-flex items-center gap-2"><MapPin className="h-3 w-3" /> Goiânia — GO</span>
        <span className="inline-flex items-center gap-2"><Phone className="h-3 w-3" /> (62) 99854-9026</span>
        <span className="inline-flex items-center gap-2"><ShieldCheck className="h-3 w-3" /> Prata 925</span>
      </div>
    </div>
  );
}
