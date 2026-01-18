import Link from "next/link";
import { announcements } from "@/data/announcements";

export default function AnnouncementsPreview() {
  const latest = announcements.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          {/* <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
            Announcements
          </p> */}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            Announcements
          </h2>
          <p className="mt-2 text-sm text-muted-fg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stay updated with official notices.
          </p>
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
          <Link
            key={a.slug}
            href={`/announcements/${a.slug}`}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
                  {a.tag}
                </div>
                <div className="mt-2 text-lg font-semibold text-fg leading-snug">
                  {a.title}
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-fg">
                {a.date}
              </span>
            </div>

            <p className="mt-4 text-sm text-muted-fg leading-relaxed">
              {a.excerpt}
            </p>

            <div className="mt-5 text-sm font-semibold text-fg">
              Read notice →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
