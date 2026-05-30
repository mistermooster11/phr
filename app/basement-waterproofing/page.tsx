import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";

export const metadata: Metadata = {
  title: "Basement Waterproofing",
  description: "Interior and exterior basement waterproofing across Queens, Brooklyn, Nassau, Suffolk & Westchester. Emergency flooding response available. Free estimates.",
};

export default function BasementWaterproofingPage() {
  return (
    <main>
      <PageHeroSection
        title="Basement Waterproofing"
        subtitle="Interior and exterior basement waterproofing. Emergency flooding response available. Free written estimates across all service areas."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services-page" }, { label: "Basement Waterproofing" }]}
      />
      <ServiceDetailSection
        sidebarImage="https://www.phr-ny.com/images/masonry_carousel_1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Basement Waterproofing"
        heading="Basement Waterproofing in Queens, Brooklyn & Long Island"
        intro={[
          "Basement water problems get worse the longer they're left unaddressed. Professional Home Remodeling Inc. handles interior and exterior waterproofing across Queens, Brooklyn, Nassau County, Suffolk County, the Bronx, and Westchester.",
          "Whether you have active flooding, seeping walls, or a damp basement, we assess the full scope and provide a written solution. Emergency flooding response available — call us as soon as the problem develops.",
        ]}
        whatWeDo={[
          "Interior drainage system installation",
          "Sump pump installation and replacement",
          "Exterior waterproofing membrane application",
          "Foundation crack repair and injection",
          "Window well installation and drainage",
          "Emergency flooding response and water extraction",
        ]}
        whyChooseUs={[
          "Emergency flooding response available across all service areas",
          "We provide insurance documentation for water damage claims",
          "40+ years handling water and structural issues in New York homes",
          "Licensed and insured in NYC, Nassau, Suffolk, and Westchester",
          "Free written estimate — we assess the full scope before quoting",
        ]}
      />
    </main>
  );
}
