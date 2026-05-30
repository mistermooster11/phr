import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import AboutSection from "@/components/custom/about/AboutSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Roofing",
  description: "GAF Certified roofing installations, repairs, and emergency leak response. Free written estimates. Serving Queens, Brooklyn, Nassau & Suffolk.",
};

export default function RoofingPage() {
  return (
    <main>
      <PageHeroSection
        title="Roofing"
        subtitle="GAF Certified roofing installations and repairs. Emergency leak response. Free written estimates. Serving Queens, Brooklyn, Nassau, Suffolk & Westchester."
        bgImage="/images/gc-hero-roofing.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Roofing" },
        ]}
      />
      <ServiceDetailSection
        sidebarImage="/images/gc-service-roofing.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Roofing"
        heading="Roofing in Queens, Brooklyn & Long Island"
        intro={[
          "Professional Home Remodeling Inc. is a GAF Certified roofing contractor serving the New York metro area for over 40 years. Whether you need a full roof replacement, storm damage repair, or a fast leak response, we bring the same level of craftsmanship and accountability to every job.",
          "We work with asphalt shingles, flat roofing systems, and all major roofing materials. Every project starts with a free written estimate and includes complete cleanup.",
        ]}
        whatWeDo={[
          "Full roof replacements — asphalt shingles and flat roofing",
          "Storm damage repair and insurance claim assistance",
          "Emergency leak response — fast same-week scheduling",
          "Flashing, soffit, and fascia repair",
          "Gutters and drainage solutions",
          "Free written estimate and full debris removal",
        ]}
        whyChooseUs={[
          "GAF Certified — manufacturer-backed roofing warranty",
          "Deal directly with the owner, not a call center",
          "40+ years serving Queens, Brooklyn, Nassau & Suffolk",
          "Licensed in NYC, Nassau, Suffolk, and Westchester",
          "A+ BBB Rating",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}
