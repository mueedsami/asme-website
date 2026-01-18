export type EventItem = {
  slug: string;
  title: string;
  date: string;
  location: string;
  category: string;
  excerpt: string;
  cover: string;
  gallery?: string[]; // ✅ added
};

export const events: EventItem[] = [
  {
    slug: "orientation-2026",
    title: "ASME IUT Orientation 2026",
    date: "January 2026",
    location: "IUT Campus",
    category: "Orientation",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    cover: "/placeholders/event-1.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  {
    slug: "design-challenge-2026",
    title: "Design Challenge Workshop",
    date: "February 2026",
    location: "MPE Department",
    category: "Workshop",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.",
    cover: "/placeholders/event-2.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  {
    slug: "industry-talk-1",
    title: "Industry Talk: Engineering Careers",
    date: "March 2026",
    location: "Auditorium",
    category: "Talk",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    cover: "/placeholders/event-3.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  {
    slug: "technical-tour-2026",
    title: "Technical Tour (Factory Visit)",
    date: "April 2026",
    location: "Outside Campus",
    category: "Tour",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
    cover: "/placeholders/event-4.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  {
    slug: "research-night-2026",
    title: "Research Night & Poster Session",
    date: "May 2026",
    location: "IUT",
    category: "Showcase",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis.",
    cover: "/placeholders/event-5.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
];
