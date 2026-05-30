import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeroSection
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ color: "var(--color-text)", fontSize: 15, lineHeight: 1.7 }}>
          Professional Home Remodeling Inc. respects your privacy. Any personal information you provide — including your name, phone number, email address, or project details — is used solely to respond to your inquiry and provide our services. We do not sell, rent, or share your information with third parties.
        </p>
        <p style={{ color: "var(--color-text)", fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
          For questions about this policy, contact us at (516) 636-5300 or through our contact form.
        </p>
      </section>
    </main>
  );
}
