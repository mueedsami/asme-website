"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { executivePanel, ExecMember } from "@/data/executivePanel";

function byOrder(a: ExecMember, b: ExecMember) {
  return (a.order ?? 999) - (b.order ?? 999);
}

function initials(name: string) {
  const parts = name.trim().split(" ");
  const a = parts[0]?.[0] ?? "A";
  const b = parts[1]?.[0] ?? "S";
  return (a + b).toUpperCase();
}

function Avatar({ src, name }: { src?: string; name: string }) {
  // If an image is missing from /public (common during setup), Next/Image will
  // still render a blank box. We keep initials behind and hide the image on error.
  const [ok, setOk] = useState(true);

  return (
    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border bg-card shrink-0">
      <div className="absolute inset-0 grid place-items-center text-xs font-bold text-muted-fg">
        {initials(name)}
      </div>
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="56px"
          onError={() => setOk(false)}
          className={["object-cover", ok ? "opacity-100" : "opacity-0"].join(
            " "
          )}
        />
      ) : null}
    </div>
  );
}

export default function ExecutiveHeadsCarousel() {
  // Home page preview: show only the first 9 members in `order` sequence.
  // (This matches the sheet-driven ordering and avoids any alphabetical sorting.)
  const heads = useMemo(() => {
    return [...executivePanel].sort(byOrder).slice(0, 9);
  }, []);

  const [perView, setPerView] = useState(1);
  // Slide by *page* (not by single card) so dots represent pages (e.g., 9 items
  // with 3-per-view => 3 dots, not 7).
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const out: ExecMember[][] = [];
    for (let i = 0; i < heads.length; i += perView) {
      out.push(heads.slice(i, i + perView));
    }
    return out;
  }, [heads, perView]);

  const maxPage = Math.max(0, pages.length - 1);

  // responsive cards-per-view
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) return 1; // mobile
      if (w < 1024) return 2; // tablet
      return 3; // desktop
    };
    const apply = () => setPerView(calc());

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  // keep index valid when perView changes
  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, pages.length - 1)));
  }, [perView, pages.length]);

  // auto slide every 4s
  useEffect(() => {
    if (pages.length <= 1) return;
    const t = window.setInterval(() => {
      setPage((p) => (p >= maxPage ? 0 : p + 1));
    }, 4000);
    return () => window.clearInterval(t);
  }, [pages.length, maxPage]);

  const goPrev = () => setPage((p) => (p <= 0 ? maxPage : p - 1));
  const goNext = () => setPage((p) => (p >= maxPage ? 0 : p + 1));

  if (!heads.length) return null;

  const trackWidth = `${pages.length * 100}%`;
  const translate = `translateX(-${page * (100 / pages.length)}%)`;

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-muted-fg">
          Executive batch of 2024-2025
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="h-9 w-9 rounded-2xl border border-border bg-card text-fg hover:bg-muted transition"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            className="h-9 w-9 rounded-2xl border border-border bg-card text-fg hover:bg-muted transition"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-[28px] border border-border bg-card">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ width: trackWidth, transform: translate }}
        >
          {pages.map((group, gi) => (
            <div
              key={gi}
              className="p-4 sm:p-5"
              style={{ width: `${100 / pages.length}%` }}
            >
              <div
                className={[
                  "flex gap-4",
                  group.length < perView ? "justify-center" : "justify-between",
                ].join(" ")}
              >
                {group.map((m) => (
                  <div key={m.slug} className="w-full max-w-[22rem] flex-1">
                    <Link
                      href={`/executive-panel/${m.slug}`}
                      className="group block rounded-[24px] border border-border bg-muted p-5 hover:bg-card transition"
                    >
                      <div className="flex items-start gap-4">
                        <Avatar src={m.photo} name={m.name} />

                        <div className="min-w-0">
                          <div className="truncate text-base font-semibold text-fg">
                            {m.name}
                          </div>
                          <div className="text-sm text-muted-fg">{m.role}</div>
                          <div className="mt-1 text-xs text-muted-fg">
                            {m.team}
                            {m.session ? ` • ${m.session}` : ""}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-xs font-semibold text-primary">
                        View details →
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      {pages.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: pages.length }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={[
                "h-2 rounded-full transition",
                i === page ? "w-6 bg-primary" : "w-2 bg-border",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
