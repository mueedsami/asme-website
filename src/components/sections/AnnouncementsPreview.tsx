import Link from "next/link";
import { announcements } from "@/data/announcements";
import SectionShell from "@/components/SectionShell";

const TAG_META: Record<string, { monogram: string; label: string }> = {
  Notice: { monogram: "!", label: "Notice" },
  Registration: { monogram: "R", label: "Registration" },
  Result: { monogram: "✓", label: "Result" },
  General: { monogram: "G", label: "General" },
};

function AnnouncementCard({
  slug,
  title,
  tag,
  date,
  excerpt,
}: {
  slug: string;
  title: string;
  tag: string;
  date: string;
  excerpt: string;
}) {
  const meta = TAG_META[tag] ?? { monogram: "A", label: tag };

  return (
    <Link
      href={`/announcements/${slug}`}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
    >
      {/* Decorative header */}
      <div className="relative h-24 bg-muted">
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, rgba(0,0,0,0) 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.28) 0.7px, transparent 0.7px)",
            backgroundSize: "14px 14px",
          }}
          aria-hidden="true"
        />

        <div className="absolute left-5 top-5 flex items-center gap-3">
          <div
            className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-card text-sm font-semibold text-fg"
            aria-hidden="true"
          >
            {meta.monogram}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-fg">
              {meta.label}
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-fg">
              {date}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-lg font-semibold text-fg leading-snug">
          {title}
        </div>

        <p className="mt-3 text-sm text-muted-fg leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-fg">
          <span className="transition group-hover:translate-x-[1px]">Read notice →</span>
        </div>
      </div>
    </Link>
  );
}

export default function AnnouncementsPreview() {
  const latest = announcements.slice(0, 3);

  return (
    <SectionShell glow="tlbr">
      <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          {/* <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
            Announcements
          </p> */}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            Announcements
          </h2>
          {/* <p className="mt-2 text-sm text-muted-fg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stay updated with official notices.
          </p> */}
        </div>

        <Link
          href="/announcements"
          className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
        >
          View All
        </Link>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((a) => (
          <AnnouncementCard
            key={a.slug}
            slug={a.slug}
            title={a.title}
            tag={a.tag}
            date={a.date}
            excerpt={a.excerpt}
          />
        ))}
      </div>
      </div>
    </SectionShell>
  );
}
