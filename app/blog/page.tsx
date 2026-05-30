import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Blog | Professional Home Remodeling Inc.",
  description:
    "Home remodeling tips, project guides, and expert advice from Professional Home Remodeling Inc.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Blog"
        subtitle="Home remodeling tips, project guides, and expert advice from our team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
