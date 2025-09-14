import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: { name: string; id: string; path?: string }) => {
    if (item.path) {
      navigate(item.path);
    } else if (location.pathname === '/') {
      const element = document.getElementById(item.id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services', path: '/services' },
    { name: 'Portfolio', id: 'portfolio', path: '/portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto mobile-container">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div 
            className={`text-xl sm:text-2xl font-bold cursor-pointer transition-colors duration-300 touch-target flex items-center justify-center ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => navigate('/')}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            SM
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`transition-colors duration-300 font-medium text-sm lg:text-base ${
                  isScrolled 
                    ? 'text-primary/80 hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button 
              className="btn-hero text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3 group relative overflow-hidden"
              onClick={() => handleNavigation({ name: 'Contact', id: 'contact' })}
            >
              <span className="relative z-10 flex items-center">
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 touch-target flex items-center justify-center ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-charcoal/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-white/10 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-left py-3 px-2 rounded-lg hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="btn-hero mt-4 w-full group relative overflow-hidden"
                onClick={() => handleNavigation({ name: 'Contact', id: 'contact' })}
              >
                <span className="relative z-10 flex items-center">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;