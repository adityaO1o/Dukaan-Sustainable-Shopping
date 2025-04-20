
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const SaveEarthSection = () => {
  return (
    <section className="py-16 bg-eco-cream">
      <div className="eco-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-eco-green/10 px-4 py-1.5 mb-2">
              <Leaf className="h-4 w-4 text-eco-green mr-2" />
              <span className="text-sm font-medium text-eco-green-dark">Save Our Planet</span>
            </div>
            
            <h2 className="text-3xl font-bold text-eco-green-dark">
              Your Choice Makes a Difference
            </h2>
            
            <p className="text-lg text-eco-green-dark/80">
              Every sustainable product you choose helps reduce carbon emissions. By shopping consciously, 
              you're part of the solution to climate change. Our products are carefully selected to minimize 
              environmental impact while maximizing quality and durability.
            </p>

            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="bg-eco-green/20 rounded-full p-2">
                  <Leaf className="h-5 w-5 text-eco-green" />
                </div>
                <p className="text-eco-green-dark/80">Reduce carbon footprint by up to 50%</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-eco-green/20 rounded-full p-2">
                  <Leaf className="h-5 w-5 text-eco-green" />
                </div>
                <p className="text-eco-green-dark/80">Support sustainable manufacturing</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-eco-green/20 rounded-full p-2">
                  <Leaf className="h-5 w-5 text-eco-green" />
                </div>
                <p className="text-eco-green-dark/80">Promote circular economy</p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark mt-4">
              <Link to="/products">Shop Sustainable Products</Link>
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E12AQG-Gbgf8A_WVQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710929328718?e=2147483647&v=beta&t=DsCRaZ1UySE213GMXL-5gaDnOooeuIlv9LuXuEh-iEs"
              alt="Environmental conservation"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-eco-green/20 rounded-full p-2">
                  <Leaf className="h-6 w-6 text-eco-green" />
                </div>
                <div>
                  <p className="text-sm font-medium">Reduce Impact</p>
                  <p className="text-xs text-muted-foreground">Every Purchase Counts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveEarthSection;
