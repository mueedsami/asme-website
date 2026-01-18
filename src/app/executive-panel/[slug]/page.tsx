import Link from "next/link";
import Image from "next/image";
import { executivePanel } from "@/data/executivePanel";

function initials(name: string) {
  const parts = name.trim().split(" ");
  const a = parts[0]?.[0] ?? "A";
  const b = parts[1]?.[0] ?? "S";
  return (a + b).toUpperCase();
}

export default async function ExecutiveMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = executivePanel.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-14">
        <h1 className="text-2xl font-semibold text-fg">Member not found</h1>
        <p className="mt-2 text-muted-fg">
          The executive profile you are looking for does not exist.
        </p>
        <Link
          href="/executive-panel"
          className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
        >
          Back to Executive Panel
        </Link>
      </div>
    );
  }

  const sessionText = member.session ? member.session : "Current Session";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/executive-panel"
          className="text-sm font-semibold text-fg hover:underline"
        >
          ← Back to Executive Panel
        </Link>

        <div className="text-xs text-muted-fg">
          <span className="font-semibold text-fg">{member.team}</span> •{" "}
          {sessionText}
        </div>
      </div>

      <div className="mt-7 grid gap-6 lg:grid-cols-12">
        {/* Left: Profile card */}
        <div className="lg:col-span-5">
          <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-border bg-muted shrink-0">
                {/* initials fallback behind image */}
                <div className="absolute inset-0 grid place-items-center text-lg font-bold text-muted-fg">
                  {initials(member.name)}
                </div>
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <h1 className="truncate text-2xl font-semibold text-fg">
                  {member.name}
                </h1>
                <div className="mt-1 text-muted-fg">{member.role}</div>

                <div className="mt-3 inline-flex items-center rounded-2xl border border-border bg-muted px-3 py-1 text-xs font-semibold text-fg">
                  {member.team}
                </div>
              </div>
            </div>

            {/* Contact buttons */}
            {(member.email || member.linkedin) && (
              <div className="mt-6 flex flex-wrap gap-2">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-95 transition"
                  >
                    Email
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-border bg-muted px-4 py-2 text-sm font-semibold text-fg hover:bg-card transition"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            )}

            <div className="mt-6 border-t border-border pt-5 text-sm text-muted-fg leading-relaxed">
              <div className="font-semibold text-fg">Session</div>
              <div className="mt-1">{sessionText}</div>

              <div className="mt-4 font-semibold text-fg">Role</div>
              <div className="mt-1">{member.role}</div>

              <div className="mt-4 font-semibold text-fg">Team</div>
              <div className="mt-1">{member.team}</div>
            </div>
          </div>
        </div>

        {/* Right: “Official Profile” style letter-card */}
        <div className="lg:col-span-7">
          <div className="rounded-[32px] border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
              Executive Profile
            </p>
            <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-fg">
              Official Representation
            </h2>
            <p className="mt-2 text-sm text-muted-fg leading-relaxed">
              This page represents the current executive panel member of the
              ASME IUT Student Section. Information will be updated as roles and
              teams change.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-muted p-5">
                <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
                  Designation
                </div>
                <div className="mt-2 text-base font-semibold text-fg">
                  {member.role}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-muted p-5">
                <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
                  Team / Domain
                </div>
                <div className="mt-2 text-base font-semibold text-fg">
                  {member.team}
                </div>
              </div>
            </div>

            {/* Optional bio placeholder (future backend) */}
            <div className="mt-6 rounded-3xl border border-border bg-muted p-5">
              <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
                Message / Bio (Optional)
              </div>
              <div className="mt-2 text-sm text-muted-fg leading-relaxed">
                This section can later be powered by Laravel so each executive
                member can have an official short bio, message, and responsibilities.
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-5 text-xs text-muted-fg">
              Published by ASME IUT Student Section.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
