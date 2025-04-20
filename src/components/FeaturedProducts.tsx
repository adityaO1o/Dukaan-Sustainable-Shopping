
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard, { Product } from "./ProductCard";

// Mock data for featured products
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Recycled Paper Notebook",
    description: "Handcrafted notebook made from 100% post-consumer recycled paper with a biodegradable cover.",
    price: 12.99,
    image: "/gallery/Recycled Paper Notebook.webp",
    category: "stationery",
    carbonFootprint: 0.8,
    materials: ["recycled paper", "soy-based ink", "biodegradable cover"]
  },
  {
    id: "2",
    name: "Upcycled Denim Tote Bag",
    description: "Stylish tote made from upcycled denim jeans, giving new life to pre-loved materials.",
    price: 39.99,
    image: "/gallery/Upcycled Denim Tote Bag.webp",
    category: "fashion",
    carbonFootprint: 1.2,
    materials: ["upcycled denim", "organic cotton thread", "recycled zippers"]
  },
  {
    id: "3",
    name: "Bamboo Cutlery Set",
    description: "Portable bamboo utensil set with carrying case, perfect for reducing single-use plastic waste.",
    price: 18.50,
    image: "/gallery/Bamboo Cutlery Set.jpg",
    category: "home",
    carbonFootprint: 0.6,
    materials: ["sustainable bamboo", "organic cotton pouch"]
  },
  {
    id: "4",
    name: "Solar-Powered Phone Charger",
    description: "Eco-friendly charger that uses solar energy to power your devices wherever you go.",
    price: 49.99,
    image: "/gallery/Solar-Powered Phone Charger.webp",
    category: "electronics",
    carbonFootprint: 2.5,
    materials: ["recycled plastic", "solar panels", "lithium battery"]
  }
];

const FeaturedProducts = () => {
  const [products] = useState<Product[]>(mockProducts);

  return (
    <section id="featured-products" className="py-16 bg-white">
      <div className="eco-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-eco-green-dark mb-4">Featured Eco Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of sustainable products that combine style, functionality, and environmental responsibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
