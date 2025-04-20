
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shirt } from "lucide-react";
import ProductCard, { Product } from "@/components/ProductCard";

const products: Product[] = [
  {
    id: "f1",
    name: "Organic Cotton T-Shirt",
    description: "Classic fit t-shirt made from 100% organic cotton.",
    price: 13.99,
    image: "https://i.pinimg.com/736x/01/73/5d/01735dadf367c9c2625cc3e4a1c0e136.jpg",
    category: "fashion",
    carbonFootprint: 4.2,
    materials: ["organic cotton"]
  },
  {
    id: "f2",
    name: "Hemp Denim Jeans",
    description: "Sustainable hemp blend denim jeans with natural dyes.",
    price: 24.99,
    image: "https://i.pinimg.com/736x/a0/32/ad/a032ad8d081a95cf0851a1c78ff53143.jpg",
    category: "fashion",
    carbonFootprint: 8.5,
    materials: ["hemp", "organic cotton", "natural dyes"]
  },
  {
    id: "f3",
    name: "Recycled Polyester Jacket",
    description: "Lightweight jacket made from recycled plastic bottles.",
    price: 39.99,
    image: "https://i.pinimg.com/736x/90/b8/d5/90b8d5a47358a834dfd5cfba7c8c8bfe.jpg",
    category: "fashion",
    carbonFootprint: 6.8,
    materials: ["recycled polyester"]
  }
];

const Fashion = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container">
          <div className="flex items-center gap-3 mb-8">
            <Shirt className="h-8 w-8 text-eco-green" />
            <h1 className="text-3xl font-bold text-eco-green-dark">Fashion</h1>
          </div>

          <p className="text-muted-foreground max-w-3xl mb-8">
            Discover our collection of sustainable fashion pieces that combine style with 
            environmental responsibility. Each item is crafted with eco-friendly materials 
            and ethical production practices.
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

export default Fashion;
