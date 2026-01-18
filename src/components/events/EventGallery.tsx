"use client";

import { useEffect, useMemo, useState } from "react";

export default function EventGallery({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const total = images.length;

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Lock background scroll when open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Keyboard controls
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, total]);

  const currentSrc = useMemo(() => images[index], [images, index]);

  if (!images?.length) return null;

  return (
    <>
      {/* Grid */}
      <div className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-fg">Event Gallery</h2>
            <p className="mt-1 text-sm text-muted-fg">Moments from the event.</p>
          </div>
          <div className="text-xs text-muted-fg">
            {total} photo{total > 1 ? "s" : ""}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => openAt(i)}
              className="group relative rounded-3xl border border-border bg-muted overflow-hidden text-left"
              aria-label={`Open photo ${i + 1} of ${total}`}
            >
              <img
                src={src}
                alt={`${title} photo ${i + 1}`}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0))",
                }}
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute left-4 bottom-4 opacity-0 group-hover:opacity-100 transition">
                <span className="rounded-full bg-glass-15 px-3 py-1 text-xs font-semibold text-white border border-white/15">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            onClick={close}
            aria-label="Close viewer"
          />

          {/* Panel */}
          <div className="relative w-[92vw] max-w-5xl">
            <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur overflow-hidden shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
                <div className="text-xs text-white/80">
                  {index + 1} / {total}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="h-10 w-10 rounded-2xl border border-white/10 bg-white/10 text-white hover:bg-white/15 transition"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="h-10 w-10 rounded-2xl border border-white/10 bg-white/10 text-white hover:bg-white/15 transition"
                    aria-label="Next image"
                  >
                    →
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="h-10 px-4 rounded-2xl border border-white/10 bg-white/10 text-white hover:bg-white/15 transition text-sm font-semibold"
                    aria-label="Close"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="bg-black">
                <img
                  src={currentSrc}
                  alt={`${title} photo ${index + 1}`}
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>

              {/* Hint bar (mobile friendly) */}
              <div className="px-4 py-3 text-xs text-white/70 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-1">
                <span>ESC: close</span>
                <span>←/→: navigate</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
