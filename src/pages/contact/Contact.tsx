import { useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundPaths } from '../../components/ui/background-paths';
import { BackgroundImage } from '../../components/ui/BackgroundImage';
import { useEffect } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  // FAQ data
  const faqData = [
    {
      category: "Services",
      questions: [
        {
          question: "What marketing services do you offer?",
          answer: "We offer a comprehensive range of marketing services including digital marketing (SEO, PPC, social media, email), local marketing, content creation, analytics & reporting, branding, and strategic planning. Each service can be tailored to your specific business needs and goals."
        },
        {
          question: "How long until I see results from digital marketing?",
          answer: "Results timeline varies depending on the strategies implemented. SEO typically takes 3-6 months to show significant results, while paid advertising can generate leads immediately. Social media marketing usually takes 1-3 months to build momentum. We'll provide realistic timelines based on your specific goals and industry."
        },
        {
          question: "Do you offer monthly marketing packages?",
          answer: "Yes, we offer flexible monthly marketing packages customized to your business needs and budget. Each package includes a combination of services designed to achieve your specific goals. We also offer one-time projects for specific needs like website design or brand development."
        }
      ]
    },
    {
      category: "Working Process",
      questions: [
        {
          question: "What does your onboarding process look like?",
          answer: "Our onboarding process begins with a discovery meeting to understand your business, goals, and challenges. We then conduct research on your industry, competitors, and target audience. Next, we develop a customized marketing strategy, which we present to you for feedback. Once approved, we implement the strategy and provide regular updates on progress and results."
        },
        {
          question: "How do you measure the success of marketing campaigns?",
          answer: "We track key performance indicators (KPIs) specific to your goals, such as website traffic, conversion rates, lead generation, engagement metrics, and ROI. We provide transparent reporting through custom dashboards and regular strategy meetings to review performance and make data-driven adjustments."
        },
        {
          question: "Do you work with clients outside your location?",
          answer: "Absolutely! We serve clients throughout Canada and the United States. Our digital workflow and remote collaboration tools allow us to work effectively with businesses anywhere in North America. We conduct meetings via video conference, provide regular updates through our client portal, and deliver the same high-quality service regardless of your location."
        },
        {
          question: "How often will we communicate during projects?",
          answer: "Communication frequency depends on your preference and the project scope. Typically, we schedule weekly or bi-weekly check-ins for active campaigns, plus monthly strategy reviews. You'll have a dedicated account manager available for questions and emergencies. We use project management tools that give you 24/7 access to project updates."
        }
      ]
    },
    {
      category: "Pricing & Contracts",
      questions: [
        {
          question: "What is your pricing structure?",
          answer: "Our pricing is tailored to the specific services you need and the scope of work required. We offer monthly retainers for ongoing services, project-based pricing for specific initiatives, and performance-based options for certain campaigns. During our initial consultation, we'll discuss your budget and provide transparent pricing options."
        },
        {
          question: "Do I need to sign a long-term contract?",
          answer: "While we recommend a minimum 3-month commitment for most marketing strategies to show meaningful results, we offer flexible contract terms. We have month-to-month options, 3-6 month agreements, and annual plans with preferred pricing. All contracts include clear termination clauses with 30-day notice periods."
        },
        {
          question: "Are there any additional costs I should be aware of?",
          answer: "Our proposals include all service fees, but third-party costs such as ad spend, premium tools, or specialized software may be additional. We're completely transparent about all potential costs upfront and will never incur additional expenses without your approval."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "Can you work with my existing website or do I need a new one?",
          answer: "We can work with your existing website in most cases, making improvements to optimize for conversions and SEO. However, if your current site has significant technical issues or doesn't align with your marketing goals, we may recommend a redesign. We'll provide an honest assessment during our initial audit."
        },
        {
          question: "Do you handle website hosting and maintenance?",
          answer: "Yes, we offer website hosting, maintenance, and security services to ensure your site remains fast, secure, and up-to-date. This includes regular backups, security monitoring, plugin updates, and performance optimization. These services can be included in your marketing package or purchased separately."
        },
        {
          question: "Can you integrate with my existing CRM or marketing tools?",
          answer: "Absolutely! We work with most popular CRM and marketing platforms including HubSpot, Salesforce, Mailchimp, and many others. We can integrate these tools with your website and marketing campaigns to ensure seamless data flow and reporting. If you need recommendations for new tools, we can help with that too."
        }
      ]
    }
  ];

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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send form data to FormSubmit.co
    fetch('https://formsubmit.co/ajax/faizan.faruqui@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        phone: formState.phone || 'Not provided',
        company: formState.company || 'Not provided',
        service: formState.service || 'Not specified',
        message: formState.message,
        _subject: `New Contact Form Submission from ${formState.name}`,
        _template: "table",
        _autoresponse: "Thank you for contacting Dingzz. We've received your message and will get back to you shortly.",
        _captcha: "true",
        _cc: "faizan.faruqui@gmail.com"
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
      setIsSubmitting(false);
      alert('There was an error submitting the form. Please try again later.');
    });
  };
  
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
        />
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-indigo-100 dark:text-indigo-50 max-w-2xl mx-auto text-sm md:text-lg">
              Have questions or ready to start a project? Get in touch with us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 px-4 sm:px-2">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1 space-y-8"
            >
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-primary text-xs md:text-sm font-medium mb-4">Get In Touch</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base">
                  Fill out the form or contact us directly using the information below.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    title: "Address",
                    content: "Serving clients throughout\nCanada and the United States"
                  },
                  {
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    title: "Phone",
                    content: "+1 (416) 123-4567"
                  },
                  {
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    title: "Email",
                    content: "info@dingzzmarketing.com"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line text-sm md:text-base">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { href: "https://facebook.com", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                    { href: "https://twitter.com", path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
                    { href: "https://linkedin.com", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                    { href: "https://instagram.com", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-primary hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2"
            >
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center shadow-soft">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-800 mb-6">
                    <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm md:text-base">
                    Thank you for contacting us. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 md:p-8 border border-gray-100 dark:border-gray-700">
                  <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-primary text-xs md:text-sm font-medium mb-4">Send Message</span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 focus:border-transparent transition-all duration-200"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 focus:border-transparent transition-all duration-200"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a service</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Local Marketing">Local Marketing</option>
                          <option value="Content Marketing">Content Marketing</option>
                          <option value="Analytics & Reporting">Analytics & Reporting</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/70 focus:border-transparent transition-all duration-200 resize-none"
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    {/* Hidden FormSubmit.co configuration fields */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_autoresponse" value="Thank you for contacting Dingzz. We've received your message and will get back to you shortly." />
                    <input type="hidden" name="_captcha" value="true" />
                    <input type="hidden" name="_cc" value="faizan.faruqui@gmail.com" />
                    
                    <div className="mt-8">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full md:w-auto inline-flex items-center justify-center bg-primary text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 font-medium px-6 py-3 rounded-lg shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative z-10">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 px-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-secondary text-xs md:text-sm font-medium mb-4">Our Reach</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Service Coverage</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              We proudly serve clients throughout Canada and the United States. Our remote capabilities allow us to deliver exceptional marketing services no matter where you're located.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="px-4 rounded-xl overflow-hidden shadow-soft border border-gray-100 dark:border-gray-700"
          >
            <iframe
              title="Service Coverage"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14890079.917369507!2d-98.5795846!3d45.3832159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sus!4v1689853333214!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative z-10">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 px-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-primary text-xs md:text-sm font-medium mb-4">Questions?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Find answers to common questions about our services, processes, and policies. 
              If you don't see your question here, please contact us directly.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto px-4">
            {faqData.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="mb-8"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const absoluteIndex = categoryIndex * 10 + faqIndex;
                    const isOpen = openFaqIndex === absoluteIndex;
                    
                    return (
                      <motion.div 
                        key={faqIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                        className={`bg-white dark:bg-gray-800 rounded-xl border ${isOpen ? 'border-indigo-200 dark:border-indigo-800 shadow-md' : 'border-gray-100 dark:border-gray-700'} overflow-hidden transition-all duration-300`}
                      >
                        <button
                          onClick={() => toggleFaq(absoluteIndex)}
                          className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <span className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                            {faq.question}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-1"
                          >
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.span>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
              Can't find the answer you're looking for? Please contact our friendly team directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+14161234567" 
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-900 dark:text-white">Call us</span>
              </a>
              <a 
                href="mailto:info@dingzzmarketing.com" 
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-900 dark:text-white">Email us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 