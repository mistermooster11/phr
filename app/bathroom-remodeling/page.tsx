import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";

export const metadata: Metadata = {
  title: "Bathroom Remodeling",
  description: "Custom bathroom renovations built to your specifications — full demo to studs, waterproofing, custom tile, and all-new fixtures. Free estimates across Queens, Brooklyn, Nassau & Suffolk.",
};

export default function BathroomRemodelingPage() {
  return (
    <main>
      <PageHeroSection
        title="Bathroom Remodeling"
        subtitle="Custom bathroom renovations from the studs up — proper waterproofing, custom tile, and all-new fixtures. Free written estimates."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services-page" }, { label: "Bathroom Remodeling" }]}
      />
      <ServiceDetailSection
        sidebarImage="https://www.phr-ny.com/images/bathroom_carousel_1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Bathroom Remodeling"
        heading="Bathroom Remodeling in Queens, Brooklyn & Long Island"
        intro={[
          "A proper bathroom renovation starts with proper waterproofing — and that means going down to the studs. Professional Home Remodeling Inc. builds every bathroom from the framing out, with commercial-grade waterproofing, custom tile, and fixtures installed clean.",
          "We handle full bathroom gut renovations and targeted upgrades across Queens, Brooklyn, Nassau County, Suffolk County, the Bronx, and Westchester. Free written estimate before any work begins.",
        ]}
        whatWeDo={[
          "Full demolition to the studs with proper waterproofing",
          "Custom tile installation — shower walls, floors, and surrounds",
          "New tubs, showers, toilets, vanities, and medicine cabinets",
          "Backer board, cement board, and waterproof membrane installation",
          "Exhaust fan replacement and lighting upgrades",
          "All debris hauled off-site, work area left clean",
        ]}
        whyChooseUs={[
          "We don't cut corners on waterproofing — every bathroom is built to last",
          "Deal directly with the owner throughout the entire project",
          "40+ years serving the New York metro area",
          "Licensed and insured in NYC, Nassau, Suffolk, and Westchester",
          "A+ BBB Rating — most clients come through referrals",
        ]}
      />
    </main>
  );
}
