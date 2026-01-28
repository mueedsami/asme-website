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
    title: "AspireME",
    date: "January 2026",
    location: "IUT Campus",
    category: "Orientation",
    excerpt: "ASpireME was organized to give Batch ’24 a warm welcome into the ASME IUT Student Section family, offering a glimpse of the exciting journey ahead and the opportunities within ASME.",
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    cover: "/events/asME.jpg",
    gallery: [
      "/events/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  {
    slug: "pixelate-2025",
    title: "Pixelate 2025",
    date: "06 January 2026",
    location: "Online Submission",
    category: "Design Competition",
    excerpt:
      "Pixelate is a digital technical poster design competition organized by the ASME IUT Student Section. It invites participants to design posters on emerging and impactful STEM topics—communicating complex ideas in an engaging, accessible way.",
    cover: "/events/pix1.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  {
    slug: "poster-design-guideline-session-2025",
    title: "Guideline Session for Effective Poster Design",
    date: "18 December 2025",
    location: "IUT Campus",
    category: "Session",
    excerpt:
      "A session on 'Guidelines for Effective Technical Digital Poster Presentation,' led by Vice-Chair Tasmiah Zaman. The session encouraged active participation and fostered a dynamic, collaborative learning environment.",
    cover: "/events/tasmia_event.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  {
    slug: "industrial-tour-akij-bakers-2025",
    title: "Industrial Tour",
    date: "25 May 2025",
    location: "Akij Bakers Limited",
    category: "Industrial Visit",
    excerpt:
      "A valuable opportunity for students to see industrial manufacturing in practice and connect classroom learning with real-world processes. Participants toured key factory areas, observed modern machinery, and learned about complex production techniques.",
    cover: "/events/industry_visit.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  {
    slug: "aspireme-2024",
    title: "ASpireME",
    date: "07 October 2024",
    location: "IUT Auditorium",
    category: "Orientation Program",
    excerpt:
      "ASpireME was organized to give Batch ’23 a warm welcome into the ASME IUT Student Section family, offering a glimpse of the exciting journey ahead and the opportunities within ASME.",
    cover: "/events/aspire24.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  {
    slug: "pixelate-2024",
    title: "Pixelate 2024",
    date: "15 April 2024",
    location: "Online Submission",
    category: "Design Competition",
    excerpt:
      "Pixelate is an Intra-IUT digital technical poster design competition focused on STEM topics. Students turn the latest breakthroughs into high-impact visual narratives—making complex engineering concepts impossible to ignore through world-class digital design.",
    cover: "/events/pix1.jpg",
    gallery: [
      "/placeholders/event-1-1.jpg",
      "/placeholders/event-1-2.jpg",
      "/placeholders/event-1-3.jpg",
    ],
  },
  
  
  
  
];
