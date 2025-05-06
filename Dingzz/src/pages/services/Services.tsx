import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { BackgroundPaths } from '../../components/ui/background-paths';
import { BackgroundImage } from '../../components/ui/BackgroundImage';
import { useEffect, useState } from 'react';

// Service data
const serviceData = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Our digital marketing services are designed to increase your online visibility, drive traffic to your website, and generate quality leads.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
    items: [
      { title: "Search Engine Optimization (SEO)", text: "Improve your website's visibility in search engine results to drive organic traffic." },
      { title: "Pay-Per-Click Advertising (PPC)", text: "Targeted ad campaigns to reach potential customers and drive conversions." },
      { title: "Social Media Marketing", text: "Strategic social media campaigns to build brand awareness and engage with your audience." },
      { title: "Email Marketing", text: "Personalized email campaigns to nurture leads and drive customer retention." }
    ],
    fullDescription: "Our digital marketing experts create effective strategies tailored to your business goals. We optimize your online presence across search engines, social media, and more to drive targeted traffic, qualified leads, and increased sales. Our data-driven approach ensures maximum ROI for your marketing investment."
  },
  {
    slug: "local-marketing",
    title: "Local Marketing",
    description: "Our local marketing services help you connect with customers in your area and build a strong local presence.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    items: [
      { title: "Google My Business Optimization", text: "Optimize your Google My Business profile to improve local search visibility." },
      { title: "Local SEO", text: "Targeted strategies to improve your visibility in local search results." },
      { title: "Local Directory Listings", text: "Ensure your business information is consistent across local directories." },
      { title: "Review Management", text: "Build and maintain a positive online reputation through customer reviews." }
    ],
    fullDescription: "For businesses serving local customers, our local marketing strategies help you gain visibility right where it matters most. We optimize your Google Business Profile, manage local listings, and implement targeted local SEO tactics to ensure you're found by customers in your area when they're ready to buy."
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    description: "Our content marketing services help you create and distribute valuable content to attract and engage your target audience.",
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    items: [
      { title: "Blog Writing", text: "Engaging blog posts to establish thought leadership and drive traffic." },
      { title: "Video Production", text: "Engaging video content to showcase your products and services." },
      { title: "Infographics", text: "Visual content to communicate complex information in an engaging way." },
      { title: "Content Strategy", text: "Comprehensive planning to align content with business goals and audience needs." }
    ],
    fullDescription: "Content is king, and our content marketing team creates high-quality, relevant content that resonates with your audience. From blog posts and articles to videos and infographics, we develop content that drives engagement, establishes authority, and converts visitors into customers."
  },
  {
    slug: "analytics",
    title: "Analytics & Reporting",
    description: "Our analytics services help you understand your marketing performance and make data-driven decisions to improve results.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3M3.75 21h16.5M16.5 3.75h.008v.008h-.008v-.008zM12.75 3.75h.008v.008h-.008v-.008zM9 3.75h.008v.008H9v-.008z",
    items: [
      { title: "Marketing Dashboard Setup", text: "Custom dashboards to track and visualize your marketing performance." },
      { title: "Performance Reporting", text: "Regular reports with insights on your marketing campaigns." },
      { title: "Conversion Tracking", text: "Set up and monitor conversion tracking to measure ROI." },
      { title: "Data Analysis", text: "In-depth analysis of your marketing data to identify opportunities for growth." }
    ],
    fullDescription: "What gets measured gets improved. Our analytics services provide clear, actionable insights into your marketing performance. We set up comprehensive tracking, build custom dashboards, and deliver regular reports that help you understand what's working and what can be optimized."
  }
];

