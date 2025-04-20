
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="eco-container">
          <h1 className="text-3xl font-bold text-eco-green-dark mb-8">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do you ensure products are sustainable?</AccordionTrigger>
              <AccordionContent>
                We carefully vet all our suppliers and products to ensure they meet our strict sustainability criteria. 
                This includes evaluating materials, production methods, packaging, and overall environmental impact.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is your carbon footprint tracking system?</AccordionTrigger>
              <AccordionContent>
                Each product on our platform has a calculated carbon footprint based on its materials, 
                production, and shipping. You can view this information on product pages and track your 
                personal impact through your profile.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                Currently, we only ship within India to minimize our carbon footprint. 
                We're working on expanding our reach while maintaining our commitment to sustainability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                Once your order is shipped, you'll receive a tracking number via email. 
                You can also track your order through your account dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards, UPI, net banking, and digital wallets. 
                All payments are processed securely through our payment partners.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
