import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background polish */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-bg" />
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30"
          style={{ background: "var(--primary)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full blur-3xl opacity-15"
          style={{ background: "var(--accent)" }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
              About
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
              About the ASME IUT Student Section
            </h2>
            <p className="mt-3 text-muted-fg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold text-fg hover:bg-muted transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Micro timeline (official feel) */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <TimelineItem label="Chapter" value="ASME Student Section" />
          <TimelineItem label="University" value="Islamic University of Technology" />
          <TimelineItem label="Department" value="Mechanical & Production Engineering" />
        </div>

        {/* Main content grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Left: Highlight + Focus Areas (stats removed) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-fg">
                    A platform for excellence and leadership
                  </div>
                  <p className="mt-2 text-sm text-muted-fg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse.
                  </p>
                </div>
                <Mark />
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
                  Focus Areas
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>Workshops</Pill>
                  <Pill>Competitions</Pill>
                  <Pill>Industry Talks</Pill>
                  <Pill>Research Culture</Pill>
                  <Pill>Community</Pill>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mission/Vision/Goals/Affiliation cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <PolishedCard
                title="Mission"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam."
              />
              <PolishedCard
                title="Vision"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit."
              />
              <PolishedCard
                title="Goals"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident."
              />
              <PolishedCard
                title="Affiliation"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis."
              />
            </div>

            {/* ✅ Removed the bottom Affiliations strip */}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
      <div className="text-xs text-muted-fg">{label}</div>
      <div className="mt-1 text-sm font-semibold text-fg">{value}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-fg">
      {children}
    </span>
  );
}

function PolishedCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md hover:-translate-y-[1px]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-fg">{title}</div>
          <p className="mt-2 text-sm text-muted-fg leading-relaxed">{text}</p>
        </div>

        <div className="h-10 w-10 rounded-2xl bg-muted border border-border grid place-items-center">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        </div>
      </div>

      <div className="mt-5 h-px w-full bg-border opacity-60" />
      <p className="mt-4 text-xs text-muted-fg">
        Lorem ipsum dolor sit amet, consectetur.
      </p>
    </div>
  );
}

function Mark() {
  return (
    <div className="shrink-0 rounded-2xl border border-border bg-muted p-3">
      <div className="h-8 w-8 rounded-xl" style={{ background: "var(--primary)" }} />
    </div>
  );
}
