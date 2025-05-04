import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '../../components/ui/background-paths';
import { useEffect, useState } from 'react';

const Services = () => {
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
      
      {/* Page Header */}
      <section className={`bg-gradient-to-r from-primary to-indigo-700 dark:from-indigo-900 dark:to-indigo-800 py-${isMobile ? '12' : '16'} md:py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 dark:opacity-30" style={{ backgroundImage: "url('https://placehold.co/1920x1080/e4e4e7/4f46e5?text=&font=montserrat')", backgroundSize: 'cover' }}></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-indigo-100 dark:text-indigo-50 max-w-2xl mx-auto text-sm md:text-lg">
              Discover our comprehensive range of digital and local marketing solutions designed to help your business thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative z-10">
        <div className="container-custom">
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
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-2">
            {[
              {
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                title: "Digital Marketing",
                description: "Our digital marketing services are designed to increase your online visibility, drive traffic to your website, and generate quality leads.",
                items: [
                  { title: "Search Engine Optimization (SEO)", text: "Improve your website's visibility in search engine results to drive organic traffic." },
                  { title: "Pay-Per-Click Advertising (PPC)", text: "Targeted ad campaigns to reach potential customers and drive conversions." },
                  { title: "Social Media Marketing", text: "Strategic social media campaigns to build brand awareness and engage with your audience." },
                  { title: "Email Marketing", text: "Personalized email campaigns to nurture leads and drive customer retention." }
                ]
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Local Marketing",
                description: "Our local marketing services help you connect with customers in your area and build a strong local presence.",
                items: [
                  { title: "Google My Business Optimization", text: "Optimize your Google My Business profile to improve local search visibility." },
                  { title: "Local SEO", text: "Targeted strategies to improve your visibility in local search results." },
                  { title: "Local Directory Listings", text: "Ensure your business information is consistent across local directories." },
                  { title: "Review Management", text: "Build and maintain a positive online reputation through customer reviews." }
                ]
              },
              {
                icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
                title: "Content Marketing",
                description: "Our content marketing services help you create and distribute valuable content to attract and engage your target audience.",
                items: [
                  { title: "Blog Writing", text: "High-quality blog content to engage your audience and improve SEO." },
                  { title: "Video Production", text: "Engaging video content to showcase your products and services." },
                  { title: "Infographics", text: "Visual content to communicate complex information in an engaging way." },
                  { title: "Content Strategy", text: "Comprehensive planning to align content with business goals and audience needs." }
                ]
              },
              {
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Web Development",
                description: "Our web development services help you create a strong online presence with a website that reflects your brand and drives results.",
                items: [
                  { title: "Responsive Website Design", text: "Custom website designs that look great on all devices." },
                  { title: "E-commerce Solutions", text: "Online shopping platforms to sell your products and services." },
                  { title: "Website Maintenance", text: "Regular updates and maintenance to keep your website secure and performing well." },
                  { title: "Landing Page Creation", text: "High-converting landing pages for specific marketing campaigns." }
                ]
              }
            ].map((service, index) => (
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
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base">{service.description}</p>
                  
                  <div className="space-y-4 mb-6">
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
                      to="/contact" 
                      className="inline-flex items-center text-primary hover:text-indigo-700 dark:hover:text-indigo-400 font-medium transition-colors"
                    >
                      Request This Service
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative z-10">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 px-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-secondary text-xs md:text-sm font-medium mb-4">Our Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How We Work</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Our proven process ensures we deliver consistent results for our clients through a methodical approach.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-2">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, target audience, and competition to create a solid foundation for your marketing strategy."
              },
              {
                number: "02",
                title: "Strategy",
                description: "Based on our research, we develop a customized marketing plan with clear objectives, tactics, and timelines to achieve your goals."
              },
              {
                number: "03",
                title: "Implementation",
                description: "Our team executes the strategy across all relevant channels, focusing on quality, consistency, and best practices."
              },
              {
                number: "04",
                title: "Analysis & Optimization",
                description: "We continually monitor performance, analyze data, and optimize your campaigns to maximize results and return on investment."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <div className="absolute -top-5 left-6 bg-primary text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative z-10">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 px-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-primary text-xs md:text-sm font-medium mb-4">Client Success</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Don't just take our word for it. Here's what our clients have to say about working with Dingzz Marketing.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-2">
            {[
              {
                quote: "Dingzz Marketing transformed our online presence. Their digital marketing strategies increased our website traffic by 150% and generated a 40% increase in qualified leads.",
                name: "Jennifer Wilson",
                company: "Bright Solutions LLC",
                image: "https://placehold.co/100x100/e4e4e7/4f46e5?text=JW&font=montserrat"
              },
              {
                quote: "Their local marketing approach helped us become the go-to provider in our area. We've seen a significant increase in foot traffic and local customers since working with them.",
                name: "Michael Roberts",
                company: "Urban Fitness Center",
                image: "https://placehold.co/100x100/e4e4e7/4f46e5?text=MR&font=montserrat"
              },
              {
                quote: "The team at Dingzz Marketing is exceptional. They're responsive, creative, and truly care about our success. The ROI on our marketing spend has been outstanding.",
                name: "Sarah Thompson",
                company: "Coastal Realty Group",
                image: "https://placehold.co/100x100/e4e4e7/4f46e5?text=ST&font=montserrat"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-100 dark:border-indigo-900/30"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
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

export default Services; 