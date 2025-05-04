import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '../../components/ui/background-paths';
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
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Web Development",
                description: "Custom-built websites and digital experiences that reflect your brand and drive results."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                  {service.description}
                </p>
                <Link to="/services" className="text-primary font-medium hover:text-indigo-700 dark:hover:text-indigo-400 inline-flex items-center transition-colors duration-200 text-sm md:text-base">
                  Learn More
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
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
                description: "Our team brings years of experience across multiple industries and marketing disciplines."
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
        <div className="absolute inset-0 opacity-20 dark:opacity-30" style={{ backgroundImage: "url('https://placehold.co/1920x1080/e4e4e7/4f46e5?text=&font=montserrat')", backgroundSize: 'cover' }}></div>
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