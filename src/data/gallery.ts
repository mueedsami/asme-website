export type GalleryImage = {
  id: string;
  src: string; // from /public
  alt: string;
  tag?: string; // optional (Events / Workshop / Orientation etc.)
  year?: string;
};

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/gallery/g1.jpg", alt: "ASME IUT — Group photo", tag: "Events", year: "2025" },
  { id: "g2", src: "/gallery/g2.jpg", alt: "Workshop moment", tag: "Workshop", year: "2025" },
  { id: "g3", src: "/gallery/g3.jpg", alt: "Seminar snapshot", tag: "Talk", year: "2024" },
  { id: "g4", src: "/gallery/g4.jpg", alt: "Competition scene", tag: "Competition", year: "2024" },
  { id: "g5", src: "/gallery/g5.jpg", alt: "Award moment", tag: "Achievement", year: "2025" },
  { id: "g6", src: "/gallery/g6.jpg", alt: "Team collaboration", tag: "Community", year: "2025" },
  { id: "g7", src: "/gallery/g7.jpg", alt: "Orientation day", tag: "Orientation", year: "2026" },
  { id: "g8", src: "/gallery/g8.jpg", alt: "Hands-on session", tag: "Workshop", year: "2024" },
  { id: "g9", src: "/gallery/g9.jpg", alt: "Panel session", tag: "Talk", year: "2025" },
  { id: "g10", src: "/gallery/g10.jpg", alt: "Group photo outdoors", tag: "Events", year: "2024" },
];
