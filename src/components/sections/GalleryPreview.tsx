"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { galleryImages } from "@/data/gallery";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import SectionShell from "@/components/SectionShell";

export default function GalleryPreview() {
  const images = useMemo(() => galleryImages.slice(0, 8), []);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };

  const prev = () => setIdx((v) => (v - 1 + images.length) % images.length);
  const next = () => setIdx((v) => (v + 1) % images.length);

  return (
    <SectionShell glow="trbl">
      <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          {/* <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
            Gallery
          </p> */}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            Moments from ASME IUT
          </h2>
          <p className="mt-2 text-sm text-muted-fg max-w-2xl">
            A visual glimpse of our events, workshops, achievements, and community.
          </p>
        </div>

        <Link
          href="/gallery"
          className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
        >
          View More
        </Link>
      </div>

      {/* responsive masonry-ish grid */}
      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-3xl border border-border bg-muted shadow-sm"
            aria-label={`Open image: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* tag pill */}
            {(img.tag || img.year) && (
              <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {img.tag ? img.tag : "Gallery"}
                {img.year ? ` • ${img.year}` : ""}
              </div>
            )}

            {/* hover overlay */}
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.10))",
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <div className="line-clamp-2 text-sm font-semibold text-white">
                  {img.alt}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <GalleryLightbox
        open={open}
        images={images}
        index={idx}
        onClose={() => setOpen(false)}
        onPrev={prev}
        onNext={next}
      />
      </div>
    </SectionShell>
  );
}
