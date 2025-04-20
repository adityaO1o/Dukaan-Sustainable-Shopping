
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import CarbonImpactMeter from "@/components/CarbonImpactMeter";
import { Leaf, Globe, ShoppingCart, User as UserIcon, BarChart, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";

interface OrderItem {
  id: string;
  date: string;
  products: string[];
  total: number;
  carbonFootprint: number;
  status: "delivered" | "processing" | "shipped";
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserProfile = async () => {
      setLoading(true);
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !sessionData.session) {
        navigate("/login");
        return;
      }
      
      const user = sessionData.session.user;
      const userName = localStorage.getItem('userName') || 
                    user?.user_metadata?.name || 
                    'User';
                    
      // For demo purposes, we'll use mock data with the user's real name
      setUserData({
        name: userName,
        email: user?.email || "user@example.com",
        avatar: "",
        joined: "January 2024",
        totalOrders: 8,
        totalFootprint: 14.2,
        averageProductFootprint: 1.8,
        savingsPercent: 65,
        totalSavedFootprint: 26.4,
        rank: 128,
        totalUsers: 5430,
        orders: [
          {
            id: "ORD-5678",
            date: "March 15, 2024",
            products: ["Bamboo Cutlery Set", "Recycled Glass Water Bottle"],
            total: 43.49,
            carbonFootprint: 2.1,
            status: "delivered"
          },
          {
            id: "ORD-4567",
            date: "February 22, 2024",
            products: ["Upcycled Denim Tote Bag", "Solar-Powered Phone Charger"],
            total: 89.98,
            carbonFootprint: 3.7,
            status: "delivered"
          },
          {
            id: "ORD-3456",
            date: "January 10, 2024",
            products: ["Recycled Paper Notebook", "Biodegradable Phone Case"],
            total: 47.98,
            carbonFootprint: 1.8,
            status: "delivered"
          }
        ] as OrderItem[]
      });
      
      setLoading(false);
    };

    getUserProfile();
  }, [navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-eco-green">Loading profile...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!userData) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="eco-container">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <Avatar className="h-20 w-20">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback className="bg-eco-green text-white text-xl">
                {userData.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-eco-green-dark">
                {userData.name}
              </h1>
              <p className="text-muted-foreground">
                {userData.email} · Member since {userData.joined}
              </p>
              <div className="flex items-center text-sm">
                <div className="flex items-center text-eco-green font-medium">
                  <Leaf className="h-4 w-4 mr-1" />
                  Your rank: {userData.rank} of {userData.totalUsers}
                </div>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <div className="text-muted-foreground">
                  {userData.totalOrders} orders
                </div>
              </div>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="overview" className="data-[state=active]:bg-eco-green data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="footprint" className="data-[state=active]:bg-eco-green data-[state=active]:text-white">
                Footprint Tracker
              </TabsTrigger>
              <TabsTrigger value="orders" className="data-[state=active]:bg-eco-green data-[state=active]:text-white">
                Order History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-eco-green" />
                      Carbon Impact
                    </CardTitle>
                    <CardDescription>Your environmental savings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline">
                        <span className="text-3xl font-bold text-eco-green-dark">
                          {userData.totalSavedFootprint} kg
                        </span>
                        <span className="text-green-600 text-sm font-medium">
                          CO₂e Saved
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your purchases have saved {userData.savingsPercent}% compared to conventional products.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <BarChart className="h-5 w-5 mr-2 text-eco-green" />
                      Purchase Stats
                    </CardTitle>
                    <CardDescription>Your shopping impact</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Orders</p>
                          <p className="text-2xl font-semibold">{userData.totalOrders}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Footprint</p>
                          <p className="text-2xl font-semibold">{userData.totalFootprint} kg</p>
                        </div>
                      </div>
                      <CarbonImpactMeter 
                        carbonFootprint={userData.averageProductFootprint}
                        comparison={{
                          label: "shoppers",
                          value: 5.2
                        }}
                        size="sm"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Leaf className="h-5 w-5 mr-2 text-eco-green" />
                      Green Score
                    </CardTitle>
                    <CardDescription>How you compare to others</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline">
                        <span className="text-3xl font-bold text-eco-green-dark">
                          {Math.round((userData.totalUsers - userData.rank) / userData.totalUsers * 100)}%
                        </span>
                        <span className="text-sm font-medium">
                          Top {Math.round((userData.rank / userData.totalUsers) * 100)}%
                        </span>
                      </div>
                      <Progress value={(userData.totalUsers - userData.rank) / userData.totalUsers * 100} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You're in the top {Math.round((userData.rank / userData.totalUsers) * 100)}% of eco-conscious shoppers!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <ShoppingCart className="h-5 w-5 mr-2 text-eco-green" />
                        Recent Orders
                      </CardTitle>
                      <Button variant="ghost" size="sm" onClick={() => setActiveTab("orders")}>
                        View All
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.orders.slice(0, 2).map((order: OrderItem) => (
                        <div key={order.id} className="flex justify-between items-center p-4 border rounded-md">
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{order.id}</p>
                              <Badge 
                                variant={order.status === "delivered" ? "green" : "blue"}
                              >
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                            <p className="text-sm mt-1 line-clamp-1">
                              {order.products.join(", ")}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${order.total.toFixed(2)}</p>
                            <div className="flex items-center justify-end text-sm text-eco-green">
                              <Leaf className="h-3 w-3 mr-1" />
                              {order.carbonFootprint} kg CO₂e
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="footprint">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-eco-green" />
                    Global Footprint Tracker
                  </CardTitle>
                  <CardDescription>
                    Track your environmental impact from all your Dukaan purchases
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-lg bg-eco-cream/30 text-center">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Carbon Footprint</h3>
                      <p className="text-3xl font-bold text-eco-green-dark">{userData.totalFootprint} kg CO₂e</p>
                    </div>
                    
                    <div className="p-6 border rounded-lg bg-eco-cream/30 text-center">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Carbon Savings</h3>
                      <p className="text-3xl font-bold text-eco-green-dark">{userData.totalSavedFootprint} kg CO₂e</p>
                    </div>
                    
                    <div className="p-6 border rounded-lg bg-eco-cream/30 text-center">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Savings Equivalent</h3>
                      <p className="text-3xl font-bold text-eco-green-dark">2.3 trees</p>
                    </div>
                  </div>
                  
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Carbon Footprint Breakdown</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Fashion Items</span>
                          <span className="font-medium">5.2 kg CO₂e</span>
                        </div>
                        <Progress value={36} className="h-2" indicatorClassName="bg-eco-green" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Home & Living</span>
                          <span className="font-medium">4.8 kg CO₂e</span>
                        </div>
                        <Progress value={33} className="h-2" indicatorClassName="bg-eco-green" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Electronics</span>
                          <span className="font-medium">2.7 kg CO₂e</span>
                        </div>
                        <Progress value={19} className="h-2" indicatorClassName="bg-eco-green" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Stationery</span>
                          <span className="font-medium">1.5 kg CO₂e</span>
                        </div>
                        <Progress value={12} className="h-2" indicatorClassName="bg-eco-green" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-lg font-medium mb-4">Your Impact Comparison</h3>
                    <p className="text-muted-foreground mb-6">
                      See how your carbon footprint compares to the average Dukaan user and conventional shopping.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Your Average (per product)</span>
                          <span className="font-medium text-eco-green">{userData.averageProductFootprint} kg CO₂e</span>
                        </div>
                        <Progress value={35} className="h-3" indicatorClassName="bg-eco-green" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Dukaan Average</span>
                          <span className="font-medium">2.3 kg CO₂e</span>
                        </div>
                        <Progress value={46} className="h-3" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Conventional Shopping</span>
                          <span className="font-medium text-destructive">5.2 kg CO₂e</span>
                        </div>
                        <Progress value={100} className="h-3" indicatorClassName="bg-destructive" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2 text-eco-green" />
                    Order History
                  </CardTitle>
                  <CardDescription>
                    View all your past purchases and their environmental impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {userData.orders.map((order: OrderItem) => (
                      <div key={order.id} className="p-5 border rounded-lg">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{order.id}</h3>
                              <Badge 
                                variant={order.status === "delivered" ? "green" : "blue"}
                              >
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${order.total.toFixed(2)}</p>
                            <div className="flex items-center justify-end text-sm text-eco-green">
                              <Leaf className="h-3 w-3 mr-1" />
                              {order.carbonFootprint} kg CO₂e
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <h4 className="text-sm font-medium mb-2">Products</h4>
                          <ul className="space-y-2">
                            {order.products.map((product, index) => (
                              <li key={index} className="text-sm">
                                {product}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex justify-end mt-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
