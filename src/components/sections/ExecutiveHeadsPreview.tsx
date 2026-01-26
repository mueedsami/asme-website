import Link from "next/link";
import ExecutiveHeadsCarousel from "@/components/ExecutiveHeadsCarousel";
import SectionShell from "@/components/SectionShell";

export default function ExecutiveHeadsPreview() {
  return (
    <SectionShell glow="tlbr">
      <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          {/* <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
            Executive Panel
          </p> */}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            Department Heads
          </h2>
          <p className="mt-2 text-sm text-muted-fg max-w-2xl">
            Meet the leaders guiding each department of the ASME IUT Student Section.
          </p>
        </div>

        <Link
          href="/executive-panel"
          className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
        >
          View Full Panel
        </Link>
      </div>

      <ExecutiveHeadsCarousel />
      </div>
    </SectionShell>
  );
}
