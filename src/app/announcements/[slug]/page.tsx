import Link from "next/link";
import { announcements } from "@/data/announcements";

export default async function AnnouncementDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = announcements.find((x) => x.slug === slug);


  if (!a) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold text-fg">Notice not found</h1>
        <p className="mt-2 text-muted-fg">The notice you are looking for does not exist.</p>
        <Link
          href="/announcements"
          className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-fg"
        >
          Back to Announcements
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/announcements" className="text-sm font-semibold text-fg hover:underline">
        ← Back to Announcements
      </Link>

      <div className="mt-6 rounded-3xl border border-border bg-card p-7 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-fg">
            {a.tag}
          </span>
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-fg">
            {a.date}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold text-fg">{a.title}</h1>
        <p className="mt-3 text-muted-fg">{a.excerpt}</p>

        <div className="mt-7 space-y-4 text-muted-fg leading-relaxed">
          {a.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-5 text-sm text-muted-fg">
          For queries, please visit the Contact page.
        </div>
      </div>
    </div>
  );
}
