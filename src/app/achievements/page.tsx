import Link from "next/link";
import { achievements } from "@/data/achievements";

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div>
        <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
          Achievements
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">All Achievements</h1>
        <p className="mt-2 text-muted-fg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => (
          <Link
            key={a.slug}
            href={`/achievements/${a.slug}`}
            className="rounded-3xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-[1px] transition overflow-hidden"
          >
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
              <div className="text-lg font-semibold text-fg leading-snug">
                {a.title}
              </div>
              <div className="mt-1 text-xs text-muted-fg">
                {a.event.name} • {a.date}
              </div>

              <p className="mt-4 text-sm text-muted-fg leading-relaxed">
                {a.excerpt}
              </p>

              <div className="mt-5 text-sm font-semibold text-fg">
                View details →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
