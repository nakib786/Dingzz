import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DingzzPngLogo from '../ui/DingzzPngLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPreview, setShowPreview] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  
  // Animation effect for the tooltip
  useEffect(() => {
    if (showPreview) {
      const interval = setInterval(() => {
        setAnimationStep((prev) => (prev + 1) % 4);
      }, 1500);
      return () => clearInterval(interval);
    } else {
      setAnimationStep(0);
    }
  }, [showPreview]);
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <DingzzPngLogo height={80} width={240} forceDarkMode={true} />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for innovative digital and local marketing solutions that drive real results.
            </p>
            <div className="flex space-x-5">
              {[
                { href: "https://www.facebook.com/dingzz", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                { href: "https://www.instagram.com/dingzz_marketing", icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`Visit our ${social.href.split('//')[1].split('.')[0]} page`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.href.split('//')[1].split('.')[0]}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3 md:col-start-10">
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <div className="bg-gray-800/50 rounded-lg p-4 shadow-lg border border-gray-700/50">
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 className="font-medium text-white">Location</h4>
                </div>
                <p className="text-gray-300 pl-7">Serving clients throughout Canada and the United States</p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 className="font-medium text-white">Email Us</h4>
                </div>
                <a href="mailto:info@dingzz.ca" className="text-gray-300 hover:text-white transition-colors duration-200 pl-7 block">
                  info@dingzz.ca
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700/30 text-center text-gray-400">
          <p>&copy; {currentYear} Dingzz Marketing. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-500 relative">
            Website developed by{" "}
            <span 
              className="relative inline-block"
              onMouseEnter={() => setShowPreview(true)}
              onMouseLeave={() => setShowPreview(false)}
            >
              <a 
                href="https://www.aurorabusiness.ca/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Aurora N&N Business Solution Inc.
              </a>
              
              {/* Website Preview Tooltip */}
              {showPreview && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 bg-gray-900 rounded-md shadow-xl z-50 overflow-hidden transition-all duration-300 ease-in-out border border-gray-700 animate-fade-in">
                  <div className="p-1 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-full h-40 bg-gray-900 overflow-hidden">
                      <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-gray-800">
                        {/* Aurora Website Preview */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-black flex items-center px-3">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                          <div className="text-xs text-gray-400 ml-2">aurorabusiness.ca</div>
                        </div>
                        
                        <div className="pt-10 px-3">
                          <div 
                            className={`text-sm font-bold relative ${
                              animationStep === 0 ? 'text-blue-400 transform transition-all duration-700 translate-y-0 scale-100' : 
                              animationStep === 1 ? 'text-purple-400 transform transition-all duration-700 translate-y-0 scale-110' :
                              animationStep === 2 ? 'text-pink-400 transform transition-all duration-700 translate-y-0 scale-100' :
                              'text-indigo-400 transform transition-all duration-700 translate-y-0 scale-105'
                            }`}
                            style={{
                              textShadow: animationStep === 1 ? '0 0 10px rgba(167, 139, 250, 0.5)' : 
                                        animationStep === 2 ? '0 0 10px rgba(244, 114, 182, 0.5)' :
                                        animationStep === 3 ? '0 0 10px rgba(129, 140, 248, 0.5)' :
                                        '0 0 10px rgba(96, 165, 250, 0.5)'
                            }}
                          >
                            <span className={animationStep === 1 ? 'animate-pulse' : ''}>Aurora</span>
                            <span className={`ml-1 ${animationStep === 2 ? 'animate-pulse' : ''}`}>N&N</span>
                            <span className={`ml-1 ${animationStep === 3 ? 'animate-pulse' : ''}`}>Business</span>
                            <span className={`ml-1 ${animationStep === 0 ? 'animate-pulse' : ''}`}>Solution Inc.</span>
                          </div>
                          <div className="text-xs text-gray-400 mt-1">Empowering Small Businesses with Expert Solutions</div>
                          <div className="mt-2 flex justify-between">
                            <div className="w-1/2 h-4 bg-gray-800 rounded"></div>
                            <div className="w-1/3 h-4 bg-gray-800 rounded"></div>
                          </div>
                          <div className="mt-3 flex space-x-2">
                            <div className={`w-24 h-8 ${animationStep === 1 ? 'bg-blue-600' : 'bg-blue-700'} rounded flex items-center justify-center shadow-md transition-colors duration-500 ease-in-out`}>
                              <div className="text-[9px] text-white font-medium">Web Design</div>
                            </div>
                            <div className={`w-24 h-8 ${animationStep === 2 ? 'bg-purple-600' : 'bg-purple-700'} rounded flex items-center justify-center shadow-md transition-colors duration-500 ease-in-out`}>
                              <div className="text-[9px] text-white font-medium">Accounting</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-xs text-center text-gray-400">
                    Click to visit Aurora Business
                  </div>
                </div>
              )}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Add required keyframe animations
const styles = document.createElement('style');
styles.innerHTML = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;
document.head.appendChild(styles);

export default Footer; 