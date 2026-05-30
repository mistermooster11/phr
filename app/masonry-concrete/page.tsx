import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Masonry & Concrete",
  description: "Brick, block, and concrete work — stoops, driveways, retaining walls, and more. Free written estimates. Serving Queens, Brooklyn, Nassau & Suffolk.",
};

export default function MasonryPage() {
  return (
    <main>
      <PageHeroSection
        title="Masonry & Concrete"
        subtitle="Brick, block, and concrete work for homes across the New York metro area. Free written estimates. Serving Queens, Brooklyn, Nassau, Suffolk & Westchester."
        bgImage="/images/gc-hero-masonry.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Masonry & Concrete" },
        ]}
      />
      <ServiceDetailSection
        sidebarImage="/images/gc-service-roofing.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Masonry & Concrete"
        heading="Masonry & Concrete Work in Queens, Brooklyn & Long Island"
        intro={[
          "From stoops and driveways to retaining walls and brick pointing, Professional Home Remodeling Inc. delivers quality masonry and concrete work across the New York metro area. Our crews have over 40 years of experience working with brick, block, concrete, and natural stone.",
          "Every masonry project starts with a free written estimate. We handle everything from design through final cleanup.",
        ]}
        whatWeDo={[
          "Brick pointing and repointing",
          "Stoop, step, and entryway repair and replacement",
          "Driveway and walkway installation",
          "Retaining wall construction",
          "Concrete flatwork and slab repair",
          "Chimney repair and rebuilding",
          "Free written estimate and debris removal",
        ]}
        whyChooseUs={[
          "40+ years of masonry and concrete experience",
          "Licensed in NYC, Nassau, Suffolk, and Westchester",
          "Deal directly with the owner on every project",
          "A+ BBB Rating",
          "Senior, veteran, and teacher discounts available",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}
