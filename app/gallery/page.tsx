import type { Metadata } from "next";
import Image from "next/image";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse completed kitchen remodeling, bathroom renovation, roofing, and siding projects by Professional Home Remodeling Inc. across Queens, Brooklyn, Nassau & Long Island.",
};

const galleryImages = [
  { src: "/images/gc-service-kitchen.jpg",   alt: "Kitchen remodeling project — custom cabinetry and countertops",   category: "Kitchen" },
  { src: "/images/gc-service-bathroom.jpg",  alt: "Bathroom renovation — custom tile and new fixtures",               category: "Bathroom" },
  { src: "/images/gc-service-roofing.jpg",   alt: "Roofing installation — asphalt shingles residential",              category: "Roofing" },
  { src: "/images/gc-service-siding.jpg",    alt: "Siding installation — insulated vinyl exterior",                   category: "Siding" },
  { src: "/images/gc-hero-kitchen.jpg",      alt: "Kitchen renovation in progress — cabinets and countertops",        category: "Kitchen" },
  { src: "/images/gc-hero-bathroom.jpg",     alt: "Bathroom remodel — frameless glass shower installation",           category: "Bathroom" },
  { src: "/images/gc-hero-roofing.jpg",      alt: "Roofing crew working on pitched residential roof",                 category: "Roofing" },
  { src: "/images/gc-hero-siding.jpg",       alt: "Exterior siding installation — two workers on ladders",            category: "Siding" },
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
              <div style={{ position: "relative", width: "100%", height: 260 }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
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
