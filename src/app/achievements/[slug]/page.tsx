import Link from "next/link";
import { achievements } from "@/data/achievements";
import SectionShell from "@/components/SectionShell";

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-border bg-muted p-5">
      <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-fg">{value}</div>
    </div>
  );
}

export default async function AchievementDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = achievements.find((x) => x.slug === slug);

  if (!a) {
    return (
      <SectionShell glow="trbl">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-2xl font-semibold text-fg">Achievement not found</h1>
          <p className="mt-2 text-muted-fg">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/achievements"
            className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-fg"
          >
            Back to Achievements
          </Link>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell glow="trbl">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <Link href="/achievements" className="text-sm font-semibold text-fg hover:underline">
          ← Back to Achievements
        </Link>

        <div className="mt-6 rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
          {/* Cover */}
          <div className="relative h-72 bg-muted">
            <img src={a.cover} alt={`${a.title} cover`} className="h-full w-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.60), rgba(0,0,0,0.15), rgba(0,0,0,0))",
              }}
              aria-hidden="true"
            />
            <div className="absolute left-6 bottom-6 right-6">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-glass-15 px-3 py-1 text-xs font-semibold text-white border border-white/15">
                  {a.award.position}
                </span>
                <span className="inline-flex rounded-full bg-glass-15 px-3 py-1 text-xs font-semibold text-white border border-white/15">
                  {a.award.category}
                </span>
                <span className="inline-flex rounded-full bg-glass-15 px-3 py-1 text-xs font-semibold text-white border border-white/15">
                  {a.date}
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-semibold text-white">{a.title}</h1>
              <p className="mt-2 text-white/85 text-sm">{a.excerpt}</p>
            </div>
          </div>

          <div className="p-7">
            {/* Event + Award summary */}
            <div className="grid gap-4 md:grid-cols-3">
              <InfoBox label="Event" value={a.event.name} />
              <InfoBox label="Organizer" value={a.event.organizer} />
              <InfoBox label="Location" value={a.event.location} />
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-fg">Winners</h2>
              <p className="mt-1 text-sm text-muted-fg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {a.winners.map((w, idx) => (
                  <div
                    key={`${a.slug}-winner-${idx}`}
                    className="rounded-3xl border border-border bg-muted p-5"
                  >
                    <div className="text-sm font-semibold text-fg">{w.name}</div>
                    <div className="mt-1 text-xs text-muted-fg">{w.role}</div>
                    {w.department && (
                      <div className="mt-3 inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-fg">
                        {w.department}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <h2 className="text-lg font-semibold text-fg">Story</h2>
              <div className="mt-4 space-y-4 text-muted-fg leading-relaxed">
                {a.story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
