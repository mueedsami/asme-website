"use client";

import { useEffect } from "react";
import type { GalleryImage } from "@/data/gallery";

export default function GalleryLightbox({
  open,
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || images.length === 0) return null;

  const img = images[index];

  return (
    <div className="fixed inset-0 z-[70]">
      {/* backdrop */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col px-4 py-6">
        {/* top bar */}
        <div className="relative z-10 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-card/90 px-4 py-3 backdrop-blur">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-fg">{img.alt}</div>
            <div className="mt-0.5 text-xs text-muted-fg">
              {img.tag ? img.tag : "Gallery"}
              {img.year ? ` • ${img.year}` : ""}
              {" • "}
              {index + 1}/{images.length}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="rounded-xl border border-border bg-muted px-3 py-2 text-sm font-semibold text-fg hover:bg-card transition"
            >
              Prev
            </button>
            <button
              onClick={onNext}
              className="rounded-xl border border-border bg-muted px-3 py-2 text-sm font-semibold text-fg hover:bg-card transition"
            >
              Next
            </button>
            <button
              onClick={onClose}
              className="rounded-xl border border-border bg-muted px-3 py-2 text-sm font-semibold text-fg hover:bg-card transition"
            >
              Close
            </button>
          </div>
        </div>

        {/* image area */}
        <div className="relative mt-4 flex-1 overflow-hidden rounded-3xl border border-white/10 bg-black/20">
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-contain"
            loading="eager"
          />

          {/* subtle gradient to give depth */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.25) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="mt-3 text-xs text-white/70">
          Tip: Use ← → keys for navigation, Esc to close.
        </div>
      </div>
    </div>
  );
}
