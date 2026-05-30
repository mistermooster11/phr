import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Professional Home Remodeling Inc.",
  description:
    "Contact Professional Home Remodeling Inc. for a free written estimate. Mon-Sat 7am-7pm. Nassau & Suffolk: (516) 636-5300. NYC & Westchester: (718) 316-9221.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Free written estimates — seven days a week. No obligation. Call (516) 636-5300 for Nassau & Suffolk, or (718) 316-9221 for NYC & Westchester."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="Professional Home Remodeling Inc."
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4!2d-73.6751!3d40.7051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27b2a!2s1184+Hempstead+Turnpike+Franklin+Square+NY!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
