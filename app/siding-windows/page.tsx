import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Siding & Windows",
  description:
    "Vinyl, fiber cement, and wood siding installation. Energy-efficient window replacement. Free written estimates. Serving Queens, Brooklyn, Nassau & Suffolk.",
};

export default function SidingWindowsPage() {
  return (
    <main>
      <PageHeroSection
        title="Siding & Windows"
        subtitle="Vinyl and fiber cement siding, energy-efficient window replacements. Free written estimates. Serving Queens, Brooklyn, Nassau, Suffolk & Westchester."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Siding & Windows" },
        ]}
      />
      <ServiceDetailSection
        sidebarImage="https://www.phr-ny.com/images/siding_carousel_1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Siding & Windows"
        heading="Siding & Window Replacement in Queens, Brooklyn & Long Island"
        intro={[
          "New siding and windows are one of the most impactful improvements you can make to a home — improving curb appeal, energy efficiency, and long-term durability. PHR installs vinyl, fiber cement, and wood siding along with replacement windows from leading manufacturers.",
          "We provide a free written estimate and handle the full project from material selection through installation and cleanup.",
        ]}
        whatWeDo={[
          "Vinyl, fiber cement, and wood siding installation",
          "Full tear-off and replacement or over-cladding",
          "Energy-efficient window replacement",
          "Trim, soffit, and fascia work",
          "Storm door and entry door installation",
          "Free written estimate and debris removal",
        ]}
        whyChooseUs={[
          "40+ years of exterior renovation experience",
          "Licensed in NYC, Nassau, Suffolk, and Westchester",
          "Deal directly with the owner — no sales team",
          "A+ BBB Rating and verified 5-star reviews",
          "Senior, veteran, and teacher discounts available",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}
