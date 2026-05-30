import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Our Services | Kitchen, Bathroom, Roofing, Siding & More",
  description:
    "Full-service home remodeling by Professional Home Remodeling Inc. — kitchen remodeling, bathroom renovations, roofing, siding, masonry, and basement waterproofing across Queens, Brooklyn, Nassau & Suffolk.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="Kitchen remodeling, bathroom renovations, roofing, siding, masonry, and basement waterproofing — serving Queens, Brooklyn, Nassau, Suffolk & Westchester."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
