import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '../../components/ui/background-paths';
import { BackgroundImage } from '../../components/ui/BackgroundImage';
import { HeroGalleryScroll, galleryItems } from '../../components/ui/HeroGalleryScroll';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Background paths are fixed to the viewport */}
      <BackgroundPaths />
      
      {/* Hero Section */}
      <HeroGalleryScroll items={galleryItems} />
      
      {/* Services Overview */}
      <section className={`${isMobile ? '-mt-0' : 'pt-0'} pb-12 md:py-24 relative z-10 bg-white dark:bg-gray-900`}>
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-primary text-xs md:text-sm font-medium mb-2 md:mb-4">Our Expertise</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4 text-gray-900 dark:text-white">Services Tailored for Your Growth</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 text-sm md:text-base">
              We combine strategy, technology, and creativity to deliver powerful solutions that drive business success.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-2">
            {[
              {
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                title: "Digital Marketing",
                description: "Comprehensive online strategies to boost your brand visibility, engagement, and conversion."
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Local Marketing",
                description: "Targeted local strategies to connect with customers in your area and build community presence."
              },
              {
                icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Analytics & Reporting",
                description: "Data-driven insights and performance tracking to optimize your marketing campaigns for better ROI."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full bg-indigo-100/60 dark:bg-indigo-900/20 blur-2xl group-hover:bg-indigo-200/70 dark:group-hover:bg-indigo-800/30 transition-all duration-500"></div>
                
                {/* Service icon with animated background */}
                <div className="relative">
                  <motion.div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-5 md:mb-6 overflow-hidden z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-indigo-600/20 dark:from-indigo-400/10 dark:to-indigo-500/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%"] 
                      }}
                      transition={{ 
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 3,
                        ease: "linear" 
                      }}
                    />
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Service content */}
                <motion.h3 
                  className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-indigo-400 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 mb-5 md:mb-6 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {service.description}
                </motion.p>
                
                {/* Animated link */}
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to="/services" 
                    className="text-primary font-medium hover:text-indigo-700 dark:hover:text-indigo-400 inline-flex items-center transition-colors duration-200 text-sm md:text-base"
                  >
                    Learn More
                    <motion.svg 
                      className="w-4 h-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 3, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 2,
                        repeatDelay: 1,
                        ease: "easeInOut" 
                      }}
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </Link>
                </motion.div>
                
                {/* Border animation effect */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-600 dark:to-indigo-400"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-secondary text-xs md:text-sm font-medium mb-2 md:mb-4">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-4 text-gray-900 dark:text-white">The Dingzz Marketing Difference</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 text-sm md:text-base">
              What sets us apart is our commitment to excellence, innovation, and measurable results.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-2">
            {[
              {
                title: "Data-Driven Approach",
                description: "We use analytics and insights to make strategic decisions and optimize for better results."
              },
              {
                title: "Custom Strategies",
                description: "Tailored marketing plans designed specifically for your business goals and target audience."
              },
              {
                title: "Industry Expertise",
                description: "We bring years of experience across multiple industries and marketing disciplines."
              },
              {
                title: "Transparent Reporting",
                description: "Regular updates and clear metrics showing the impact of our marketing efforts."
              },
              {
                title: "Cutting-Edge Tools",
                description: "We leverage the latest technologies and platforms to maximize your marketing effectiveness."
              },
              {
                title: "Dedicated Support",
                description: "Responsive communication and ongoing support throughout our partnership."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-700 dark:from-indigo-900 dark:to-indigo-800 opacity-95"></div>
        
        {/* Replace placeholder with our new background image */}
        <BackgroundImage 
          imagePath="/images/backgrounds/abstract-tech-2.svg"
          glowColor="rgba(79, 70, 229, 0.6)"
          glowOpacity={0.5}
          glowSize="md"
          overlayOpacity={0.3}
        />
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">Ready to Grow Your Business?</h2>
            <p className="text-indigo-100 dark:text-indigo-50 max-w-2xl mx-auto mb-6 md:mb-10 text-sm md:text-lg">
              Get in touch with us today to discuss how we can help you achieve your marketing goals.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center btn bg-white text-primary hover:bg-indigo-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-medium shadow-sm px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
            >
              Let's Talk
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 