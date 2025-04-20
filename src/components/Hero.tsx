import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, ArrowDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-eco-cream">
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-eco-green" />
          <span className="text-xl font-poppins font-semibold text-eco-green-dark">Dukaan</span>
        </div>
      </div>

      <div className="eco-container relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-eco-green/10 px-4 py-1.5 mb-2">
              <Leaf className="h-4 w-4 text-eco-green mr-2" />
              <span className="text-sm font-medium text-eco-green-dark">Shop Sustainably</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-eco-green-dark">
              Make Every Purchase <br />Count for Our Planet
            </h1>
            
            <p className="text-lg text-eco-green-dark/80 max-w-lg">
              Discover beautifully crafted recycled and upcycled products. Know the environmental impact of everything you buy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
                <Link to="/products">Shop Products</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-eco-green text-eco-green-dark hover:bg-eco-green/10"
                onClick={scrollToProducts}
              >
                Explore Popular <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-eco-green-dark">100%</p>
                <p className="text-sm text-eco-green-dark/80">Sustainable Products</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-eco-green-dark">10k+</p>
                <p className="text-sm text-eco-green-dark/80">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-eco-green-dark">50t</p>
                <p className="text-sm text-eco-green-dark/80">CO₂e Avoided</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/gallery/earth.png" 
                alt="Sustainable products showcase" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-eco-green/20 rounded-full p-2">
                  <Leaf className="h-6 w-6 text-eco-green" />
                </div>
                <div>
                  <p className="text-sm font-medium">Our Impact</p>
                  <p className="text-xs text-muted-foreground">Transparency in every purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-eco-green/5 rounded-bl-[100px] hidden md:block" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-eco-green/10 rounded-full -translate-x-1/2 translate-y-1/2 hidden md:block" />
    </div>
  );
};

export default Hero;
