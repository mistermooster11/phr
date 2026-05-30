import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Browse completed kitchen remodeling, bathroom renovation, roofing, and siding projects by Professional Home Remodeling Inc. across Queens, Brooklyn, Nassau & Long Island.",
};

const galleryImages = [
  { src: "https://www.phr-ny.com/images/kitchen_carousel_1.jpg", alt: "Kitchen remodeling project — custom cabinetry and countertops", category: "Kitchen" },
  { src: "https://www.phr-ny.com/images/bathroom_carousel_1.jpg", alt: "Bathroom renovation — custom tile and new fixtures", category: "Bathroom" },
  { src: "https://www.phr-ny.com/images/masonry_carousel_1.jpg", alt: "Roofing and masonry project", category: "Roofing" },
  { src: "https://www.phr-ny.com/images/siding_carousel_1.jpg", alt: "Siding installation — insulated vinyl", category: "Siding" },
];

export default function GalleryPage() {
  return (
    <main>
      <PageHeroSection
        title="Project Gallery"
        subtitle="A selection of completed kitchen, bathroom, roofing, siding, and masonry projects across Queens, Brooklyn, Nassau, Suffolk, the Bronx, and Westchester."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section style={{ padding: "60px 20px", maxWidth: 1340, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {galleryImages.map((img, i) => (
            <div key={i} style={{ borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "12px 16px", background: "#fff" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {img.category}
                </span>
                <p style={{ margin: "4px 0 0", fontSize: 14, color: "var(--color-text)" }}>{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
