import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="grid-bg"></div>
      <Nav />
      <Hero />
      <Products />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}