
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-eco-green" />
              <h1 className="text-3xl font-bold text-eco-green-dark">Our Story</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <img 
                  src="https://i.pinimg.com/736x/1d/c3/e9/1dc3e9a6a59193cf1a40484ba7ccc5a1.jpg"
                  alt="Sustainable forest"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
                
                <h2 className="text-2xl font-semibold mb-4">Our Beginning</h2>
                <p className="mb-6">
                  Founded in April 2025, Dukaan emerged from a shared vision among three BPIT students 
                  who believed in the power of conscious consumerism. What started as a college 
                  project has grown into a platform that's changing how India shops sustainably.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-6">
                  At Dukaan, we're committed to making sustainable living accessible and affordable. 
                  We carefully curate products that not only minimize environmental impact but also 
                  support local artisans and eco-friendly manufacturers.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold">Ritesh Chauhan</h3>
                    <p className="text-muted-foreground">Trojan Member</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">Aditya Sharma</h3>
                    <p className="text-muted-foreground">Trojan Member</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold">Daksh Tyagi</h3>
                    <p className="text-muted-foreground">Trojan Member</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
                <p className="mb-6">
                  Through our platform, we've helped reduce carbon emissions, minimize plastic waste, 
                  and support sustainable practices. Every purchase on Dukaan contributes to building 
                  a more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
