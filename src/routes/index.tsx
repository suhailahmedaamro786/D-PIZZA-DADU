import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FindUs } from "@/components/FindUs";
import { Reviews } from "@/components/Reviews";
import { AboutDPizza } from "@/components/AboutDPizza";

const siteUrl = "https://d-pizza.com";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "D-Pizza Food Dadu | Pizza, Burgers, BBQ & Fast Food" },
      { name: "description", content: "Order pizza, burgers, zingers, broast, rolls, BBQ and deals from D-Pizza Food in Dadu, Sindh. View the menu and place your order through WhatsApp." },
      { property: "og:title", content: "D-Pizza Food Dadu | Pizza, Burgers, BBQ & Fast Food" },
      { property: "og:description", content: "Explore pizza, burgers, zingers, broast, rolls, BBQ and fast-food deals in Dadu. Order through WhatsApp." },
      { property: "og:url", content: siteUrl + "/" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "D-Pizza Food" },
      { property: "og:image", content: siteUrl + "/1791122318601.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: siteUrl + "/1791122318601.jpg" },
    ],
    links: [
      { rel: "canonical", href: siteUrl + "/" },
      { rel: "alternate", hrefLang: "en-PK", href: siteUrl + "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "@id": siteUrl + "/#restaurant",
          name: "D-Pizza Food",
          url: siteUrl + "/",
          telephone: "+923131342361",
          servesCuisine: ["Pizza", "Fast Food", "BBQ", "Burgers", "Pakistani"],
          priceRange: "Rs",
          areaServed: { "@type": "City", name: "Dadu" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "PQGH+54Q, Shahani Paro Rd, Shahani Paro",
            addressLocality: "Dadu",
            addressRegion: "Sindh",
            postalCode: "76100",
            addressCountry: "PK",
          },
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "18:00",
            closes: "01:00"
          }],
          menu: siteUrl + "/#menu",
          hasMap: "https://www.google.com/maps/search/?api=1&query=PQGH%2B54Q+D-Pizza+Food+Shahani+Paro+Rd+Dadu+Pakistan"
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <Reviews />
        <AboutDPizza />
        <FindUs />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  );
}
