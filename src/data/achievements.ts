// data/achievements.ts

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

// Optional: for your "Campus Ambassador / Mentorship" section
export type AmbassadorProfile = {
  slug: string;
  name: string;
  headline: string; // short title line
  organization: string; // main org / initiative
  role: string; // designation
  bio: string;
  cover?: string;
};

export const campusAmbassadors: AmbassadorProfile[] = [
  {
    slug: "maliha-rahman",
    name: "Maliha Rahman",
    headline: "Mentee, SheStem | Nestlé Campus Ambassador",
    organization: "SheStem & Nestlé",
    role: "Mentee / Campus Ambassador",
    bio: "Maliha Rahman is a mentee at SheStem, an initiative empowering women in STEM, and currently serves as a Nestlé Campus Ambassador. Through mentorship, leadership, and active engagement, she is broadening her professional and technical skills while contributing to bridging gender gaps and inspiring more young women to pursue opportunities in STEM and industry.",
    cover: "/placeholders/people-1.jpg",
  },
  {
    slug: "afif-ajjan",
    name: "Afif Ajjan",
    headline: "Campus Ambassador, Sheba.xyz",
    organization: "Sheba.xyz",
    role: "Campus Ambassador",
    bio: "As a Campus Ambassador of Sheba.xyz, one of Bangladesh’s leading digital service platforms, Afif contributes to connecting people with essential everyday services through technology, bringing innovation and accessibility to campus life.",
    cover: "/placeholders/people-2.jpg",
  },
  {
    slug: "safrat-samia",
    name: "Safrat Samia",
    headline: "Senior Executive (Creative Contents) | Campus Ambassador, ISCEA",
    organization: "ISCEA (International Supply Chain Education Alliance)",
    role: "Campus Ambassador",
    bio: "Safrat carries forward the mission of ISCEA (International Supply Chain Education Alliance), a global organization promoting knowledge and certifications in supply chain management, ensuring students gain exposure to professional excellence and industry-ready skills.",
    cover: "/placeholders/people-3.jpg",
  },
  {
    slug: "mahreen-zaman",
    name: "Mahreen Zaman",
    headline: "Campus Ambassador, UNDP",
    organization: "United Nations Development Programme (UNDP)",
    role: "Campus Ambassador",
    bio: "Representing the United Nations Development Programme (UNDP), Mahreen is contributing to initiatives that advance sustainable development, inclusivity, and social progress, making an impact that extends beyond campus and into the wider community.",
    cover: "/placeholders/people-4.jpg",
  },
];

