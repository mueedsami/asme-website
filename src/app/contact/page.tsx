import {
  contactStudents,
  contactOrganizations,
  sectionAddress,
  socialLinks,
} from "@/data/contacts";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
        Contact
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-fg">Get in Touch</h1>
      <p className="mt-2 text-muted-fg max-w-3xl">
        Choose the appropriate channel to ensure your message reaches the right team.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-5 rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="text-sm font-semibold text-fg">Address</div>
          <div className="mt-4 space-y-1 text-sm text-muted-fg">
            <div>{sectionAddress.line1}</div>
            <div>{sectionAddress.line2}</div>
            <div>{sectionAddress.line3}</div>
          </div>

          <div className="mt-6 text-sm font-semibold text-fg">Social</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-muted px-4 py-2 text-sm font-semibold text-fg hover:bg-card transition"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
              Students
            </div>
            <div className="mt-2 text-xl font-semibold text-fg">
              {contactStudents.name}
            </div>
            <div className="text-sm text-muted-fg">{contactStudents.role}</div>

            <div className="mt-5 space-y-2 text-sm">
              <a className="block text-fg hover:underline" href={`mailto:${contactStudents.email}`}>
                {contactStudents.email}
              </a>
              {contactStudents.phone && (
                <a className="block text-fg hover:underline" href={`tel:${contactStudents.phone}`}>
                  {contactStudents.phone}
                </a>
              )}
              {contactStudents.note && (
                <div className="text-xs text-muted-fg">{contactStudents.note}</div>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
              Organizations
            </div>
            <div className="mt-2 text-xl font-semibold text-fg">
              {contactOrganizations.name}
            </div>
            <div className="text-sm text-muted-fg">{contactOrganizations.role}</div>

            <div className="mt-5 space-y-2 text-sm">
              <a
                className="block text-fg hover:underline"
                href={`mailto:${contactOrganizations.email}`}
              >
                {contactOrganizations.email}
              </a>
              {contactOrganizations.phone && (
                <a className="block text-fg hover:underline" href={`tel:${contactOrganizations.phone}`}>
                  {contactOrganizations.phone}
                </a>
              )}
              {contactOrganizations.note && (
                <div className="text-xs text-muted-fg">{contactOrganizations.note}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-muted-fg">
        For urgent requests, please include your name, organization (if applicable), and a clear subject.
      </div>
    </div>
  );
}