// Add mappings for other gallery item links
const serviceRedirectMap = {
  "social-media": "digital-marketing",
  "brand-strategy": "content-marketing",
  "seo": "digital-marketing",
  "content": "content-marketing",
  "email": "digital-marketing",
  "ppc": "digital-marketing",
  "conversion": "analytics",
  "research": "analytics",
  "branding": "content-marketing",
  "social-ads": "digital-marketing",
  "video": "content-marketing",
};

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { serviceSlug } = useParams();
  
  // Find the requested service or use redirect mapping
  const actualSlug = serviceRedirectMap[serviceSlug as keyof typeof serviceRedirectMap] || serviceSlug;
  const currentService = serviceData.find(service => service.slug === actualSlug);
  
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

  // If a specific service is requested, scroll to service section
  useEffect(() => {
    if (serviceSlug) {
      // Scroll to service details after a short delay to allow rendering
      const timer = setTimeout(() => {
        const element = document.getElementById("service-details");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [serviceSlug]);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Background paths are fixed to the viewport */}
      <BackgroundPaths />
      
      {/* Page Header */}
      <section className={`bg-gradient-to-r from-primary to-indigo-700 dark:from-indigo-900 dark:to-indigo-800 py-${isMobile ? '12' : '16'} md:py-24 relative overflow-hidden`}>
        <BackgroundImage 
          imagePath="/images/backgrounds/abstract-tech-1.svg"
          glowColor="rgba(79, 70, 229, 0.5)"
          glowOpacity={0.7}
          glowSize="lg"
          overlayOpacity={0.2}
          className="opacity-40"
        />
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left content - text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {currentService ? currentService.title : "Our Services"}
              </h1>
              <p className="text-indigo-100 dark:text-indigo-50 max-w-2xl mx-auto md:mx-0 text-sm md:text-lg mb-8">
                {currentService 
                  ? currentService.description 
                  : "Discover our comprehensive range of digital and local marketing solutions designed to help your business thrive."}
              </p>
              
              {/* Call to action button */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {currentService ? (
                  <Link 
                    to="/contact" 
                    className="bg-white text-primary hover:bg-indigo-50 font-medium shadow-sm px-6 py-3 rounded-lg transition-all duration-300 text-sm md:text-base"
                  >
                    Get Started
                  </Link>
                ) : (
                  <a 
                    href="#service-details" 
                    className="bg-white text-primary hover:bg-indigo-50 font-medium shadow-sm px-6 py-3 rounded-lg transition-all duration-300 text-sm md:text-base"
                  >
                    Explore Services
                  </a>
                )}
                <Link 
                  to="/contact" 
                  className="border border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-lg transition-all duration-300 text-sm md:text-base"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            {/* Right content - illustration or features */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {!currentService && (
                  serviceData.slice(0, 4).map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>
                      </div>
                      <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                      <p className="text-indigo-100 text-sm">{feature.items[0].title}</p>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section id="service-details" className="py-16 md:py-24 bg-white dark:bg-gray-900 relative z-10">
        <div className="container-custom">
          {currentService ? (
            // Display specific service details
            <div className="max-w-4xl mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {currentService.slug === "digital-marketing" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      )}
                      {currentService.slug === "local-marketing" && (
                        <>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </>
                      )}
                      {currentService.slug === "content-marketing" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      )}
                      {currentService.slug === "analytics" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      )}
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{currentService.title}</h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">{currentService.fullDescription}</p>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">What's Included:</h3>
                
                <div className="space-y-6 mb-8">
                  {currentService.items.map((item, idx) => (
                    <div key={idx} className="flex items-start bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <svg className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-indigo-600 text-white hover:bg-indigo-700 font-medium shadow-sm px-8 py-3 rounded-lg transition-all duration-300"
                  >
                    Request a Quote
                  </Link>
                  <Link 
                    to="/services" 
                    className="border border-indigo-600 text-indigo-600 dark:border-indigo-500 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 font-medium px-8 py-3 rounded-lg transition-all duration-300"
                  >
                    View All Services
                  </Link>
                </div>
              </motion.div>
            </div>
          ) : (
            // Display all services
            <>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 px-4"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-primary text-xs md:text-sm font-medium mb-4">What We Offer</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Comprehensive Services</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                  We offer a wide range of marketing solutions tailored to your business goals, target audience, and industry.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {serviceData.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 transition-all duration-300"
                  >
                    <div className="flex flex-col h-full">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {service.slug === "digital-marketing" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          )}
                          {service.slug === "local-marketing" && (
                            <>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </>
                          )}
                          {service.slug === "content-marketing" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          )}
                          {service.slug === "analytics" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          )}
                        </svg>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base">{service.description}</p>
                      
                      <div className="flex flex-col space-y-3 mb-6">
                        {service.items.map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">{item.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-auto">
                        <Link 
                          to={`/services/${service.slug}`} 
                          className="inline-flex items-center text-primary hover:text-indigo-700 dark:hover:text-indigo-400 font-medium transition-colors"
                        >
                          Learn More
                          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-indigo-700 dark:from-indigo-900 dark:to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-700 dark:from-indigo-900 dark:to-indigo-800 opacity-95"></div>
        
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-indigo-100 dark:text-indigo-50 max-w-2xl mx-auto mb-6 md:mb-10 text-sm md:text-lg">
              Contact us today to discuss your marketing needs and discover how we can help your business grow.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center btn bg-white text-primary hover:bg-indigo-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-medium shadow-sm px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
            >
              Contact Us Now
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

export default Services; 