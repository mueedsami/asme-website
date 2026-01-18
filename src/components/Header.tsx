"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, NavItem } from "@/lib/nav";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);

  const onHome = useMemo(() => pathname === "/", [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = onHome && !scrolled;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all",
        transparent
          ? "bg-transparent"
          : "bg-header-bg backdrop-blur border-b border-border shadow-sm",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-accent text-accent-fg grid place-items-center font-semibold">
              A
            </div>
            <div className="leading-tight">
              <div className={["text-sm font-semibold tracking-tight", transparent ? "text-white" : "text-fg"].join(" ")}>
                ASME IUT
              </div>
              <div className={["text-xs", transparent ? "text-white/80" : "text-muted-fg"].join(" ")}>
                Student Section
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavItemDesktop key={item.label} item={item} transparent={transparent} />
            ))}

            <Link
              href="/contact"
              className={[
                "ml-2 inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium transition",
                transparent
                  ? "bg-glass-15 text-white hover:bg-glass-10"
                  : "bg-accent text-accent-fg hover:opacity-90",
              ].join(" ")}
            >
              Get in Touch
            </Link>
          </nav>

          <div className="md:hidden">
            <MobileMenu transparent={transparent} />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItemDesktop({ item, transparent }: { item: NavItem; transparent: boolean }) {
  if ("children" in item) return <PanelDropdown transparent={transparent} item={item} />;

  return (
    <Link
      href={item.href}
      className={[
        "rounded-2xl px-3 py-2 text-sm font-medium transition",
        transparent
          ? "text-white/90 hover:text-white hover:bg-glass-10"
          : "text-muted-fg hover:text-fg hover:bg-muted",
      ].join(" ")}
    >
      {item.label}
    </Link>
  );
}

function PanelDropdown({
  item,
  transparent,
}: {
  item: Extract<NavItem, { children: any }>;
  transparent: boolean;
}) {
  return (
    <div className="relative group">
      <button
        className={[
          "rounded-2xl px-3 py-2 text-sm font-medium transition inline-flex items-center gap-1",
          transparent
            ? "text-white/90 hover:text-white hover:bg-glass-10"
            : "text-muted-fg hover:text-fg hover:bg-muted",
        ].join(" ")}
        type="button"
      >
        {item.label} <span className="text-xs opacity-80">▾</span>
      </button>

      <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition">
        <div className="w-56 rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
          <div className="px-4 py-3 text-xs text-muted-fg border-b border-border">Panel</div>
          <div className="p-2">
            {item.children.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block rounded-2xl px-3 py-2 text-sm text-muted-fg hover:bg-muted hover:text-fg"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
