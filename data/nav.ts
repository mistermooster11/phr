export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Kitchen Remodeling", href: "/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/bathroom-remodeling" },
      { label: "Roofing", href: "/roofing" },
      { label: "Siding & Windows", href: "/siding-windows" },
      { label: "Masonry & Concrete", href: "/masonry-concrete" },
      { label: "Basement Waterproofing", href: "/basement-waterproofing" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  {
    label: "Contact",
    href: "/contact-us",
    children: [
      { label: "Get In Touch", href: "/contact-us" },
      { label: "Service Areas", href: "/service-areas" },
    ],
  },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services-page" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Kitchen Remodeling", href: "/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/bathroom-remodeling" },
  { label: "Roofing", href: "/roofing" },
  { label: "Siding & Windows", href: "/siding-windows" },
  { label: "Masonry & Concrete", href: "/masonry-concrete" },
  { label: "Basement Waterproofing", href: "/basement-waterproofing" },
];
