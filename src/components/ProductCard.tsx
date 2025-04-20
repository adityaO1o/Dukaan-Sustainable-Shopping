
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  carbonFootprint: number;
  materials: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <Link to={`/products/${product.id}`} className="overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="green">
              <Leaf className="mr-1 h-3 w-3" />
              Eco-friendly
            </Badge>
          </div>
        </div>
      </Link>
      <CardContent className="flex-grow p-4">
        <div className="space-y-1">
          <Link 
            to={`/products/${product.id}`}
            className="line-clamp-1 font-medium hover:underline text-eco-green-dark"
          >
            {product.name}
          </Link>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center mt-3 text-xs space-x-2">
          <div className="flex items-center text-eco-green">
            <Leaf className="mr-1 h-3 w-3" />
            <span>{product.carbonFootprint} kg CO₂e</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="font-semibold">${product.price.toFixed(2)}</span>
        <Button 
          size="sm" 
          className="bg-eco-green hover:bg-eco-green-dark"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-1" /> Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
