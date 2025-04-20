
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Truck } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Truck className="h-8 w-8 text-eco-green" />
              <h1 className="text-3xl font-bold text-eco-green-dark">Shipping Information</h1>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Delivery Timeframes</h2>
                  <ul className="space-y-2">
                    <li>• Metro Cities: 2-3 business days</li>
                    <li>• Other Cities: 3-5 business days</li>
                    <li>• Remote Areas: 5-7 business days</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Shipping Costs</h2>
                  <p>Free shipping on orders above ₹999</p>
                  <p>Standard shipping fee: ₹99</p>
                  <p>Express delivery (where available): Additional ₹199</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Eco-Friendly Packaging</h2>
                  <p className="mb-4">
                    All our products are shipped in sustainable packaging materials:
                  </p>
                  <ul className="space-y-2">
                    <li>• Recycled cardboard boxes</li>
                    <li>• Paper-based tape</li>
                    <li>• Biodegradable bubble wrap alternatives</li>
                    <li>• Plantable seed paper for invoices</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
