import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";

export const metadata: Metadata = {
  title: "Masonry & Concrete",
  description: "Professional masonry and concrete work across Queens, Brooklyn, Nassau, Suffolk & Westchester. Stoops, steps, retaining walls, driveways, and more. Free estimates.",
};

export default function MasonryPage() {
  return (
    <main>
      <PageHeroSection
        title="Masonry & Concrete"
        subtitle="Professional masonry and concrete work — stoops, steps, retaining walls, driveways, and more. Free written estimates."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services-page" }, { label: "Masonry & Concrete" }]}
      />
      <ServiceDetailSection
        sidebarImage="https://www.phr-ny.com/images/masonry_carousel_1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Masonry & Concrete"
        heading="Masonry & Concrete in Queens, Brooklyn & Long Island"
        intro={[
          "Professional Home Remodeling Inc. handles masonry and concrete work from stoops and front steps to retaining walls, patios, driveways, and foundation repairs across the New York metro area.",
          "Every masonry project gets the same standard as our interior work — proper prep, quality materials, and a clean finish. Free written estimate before any work begins.",
        ]}
        whatWeDo={[
          "Stoop and front step installation and repair",
          "Retaining wall construction and repair",
          "Patio and walkway installation",
          "Concrete driveway installation and resurfacing",
          "Foundation crack repair and waterproofing",
          "Brick and block pointing and repointing",
        ]}
        whyChooseUs={[
          "40+ years of masonry experience in the New York metro area",
          "Deal directly with the owner on every project",
          "Licensed and insured in NYC, Nassau, Suffolk, and Westchester",
          "Free written estimate — no pressure, no obligation",
          "Senior, veteran, and teacher discounts available",
        ]}
      />
    </main>
  );
}
