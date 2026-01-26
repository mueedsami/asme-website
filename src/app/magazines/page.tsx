import Link from "next/link";
import { magazines } from "@/data/magazines";
import SectionShell from "@/components/SectionShell";

export default function MagazinePage() {
  return (
    <SectionShell glow="tlbr">
      <div className="mx-auto max-w-6xl px-4 py-12">
      <div>
        <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
          Magazine
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">All Issues</h1>
        <p className="mt-2 text-muted-fg">
          Browse our annual publications and download full issues.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {magazines.map((issue) => (
          <div
            key={issue.slug}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
                  {issue.year}
                </div>
                <div className="mt-2 text-xl font-semibold text-fg leading-snug">
                  {issue.title}
                </div>
                <p className="mt-2 text-sm text-muted-fg leading-relaxed">
                  {issue.description}
                </p>
              </div>
              <div className="shrink-0 rounded-2xl border border-border bg-muted px-3 py-2 text-sm font-semibold text-fg">
                Issue
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {issue.previewImages.slice(0, 3).map((src, i) => (
                <div
                  key={`${issue.slug}-mini-${i}`}
                  className="overflow-hidden rounded-2xl border border-border bg-muted"
                >
                  <img
                    src={src}
                    alt={`${issue.title} preview ${i + 1}`}
                    className="h-24 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={issue.pdfUrl}
                download
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
              >
                Download PDF
              </a>

              <Link
                href={`/magazines/${issue.slug}`}
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-muted px-4 py-2 text-sm font-semibold text-fg hover:bg-card transition"
              >
                Open page
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </SectionShell>
  );
}
