import Link from "next/link";
import SectionShell from "@/components/SectionShell";

export default function AboutPreview() {
  return (
    <SectionShell glow="tlbr">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            {/* <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
              About
            </p> */}
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
              About the ASME IUT Student Section
            </h2>
            {/* <p className="mt-3 text-muted-fg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p> */}
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
                    The ASME IUT Student Section (ASME IUT SS) at the Islamic University of Technology (IUT), Bangladesh, has been an active and evolving platform for students passionate about mechanical innovation and leadership. Focused on connecting classroom knowledge with real-world experience, the section organizes impactful activities such as technical workshops, hands-on industry visits, and signature events like Pixelate— a digital poster competition promoting creative engineering communication. It also conducts formal orientation and career development sessions for newly admitted students to help them understand ASME opportunities and prepare for their engineering journey.
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
                text="Our mission is to bridge classroom learning with real-world engineering by creating a practical, student-driven platform at IUT where members gain hands-on exposure through technical workshops, industry visits, competitions, and collaborative projects. "
              />
              <PolishedCard
                title="Vision"
                text="To be a leading student-driven engineering community at IUT that inspires innovation, develops future-ready mechanical engineers, and creates meaningful impact through knowledge, creativity, and collaboration."
              />
              <PolishedCard
                title="Goals"
                text="To empower IUT students to become skilled, industry-ready, and globally connected mechanical engineers by providing continuous opportunities for technical growth, leadership development, and impactful engineering activities."
              />
              <PolishedCard
                title="Affiliation"
                text="The ASME IUT Student Section (ASME IUT SS) is an officially affiliated student section operating under the American Society of Mechanical Engineers (ASME). We follow ASME’s principles and student section guidelines while conducting activities at the Islamic University of Technology (IUT), Bangladesh."
              />
            </div>

            {/* ✅ Removed the bottom Affiliations strip */}
          </div>
        </div>
      </div>
    </SectionShell>
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

      {/* <div className="mt-5 h-px w-full bg-border opacity-60" /> */}
      {/* <p className="mt-4 text-xs text-muted-fg">
        Lorem ipsum dolor sit amet, consectetur.
      </p> */}
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
