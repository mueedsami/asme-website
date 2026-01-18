export type MagazineIssue = {
  slug: string;
  title: string;
  year: string;
  description: string;
  pdfUrl: string; // served from /public
  previewImages: string[]; // served from /public
  highlights: string[];
};

export const magazines: MagazineIssue[] = [
  {
    slug: "magazine-2024",
    title: "ASME IUT Annual Magazine",
    year: "2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A curated snapshot of events, insights, and community contributions.",
    pdfUrl: "/magazines/issue-2024.pdf",
    previewImages: [
      "/magazines/issue-2024/p1.jpg",
      "/magazines/issue-2024/p2.jpg",
      "/magazines/issue-2024/p3.jpg",
    ],
    highlights: [
      "Feature stories & section highlights",
      "Event snapshots and reports",
      "Student contributions & interviews",
    ],
  },
  {
    slug: "magazine-2025",
    title: "ASME IUT Annual Magazine",
    year: "2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The year in review — achievements, learnings, and memorable moments.",
    pdfUrl: "/magazines/issue-2025.pdf",
    previewImages: [
      "/magazines/issue-2025/p1.jpg",
      "/magazines/issue-2025/p2.jpg",
      "/magazines/issue-2025/p3.jpg",
    ],
    highlights: [
      "Achievements & award features",
      "Workshops, competitions, and talks",
      "Community voices & reflections",
    ],
  },
];
