"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS, NavItem } from "@/lib/nav";

function IconHamburger({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconClose({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function MobileMenu({ transparent }: { transparent: boolean }) {
  const [open, setOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className={[
          "inline-flex h-10 w-10 items-center justify-center rounded-2xl border transition",
          transparent
            ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
            : "border-border bg-card text-fg hover:bg-muted",
        ].join(" ")}
      >
        <IconHamburger />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] bg-white">
          {/* top bar */}
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex h-16 items-center justify-between border-b border-slate-200">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="h-9 w-9 rounded-xl bg-accent text-accent-fg grid place-items-center font-semibold">
                  A
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold tracking-tight text-slate-900">ASME IUT</div>
                  <div className="text-xs text-slate-600">Student Section</div>
                </div>
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-900 hover:bg-slate-50"
              >
                <IconClose />
              </button>
            </div>

            {/* links */}
            <nav className="py-6">
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <MobileItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
                ))}
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-fg"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

function MobileItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  if ("children" in item) {
    return (
      <div className="rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-4 py-3 text-xs font-semibold tracking-widest text-slate-600 uppercase">
          {item.label}
        </div>
        <div className="pb-2">
          {item.children.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              onClick={onNavigate}
              className="block px-4 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
    >
      {item.label}
    </Link>
  );
}
