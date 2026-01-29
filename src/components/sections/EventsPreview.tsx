"use client";

import Link from "next/link";
import { useMemo, useRef } from "react";
import { events } from "@/data/events";
import SectionShell from "@/components/SectionShell";

function scrollByAmount(el: HTMLDivElement | null, amount: number) {
  if (!el) return;
  el.scrollBy({ left: amount, behavior: "smooth" });
}

export default function EventsPreview() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const featured = useMemo(() => events.slice(0, 6), []);

  return (
    <SectionShell glow="trbl">
      <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          {/* <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
            Events
          </p> */}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            Recent Activities
          </h2>
          <p className="mt-2 text-sm text-muted-fg max-w-2xl">
            Recent events and initiatives.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop arrows */}
          <button
            type="button"
            onClick={() => scrollByAmount(scrollerRef.current, -520)}
            className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card text-fg hover:bg-muted transition"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(scrollerRef.current, 520)}
            className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-card text-fg hover:bg-muted transition"
            aria-label="Scroll right"
          >
            →
          </button>

          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Scroller */}
      <div className="relative mt-7">
        {/* subtle edge fades (premium touch) */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-10"
          style={{
            background: "linear-gradient(to right, var(--bg), transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-10"
          style={{
            background: "linear-gradient(to left, var(--bg), transparent)",
          }}
          aria-hidden="true"
        />

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" as any }}
        >
          {/* Hide scrollbar in WebKit */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {featured.map((e) => (
            <EventCard
              key={e.slug}
              slug={e.slug}
              title={e.title}
              date={e.date}
              location={e.location}
              category={e.category}
              excerpt={e.excerpt}
              cover={e.cover}
            />
          ))}

          {/* little “spacer” so last card isn’t glued to edge */}
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* mobile hint */}
      <p className="mt-3 text-xs text-muted-fg md:hidden">
        Swipe horizontally to explore more →
      </p>
      </div>
    </SectionShell>
  );
}


function EventCard(props: {
  slug: string;
  title: string;
  date: string;
  location: string;
  category: string;
  excerpt: string;
  cover: string;
}) {
  return (
    <Link
      href={`/events/${props.slug}`}
      className="snap-start shrink-0 w-[84%] sm:w-[420px] rounded-3xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-[1px] transition overflow-hidden"
    >
      {/* Cover */}
      <div className="relative h-40 w-full bg-muted">
        <img
          src={props.cover}
          alt={`${props.title} cover`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* premium gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.10), rgba(0,0,0,0))",
          }}
          aria-hidden="true"
        />
        <div className="absolute left-4 bottom-4">
          <span className="inline-flex rounded-full bg-glass-15 px-3 py-1 text-xs font-semibold text-white border border-white/15">
            {props.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-base sm:text-lg font-semibold text-fg leading-snug">
          {props.title}
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-fg">
            {props.date}
          </span>
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-fg">
            {props.location}
          </span>
        </div>

        <p className="mt-4 text-sm text-muted-fg leading-relaxed">
          {props.excerpt}
        </p>

        <div className="mt-5 text-sm font-semibold text-fg">Read details →</div>
      </div>
    </Link>
  );
}
