import Link from "next/link";
import { magazines } from "@/data/magazines";
import SectionShell from "@/components/SectionShell";

export default async function MagazineDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = magazines.find((m) => m.slug === slug);

  if (!issue) {
    return (
      <SectionShell glow="tlbr">
        <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold text-fg">Issue not found</h1>
        <p className="mt-2 text-muted-fg">This magazine issue does not exist.</p>
        <Link
          href="/magazines"
          className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-fg"
        >
          Back to Magazines
        </Link>
      </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell glow="tlbr">
      <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/magazines" className="text-sm font-semibold text-fg hover:underline">
        ← Back to Magazines
      </Link>

      <div className="mt-6 rounded-3xl border border-border bg-card p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
              {issue.year}
            </div>
            <h1 className="mt-2 text-3xl font-semibold text-fg">{issue.title}</h1>
            <p className="mt-2 text-muted-fg max-w-3xl">{issue.description}</p>
          </div>

          <a
            href={issue.pdfUrl}
            download
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
          >
            Download PDF
          </a>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-muted p-5">
          <div className="text-sm font-semibold text-fg">Highlights</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-fg">
            {issue.highlights.map((h, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <div className="text-sm font-semibold text-fg">Preview Pages</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {issue.previewImages.map((src, i) => (
              <div
                key={`${issue.slug}-page-${i}`}
                className="overflow-hidden rounded-3xl border border-border bg-muted"
              >
                <img
                  src={src}
                  alt={`${issue.title} page ${i + 1}`}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-muted-fg">
            Download the PDF for the complete magazine.
          </div>
        </div>
      </div>
    </div>
    </SectionShell>
  );
}
