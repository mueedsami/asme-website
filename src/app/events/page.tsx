import Link from "next/link";
import { events } from "@/data/events";
import SectionShell from "@/components/SectionShell";

export default function EventsPage() {
  return (
    <SectionShell glow="trbl">
      <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
            Events
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-fg">All Events</h1>
          <p className="mt-2 text-muted-fg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <Link
  key={e.slug}
  href={`/events/${e.slug}`}
  className="rounded-3xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-[1px] transition overflow-hidden"
>
  <div className="relative h-40 bg-muted">
    <img
      src={e.cover}
      alt={`${e.title} cover`}
      className="h-full w-full object-cover"
      loading="lazy"
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.10), rgba(0,0,0,0))",
      }}
      aria-hidden="true"
    />
    <div className="absolute left-4 bottom-4">
      <span className="inline-flex rounded-full bg-glass-15 px-3 py-1 text-xs font-semibold text-white border border-white/15">
        {e.category}
      </span>
    </div>
  </div>

  <div className="p-6">
    <div className="text-lg font-semibold text-fg leading-snug">{e.title}</div>

    <div className="mt-3 flex flex-wrap gap-2 text-xs">
      <span className="rounded-full border border-border bg-muted px-3 py-1 text-fg">
        {e.date}
      </span>
      <span className="rounded-full border border-border bg-muted px-3 py-1 text-fg">
        {e.location}
      </span>
    </div>

    <p className="mt-4 text-sm text-muted-fg leading-relaxed">{e.excerpt}</p>
    <div className="mt-5 text-sm font-semibold text-fg">Read details →</div>
  </div>
</Link>

        ))}
      </div>
    </div>
    </SectionShell>
  );
}
