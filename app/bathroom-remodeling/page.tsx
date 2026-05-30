import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Bathroom Remodeling",
  description: "Full bathroom renovations — tile, vanities, fixtures, tub-to-shower conversions, and waterproofing. Free written estimates. Queens, Brooklyn, Nassau & Suffolk.",
};

export default function BathroomRemodelingPage() {
  return (
    <main>
      <PageHeroSection
        title="Bathroom Remodeling"
        subtitle="Complete bathroom renovations from demo to finish. Free written estimates. Serving Queens, Brooklyn, Nassau, Suffolk & Westchester."
        bgImage="/images/gc-hero-bathroom.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Bathroom Remodeling" },
        ]}
      />
      <ServiceDetailSection
        sidebarImage="/images/gc-service-bathroom.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Bathroom Remodeling"
        heading="Bathroom Remodeling in Queens, Brooklyn & Long Island"
        intro={[
          "From a simple refresh to a full gut renovation, Professional Home Remodeling Inc. delivers beautiful, functional bathrooms across the New York metro area. We work with your layout and budget to design a space that fits your lifestyle.",
          "Every bathroom project includes a free written estimate. We handle complete demo, waterproofing, tile, fixtures, and finish — no subcontractors, no surprises.",
        ]}
        whatWeDo={[
          "Free in-home consultation and written estimate",
          "Full demolition and waterproofing",
          "Custom tile work — floors, walls, and shower surrounds",
          "Vanity, sink, toilet, and fixture installation",
          "Tub-to-shower conversions",
          "New lighting and ventilation",
          "Finish paint and debris removal",
        ]}
        whyChooseUs={[
          "Deal directly with the owner on every project",
          "40+ years of bathroom renovation experience",
          "Licensed in NYC, Nassau, Suffolk, and Westchester",
          "A+ BBB Rating — trusted by thousands of homeowners",
          "Senior, veteran, and teacher discounts available",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}
