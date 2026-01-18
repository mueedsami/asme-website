"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, NavItem } from "@/lib/nav";

export default function MobileMenu({ transparent }: { transparent: boolean }) {
  const [open, setOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={[
          "rounded-xl px-3 py-2 text-sm font-semibold transition",
          transparent ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-100",
        ].join(" ")}
        aria-label="Open menu"
      >
        Menu
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-slate-900/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between px-4 h-16 border-b border-slate-200">
              <div className="text-sm font-semibold text-slate-900">ASME IUT</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
            </div>

            <div className="p-3">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  panelOpen={panelOpen}
                  setPanelOpen={setPanelOpen}
                  onNavigate={() => setOpen(false)}
                />
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MobileNavItem({
  item,
  panelOpen,
  setPanelOpen,
  onNavigate,
}: {
  item: NavItem;
  panelOpen: boolean;
  setPanelOpen: (v: boolean) => void;
  onNavigate: () => void;
}) {
  if ("children" in item) {
    return (
      <div className="mb-1">
        <button
          type="button"
          onClick={() => setPanelOpen(!panelOpen)}
          className="w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-100 flex items-center justify-between"
        >
          <span>{item.label}</span>
          <span className="text-xs text-slate-500">{panelOpen ? "▲" : "▼"}</span>
        </button>

        {panelOpen && (
          <div className="mt-1 ml-2 border-l border-slate-200 pl-2">
            {item.children.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={onNavigate}
                className="block rounded-2xl px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                {c.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="mb-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
    >
      {item.label}
    </Link>
  );
}
