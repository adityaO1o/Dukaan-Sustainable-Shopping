
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Users, Leaf } from "lucide-react";

const Leaderboard = () => {
  const leaderboardData = [
    {
      name: "Sarah Johnson",
      rank: 1,
      score: 95,
      carbonSaved: 156.2,
      purchases: 24
    },
    {
      name: "Michael Chen",
      rank: 2,
      score: 92,
      carbonSaved: 142.8,
      purchases: 20
    },
    {
      name: "Emma Davis",
      rank: 3,
      score: 88,
      carbonSaved: 128.5,
      purchases: 18
    },
    {
      name: "Alex Thompson",
      rank: 4,
      score: 85,
      carbonSaved: 115.3,
      purchases: 15
    },
    {
      name: "Maria Garcia",
      rank: 5,
      score: 82,
      carbonSaved: 98.7,
      purchases: 12
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="h-8 w-8 text-eco-green" />
              <h1 className="text-3xl font-bold text-eco-green-dark">Green Leaders</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating our most eco-conscious shoppers who make a significant impact 
              through sustainable purchasing decisions.
            </p>
          </div>

          <div className="space-y-6">
            {leaderboardData.map((user, index) => (
              <Card key={index} className={`${index < 3 ? 'border-eco-green/40' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                        ${index === 0 ? 'bg-yellow-400' : 
                          index === 1 ? 'bg-gray-300' :
                          index === 2 ? 'bg-amber-600' : 'bg-eco-green/10'} 
                        text-white font-bold`}>
                        {user.rank}
                      </div>
                      <CardTitle>{user.name}</CardTitle>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{user.purchases} purchases</span>
                      </div>
                      <div className="flex items-center text-eco-green">
                        <Leaf className="h-4 w-4 mr-1" />
                        <span>{user.carbonSaved} kg CO₂ saved</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Eco Score</span>
                      <span className="font-medium">{user.score}%</span>
                    </div>
                    <Progress 
                      value={user.score} 
                      className="h-2"
                      indicatorClassName={index < 3 ? "bg-eco-green" : ""}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
