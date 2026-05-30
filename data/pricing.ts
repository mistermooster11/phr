export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

export const pricingCards: PricingCard[] = [
  {
    price: 8000,
    note: "Free written estimate — no obligation",
    title: "Kitchen Remodeling",
    features: [
      "Custom cabinetry & countertops",
      "Tile backsplash & flooring",
      "New sinks, faucets & fixtures",
      "Demo to studs & full rebuild",
      "Final paint & cleanup included",
    ],
    description:
      "Complete kitchen renovations designed around what you want. From the studs up — or a targeted refresh. We walk you through every option before any work begins.",
  },
  {
    price: 5000,
    note: "Free written estimate — no obligation",
    title: "Bathroom Remodeling",
    features: [
      "Full demo to studs & waterproofing",
      "Custom tile & backer board",
      "New tub, shower, toilet & vanity",
      "Medicine cabinet & exhaust fan",
      "Final inspection & debris removal",
    ],
    description:
      "Custom bathroom renovations built to spec. Proper waterproofing from the start — we don't cut corners on the work that protects your home.",
    highlight: true,
  },
  {
    price: 3500,
    note: "Free written estimate — no obligation",
    title: "Roofing",
    features: [
      "GAF Certified installation",
      "Full manufacturer warranty",
      "Emergency leak response",
      "Insurance claim documentation",
      "Full debris removal & cleanup",
    ],
    description:
      "GAF Certified roof installations and repairs. We work with your insurance adjuster on storm damage claims. Emergency response available across all service areas.",
  },
  {
    price: 4000,
    note: "Free written estimate — no obligation",
    title: "Siding & Windows",
    features: [
      "Insulated vinyl siding — 20+ colors",
      "Lifetime manufacturer guarantee",
      "Energy Star-rated windows",
      "Fascia, gutters & aluminum capping",
      "Samples brought to your home",
    ],
    description:
      "Complete exterior packages. Insulated siding with lifetime guarantee. Energy Star windows with argon fill and aluminum capping. We bring samples to your home.",
  },
];
