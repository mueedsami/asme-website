export type ContactPerson = {
  name: string;
  role: string;
  email: string;
  phone?: string;
  note?: string;
};

export const contactStudents: ContactPerson = {
  name: "PR Head (Name)",
  role: "Public Relations — Student Contact",
  email: "pr.asme@iut.ac.bd",
  phone: "+8801XXXXXXXXX",
  note: "For student queries, membership, and general info.",
};

export const contactOrganizations: ContactPerson = {
  name: "Faculty Moderator / Chair (Name)",
  role: "Official Contact — Collaborations & External Communication",
  email: "asme@iut.ac.bd",
  phone: "+8801XXXXXXXXX",
  note: "For collaborations, sponsorships, and official communications.",
};

export const sectionAddress = {
  line1: "ASME IUT Student Section",
  line2: "Department of Mechanical & Production Engineering (MPE)",
  line3: "Islamic University of Technology (IUT), Gazipur, Bangladesh",
};

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];
