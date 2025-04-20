
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Globe, Recycle, TreePine } from "lucide-react";

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="eco-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-eco-green-dark mb-4">Our Environmental Impact</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Dukaan, we're committed to transparency about our environmental footprint and the positive impact our community is making.
            </p>
          </div>
          
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="mx-auto flex justify-center mb-8">
              <TabsTrigger value="overview">Impact Overview</TabsTrigger>
              <TabsTrigger value="carbon">Carbon Reduction</TabsTrigger>
              <TabsTrigger value="materials">Sustainable Materials</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-eco-cream/30 rounded-lg p-6 text-center">
                  <Leaf className="h-10 w-10 text-eco-green mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Carbon Saved</h3>
                  <p className="text-3xl font-bold text-eco-green-dark mb-1">143.6 tonnes</p>
                  <p className="text-sm text-muted-foreground">CO₂e since our start</p>
                </div>
                
                <div className="bg-eco-cream/30 rounded-lg p-6 text-center">
                  <Recycle className="h-10 w-10 text-eco-green mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Waste Diverted</h3>
                  <p className="text-3xl font-bold text-eco-green-dark mb-1">86.4 tonnes</p>
                  <p className="text-sm text-muted-foreground">Materials kept from landfills</p>
                </div>
                
                <div className="bg-eco-cream/30 rounded-lg p-6 text-center">
                  <TreePine className="h-10 w-10 text-eco-green mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Trees Planted</h3>
                  <p className="text-3xl font-bold text-eco-green-dark mb-1">12,450</p>
                  <p className="text-sm text-muted-foreground">Through our reforestation initiative</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
                <h2 className="text-2xl font-bold text-eco-green-dark mb-6">Our Impact Journey</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Carbon Footprint Reduction</span>
                      <span className="text-eco-green font-medium">67% decrease</span>
                    </div>
                    <Progress value={67} className="h-2" indicatorClassName="bg-eco-green" />
                    <p className="text-sm text-muted-foreground mt-2">
                      Compared to industry average for similar products
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Recycled Materials Used</span>
                      <span className="text-eco-green font-medium">84% of products</span>
                    </div>
                    <Progress value={84} className="h-2" indicatorClassName="bg-eco-green" />
                    <p className="text-sm text-muted-foreground mt-2">
                      Percentage of our catalog made from recycled or upcycled materials
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Water Savings</span>
                      <span className="text-eco-green font-medium">4.2 million liters</span>
                    </div>
                    <Progress value={72} className="h-2" indicatorClassName="bg-eco-green" />
                    <p className="text-sm text-muted-foreground mt-2">
                      Water saved through our sustainable production processes
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-eco-green-dark mb-4">Join Our Mission</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Every purchase you make contributes to our collective impact. Together, we can build a more sustainable future.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Globe className="h-16 w-16 text-eco-green animate-pulse" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="carbon">
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-eco-green-dark mb-6">Carbon Reduction Initiatives</h2>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Supplier Carbon Accountability</h3>
                      <p className="text-muted-foreground mb-4">
                        We work with suppliers who are committed to measuring and reducing their carbon emissions. Our supplier code requires annual carbon audits and reduction targets.
                      </p>
                      <div className="bg-eco-cream/30 p-4 rounded-md">
                        <div className="flex justify-between mb-2">
                          <span>Suppliers with carbon targets</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <Progress value={92} className="h-2" indicatorClassName="bg-eco-green" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Renewable Energy Transition</h3>
                      <p className="text-muted-foreground mb-4">
                        Our operations and fulfillment centers are powered by renewable energy. We're on track to reach 100% renewable energy usage by the end of this year.
                      </p>
                      <div className="bg-eco-cream/30 p-4 rounded-md">
                        <div className="flex justify-between mb-2">
                          <span>Renewable energy usage</span>
                          <span className="font-medium">87%</span>
                        </div>
                        <Progress value={87} className="h-2" indicatorClassName="bg-eco-green" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Carbon Offset Program</h3>
                    <p className="text-muted-foreground mb-4">
                      For emissions we haven't yet eliminated, we invest in high-quality carbon offset projects that provide verified carbon reduction or removal, while also supporting local communities.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-eco-cream/30 p-4 rounded-md text-center">
                        <h4 className="font-medium mb-2">Reforestation</h4>
                        <p className="text-2xl font-bold text-eco-green-dark">56 tonnes</p>
                        <p className="text-sm text-muted-foreground">CO₂e offset</p>
                      </div>
                      <div className="bg-eco-cream/30 p-4 rounded-md text-center">
                        <h4 className="font-medium mb-2">Renewable Energy</h4>
                        <p className="text-2xl font-bold text-eco-green-dark">42 tonnes</p>
                        <p className="text-sm text-muted-foreground">CO₂e offset</p>
                      </div>
                      <div className="bg-eco-cream/30 p-4 rounded-md text-center">
                        <h4 className="font-medium mb-2">Community Projects</h4>
                        <p className="text-2xl font-bold text-eco-green-dark">28 tonnes</p>
                        <p className="text-sm text-muted-foreground">CO₂e offset</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="materials">
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-eco-green-dark mb-6">Sustainable Materials</h2>
                <p className="text-muted-foreground mb-8">
                  We carefully select materials that minimize environmental impact while maintaining product quality and durability.
                </p>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-eco-green/20 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">Recycled Materials</h3>
                      <p className="text-muted-foreground mb-4">
                        Products made from materials that have been diverted from waste streams, processed, and manufactured into new products.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Recycled Plastic</span>
                            <span>32% of products</span>
                          </div>
                          <Progress value={32} className="h-2" indicatorClassName="bg-eco-green" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Recycled Paper</span>
                            <span>28% of products</span>
                          </div>
                          <Progress value={28} className="h-2" indicatorClassName="bg-eco-green" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Recycled Textiles</span>
                            <span>24% of products</span>
                          </div>
                          <Progress value={24} className="h-2" indicatorClassName="bg-eco-green" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-eco-green/20 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">Renewable Materials</h3>
                      <p className="text-muted-foreground mb-4">
                        Materials that are rapidly replenished through natural processes, minimizing resource depletion.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Bamboo</span>
                            <span>18% of products</span>
                          </div>
                          <Progress value={18} className="h-2" indicatorClassName="bg-eco-green" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Organic Cotton</span>
                            <span>16% of products</span>
                          </div>
                          <Progress value={16} className="h-2" indicatorClassName="bg-eco-green" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Cork</span>
                            <span>6% of products</span>
                          </div>
                          <Progress value={6} className="h-2" indicatorClassName="bg-eco-green" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-eco-green/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Upcycled Materials</h3>
                    <p className="text-muted-foreground mb-4">
                      Creative reuse that transforms waste materials into higher-value products, giving a second life to discarded items.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-eco-cream/30 p-4 rounded-md text-center">
                        <h4 className="font-medium mb-2">Upcycled Denim</h4>
                        <p className="text-2xl font-bold text-eco-green-dark">480 kg</p>
                        <p className="text-sm text-muted-foreground">Waste diverted</p>
                      </div>
                      <div className="bg-eco-cream/30 p-4 rounded-md text-center">
                        <h4 className="font-medium mb-2">Upcycled Glass</h4>
                        <p className="text-2xl font-bold text-eco-green-dark">620 kg</p>
                        <p className="text-sm text-muted-foreground">Waste diverted</p>
                      </div>
                      <div className="bg-eco-cream/30 p-4 rounded-md text-center">
                        <h4 className="font-medium mb-2">Upcycled Wood</h4>
                        <p className="text-2xl font-bold text-eco-green-dark">850 kg</p>
                        <p className="text-sm text-muted-foreground">Waste diverted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
