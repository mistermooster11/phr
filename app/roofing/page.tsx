import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";

export const metadata: Metadata = {
  title: "Roofing",
  description: "GAF Certified roof installations and repairs serving Queens, Brooklyn, Nassau, Suffolk, the Bronx, and Westchester. Free inspections. Emergency leak response available.",
};

export default function RoofingPage() {
  return (
    <main>
      <PageHeroSection
        title="Roofing"
        subtitle="GAF Certified roof installations and repairs. Free inspections. Emergency leak response available across all service areas."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services-page" }, { label: "Roofing" }]}
      />
      <ServiceDetailSection
        sidebarImage="https://www.phr-ny.com/images/masonry_carousel_1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Roofing"
        heading="Roofing in Queens, Brooklyn, Nassau & Long Island"
        intro={[
          "Professional Home Remodeling Inc. is a GAF Certified Installer serving Queens, Brooklyn, Nassau County, Suffolk County, the Bronx, and Westchester. We handle new roof installations, full replacements, and targeted repairs — all backed by manufacturer warranty.",
          "If you have storm damage, we work directly with your insurance adjuster and provide full written documentation of all damage and completed work. Emergency roof leak response available.",
        ]}
        whatWeDo={[
          "Free roof inspection and written estimate at no charge",
          "GAF Certified installation with manufacturer-backed warranties",
          "Full roof replacement — shingles, underlayment, and flashing",
          "Emergency roof leak repair and storm damage response",
          "Insurance claim documentation and adjuster coordination",
          "Complete debris and old material removal",
        ]}
        whyChooseUs={[
          "GAF Certified Installers — manufacturer warranties on every installation",
          "Emergency leak response available across all service areas",
          "We work directly with your insurance adjuster on storm claims",
          "40+ years of roofing experience in the New York metro area",
          "Licensed in NYC, Westchester, Nassau, and Suffolk County",
        ]}
      />
    </main>
  );
}
