import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";

export const metadata: Metadata = {
  title: "Siding & Windows",
  description: "Insulated vinyl siding in 20+ colors with lifetime manufacturer guarantee, plus Energy Star-rated window replacement. Serving Queens, Brooklyn, Nassau & Long Island.",
};

export default function SidingWindowsPage() {
  return (
    <main>
      <PageHeroSection
        title="Siding & Windows"
        subtitle="Insulated vinyl siding with lifetime guarantee and Energy Star-rated window replacement. We bring samples to your home. Free written estimates."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services-page" }, { label: "Siding & Windows" }]}
      />
      <ServiceDetailSection
        sidebarImage="https://www.phr-ny.com/images/siding_carousel_1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={400}
        activeService="Siding & Windows"
        heading="Siding & Window Replacement in Queens, Brooklyn & Long Island"
        intro={[
          "Professional Home Remodeling Inc. installs insulated vinyl siding in 20+ colors with a lifetime manufacturer guarantee, and Energy Star-rated replacement windows with argon fill and aluminum capping.",
          "We bring samples to your home so you can see your options against your real exterior before making any decisions. Complete exterior packages available including fascia, gutters, and aluminum window recaps.",
        ]}
        whatWeDo={[
          "Insulated vinyl siding installation — 20+ color options",
          "Energy Star-rated window replacement with argon fill",
          "Aluminum fascia, soffit, and window/door recapping",
          "Seamless gutter installation",
          "Complete exterior packages from one crew",
          "Lifetime manufacturer warranty documentation",
        ]}
        whyChooseUs={[
          "We bring samples to your home — see colors against your real exterior",
          "Lifetime manufacturer guarantee on all siding installations",
          "Energy Star certification on all replacement windows",
          "40+ years serving the New York metro area",
          "Licensed and fully insured — Nassau, Suffolk, NYC & Westchester",
        ]}
      />
    </main>
  );
}
