
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, ShoppingBag } from "lucide-react";

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = `ECO-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container max-w-3xl mx-auto text-center">
          <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-eco-green" />
          </div>
          
          <h1 className="text-3xl font-bold text-eco-green-dark mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-lg mb-2">
            Your order has been confirmed and will be shipped soon.
          </p>
          
          <div className="inline-block bg-eco-green/10 rounded-lg px-4 py-2 font-mono font-medium my-4">
            Order #{orderNumber}
          </div>
          
          <p className="text-muted-foreground mb-8">
            A confirmation email has been sent to your email address.
          </p>
          
          <div className="flex items-center justify-center text-eco-green mb-8">
            <Leaf className="h-5 w-5 mr-2" />
            <span>Thank you for choosing eco-friendly products!</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/profile">View Orders</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
