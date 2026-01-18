export type NavItem =
  | { label: string; href: string }
  | { label: string; href?: string; children: { label: string; href: string }[] };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  {
    label: "Panel",
    children: [
      { label: "Announcements", href: "/announcements" },
      { label: "Achievements", href: "/achievements" },
      { label: "From the Desk", href: "/from-the-desk" },
    ],
  },
  { label: "Executive Panel", href: "/executive-panel" },
  { label: "Magazines", href: "/magazines" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
