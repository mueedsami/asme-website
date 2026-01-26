import Link from "next/link";
import { fromTheDesk } from "@/data/fromTheDesk";
import SectionShell from "@/components/SectionShell";

export default function FromTheDeskPage() {
  return (
    <SectionShell glow="tlbr">
      <div className="mx-auto max-w-6xl px-4 py-12">
      <div>
        <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
          From the Desk
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">All Messages</h1>
        <p className="mt-2 text-muted-fg">
          Official notes from section leadership.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fromTheDesk.map((m) => (
          <Link
            key={m.slug}
            href={`/from-the-desk/${m.slug}`}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition"
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl overflow-hidden border border-border bg-muted shrink-0">
                <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-fg truncate">{m.name}</div>
                <div className="text-xs text-muted-fg truncate">{m.designation}</div>
                <div className="mt-1 text-xs text-muted-fg">{m.date}</div>
              </div>
            </div>

            <div className="mt-4 text-sm font-semibold text-fg leading-snug">
              {m.letter.subject}
            </div>
            <p className="mt-2 text-sm text-muted-fg leading-relaxed line-clamp-3">
              {m.excerpt}
            </p>

            <div className="mt-5 text-sm font-semibold text-fg">Read letter →</div>
          </Link>
        ))}
      </div>
    </div>
    </SectionShell>
  );
}
