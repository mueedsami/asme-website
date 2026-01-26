import Link from "next/link";
import { fromTheDesk } from "@/data/fromTheDesk";
import SectionShell from "@/components/SectionShell";

export default async function DeskLetterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = fromTheDesk.find((x) => x.slug === slug);

  if (!m) {
    return (
      <SectionShell glow="tlbr">
        <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold text-fg">Message not found</h1>
        <p className="mt-2 text-muted-fg">
          The message you are looking for does not exist.
        </p>
        <Link
          href="/from-the-desk"
          className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-fg"
        >
          Back to Messages
        </Link>
      </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell glow="tlbr">
      <div className="mx-auto max-w-5xl px-4 py-12">
      <Link
        href="/from-the-desk"
        className="text-sm font-semibold text-fg hover:underline"
      >
        ← Back to From the Desk
      </Link>

      {/* Paper texture background */}
      <div className="mt-6 rounded-[32px] border border-border shadow-sm overflow-hidden">
        <div className="paper-texture paper-grain">
          <div className="relative p-4 sm:p-8">
            {/* Letter sheet */}
            <div className="mx-auto max-w-3xl rounded-[28px] border border-border bg-white/85 backdrop-blur-sm shadow-xl">
              {/* Regular, readable font (no handwriting) */}
              <div className="p-6 sm:p-10 font-sans text-[#1A1A1A]">
                {/* Letter header */}
                <div className="flex items-start gap-4">
                  <div className="min-w-0">
                    <div className="text-xl sm:text-2xl font-semibold">
                      {m.name}
                    </div>
                    <div className="text-[15px] sm:text-base opacity-85">
                      {m.designation}
                    </div>
                    <div className="mt-1 text-xs opacity-70">{m.date}</div>
                  </div>
                </div>

                {/* Subject */}
                {/* <div className="mt-7">
                  <div className="text-xs tracking-widest opacity-70 uppercase">
                    Subject
                  </div>
                  <h1 className="mt-2 text-2xl sm:text-4xl font-semibold leading-snug">
                    {m.letter.subject}
                  </h1>
                </div> */}

                {/* Letter body */}
                <div className="mt-7 space-y-4 leading-relaxed">
                  {m.letter.paragraphs.map((p, i) => (
                    <p key={i} className="text-[17px] sm:text-[19px]">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Closing */}
                <div className="mt-10">
                  <div className="text-[17px] sm:text-[19px]">
                    {m.letter.closing}
                  </div>

                  <div className="mt-4">
                    <div className="text-2xl sm:text-3xl font-semibold">
                      {m.letter.signatureName}
                    </div>
                    <div className="text-[15px] sm:text-base opacity-85">
                      {m.letter.signatureTitle}
                    </div>
                  </div>
                </div>

                {/* Footer note */}
                <div className="mt-10 border-t border-border pt-5 text-xs opacity-70">
                  This letter is published by ASME IUT Student Section.
                </div>
              </div>
            </div>

            {/* subtle vignette */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.08) 100%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
    </SectionShell>
  );
}
