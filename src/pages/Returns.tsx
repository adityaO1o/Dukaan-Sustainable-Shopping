
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightLeft } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <ArrowRightLeft className="h-8 w-8 text-eco-green" />
              <h1 className="text-3xl font-bold text-eco-green-dark">Returns & Exchanges</h1>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Return Policy</h2>
                  <ul className="space-y-2">
                    <li>• 30-day return window for most items</li>
                    <li>• Items must be unused and in original packaging</li>
                    <li>• Free returns for quality issues</li>
                    <li>• Refund processed within 5-7 business days</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Exchange Process</h2>
                  <ol className="space-y-2 list-decimal pl-4">
                    <li>Initiate exchange request through your account</li>
                    <li>Receive return shipping label</li>
                    <li>Pack item securely using eco-friendly materials</li>
                    <li>Drop off at nearest pickup point</li>
                    <li>Replacement shipped once original item received</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Non-Returnable Items</h2>
                  <ul className="space-y-2">
                    <li>• Personal care items (opened)</li>
                    <li>• Custom-made products</li>
                    <li>• Sale items marked as final sale</li>
                    <li>• Perishable goods</li>
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

export default Returns;
