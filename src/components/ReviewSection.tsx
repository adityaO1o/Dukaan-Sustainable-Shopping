
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing eco-friendly products! The quality is outstanding and I love knowing my purchase helps the environment.",
    product: "Bamboo Utensil Set"
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment: "The sustainable packaging and product quality exceeded my expectations. Will definitely buy again!",
    product: "Reusable Coffee Cup"
  },
  {
    name: "Emily Roberts",
    rating: 5,
    comment: "These products have helped me reduce my carbon footprint significantly. Highly recommended!",
    product: "Zero Waste Starter Kit"
  }
];

const ReviewSection = () => {
  return (
    <section className="py-16 bg-eco-cream">
      <div className="eco-container">
        <h2 className="text-3xl font-bold text-center text-eco-green-dark mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-eco-green fill-current"
                    />
                  ))}
                </div>
                <p className="text-eco-green-dark/80 mb-4">{review.comment}</p>
                <div className="mt-4">
                  <p className="font-semibold text-eco-green-dark">{review.name}</p>
                  <p className="text-sm text-eco-green-dark/60">{review.product}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
