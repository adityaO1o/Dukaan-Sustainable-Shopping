
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ImpactSection from "@/components/ImpactSection";
import SaveEarthSection from "@/components/SaveEarthSection";
import ReviewSection from "@/components/ReviewSection";
import NewsletterSection from "@/components/NewsletterSection";
import { useEffect, useState } from "react";

const Index = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowNav(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`transition-opacity duration-300 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed w-full top-0 z-50`}>
        <Navbar />
      </div>
      {!showNav && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        </div>
      )}
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <SaveEarthSection />
        <ImpactSection />
        <ReviewSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
