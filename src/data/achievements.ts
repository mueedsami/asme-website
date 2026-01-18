export type Winner = {
  name: string;
  role: string; // e.g., Team Lead / Member / Presenter
  department?: string; // e.g., MPE, CSE
};

export type AchievementItem = {
  slug: string;
  title: string; // headline
  date: string;
  cover: string;

  event: {
    name: string;
    organizer: string;
    location: string;
  };

  award: {
    position: string; // Champion / Runner-up / Honorable Mention
    category: string; // e.g., "Design", "Poster", "Case"
  };

  excerpt: string;
  story: string[]; // paragraphs

  winners: Winner[];
};

export const achievements: AchievementItem[] = [
  {
    slug: "design-competition-champion",
    title: "Champion at Design Competition",
    date: "March 2026",
    cover: "/placeholders/event-3.jpg",
    event: {
      name: "Inter-University Design Challenge",
      organizer: "Lorem Organizer",
      location: "Dhaka, Bangladesh",
    },
    award: { position: "Champion", category: "Design" },
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our team secured the top position through innovation and execution.",
    story: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    winners: [
      { name: "Student Name 1", role: "Team Lead", department: "MPE" },
      { name: "Student Name 2", role: "Member", department: "MPE" },
      { name: "Student Name 3", role: "Member", department: "MPE" },
      { name: "Student Name 4", role: "Member", department: "MPE" },
    ],
  },
  {
    slug: "poster-session-award",
    title: "Award at Poster Session",
    date: "May 2026",
    cover: "/placeholders/event-5.jpg",
    event: {
      name: "Research Night & Poster Session",
      organizer: "Lorem Organizer",
      location: "IUT Campus",
    },
    award: { position: "Honorable Mention", category: "Poster" },
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recognized for clarity, originality, and presentation.",
    story: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    winners: [
      { name: "Student Name A", role: "Presenter", department: "MPE" },
      { name: "Student Name B", role: "Co-author", department: "MPE" },
      { name: "Student Name C", role: "Co-author", department: "MPE" },
    ],
  },
];
