import Link from "next/link";
import { achievements } from "@/data/achievements";
import SectionShell from "@/components/SectionShell";

export default function AchievementsPreview() {
  const latest = achievements.slice(0, 3);

  return (
    <SectionShell glow="trbl">
      <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          {/* <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
            Achievements
          </p> */}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            Achievements & Recognition
          </h2>
          <p className="mt-2 text-sm text-muted-fg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A glimpse of awards and recognitions earned by our members.
          </p>
        </div>

        <Link
          href="/achievements"
          className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
        >
          View All
        </Link>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((a) => (
          <Link
            key={a.slug}
            href={`/achievements/${a.slug}`}
            className="rounded-3xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-[1px] transition overflow-hidden"
          >
            {/* Cover */}
            <div className="relative h-40 bg-muted">
              <img
                src={a.cover}
                alt={`${a.title} cover`}
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
              <div className="absolute left-4 bottom-4 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-glass-15 px-3 py-1 text-xs font-semibold text-white border border-white/15">
                  {a.award.position}
                </span>
                <span className="inline-flex rounded-full bg-glass-15 px-3 py-1 text-xs font-semibold text-white border border-white/15">
                  {a.award.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-lg font-semibold text-fg leading-snug">
                    {a.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-fg">
                    {a.event.name} • {a.date}
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-fg">
                  {a.date}
                </span>
              </div>

              <p className="mt-4 text-sm text-muted-fg leading-relaxed">
                {a.excerpt}
              </p>

              {/* Winners “2.5” */}
              {/* Winners “2.5” */}
<div className="mt-5">
  <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
    Winners
  </div>

  {(() => {
    const visible = a.winners.slice(0, 2);
    const remaining = a.winners.length - visible.length;

    return (
      <div
        className={`mt-3 grid gap-2 ${
          remaining > 0 ? "grid-cols-3" : "grid-cols-2"
        }`}
      >
        {visible.map((w, idx) => (
          <div
            key={`${a.slug}-w-${idx}`}
            className="rounded-2xl border border-border bg-muted px-3 py-3"
          >
            <div className="text-sm font-semibold text-fg truncate">
              {w.name}
            </div>
            <div className="mt-1 text-xs text-muted-fg truncate">
              {w.role}
            </div>
          </div>
        ))}

        {remaining > 0 && (
          <div className="rounded-2xl border border-border bg-muted px-3 py-3 flex items-center justify-center">
            <div className="text-sm font-semibold text-fg">
              +{remaining} more
            </div>
          </div>
        )}
      </div>
    );
  })()}
</div>


              <div className="mt-5 text-sm font-semibold text-fg">
                View details →
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </SectionShell>
  );
}
