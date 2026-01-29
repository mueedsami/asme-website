export type MagazineIssue = {
  slug: string;
  title: string;
  year: string;
  description: string;
  pdfUrl: string; // served from /public
  previewImages: string[]; // served from /public
  highlights: string[];
  pages?: string;
};

export const magazines: MagazineIssue[] = [
  {
    slug: "magazine-2024",
    title: "STEM Chronicles",
    year: "2024",
    description:
      "Discover the highlights of ASME IUT Student Section's activities, achievements, and stories of 2024.",
    pdfUrl: "https://mpe.iutoic-dhaka.edu/uploads/pdf/1711944551_1365.pdf",
    previewImages: [
      "/magazines/1-1.jpg",
      "/magazines/1-2.jpg",
      "/magazines/1-3.jpg",
    ],
    highlights: [
      "Feature stories & section highlights",
      "Event snapshots and reports",
      "Student contributions & interviews",
    ],
    pages: "68 pages",
  },
  {
    slug: "magazine-2025",
    title: "STEM Chronicles Vol.2",
    year: "2025",
    description:
      "Explore the journey of ASME IUT Student Section in 2025, showcasing our milestones and member experiences.",
    pdfUrl: "https://mpe.iutoic-dhaka.edu/uploads/pdf/1755618235_1203.pdf",
    previewImages: [
      "/magazines/2-1.jpg",
      "/magazines/2-2.jpg",
      "/magazines/2-3.jpg",
    ],
    highlights: [
      "Achievements & award features",
      "Workshops, competitions, and talks",
      "Community voices & reflections",
    ],
    pages: "70 pages",
  },
];
