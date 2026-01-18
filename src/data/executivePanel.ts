export type ExecMember = {
  slug: string;
  name: string;
  role: string;
  team: string; // Core / Admin / PR / Event / Finance / Media / Web etc.
  photo: string; // from /public
  email?: string;
  linkedin?: string;
  session?: string; // "2025–26"
  order?: number; // for sorting
  isHead?: boolean;
  reportsTo?: string; // slug of another ExecMember
};

export const executivePanel: ExecMember[] = [
  {
    slug: "chairperson",
    name: "Name Surname",
    role: "Chairperson",
    team: "Core",
    photo: "/exec/chair.jpg",
    email: "chair@iut.ac.bd",
    linkedin: "#",
    session: "2025–26",
    order: 1,
  },
  {
    slug: "vice-chairperson",
    name: "Name Surname",
    role: "Vice Chairperson",
    team: "Core",
    photo: "/exec/vice-chair.jpg",
    email: "vicechair@iut.ac.bd",
    linkedin: "#",
    session: "2025–26",
    order: 2,
  },
  {
    slug: "general-secretary",
    name: "Name Surname",
    role: "General Secretary",
    team: "Core",
    photo: "/exec/gs.jpg",
    email: "gs@iut.ac.bd",
    linkedin: "#",
    session: "2025–26",
    order: 3,
  },
  {
    slug: "treasurer",
    name: "Name Surname",
    role: "Treasurer",
    team: "Core",
    photo: "/exec/treasurer.jpg",
    email: "treasurer@iut.ac.bd",
    linkedin: "#",
    session: "2025–26",
    order: 4,
  },

  // Add more (examples)
  {
    slug: "pr-head",
    name: "Name Surname",
    role: "PR Head",
    team: "Public Relations",
    photo: "/exec/pr.jpg",
    session: "2025–26",
    order: 10,
  },
  {
    slug: "event-head",
    name: "Name Surname",
    role: "Event Management Head",
    team: "Events",
    photo: "/exec/event.jpg",
    session: "2025–26",
    order: 11,
  },
  {
    slug: "media-head",
    name: "Name Surname",
    role: "Media & Publications Head",
    team: "Media",
    photo: "/exec/media.jpg",
    session: "2025–26",
    order: 12,
  },
  {
    slug: "web-head",
    name: "Name Surname",
    role: "Web & Tech Lead",
    team: "Web",
    photo: "/exec/web.jpg",
    session: "2025–26",
    order: 13,
  },
];
