import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <div className="grid-bg"></div>
      <Nav />
      <div id="products"><Hero /></div>
      <Products />
      <div id="how-it-works"><HowItWorks /></div>
      <div id="pricing"><Pricing /></div>
      <div id="contact"><CTA /></div>
      <Footer />
    </main>
  );
}