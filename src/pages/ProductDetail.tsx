
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CarbonImpactMeter from "@/components/CarbonImpactMeter";
import { Product } from "@/components/ProductCard";
import { Leaf, ShoppingCart, ChevronLeft, BadgePercent } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

// Mock products data - in a real app, this would come from an API
const productsData: Product[] = [
  {
    id: "1",
    name: "Recycled Paper Notebook",
    description: "Handcrafted notebook made from 100% post-consumer recycled paper with a biodegradable cover. Each notebook saves approximately 0.5kg of virgin paper and uses 60% less water in production compared to conventional notebooks.",
    price: 12.99,
    image: "/gallery/Recycled Paper Notebook.webp",
    category: "office",
    carbonFootprint: 0.8,
    materials: []
  },
  {
    id: "2",
    name: "Upcycled Denim Tote Bag",
    description: "Stylish tote made from upcycled denim jeans, giving new life to pre-loved materials. Each bag is unique and diverts approximately 1kg of textile waste from landfill. Water-based dyes and recycled stitching make this a truly eco-friendly accessory.",
    price: 39.99,
    image: "/gallery/Upcycled Denim Tote Bag.webp",
    category: "fashion",
    carbonFootprint: 1.2,
    materials: []
  },
  {
    id: "3",
    name: "Bamboo Cutlery Set",
    description: "Portable bamboo utensil set with carrying case, perfect for reducing single-use plastic waste. Bamboo is one of the fastest-growing plants on earth, making it a highly sustainable material. The set includes a fork, knife, spoon, and chopsticks.",
    price: 18.50,
    image: "/gallery/Bamboo Cutlery Set.jpg",
    category: "kitchen",
    carbonFootprint: 0.6,
    materials: []
  },
  {
    id: "4",
    name: "Solar-Powered Phone Charger",
    description: "Eco-friendly charger that uses solar energy to power your devices wherever you go. The outer casing is made from recycled plastic, and one hour of charging provides enough power for approximately 30 minutes of phone use.",
    price: 49.99,
    image: "/gallery/Solar-Powered Phone Charger.webp",
    category: "electronics",
    carbonFootprint: 2.5,
    materials: []
  },
  {
    id: "5",
    name: "Recycled Glass Water Bottle",
    description: "Beautiful water bottle made from recycled glass with a silicone protective sleeve.",
    price: 24.99,
    image: "/gallery/Recycled Glass Water Bottle.webp",
    category: "home",
    carbonFootprint: 1.5,
    materials: []
  },
  {
    id: "6",
    name: "Organic Cotton T-Shirt",
    description: "Soft, comfortable t-shirt made from 100% GOTS certified organic cotton.",
    price: 29.99,
    image: "/gallery/Organic Cotton T-Shirt.webp",
    category: "fashion",
    carbonFootprint: 2.2,
    materials: []
  },
  {
    id: "7",
    name: "Recycled Plastic Plant Pots",
    description: "Set of 3 colorful plant pots made from recycled ocean plastic.",
    price: 18.99,
    image: "/gallery/Recycled Plastic Plant Pots.jpeg",
    category: "garden",
    carbonFootprint: 1.8,
    materials: []
  },
  {
    id: "8",
    name: "Biodegradable Phone Case",
    description: "Durable yet fully biodegradable phone case made from plant-based materials.",
    price: 34.99,
    image: "/gallery/Biodegradable Phone Case.webp",
    category: "electronics",
    carbonFootprint: 1.0,
    materials: []
  },
  {
    id: "9",
    name: "Reusable Beeswax Food Wraps",
    description: "Sustainable alternative to plastic wrap, made with organic cotton, beeswax, and tree resin.",
    price: 16.99,
    image: "/gallery/Reusable Beeswax Food Wraps.webp",
    category: "kitchen",
    carbonFootprint: 0.4,
    materials: []
  },
  {
    id: "10",
    name: "Recycled Wool Blanket",
    description: "Cozy blanket made from post-consumer recycled wool and polyester blend.",
    price: 89.99,
    image: "/gallery/Recycled Wool Blanket.webp",
    category: "home",
    carbonFootprint: 3.2,
    materials: []
  },
  {
    id: "11",
    name: "Compostable Bamboo Toothbrush",
    description: "Biodegradable toothbrush with bamboo handle and plant-based bristles.",
    price: 6.99,
    image: "/gallery/Compostable Bamboo Toothbrush.jpg",
    category: "bathroom",
    carbonFootprint: 0.3,
    materials: []
  },
  {
    id: "12",
    name: "Recycled Metal Water Bottle",
    description: "Durable stainless steel water bottle made from 90% recycled materials.",
    price: 32.99,
    image: "/gallery/Recycled Metal Water Bottle.webp",
    category: "travel",
    carbonFootprint: 1.9,
    materials: []
  },
  {
    id: "13",
    name: "Sustainable Bamboo Bed Sheets",
    description: "Luxuriously soft bed sheets made from 100% bamboo fibers. Naturally hypoallergenic and cooling.",
    price: 79.99,
    image: "/gallery/Sustainable Bamboo Bed Sheets.webp",
    category: "home",
    carbonFootprint: 2.8,
    materials: []
  },
  {
    id: "14",
    name: "Recycled Plastic Outdoor Chair",
    description: "Stylish and durable outdoor chair made from recycled ocean plastics. Weather resistant and easy to clean.",
    price: 129.99,
    image: "/gallery/Recycled Plastic Outdoor Chair.jpg",
    category: "garden",
    carbonFootprint: 4.2,
    materials: []
  },
  {
    id: "15",
    name: "Biodegradable Yoga Mat",
    description: "Non-slip yoga mat made from natural rubber and cotton. Fully biodegradable at end of life.",
    price: 45.99,
    image: "/gallery/Biodegradable Yoga Mat.jpeg",
    category: "home",
    carbonFootprint: 1.7,
    materials: []
  },
  {
    id: "16",
    name: "Solar-Powered Garden Lights",
    description: "Set of 6 pathway lights charged by sunlight during the day, providing warm illumination at night.",
    price: 36.99,
    image: "/gallery/Solar-Powered Garden Lights.webp",
    category: "garden",
    carbonFootprint: 2.1,
    materials: []
  },
  {
    id: "17",
    name: "Recycled Cork Coasters",
    description: "Set of 4 uniquely designed coasters made from recycled wine corks. Heat-resistant and absorbent.",
    price: 14.99,
    image: "/gallery/Recycled Cork Coasters.jpg",
    category: "kitchen",
    carbonFootprint: 0.5,
    materials: []
  },
  {
    id: "18",
    name: "Bamboo Bathroom Shelf",
    description: "Elegant bathroom organizer made from sustainably harvested bamboo. Water-resistant and durable.",
    price: 42.99,
    image: "/gallery/Bamboo Bathroom Shelf.jpg",
    category: "bathroom",
    carbonFootprint: 1.9,
    materials: []
  },
  {
    id: "19",
    name: "Eco-Friendly Laptop Sleeve",
    description: "Protective laptop sleeve made from recycled plastic bottles. Fits most 13-15 inch laptops.",
    price: 28.99,
    image: "/gallery/Eco-Friendly Laptop Sleeve.jpeg",
    category: "electronics",
    carbonFootprint: 1.3,
    materials: []
  },
  {
    id: "20",
    name: "Reusable Silicone Food Bags",
    description: "Set of 3 leak-proof, air-tight silicone bags for storing food. Dishwasher and microwave safe.",
    price: 19.99,
    image: "/gallery/Reusable Silicone Food Bags.webp",
    category: "kitchen",
    carbonFootprint: 0.9,
    materials: []
  }
];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productsData.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const { addToCart } = useCart();

  useEffect(() => {
    // Reset quantity when product changes
    setQuantity(1);
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity}x ${product.name} has been added to your cart.`,
      });
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="eco-container text-center">
            <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
            <p className="mb-6">Sorry, the product you are looking for does not exist.</p>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
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
        <div className="eco-container">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              asChild 
              className="mb-4 hover:bg-eco-green/10"
            >
              <Link to="/products" className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Products
              </Link>
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Product Image */}
              <div className="rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-eco-green/10 text-eco-green hover:bg-eco-green/20">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </Badge>
                    <Badge className="bg-eco-green text-white hover:bg-eco-green-dark">
                      <Leaf className="mr-1 h-3 w-3" />
                      Eco-friendly
                    </Badge>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-eco-green-dark mb-2">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm">
                      <Leaf className="h-4 w-4 mr-1" />
                      {product.carbonFootprint} kg CO₂e
                    </div>
                    <div className="flex items-center text-eco-green text-sm">
                      <BadgePercent className="h-4 w-4 mr-1" />
                      75% less than average
                    </div>
                  </div>
                  
                  <p className="text-foreground/80">
                    {product.description}
                  </p>
                </div>
                
                <CarbonImpactMeter 
                  carbonFootprint={product.carbonFootprint}
                  comparison={{
                    label: "products",
                    value: 4.5
                  }}
                  size="lg"
                />
                
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-eco-green-dark">
                      ${product.price.toFixed(2)}
                    </span>
                    
                    <div className="flex items-center">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="mx-4 font-medium">{quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={incrementQuantity}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-eco-green hover:bg-eco-green-dark h-12 text-lg"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
                
                <Accordion type="single" collapsible className="mt-6">
                  <AccordionItem value="impact">
                    <AccordionTrigger>Environmental Impact</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          This {product.name.toLowerCase()} has a carbon footprint of {product.carbonFootprint} kg CO₂e, 
                          which is approximately 75% lower than conventional alternatives.
                        </p>
                        <p>
                          By choosing this product, you're helping to reduce waste, conserve natural resources,
                          and lower greenhouse gas emissions.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="shipping">
                    <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          Free shipping on orders over $50. Standard delivery takes 3-5 business days.
                        </p>
                        <p>
                          We offer a 30-day return policy for unused items in original packaging.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
