import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '../../components/ui/background-paths';
import { useEffect, useState } from 'react';

const About = () => {
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
      <section className="bg-gradient-to-r from-primary to-indigo-700 dark:from-indigo-900 dark:to-indigo-800 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-30" style={{ backgroundImage: "url('https://placehold.co/1920x1080/e4e4e7/4f46e5?text=&font=montserrat')", backgroundSize: 'cover' }}></div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-indigo-100 dark:text-indigo-50 max-w-2xl mx-auto text-sm md:text-lg">
              Learn more about Dingzz Marketing and our mission to help businesses succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-primary text-xs md:text-sm font-medium mb-4">Our Journey</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base">
                Founded in 2018, Dingzz Marketing began with a simple mission: to help local businesses thrive in an increasingly digital world. We recognized that many small and medium-sized businesses were struggling to navigate the complex landscape of digital marketing while maintaining their local presence.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base">
                Our team of marketing experts and tech enthusiasts came together with a shared vision of bridging the gap between digital and local marketing strategies. We believe that businesses shouldn't have to choose between a strong online presence and local community engagement.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                Today, we're proud to have helped hundreds of businesses across various industries grow their customer base, increase revenue, and establish a strong brand presence both online and in their local communities.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex justify-center px-4"
            >
              <img 
                src="https://placehold.co/600x400/e4e4e7/4f46e5?text=Our+Story&font=montserrat" 
                alt="Our Story" 
                className="rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Values */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24 relative z-10">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 px-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-secondary text-xs md:text-sm font-medium mb-4">Our Core Values</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission & Values</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              At Dingzz Marketing, our mission is to empower businesses with the tools and strategies they need to succeed in both digital and local markets.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-2">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Integrity",
                description: "We believe in transparent communication and honest business practices. Our clients trust us to deliver results with integrity and accountability."
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Innovation",
                description: "The digital landscape is constantly evolving, and so are we. We stay ahead of the curve to bring innovative solutions to our clients."
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Client Success",
                description: "Your success is our success. We're committed to delivering measurable results that help your business grow and thrive."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative z-10">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 px-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-primary text-xs md:text-sm font-medium mb-4">Meet Our Experts</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Meet the talented professionals behind Dingzz Marketing who are dedicated to helping your business succeed.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-2">
            {[
              {
                image: "https://placehold.co/400x400/e4e4e7/4f46e5?text=CEO&font=montserrat",
                name: "Sarah Johnson",
                position: "CEO & Founder",
                description: "With over 15 years of experience in digital marketing, Sarah leads our team with vision and expertise."
              },
              {
                image: "https://placehold.co/400x400/e4e4e7/4f46e5?text=CMO&font=montserrat",
                name: "Michael Chen",
                position: "Chief Marketing Officer",
                description: "Michael brings creative strategies and data-driven insights to help our clients achieve their marketing goals."
              },
              {
                image: "https://placehold.co/400x400/e4e4e7/4f46e5?text=CTO&font=montserrat",
                name: "Emily Rodriguez",
                position: "Chief Technology Officer",
                description: "Emily ensures our technical solutions are cutting-edge and aligned with the latest digital trends."
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <div className="mb-6 mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900/30">
                  <img 
                    src={member.image}
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-primary dark:text-indigo-400 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {member.description}
                  </p>
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

export default About; 