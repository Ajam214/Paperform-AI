import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Section4 from "@/components/Section4";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Reviews />
        <Stats />
        <Features />
        <Section4 />
      </main>
      <Footer />
    </div>
  );
}
