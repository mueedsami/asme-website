import Link from "next/link";
import {
  contactStudents,
  contactOrganizations,
  sectionAddress,
  socialLinks,
} from "@/data/contacts";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Brand / About */}
          <div className="lg:col-span-4">
            <div className="text-lg font-semibold text-fg">
              ASME IUT Student Section
            </div>
            <p className="mt-2 text-sm text-muted-fg leading-relaxed">
              Representing the spirit of engineering excellence through events,
              learning, and community — locally at IUT and globally under ASME.
            </p>

            <div className="mt-5 space-y-1 text-sm text-muted-fg">
              <div>{sectionAddress.line1}</div>
              <div>{sectionAddress.line2}</div>
              <div>{sectionAddress.line3}</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
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

          {/* Quick links */}
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-fg">Quick Links</div>
            <div className="mt-4 grid gap-2 text-sm">
              <Link className="text-muted-fg hover:text-fg transition" href="/">
                Home
              </Link>
              <Link className="text-muted-fg hover:text-fg transition" href="/events">
                Events
              </Link>
              <Link
                className="text-muted-fg hover:text-fg transition"
                href="/from-the-desk"
              >
                From the Desk
              </Link>
              <Link
                className="text-muted-fg hover:text-fg transition"
                href="/announcements"
              >
                Announcements
              </Link>
              <Link
                className="text-muted-fg hover:text-fg transition"
                href="/achievements"
              >
                Achievements
              </Link>
              <Link className="text-muted-fg hover:text-fg transition" href="/magazines">
                Magazine
              </Link>
              <Link className="text-muted-fg hover:text-fg transition" href="/gallery">
                Gallery
              </Link>
              <Link className="text-muted-fg hover:text-fg transition" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* Contacts split */}
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold text-fg">Contact</div>
            <p className="mt-2 text-sm text-muted-fg">
              Please use the appropriate contact channel:
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {/* Students */}
              <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
                  Students
                </div>
                <div className="mt-2 text-lg font-semibold text-fg">
                  {contactStudents.name}
                </div>
                <div className="text-sm text-muted-fg">{contactStudents.role}</div>

                <div className="mt-4 space-y-2 text-sm">
                  <a
                    className="block text-fg hover:underline"
                    href={`mailto:${contactStudents.email}`}
                  >
                    {contactStudents.email}
                  </a>
                  {contactStudents.phone && (
                    <a
                      className="block text-fg hover:underline"
                      href={`tel:${contactStudents.phone.replace(/\s/g, "")}`}
                    >
                      {contactStudents.phone}
                    </a>
                  )}
                  {contactStudents.note && (
                    <div className="text-xs text-muted-fg">{contactStudents.note}</div>
                  )}
                </div>
              </div>

              {/* Organizations */}
              <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
                  Organizations
                </div>
                <div className="mt-2 text-lg font-semibold text-fg">
                  {contactOrganizations.name}
                </div>
                <div className="text-sm text-muted-fg">
                  {contactOrganizations.role}
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <a
                    className="block text-fg hover:underline"
                    href={`mailto:${contactOrganizations.email}`}
                  >
                    {contactOrganizations.email}
                  </a>
                  {contactOrganizations.phone && (
                    <a
                      className="block text-fg hover:underline"
                      href={`tel:${contactOrganizations.phone.replace(/\s/g, "")}`}
                    >
                      {contactOrganizations.phone}
                    </a>
                  )}
                  {contactOrganizations.note && (
                    <div className="text-xs text-muted-fg">
                      {contactOrganizations.note}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-muted-fg">
              Response times may vary during weekends and exam periods.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-fg">
            © {new Date().getFullYear()} ASME IUT Student Section. All rights reserved.
          </div>

          <div className="text-xs text-muted-fg">
            Built with care for international representation.
          </div>
        </div>
      </div>
    </footer>
  );
}
