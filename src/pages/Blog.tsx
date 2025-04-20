
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

const Blog = () => {
  const blogs = [
    {
      title: "The Future of Sustainable Fashion",
      date: "April 15, 2024",
      author: "Sarah Green",
      description: "Exploring how eco-friendly materials and ethical manufacturing are reshaping the fashion industry.",
      readTime: "5 min read",
      image: "https://i.pinimg.com/736x/34/9b/ce/349bce6353b97e3ebe64a612cbc6f218.jpg"
    },
    {
      title: "Zero-Waste Living: A Beginner's Guide",
      date: "April 12, 2024",
      author: "Michael Rivers",
      description: "Simple steps to reduce your household waste and embrace a more sustainable lifestyle.",
      readTime: "7 min read",
      image: "https://i.pinimg.com/736x/2e/24/5a/2e245a8ba50e4d6f2722ede5844cb232.jpg"
    },
    {
      title: "Understanding Your Carbon Footprint",
      date: "April 8, 2024",
      author: "Dr. Emily Earth",
      description: "A comprehensive guide to calculating and reducing your personal carbon footprint.",
      readTime: "6 min read",
      image: "https://i.pinimg.com/736x/2d/bf/b0/2dbfb0c2082025e9a2e5075e73400837.jpg"
    },
    {
      title: "Sustainable Beauty: Natural Alternatives",
      date: "April 5, 2024",
      author: "Lisa Nature",
      description: "Discover eco-friendly beauty products that are good for you and the planet.",
      readTime: "4 min read",
      image: "https://i.pinimg.com/736x/cb/7c/10/cb7c10d1749834d7ea20bedb90bb6af7.jpg"
    },
    {
      title: "The Rise of Eco-Conscious Shopping",
      date: "April 1, 2024",
      author: "Tom Sustainable",
      description: "How consumer awareness is driving the growth of sustainable marketplaces.",
      readTime: "5 min read",
      image: "https://i.pinimg.com/736x/57/95/d6/5795d6f6a28ec1fd8b6ac9c859aef262.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container">
          <div className="flex items-center space-x-2 mb-8">
            <Book className="h-6 w-6 text-eco-green" />
            <h1 className="text-3xl font-bold text-eco-green-dark">Eco-Living Blog</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                    <span className="text-sm text-eco-green">{blog.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{blog.title}</CardTitle>
                  <CardDescription>By {blog.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{blog.description}</p>
                  <Button variant="outline" className="w-full">Read More</Button>
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

export default Blog;
