import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Professional Home Remodeling Inc. serves Queens, Brooklyn, the Bronx, Nassau County, Suffolk County, and Westchester County. Active licenses in each region.",
};

const areas = [
  {
    name: "Queens",
    neighborhoods: ["Astoria", "Bayside", "Flushing", "Forest Hills", "Jamaica", "Maspeth", "Ridgewood", "Whitestone", "Jackson Heights", "Elmhurst", "Corona", "Ozone Park"],
  },
  {
    name: "Brooklyn",
    neighborhoods: ["Bay Ridge", "Bensonhurst", "Borough Park", "Canarsie", "Flatbush", "Flatlands", "Howard Beach", "Park Slope", "Sheepshead Bay", "Sunset Park"],
  },
  {
    name: "Nassau County",
    neighborhoods: ["Franklin Square", "Garden City", "Great Neck", "Hempstead", "Levittown", "Manhasset", "Massapequa", "Mineola", "Rockville Centre", "Valley Stream"],
  },
  {
    name: "Suffolk County",
    neighborhoods: ["Amityville", "Babylon", "Bay Shore", "Brentwood", "Commack", "Huntington", "Islip", "Smithtown", "West Babylon"],
  },
  {
    name: "Bronx",
    neighborhoods: ["Bronxdale", "Fordham", "Morris Park", "Pelham Bay", "Riverdale", "Throggs Neck", "Wakefield"],
  },
  {
    name: "Westchester County",
    neighborhoods: ["Yonkers", "Mount Vernon", "New Rochelle", "White Plains", "Scarsdale", "Bronxville", "Pelham"],
  },
];

export default function ServiceAreasPage() {
  return (
    <main>
      <PageHeroSection
        title="Service Areas"
        subtitle="We serve the full New York metro area. Active licenses in NYC, Westchester, Nassau, and Suffolk County."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />
      <section style={{ padding: "60px 20px", maxWidth: 1340, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 32 }}>
          {areas.map((area) => (
            <div key={area.name} style={{ borderLeft: "4px solid var(--color-accent)", paddingLeft: 20 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "var(--color-dark)" }}>{area.name}</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {area.neighborhoods.map((n) => (
                  <li key={n} style={{ padding: "4px 0", color: "var(--color-text)", fontSize: 15 }}>{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 60, padding: 32, background: "var(--color-accent)", borderRadius: 8, color: "#fff", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Not sure if we serve your area?</h2>
          <p style={{ fontSize: 16, marginBottom: 24 }}>Call us — we'll let you know right away.</p>
          <a href="tel:+15166365300" style={{ display: "inline-block", background: "#fff", color: "var(--color-accent)", fontWeight: 700, padding: "14px 32px", borderRadius: 4, textDecoration: "none", fontSize: 16 }}>
            (516) 636-5300 — Nassau & Suffolk
          </a>
        </div>
      </section>
    </main>
  );
}
