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

export default function ExecutiveHeadsCarousel() {
  const heads = useMemo(() => {
    // If `isHead` isn't set yet in the dataset, derive department heads
    // by selecting one lead per team.
    const byTeam = new Map<string, ExecMember[]>();

    for (const m of executivePanel) {
      if (!m.team) continue;
      if (m.team.toLowerCase() === "core") continue; // keep preview "department heads"
      if (!byTeam.has(m.team)) byTeam.set(m.team, []);
      byTeam.get(m.team)!.push(m);
    }

    const result: ExecMember[] = [];
    for (const [team, members] of byTeam.entries()) {
      members.sort(byOrder);
      const explicit = members.find((x) => x.isHead);
      const byRole = members.find((x) => /head/i.test(x.role));
      const pick = explicit ?? byRole ?? members[0];
      if (pick) result.push(pick);
    }

    // stable order
    return result.sort((a, b) => (a.team ?? "").localeCompare(b.team ?? ""));
  }, []);

  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, heads.length - perView);

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
    setIndex((i) => Math.min(i, Math.max(0, heads.length - perView)));
  }, [perView, heads.length]);

  // auto slide every 4s
  useEffect(() => {
    if (heads.length <= perView) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 4000);
    return () => window.clearInterval(t);
  }, [heads.length, perView, maxIndex]);

  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  if (!heads.length) return null;

  const trackWidth = `${(heads.length * 100) / perView}%`;
  const translate = `translateX(-${index * (100 / perView)}%)`;

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-muted-fg">
          Executive batch of 2025-2026
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
          {heads.map((m) => (
            <div
              key={m.slug}
              className="p-4 sm:p-5"
              style={{ width: `${100 / heads.length}%` }} // each item shares track width
            >
              <Link
                href={`/executive-panel/${m.slug}`}
                className="group block rounded-[24px] border border-border bg-muted p-5 hover:bg-card transition"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border bg-card shrink-0">
                    <div className="absolute inset-0 grid place-items-center text-xs font-bold text-muted-fg">
                      {initials(m.name)}
                    </div>
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

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

      {/* dots */}
      {heads.length > perView && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "h-2 rounded-full transition",
                i === index ? "w-6 bg-primary" : "w-2 bg-border",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
