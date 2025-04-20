
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Leaf,
  LogOut,
  Users,
  Book 
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();
  const { cartCount } = useCart();

  useEffect(() => {
    // Check if user is logged in
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);

      // Get user name from localStorage or metadata
      if (data.session?.user) {
        const name = localStorage.getItem('userName') || 
                    data.session.user.user_metadata?.name || 
                    'User';
        setUserName(name);
      }
    };

    checkUser();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
        
        if (session?.user) {
          const name = localStorage.getItem('userName') || 
                      session.user.user_metadata?.name || 
                      'User';
          setUserName(name);
        } else {
          setUserName("");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="eco-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-eco-green animate-leaf-sway" />
            <span className="text-xl font-poppins font-semibold text-eco-green-dark">Dukaan</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-eco-green-dark hover:text-eco-green transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-eco-green-dark hover:text-eco-green transition-colors"
            >
              Products
            </Link>
            <Link 
              to="/blog" 
              className="text-eco-green-dark hover:text-eco-green transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/leaderboard" 
              className="text-eco-green-dark hover:text-eco-green transition-colors"
            >
              Leaderboard
            </Link>
            <Link 
              to="/impact" 
              className="text-eco-green-dark hover:text-eco-green transition-colors"
            >
              Our Impact
            </Link>
          </nav>

          {/* Cart and User Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-eco-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Hi, {userName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
                <Link to="/login">Sign In</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-eco-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-eco-green-dark hover:text-eco-green transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-eco-green-dark hover:text-eco-green transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/blog" 
                className="text-eco-green-dark hover:text-eco-green transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/leaderboard" 
                className="text-eco-green-dark hover:text-eco-green transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link 
                to="/impact" 
                className="text-eco-green-dark hover:text-eco-green transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Impact
              </Link>
              {user ? (
                <>
                  <div className="px-4 py-2 text-eco-green font-medium">
                    Hi, {userName}
                  </div>
                  <Link 
                    to="/profile" 
                    className="text-eco-green-dark hover:text-eco-green transition-colors px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <button 
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="text-eco-green-dark hover:text-eco-green transition-colors text-left px-4 py-2 flex items-center"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  className="text-eco-green-dark hover:text-eco-green transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
      
      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
