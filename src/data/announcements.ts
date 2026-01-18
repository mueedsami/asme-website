export type AnnouncementItem = {
  slug: string;
  title: string;
  date: string; // display text for now
  tag: "Notice" | "Registration" | "Result" | "General";
  excerpt: string;
  body: string[]; // paragraphs
};

export const announcements: AnnouncementItem[] = [
  {
    slug: "orientation-registration-2026",
    title: "Orientation Registration Open",
    date: "January 2026",
    tag: "Registration",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Registration is now open for the new batch orientation.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "For any queries, please contact the PR team via the Contact page.",
    ],
  },
  {
    slug: "membership-drive-2026",
    title: "Membership Drive Announcement",
    date: "January 2026",
    tag: "General",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We are welcoming new members for the upcoming term.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    slug: "workshop-seat-limited",
    title: "Workshop Seats Are Limited",
    date: "February 2026",
    tag: "Notice",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Limited seats available — first come, first served.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Please complete your registration as early as possible to secure a seat.",
    ],
  },
  {
    slug: "selection-result",
    title: "Selection Results Published",
    date: "March 2026",
    tag: "Result",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The results have been published for the latest recruitment round.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      "Congratulations to the selected candidates. Further instructions will be communicated soon.",
    ],
  },
];
