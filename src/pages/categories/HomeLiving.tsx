
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";
import ProductCard, { Product } from "@/components/ProductCard";

const products: Product[] = [
  {
    id: "hl1",
    name: "Bamboo Furniture Set",
    description: "Sustainable bamboo living room set including coffee table and side tables.",
    price: 129.99,
    image: "https://i.pinimg.com/736x/6e/b9/d6/6eb9d68c57c94bc29f6eee24f31621d0.jpg",
    category: "home",
    carbonFootprint: 45.5,
    materials: ["sustainable bamboo", "natural finish"]
  },
  {
    id: "hl2",
    name: "Organic Cotton Bedding Set",
    description: "100% organic cotton bedding set with duvet cover and pillowcases.",
    price: 349.99,
    image: "https://i.pinimg.com/736x/00/57/5d/00575d1969865eb7be0be4877979f2b1.jpg",
    category: "home",
    carbonFootprint: 12.3,
    materials: ["organic cotton", "natural dyes"]
  },
  {
    id: "hl3",
    name: "Recycled Glass Vase Set",
    description: "Set of decorative vases made from recycled glass.",
    price: 129.99,
    image: "https://i.pinimg.com/736x/97/6c/96/976c960f64e856544a6204c04aca0095.jpg",
    category: "home",
    carbonFootprint: 8.7,
    materials: ["recycled glass"]
  }
];

const HomeLiving = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container">
          <div className="flex items-center gap-3 mb-8">
            <Home className="h-8 w-8 text-eco-green" />
            <h1 className="text-3xl font-bold text-eco-green-dark">Home & Living</h1>
          </div>

          <p className="text-muted-foreground max-w-3xl mb-8">
            Transform your living space with our curated collection of sustainable home goods. 
            Each piece is thoughtfully crafted using eco-friendly materials and processes.
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

export default HomeLiving;
