import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DingzzMarketingLogo from '../ui/DingzzMarketingLogo';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, MenuItem, HoveredLink, ProductItem } from '../ui/NavbarMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Handle body scroll locking when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-soft py-2 md:py-3' 
          : 'bg-white/0 dark:bg-dark/0 py-3 md:py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <DingzzMarketingLogo height={60} width={180} className="md:h-[80px] md:w-[240px]" />
          </Link>
          
          {/* Desktop navigation with Aceternity Navbar Menu */}
          <div className="hidden md:block">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Home">
                <div className="w-96 p-2">
                  <ProductItem
                    title="Welcome to Dingzz Marketing"
                    description="Discover our amazing services"
                    to="/"
                    src="/images/home-thumbnail.jpg"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="w-96 p-2 grid grid-cols-2 gap-4">
                  <HoveredLink to="/services">
                    <div className="text-sm font-medium">All Services</div>
                    <div className="text-xs text-neutral-500">Browse our complete catalog</div>
                  </HoveredLink>
                  <HoveredLink to="/services/digital-marketing">
                    <div className="text-sm font-medium">Digital Marketing</div>
                    <div className="text-xs text-neutral-500">SEO, PPC & Social Media</div>
                  </HoveredLink>
                  <HoveredLink to="/services/content-marketing">
                    <div className="text-sm font-medium">Content Marketing</div>
                    <div className="text-xs text-neutral-500">Blog, Video & Social Content</div>
                  </HoveredLink>
                  <HoveredLink to="/services/local-marketing">
                    <div className="text-sm font-medium">Local Marketing</div>
                    <div className="text-xs text-neutral-500">Local SEO & Visibility</div>
                  </HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="About">
                <div className="w-96 p-2">
                  <div className="grid grid-cols-1 gap-4">
                    <HoveredLink to="/about">
                      <div className="text-sm font-medium">About Us</div>
                      <div className="text-xs text-neutral-500">Our story and mission</div>
                    </HoveredLink>
                  </div>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Contact">
                <div className="w-96 p-2">
                  <HoveredLink to="/contact">
                    <div className="text-sm font-medium">Contact Us</div>
                    <div className="text-xs text-neutral-500">Get in touch with us</div>
                  </HoveredLink>
                </div>
              </MenuItem>
              <div className="ml-6">
                <a 
                  href="tel:+15551234567" 
                  className="px-5 py-2 bg-primary text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors shadow-sm"
                >
                  Call Us
                </a>
              </div>
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </Menu>
          </div>
          
          <div className="md:hidden flex items-center">
            {/* Theme toggle */}
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button 
              className="ml-2 p-2 rounded-lg text-dark dark:text-light hover:bg-gray-100/80 dark:hover:bg-gray-800/80 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu - using Framer Motion for animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />
              
              {/* Slide-in menu */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-gray-800 z-50 md:hidden flex flex-col shadow-xl"
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-medium text-lg">Menu</span>
                  <button 
                    className="p-2 rounded-lg text-dark dark:text-light hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="flex flex-col space-y-2">
                    {[
                      { path: '/', label: 'Home' },
                      { path: '/services', label: 'Services' },
                      { path: '/about', label: 'About' },
                      { path: '/contact', label: 'Contact' }
                    ].map(({ path, label }) => (
                      <Link 
                        key={path}
                        to={path} 
                        className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                          location.pathname === path
                            ? 'text-primary bg-indigo-50 dark:bg-indigo-900/20'
                            : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Service links for mobile */}
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-3 px-4">Services</h3>
                    <div className="flex flex-col space-y-1">
                      {[
                        { path: '/services/digital-marketing', label: 'Digital Marketing' },
                        { path: '/services/local-marketing', label: 'Local Marketing' },
                        { path: '/services/content-marketing', label: 'Content Marketing' }
                      ].map(({ path, label }) => (
                        <Link 
                          key={path}
                          to={path} 
                          className="px-4 py-2 text-sm rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>
                
                <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                  <a 
                    href="tel:+15551234567" 
                    className="flex items-center justify-center w-full py-3 bg-primary text-white rounded-lg font-medium shadow-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 