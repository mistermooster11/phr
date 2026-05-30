export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Kitchen Remodeling",     href: "/kitchen-remodeling" },
  { label: "Bathroom Remodeling",    href: "/bathroom-remodeling" },
  { label: "Roofing",                href: "/roofing" },
  { label: "Siding & Windows",       href: "/siding-windows" },
  { label: "Masonry & Concrete",     href: "/masonry-concrete" },
  { label: "Basement Waterproofing", href: "/basement-waterproofing" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Kitchen Remodeling",
    image: "/images/gc-service-kitchen.jpg",
    href: "/kitchen-remodeling",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Bathroom Remodeling",
    image: "/images/gc-service-bathroom.jpg",
    href: "/bathroom-remodeling",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Roofing",
    image: "/images/gc-service-roofing.jpg",
    href: "/roofing",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Siding & Windows",
    image: "/images/gc-service-siding.jpg",
    href: "/siding-windows",
    width: 535,
    height: 643,
  },
];
