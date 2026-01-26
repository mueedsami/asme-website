import type { ReactNode } from "react";

type GlowVariant = "tlbr" | "trbl";

/**
 * Full-width section wrapper with clipped corner glows.
 * Prevents glow bleed between sections via isolate + overflow-hidden.
 */
export default function SectionShell({
  children,
  glow = "tlbr",
  className = "",
  bg = true,
}: {
  children: ReactNode;
  /** tlbr = top-left+bottom-right, trbl = top-right+bottom-left */
  glow?: GlowVariant;
  /** Additional classes applied to the outer <section>. */
  className?: string;
  /** Whether to paint a solid section base (recommended). */
  bg?: boolean;
}) {
  const isTLBR = glow === "tlbr";

  return (
    <section className={`relative isolate overflow-hidden ${className}`.trim()}>
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {bg && <div className="h-full w-full bg-bg" />}

        {/* Primary glow */}
        <div
          className={`absolute h-80 w-80 rounded-full blur-3xl opacity-10 ${
            isTLBR ? "-top-24 -left-24" : "-top-24 -right-24"
          }`}
          style={{ background: "var(--primary)" }}
        />

        {/* Accent glow */}
        <div
          className={`absolute h-80 w-80 rounded-full blur-3xl opacity-10 ${
            isTLBR ? "-bottom-24 -right-24" : "-bottom-24 -left-24"
          }`}
          style={{ background: "var(--accent)" }}
        />
      </div>

      {children}
    </section>
  );
}
