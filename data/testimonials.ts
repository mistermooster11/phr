export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Homeowner, Franklin Square",
    rating: 5,
    text: "Professional Home Remodeling did a complete kitchen and bathroom renovation for us. The work was exceptional — everything from the tile to the cabinetry was done exactly as discussed. They cleaned up every day and finished on schedule. We've already referred them to two neighbors.",
    avatar: "https://ui-avatars.com/api/?name=F+S&background=D0011B&color=fff&size=40",
  },
  {
    name: "Maria R., Queens",
    rating: 5,
    text: "We had our kitchen fully redone — new cabinets, countertops, backsplash, everything. These guys were professional from start to finish. The owner was on-site every single day. No surprises, no delays. Absolutely worth every penny.",
    avatar: "https://ui-avatars.com/api/?name=MR&background=D0011B&color=fff&size=40",
  },
  {
    name: "Tom B., Nassau County",
    rating: 5,
    text: "Had a roof replacement done after storm damage. They worked with my insurance adjuster, handled all the paperwork, and got it done in two days. GAF certified crew — the quality shows. Highly recommend for any roofing work on Long Island.",
    avatar: "https://ui-avatars.com/api/?name=TB&background=D0011B&color=fff&size=40",
  },
  {
    name: "Sandra L., Westchester",
    rating: 5,
    text: "They replaced all our windows and re-sided the entire house. The crew was respectful, on time, and the finished product looks incredible. The new siding has already made a noticeable difference in our heating bill. These guys know what they're doing.",
    avatar: "https://ui-avatars.com/api/?name=SL&background=D0011B&color=fff&size=40",
  },
  {
    name: "James K., Brooklyn",
    rating: 5,
    text: "Had a bathroom gutted and rebuilt from scratch. The waterproofing and tile work is flawless — no shortcuts. They dealt directly with us, no middlemen. The owner walked us through every decision. Best contractor experience we've ever had.",
    avatar: "https://ui-avatars.com/api/?name=JK&background=D0011B&color=fff&size=40",
  },
  {
    name: "Carol M., Suffolk County",
    rating: 5,
    text: "We called them for an emergency roof leak after a big storm and they were at our house the next morning. Diagnosed the issue, gave us an honest estimate, and repaired it properly. No gouging, no runaround. Exactly what you hope for in an emergency.",
    avatar: "https://ui-avatars.com/api/?name=CM&background=D0011B&color=fff&size=40",
  },
];
