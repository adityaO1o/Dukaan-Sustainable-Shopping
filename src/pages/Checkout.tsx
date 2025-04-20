
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, CreditCard, Leaf, ShoppingBag, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Checkout = () => {
  const { cartItems, cartTotal, cartCount, cartFootprint, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = () => {
    setLoading(true);
    
    // Simulate order placement
    setTimeout(() => {
      setLoading(false);
      clearCart();
      
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
      
      navigate("/order-confirmation");
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="eco-container max-w-4xl mx-auto">
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-6">
                Add some eco-friendly products to your cart and come back to complete your purchase.
              </p>
              <Button asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="eco-container max-w-6xl mx-auto">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              asChild 
              className="mb-4 hover:bg-eco-green/10"
            >
              <Link to="/products" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Continue Shopping
              </Link>
            </Button>
            
            <h1 className="text-3xl font-bold text-eco-green-dark">Checkout</h1>
            <p className="text-muted-foreground">Complete your purchase</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                  <CardDescription>Enter your shipping details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Green Street" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="San Francisco" />
                    </div>
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="CA" />
                    </div>
                    <div className="space-y-2 col-span-1">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="94107" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Shipping Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Method</CardTitle>
                  <CardDescription>Choose your preferred shipping option</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={shippingMethod} 
                    onValueChange={setShippingMethod}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 border p-3 rounded-md">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="flex-1 cursor-pointer">
                        <div className="font-medium">Standard Shipping</div>
                        <div className="text-sm text-muted-foreground">3-5 business days</div>
                      </Label>
                      <div className="font-medium">$5.99</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 border p-3 rounded-md">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex-1 cursor-pointer">
                        <div className="font-medium">Express Shipping</div>
                        <div className="text-sm text-muted-foreground">1-2 business days</div>
                      </Label>
                      <div className="font-medium">$12.99</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 border p-3 rounded-md">
                      <RadioGroupItem value="eco" id="eco" />
                      <Label htmlFor="eco" className="flex-1 cursor-pointer">
                        <div className="font-medium flex items-center">
                          Eco Shipping
                          <Leaf className="ml-2 h-4 w-4 text-eco-green" />
                        </div>
                        <div className="text-sm text-muted-foreground">5-7 business days (carbon neutral)</div>
                      </Label>
                      <div className="font-medium">$3.99</div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
              
              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Select your preferred payment method</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 border p-3 rounded-md">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                        <div className="font-medium flex items-center">
                          Credit/Debit Card
                          <CreditCard className="ml-2 h-4 w-4" />
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 border p-3 rounded-md">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="font-medium">PayPal</div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 border p-3 rounded-md">
                      <RadioGroupItem value="apple-pay" id="apple-pay" />
                      <Label htmlFor="apple-pay" className="flex-1 cursor-pointer">
                        <div className="font-medium">Apple Pay</div>
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === "credit-card" && (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="4242 4242 4242 4242" />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2 col-span-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2 col-span-1">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="name-on-card">Name on Card</Label>
                        <Input id="name-on-card" placeholder="Jane Doe" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>
                    {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="max-h-64 overflow-y-auto space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3 py-2">
                        <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                          <p className="text-muted-foreground text-sm">Qty: {item.quantity}</p>
                          <p className="font-semibold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>
                        {shippingMethod === "standard" && "$5.99"}
                        {shippingMethod === "express" && "$12.99"}
                        {shippingMethod === "eco" && "$3.99"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>${(cartTotal * 0.08).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>
                      $
                      {(
                        cartTotal + 
                        (shippingMethod === "standard" ? 5.99 : 
                         shippingMethod === "express" ? 12.99 : 3.99) + 
                        (cartTotal * 0.08)
                      ).toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-eco-green text-sm">
                    <Leaf className="h-4 w-4 mr-1" />
                    <span>Carbon Footprint: {cartFootprint.toFixed(2)} kg CO₂e</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-eco-green hover:bg-eco-green-dark h-12 text-lg"
                    onClick={handlePlaceOrder}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">Processing...</span>
                    ) : (
                      <span className="flex items-center">
                        <Truck className="mr-2 h-5 w-5" />
                        Place Order
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
