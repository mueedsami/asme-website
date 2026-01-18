import Link from "next/link";
import { announcements } from "@/data/announcements";

export default function AnnouncementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div>
        <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
          Announcements
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">All Notices</h1>
        <p className="mt-2 text-muted-fg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {announcements.map((a) => (
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

            <div className="mt-5 text-sm font-semibold text-fg">Read notice →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
