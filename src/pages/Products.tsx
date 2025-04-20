
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Leaf, 
  Filter, 
  X, 
  ChevronDown,
  CheckCircle
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Streamlined categories
const categories = [
  { id: "all", name: "All Categories" },
  { id: "home", name: "Home & Living" },
  { id: "fashion", name: "Fashion & Accessories" },
  { id: "kitchen", name: "Kitchen" },
  { id: "bathroom", name: "Bathroom" },
  { id: "garden", name: "Garden & Outdoor" },
  { id: "electronics", name: "Electronics" },
  { id: "travel", name: "Travel" },
  { id: "office", name: "Office" }
];

// Updated products data with more items and different images
const allProducts: Product[] = [
  {
    id: "1",
    name: "Recycled Paper Notebook",
    description: "Handcrafted notebook made from 100% post-consumer recycled paper with a biodegradable cover.",
    price: 12.99,
    image: "/gallery/Recycled Paper Notebook.webp",
    category: "office",
    carbonFootprint: 0.8,
    materials: []
  },
  {
    id: "2",
    name: "Upcycled Denim Tote Bag",
    description: "Stylish tote made from upcycled denim jeans, giving new life to pre-loved materials.",
    price: 39.99,
    image: "/gallery/Upcycled Denim Tote Bag.webp",
    category: "fashion",
    carbonFootprint: 1.2,
    materials: []
  },
  {
    id: "3",
    name: "Bamboo Cutlery Set",
    description: "Portable bamboo utensil set with carrying case, perfect for reducing single-use plastic waste.",
    price: 18.50,
    image: "/gallery/Bamboo Cutlery Set.jpg",
    category: "kitchen",
    carbonFootprint: 0.6,
    materials: []
  },
  {
    id: "4",
    name: "Solar-Powered Phone Charger",
    description: "Eco-friendly charger that uses solar energy to power your devices wherever you go.",
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

const Products = () => {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150]);
  const [maxCarbonFootprint, setMaxCarbonFootprint] = useState<number>(5);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  
  const { toast } = useToast();
  const { addToCart } = useCart();

  useEffect(() => {
    // Apply filters when component mounts or when filter states change
    applyFilters();
  }, [selectedCategory, priceRange, maxCarbonFootprint]);

  const applyFilters = () => {
    let filteredProducts = [...allProducts];
    
    // Search filter (only if search query is provided)
    if (searchQuery.trim()) {
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Category filter
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(product => 
        product.category === selectedCategory
      );
    }
    
    // Price range filter
    filteredProducts = filteredProducts.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Carbon footprint filter
    filteredProducts = filteredProducts.filter(product => 
      product.carbonFootprint <= maxCarbonFootprint
    );
    
    setProducts(filteredProducts);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange([0, 150]);
    setMaxCarbonFootprint(5);
    setProducts(allProducts);
  };

  const handleSearch = () => {
    applyFilters();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="eco-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-eco-green-dark">Sustainable Products</h1>
              <p className="text-muted-foreground">Discover our eco-friendly collection</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex gap-2">
              <Button 
                variant="outline" 
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full md:w-[250px]"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              
              <Button onClick={handleSearch} className="bg-eco-green hover:bg-eco-green-dark">
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <Button
                        variant="ghost"
                        className={`justify-start px-2 w-full h-8 ${
                          selectedCategory === category.id ? 'bg-eco-green/10 text-eco-green font-medium' : ''
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {selectedCategory === category.id && (
                          <CheckCircle className="mr-2 h-4 w-4 text-eco-green" />
                        )}
                        {category.name}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider
                  value={priceRange}
                  min={0}
                  max={150}
                  step={5}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <h3 className="font-medium">Carbon Footprint</h3>
                  <Leaf className="h-4 w-4 ml-2 text-eco-green" />
                </div>
                <Slider
                  value={[maxCarbonFootprint]}
                  min={0}
                  max={5}
                  step={0.1}
                  onValueChange={(value) => setMaxCarbonFootprint(value[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>0 kg CO₂e</span>
                  <span>{maxCarbonFootprint.toFixed(1)} kg CO₂e</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
            </div>
            
            {/* Filters - Mobile */}
            {showFilters && (
              <div className="md:hidden fixed inset-0 bg-background z-50 p-4 overflow-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                      {categories.map(category => (
                        <div key={category.id} className="flex items-center">
                          <Button
                            variant="ghost"
                            className={`justify-start px-2 w-full h-8 ${
                              selectedCategory === category.id ? 'bg-eco-green/10 text-eco-green font-medium' : ''
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            {selectedCategory === category.id && (
                              <CheckCircle className="mr-2 h-4 w-4 text-eco-green" />
                            )}
                            {category.name}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <Slider
                      value={priceRange}
                      min={0}
                      max={150}
                      step={5}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <h3 className="font-medium">Carbon Footprint</h3>
                      <Leaf className="h-4 w-4 ml-2 text-eco-green" />
                    </div>
                    <Slider
                      value={[maxCarbonFootprint]}
                      min={0}
                      max={5}
                      step={0.1}
                      onValueChange={(value) => setMaxCarbonFootprint(value[0])}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm">
                      <span>0 kg CO₂e</span>
                      <span>{maxCarbonFootprint.toFixed(1)} kg CO₂e</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button 
                      variant="outline" 
                      className="flex-1" 
                      onClick={resetFilters}
                    >
                      Reset
                    </Button>
                    <Button 
                      className="flex-1 bg-eco-green hover:bg-eco-green-dark" 
                      onClick={() => {
                        applyFilters();
                        setShowFilters(false);
                      }}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== "all" && (
                    <Badge 
                      className="bg-eco-green-light hover:bg-eco-green"
                      onClick={() => {
                        setSelectedCategory("all");
                      }}
                    >
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <X className="ml-1 h-3 w-3" />
                    </Badge>
                  )}
                  {searchQuery.trim() && (
                    <Badge 
                      className="bg-eco-green-light hover:bg-eco-green"
                      onClick={() => {
                        setSearchQuery("");
                        applyFilters();
                      }}
                    >
                      Search: {searchQuery}
                      <X className="ml-1 h-3 w-3" />
                    </Badge>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 150) && (
                    <Badge 
                      className="bg-eco-green-light hover:bg-eco-green"
                      onClick={() => {
                        setPriceRange([0, 150]);
                      }}
                    >
                      Price: ${priceRange[0]} - ${priceRange[1]}
                      <X className="ml-1 h-3 w-3" />
                    </Badge>
                  )}
                  {maxCarbonFootprint < 5 && (
                    <Badge 
                      className="bg-eco-green-light hover:bg-eco-green"
                      onClick={() => {
                        setMaxCarbonFootprint(5);
                      }}
                    >
                      Carbon Footprint: {maxCarbonFootprint.toFixed(1)} kg CO₂e
                      <X className="ml-1 h-3 w-3" />
                    </Badge>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {products.length} products
                </span>
              </div>
              
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms.</p>
                  <Button onClick={resetFilters}>
                    Reset All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
