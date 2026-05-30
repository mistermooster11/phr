import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Basement Waterproofing",
  description:
    "Interior and exterior basement waterproofing, sump pump installation, and drainage solutions. Free written estimates. Queens, Brooklyn, Nassau & Suffolk.",
};

export default function BasementWaterproofingPage() {
  return (
    <main>
      <PageHeroSection
        title="Basement Waterproofing"
        subtitle="Interior and exterior waterproofing, sump pumps, and drainage systems. Emergency response for flooding. Free written estimates."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Basement Waterproofing" },
        ]}
      />
      <ServiceDetailSection
        sidebarImage="https://www.phr-ny.com/images/bathroom_carousel_1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Basement Waterproofing"
        heading="Basement Waterproofing in Queens, Brooklyn & Long Island"
        intro={[
          "A wet basement is more than an inconvenience — it's a structural and health risk. Professional Home Remodeling Inc. provides interior and exterior basement waterproofing solutions that stop water intrusion at the source. We've been protecting homes across the New York metro area for over 40 years.",
          "We also respond to active flooding situations and can install sump pump systems, interior drainage channels, and vapor barriers. Free written estimate on every job.",
        ]}
        whatWeDo={[
          "Interior waterproofing membranes and coatings",
          "Exterior excavation and waterproofing",
          "Sump pump installation and replacement",
          "French drain and interior drainage channel systems",
          "Vapor barrier installation",
          "Emergency flooding response",
          "Free written estimate and debris removal",
        ]}
        whyChooseUs={[
          "40+ years of waterproofing and home repair experience",
          "Emergency response for active flooding",
          "Licensed in NYC, Nassau, Suffolk, and Westchester",
          "Deal directly with the owner — no middlemen",
          "A+ BBB Rating",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}
