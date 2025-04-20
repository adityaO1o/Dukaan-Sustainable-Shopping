import { Link } from "react-router-dom";
import { Leaf, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-eco-green-dark text-white pt-12 pb-6">
      <div className="eco-container">
        {/* Optional: Add Separator before the footer content */}
        <Separator className="bg-white mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-poppins font-semibold">Dukaan</span>
            </div>
            <p className="text-sm text-eco-cream opacity-90">
              Shop consciously. Make a difference with every purchase on Dukaan, your sustainable marketplace.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Instagram" className="hover:text-eco-beige transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-eco-beige transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-eco-beige transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm hover:text-eco-beige transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories/home-living" className="text-sm hover:text-eco-beige transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link to="/categories/fashion" className="text-sm hover:text-eco-beige transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/categories/beauty" className="text-sm hover:text-eco-beige transition-colors">
                  Beauty & Personal Care
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/our-story" className="text-sm hover:text-eco-beige transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-sm hover:text-eco-beige transition-colors">
                  Environmental Impact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-eco-beige transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-eco-beige transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm hover:text-eco-beige transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm hover:text-eco-beige transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm hover:text-eco-beige transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:help@dukaan.com" className="hover:text-eco-beige transition-colors">
                    help@dukaan.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-eco-cream opacity-90">
              &copy; {new Date().getFullYear()} Dukaan. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-xs hover:text-eco-beige transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs hover:text-eco-beige transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
