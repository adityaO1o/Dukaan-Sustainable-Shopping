
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Globe, Recycle } from "lucide-react";

const ImpactSection = () => {
  return (
    <section className="py-16 bg-eco-cream">
      <div className="eco-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://cdn.shopify.com/s/files/1/0070/7032/articles/product_20sustainability_1848x970_5336a5ca-6fbf-4140-9879-0c9b5987e449.png?v=1744327159"
              alt="Environmental impact visualization" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-eco-green/10 px-4 py-1.5 mb-2">
              <Leaf className="h-4 w-4 text-eco-green mr-2" />
              <span className="text-sm font-medium text-eco-green-dark">Our Impact</span>
            </div>
            
            <h2 className="text-3xl font-bold text-eco-green-dark">
              Shop With Knowledge, <br />Make Choices That Matter
            </h2>
            
            <p className="text-muted-foreground">
              At Dukaan, we believe transparency is key to sustainable shopping. That's why we show you the real environmental 
              impact of every product you buy.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-eco-green/20 rounded-full p-2 mr-4">
                    <Leaf className="h-5 w-5 text-eco-green" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-eco-green-dark">Carbon Footprint Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    Every product's carbon emissions are tracked and displayed so you can make informed decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-eco-green/20 rounded-full p-2 mr-4">
                    <Recycle className="h-5 w-5 text-eco-green" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-eco-green-dark">Recycled & Upcycled Materials</h3>
                  <p className="text-sm text-muted-foreground">
                    All products are made from recycled or upcycled materials, giving new life to existing resources.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-eco-green/20 rounded-full p-2 mr-4">
                    <Globe className="h-5 w-5 text-eco-green" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-eco-green-dark">Personal Impact Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Track your own contribution to sustainability with our personal footprint tracker.
                  </p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-eco-green hover:bg-eco-green-dark mt-4">
              <Link to="/impact">Learn More About Our Impact</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
