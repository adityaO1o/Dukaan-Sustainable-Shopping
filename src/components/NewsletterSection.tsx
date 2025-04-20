
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for joining our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-eco-green-dark text-white">
      <div className="eco-container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-eco-green/20 px-4 py-1.5 mb-6">
            <Mail className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Stay Connected</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-eco-cream mb-8">
            Get updates on our latest sustainable products and eco-friendly tips
            delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-eco-green-dark w-full sm:w-72"
              required
            />
            <Button type="submit" className="bg-eco-green hover:bg-eco-green-dark border-2 border-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
