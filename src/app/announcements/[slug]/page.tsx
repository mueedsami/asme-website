import Link from "next/link";
import { announcements } from "@/data/announcements";
import SectionShell from "@/components/SectionShell";

const TAG_META: Record<string, { monogram: string; label: string }> = {
  Notice: { monogram: "!", label: "Notice" },
  Registration: { monogram: "R", label: "Registration" },
  Result: { monogram: "✓", label: "Result" },
  General: { monogram: "G", label: "General" },
};

export default async function AnnouncementDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = announcements.find((x) => x.slug === slug);


  if (!a) {
    return (
      <SectionShell glow="tlbr">
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
      </SectionShell>
    );
  }

  return (
    <SectionShell glow="tlbr">
      <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/announcements" className="text-sm font-semibold text-fg hover:underline">
        ← Back to Announcements
      </Link>

      <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        {/* Header strip */}
        <div className="relative h-28 bg-muted">
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

          <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
            <div
              className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-card text-sm font-semibold text-fg"
              aria-hidden="true"
            >
              {(TAG_META[a.tag] ?? { monogram: "A" }).monogram}
            </div>

            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-fg">
              {(TAG_META[a.tag] ?? { label: a.tag }).label}
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-fg">
              {a.date}
            </span>
          </div>
        </div>

        <div className="p-7">
          <h1 className="text-3xl font-semibold text-fg">{a.title}</h1>
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
    </div>
    </SectionShell>
  );
}
