"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { MagazineIssue } from "@/data/magazines";

export default function MagazinePreviewModal({
  open,
  onClose,
  issue,
}: {
  open: boolean;
  onClose: () => void;
  issue: MagazineIssue | null;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !issue) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* backdrop */}
      <button
        aria-label="Close preview"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* panel */}
      <div className="relative mx-auto h-full max-w-6xl px-4 py-6">
        <div className="h-full overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl">
          <div className="flex h-full flex-col">
            {/* header */}
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
              <div className="min-w-0">
                <div className="text-sm text-muted-fg">Preview</div>
                <div className="truncate text-lg font-semibold text-fg">
                  {issue.title} — {issue.year}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={issue.pdfUrl}
                  download
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
                >
                  Download PDF
                </a>

                <Link
                  href={`/magazine/${issue.slug}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-border bg-muted px-4 py-2 text-sm font-semibold text-fg hover:bg-card transition"
                >
                  Open page
                </Link>

                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-2xl border border-border bg-muted px-3 py-2 text-sm font-semibold text-fg hover:bg-card transition"
                >
                  Close
                </button>
              </div>
            </div>

            {/* content */}
            <div className="flex-1 overflow-auto">
              <div className="mx-auto max-w-4xl p-5 sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {issue.previewImages.map((src, i) => (
                    <div
                      key={`${issue.slug}-p-${i}`}
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

                <div className="mt-6 rounded-3xl border border-border bg-muted p-5">
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

                <div className="mt-6 text-sm text-muted-fg">
                  Tip: This preview uses images for speed. The full PDF is available
                  via download.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
