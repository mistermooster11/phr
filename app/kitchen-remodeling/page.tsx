import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Kitchen Remodeling",
  description: "Complete kitchen renovations from the studs up — custom cabinetry, granite or quartz countertops, tile backsplash, new flooring, sinks, faucets, and finish paint. Free estimates. Queens, Brooklyn, Nassau & Suffolk.",
};

export default function KitchenRemodelingPage() {
  return (
    <main>
      <PageHeroSection
        title="Kitchen Remodeling"
        subtitle="Complete kitchen renovations — from design to final walkthrough. Free written estimates. Serving Queens, Brooklyn, Nassau, Suffolk & Westchester."
        bgImage="/images/gc-hero-kitchen.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Kitchen Remodeling" },
        ]}
      />
      <ServiceDetailSection
        sidebarImage="/images/gc-service-kitchen.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Kitchen Remodeling"
        heading="Kitchen Remodeling in Queens, Brooklyn & Long Island"
        intro={[
          "Professional Home Remodeling Inc. has been transforming kitchens across the New York metro area for over 40 years. We handle everything from full gut renovations to targeted updates — custom cabinetry, granite or quartz countertops, tile backsplash, new flooring, and finish paint.",
          "Every project starts with a free written estimate. You select your finishes, approve the plan, and we handle the rest — including full demolition, rebuild, and debris removal.",
        ]}
        whatWeDo={[
          "Free in-home consultation and written estimate at no charge",
          "Custom cabinetry design and installation",
          "Granite, quartz, and solid surface countertops",
          "Tile backsplash and flooring installation",
          "New sinks, faucets, and plumbing fixtures",
          "Full demolition to the studs and professional rebuild",
          "Finish paint and complete debris removal",
        ]}
        whyChooseUs={[
          "Deal directly with the owner — no middlemen, no call centers",
          "40+ years serving Queens, Brooklyn, Nassau, Suffolk & Westchester",
          "Licensed in NYC, Westchester, Nassau, and Suffolk County",
          "A+ BBB Rating — reputation built entirely on referrals",
          "Discounts for seniors, veterans, and teachers",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}
