import Link from "next/link";
import { events } from "@/data/events";
import EventGallery from "@/components/events/EventGallery";


export default function EventDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-2xl font-semibold text-fg">Event not found</h1>
        <p className="mt-2 text-muted-fg">
          The event you are looking for does not exist.
        </p>
        <Link
          href="/events"
          className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-fg"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/events" className="text-sm font-semibold text-fg hover:underline">
        ← Back to Events
      </Link>

      <div className="mt-6 rounded-3xl border border-border bg-card p-7 shadow-sm">
        <div className="text-xs font-semibold tracking-widest text-muted-fg uppercase">
          {event.category}
        </div>
        <h1 className="mt-2 text-3xl font-semibold text-fg">{event.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-fg">
            {event.date}
          </span>
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-fg">
            {event.location}
          </span>
        </div>

        {/* cover placeholder */}
        <div className="mt-7 rounded-3xl border border-border bg-muted overflow-hidden">
  <img
    src={event.cover}
    alt={`${event.title} cover`}
    className="h-72 w-full object-cover"
  />
</div>

{event.gallery && event.gallery.length > 0 && (
  <EventGallery title={event.title} images={event.gallery} />
)}


        <div className="mt-7 space-y-4 text-muted-fg leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>

          

          
        </div>
      </div>
    </div>
  );
}
