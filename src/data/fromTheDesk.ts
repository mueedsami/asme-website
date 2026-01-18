export type DeskMessage = {
  slug: string;
  name: string;
  designation: string; // e.g., Advisor / Moderator / Chairperson / VC
  date: string;
  photo: string; // placeholder
  excerpt: string;
  letter: {
    subject: string;
    paragraphs: string[];
    closing: string; // e.g., "Sincerely,"
    signatureName: string;
    signatureTitle: string;
  };
};

export const fromTheDesk: DeskMessage[] = [
  {
    slug: "advisor-message",
    name: "Name Placeholder",
    designation: "Section Advisor",
    date: "January 2026",
    photo: "/placeholders/event-2.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...",
    letter: {
      subject: "A Message to Our New Members",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ],
      closing: "Sincerely,",
      signatureName: "Name Placeholder",
      signatureTitle: "Section Advisor, ASME IUT Student Section",
    },
  },
  {
    slug: "moderator-message",
    name: "Name Placeholder",
    designation: "Society Moderator",
    date: "January 2026",
    photo: "/placeholders/event-3.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation...",
    letter: {
      subject: "On Building a Culture of Engineering Excellence",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      closing: "With regards,",
      signatureName: "Name Placeholder",
      signatureTitle: "Moderator, ASME IUT Student Section",
    },
  },
  {
    slug: "chair-message",
    name: "Name Placeholder",
    designation: "Chairperson",
    date: "January 2026",
    photo: "/placeholders/event-1.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate...",
    letter: {
      subject: "Welcome to a New Term",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      closing: "Warmly,",
      signatureName: "Name Placeholder",
      signatureTitle: "Chairperson, ASME IUT Student Section",
    },
  },
];