export const achievements: AchievementItem[] = [
  {
    slug: "maliha-rahman-champion-elevator-pitch-asme-efx-bangladesh",
    title: "Champion in Elevator Pitch",
    date: "ASME EFX Bangladesh",
    cover: "/placeholders/event-1.jpg",
    event: {
      name: "ASME EFX Bangladesh",
      organizer: "ASME EFX Bangladesh",
      location: "Bangladesh",
    },
    award: { position: "Champion", category: "Elevator Pitch" },
    excerpt:
      "Maliha Rahman secured the Champion position in the Elevator Pitch category at ASME EFX Bangladesh.",
    story: [
      "This achievement highlights strong presentation, clarity of thought, and confidence in communicating ideas effectively.",
      "The recognition reflects competitive performance among participants at ASME EFX Bangladesh.",
    ],
    winners: [{ name: "Maliha Rahman", role: "Champion" }],
  },

  {
    slug: "team-gang-2nd-runners-up-environmental-case-competition-asme-efx-bangladesh",
    title: "2nd Runners Up in Environmental Case Competition",
    date: "ASME EFX Bangladesh",
    cover: "/placeholders/event-2.jpg",
    event: {
      name: "Environmental Case Competition",
      organizer: "ASME EFX Bangladesh",
      location: "Bangladesh",
    },
    award: { position: "2nd Runners Up", category: "Case Competition" },
    excerpt:
      "Team G.A.N.G. (Ramisa Alam & Maliha Rahman) achieved 2nd Runners Up in the Environmental Case Competition at ASME EFX Bangladesh.",
    story: [
      "The team worked on analyzing an environmental problem and presenting a structured solution.",
      "Their placement reflects strong teamwork, research, and problem-solving under competition constraints.",
    ],
    winners: [
      { name: "Ramisa Alam", role: "Team Member" },
      { name: "Maliha Rahman", role: "Team Member" },
    ],
  },

  {
    slug: "tasmiah-zaman-1st-place-asme-e-fest-tech-connect-2025",
    title: "1st Place at ASME E-Fest Tech Connect 2025",
    date: "2025",
    cover: "/placeholders/event-3.jpg",
    event: {
      name: "ASME E-Fest Tech Connect 2025",
      organizer: "ASME",
      location: "Bangladesh",
    },
    award: { position: "1st Place", category: "Tech Connect" },
    excerpt:
      "Tasmiah Zaman achieved 1st Place at ASME E-Fest Tech Connect 2025.",
    story: [
      "This recognition reflects standout performance in a technical competition environment.",
      "The result demonstrates strong technical capability and effective delivery within the event format.",
    ],
    winners: [{ name: "Tasmiah Zaman", role: "Winner" }],
  },

  {
    slug: "mahreen-zaman-top-21-finalist-huawei-seeds-for-the-future-2025",
    title: "Top 21 Finalist at Huawei Seeds for the Future Program 2025",
    date: "2025",
    cover: "/placeholders/event-4.jpg",
    event: {
      name: "Huawei Seeds for the Future Program 2025",
      organizer: "Huawei",
      location: "Bangladesh",
    },
    award: { position: "Top 21 Finalist", category: "Program Finalist" },
    excerpt:
      "Mahreen Zaman was selected as a Top 21 Finalist in the Huawei Seeds for the Future Program 2025.",
    story: [
      "The program selection reflects competitive merit and strong potential in technology and leadership.",
      "Being a finalist indicates recognition among a large pool of applicants and participants.",
    ],
    winners: [{ name: "Mahreen Zaman", role: "Finalist" }],
  },

  {
    slug: "istiak-anik-nasseef-kaif-top-5-youth-for-earth-case-solution-championship",
    title: "Top 5 at Youth for Earth: Case Solution Championship",
    date: "Date not specified",
    cover: "/placeholders/event-5.jpg",
    event: {
      name: "Youth for Earth: Case Solution Championship",
      organizer: "Ministry of Youth and Sports",
      location: "Bangladesh",
    },
    award: { position: "Top 5", category: "Case Solution" },
    excerpt:
      "Istiak Ahmed Anik, Abdullah Omar Nasseef, and Mohammad Kaif secured a Top 5 position in Youth for Earth: Case Solution Championship.",
    story: [
      "The team developed and presented a case solution evaluated at a national level event.",
      "Their Top 5 placement reflects strong analytical reasoning, structuring, and presentation quality.",
    ],
    winners: [
      { name: "Istiak Ahmed Anik", role: "Team Member" },
      { name: "Abdullah Omar Nasseef", role: "Team Member" },
      { name: "Mohammad Kaif", role: "Team Member" },
    ],
  },

  {
    slug: "mehrab-islam-nehal-1st-runners-up-energy-fest-1-0",
    title: "1st Runners Up at Energy Fest 1.0",
    date: "Date not specified",
    cover: "/placeholders/event-6.jpg",
    event: {
      name: "Energy Fest 1.0",
      organizer: "Event Organizer",
      location: "Bangladesh",
    },
    award: { position: "1st Runners Up", category: "Competition" },
    excerpt:
      "Mehrab Islam & Md. Nur Mehtab Nehal achieved 1st Runners Up at Energy Fest 1.0.",
    story: [
      "The team demonstrated strong performance across evaluation criteria to reach the 1st Runners Up position.",
      "This result reflects technical depth, execution quality, and teamwork.",
    ],
    winners: [
      { name: "Mehrab Islam", role: "Team Member" },
      { name: "Md. Nur Mehtab Nehal", role: "Team Member" },
    ],
  },

  {
    slug: "mehrab-islam-nehal-runners-up-mind-spark-2024",
    title: "Runners Up at Mind Spark 2024",
    date: "2024",
    cover: "/placeholders/event-7.jpg",
    event: {
      name: "Mind Spark 2024 (Ideation into Existence)",
      organizer: "Event Organizer",
      location: "Bangladesh",
    },
    award: { position: "Runners Up", category: "Ideation / Innovation" },
    excerpt:
      "Mehrab Islam & Md. Nur Mehtab Nehal became Runners Up at Mind Spark 2024 (Ideation into Existence).",
    story: [
      "Their project progressed from idea to execution under the event’s innovation-focused structure.",
      "The Runners Up result shows strong concept clarity and practical implementation readiness.",
    ],
    winners: [
      { name: "Mehrab Islam", role: "Team Member" },
      { name: "Md. Nur Mehtab Nehal", role: "Team Member" },
    ],
  },

  {
    slug: "mehrab-islam-nehal-2nd-runners-up-technomze-1-0-national-tech-fest",
    title: "2nd Runners Up at Technom/ZE 1.0 National Tech Fest",
    date: "Date not specified",
    cover: "/placeholders/event-8.jpg",
    event: {
      name: "Technom/ZE 1.0 National Tech Fest",
      organizer: "Event Organizer",
      location: "Bangladesh",
    },
    award: { position: "2nd Runners Up", category: "National Tech Fest" },
    excerpt:
      "Mehrab Islam & Md. Nur Mehtab Nehal secured 2nd Runners Up at Technom/ZE 1.0 National Tech Fest.",
    story: [
      "Competing at a national platform, the team showcased strong technical competence and presentation.",
      "Their placement reflects consistent performance across judging and competition stages.",
    ],
    winners: [
      { name: "Mehrab Islam", role: "Team Member" },
      { name: "Md. Nur Mehtab Nehal", role: "Team Member" },
    ],
  },
];
