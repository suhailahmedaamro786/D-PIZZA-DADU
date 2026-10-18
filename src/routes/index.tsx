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

const siteUrl = "https://d-pizza.shop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "D-Pizza Food Dadu | Pizza Delivery & Fast Food" },
      { name: "description", content: "Looking for pizza in Dadu? Explore D-Pizza Food’s pizzas, burgers, zingers, broast, rolls, BBQ and deals in Shahani Paro, Dadu, Sindh. View the menu and order on WhatsApp." },
      { property: "og:title", content: "D-Pizza Food Dadu | Pizza Delivery & Fast Food" },
      { property: "og:description", content: "Explore pizzas, burgers, zingers, broast, rolls, BBQ and deals at D-Pizza Food in Shahani Paro, Dadu. View the menu and order on WhatsApp." },
      { property: "og:url", content: siteUrl + "/" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "D-Pizza Food" },
      { property: "og:image", content: siteUrl + "/assets/menu-images/Pizzas/D-Pizza%20Special.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "D-Pizza Food Dadu | Pizza Delivery & Fast Food" },
      { name: "twitter:description", content: "Pizzas, burgers, zingers, broast, rolls, BBQ and deals in Shahani Paro, Dadu, Sindh. View the menu and order on WhatsApp." },
      { name: "twitter:image", content: siteUrl + "/assets/menu-images/Pizzas/D-Pizza%20Special.jpg" },
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
          mainEntityOfPage: siteUrl + "/",
          image: siteUrl + "/assets/menu-images/Pizzas/D-Pizza%20Special.jpg",
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
