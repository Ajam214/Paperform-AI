import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5"
import Section6 from "@/components/Section6"



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
        <Section5 />
        <Section6 />
       
      </main>
      <Footer />
    </div>
  );
}
