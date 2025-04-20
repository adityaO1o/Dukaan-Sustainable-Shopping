
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";
import ProductCard, { Product } from "@/components/ProductCard";

const products: Product[] = [
  {
    id: "b1",
    name: "Natural Face Serum",
    description: "Organic face serum with vitamin C and hyaluronic acid.",
    price: 12.99,
    image: "https://i.pinimg.com/736x/b6/82/2c/b6822c8443aa063425217c796676177a.jpg",
    category: "beauty",
    carbonFootprint: 2.1,
    materials: ["organic ingredients", "glass packaging"]
  },
  {
    id: "b2",
    name: "Zero Waste Shampoo Bar",
    description: "Plastic-free shampoo bar with natural ingredients.",
    price: 49.99,
    image: "https://i.pinimg.com/736x/38/ca/47/38ca47e3ded15114d5ef821aae2b02f6.jpg",
    category: "beauty",
    carbonFootprint: 1.5,
    materials: ["natural ingredients", "zero waste"]
  },
  {
    id: "b3",
    name: "Bamboo Beauty Kit",
    description: "Complete beauty kit with bamboo brushes and accessories.",
    price: 1.99,
    image: "https://i.pinimg.com/736x/e1/1b/2f/e11b2f2bc81ccdb3991bd453f11882d2.jpg",
    category: "beauty",
    carbonFootprint: 3.8,
    materials: ["bamboo", "organic cotton"]
  }
];

const Beauty = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-8 w-8 text-eco-green" />
            <h1 className="text-3xl font-bold text-eco-green-dark">Beauty & Personal Care</h1>
          </div>

          <p className="text-muted-foreground max-w-3xl mb-8">
            Discover our range of natural and sustainable beauty products. From skincare to 
            personal care, all our products are cruelty-free and environmentally conscious.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Beauty;
