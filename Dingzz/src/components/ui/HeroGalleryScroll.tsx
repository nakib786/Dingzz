import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";

interface GalleryItem {
  title: string;
  link: string;
  thumbnail: string;
}

interface HeroGalleryScrollProps {
  items: GalleryItem[];
}

export const HeroGalleryScroll = ({ items }: HeroGalleryScrollProps) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile
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

  // Adjust rows based on viewport and ensure there are enough items
  const itemsPerRow = isMobile ? 5 : 5; // Increased from 4 to 5 for mobile to fill screen better
  const safeItems = items.length >= itemsPerRow * 4 ? items : [...items, ...items].slice(0, itemsPerRow * 4);
  const firstRow = safeItems.slice(0, itemsPerRow);
  const secondRow = safeItems.slice(itemsPerRow, itemsPerRow * 2);
  const thirdRow = safeItems.slice(itemsPerRow * 2, itemsPerRow * 3);
  const fourthRow = isMobile ? safeItems.slice(itemsPerRow * 3, itemsPerRow * 4) : [];
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Adjust animation values for mobile
  const translateXValue = isMobile ? 300 : 1000;
  
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, translateXValue]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -translateXValue]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 3 : 15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 0.6 : 0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 2 : 20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? -20 : -700, isMobile ? 80 : 500]),
    springConfig
  );

  return (
    <div 
      ref={ref} 
      style={{
        position: 'relative',
        zIndex: 0
      }}
      className={`${isMobile ? 'h-auto pb-24' : 'h-[300vh]'} pt-10 md:py-40 overflow-hidden antialiased flex flex-col [perspective:1000px]`}
    >
      {/* Hero header with higher z-index to ensure buttons are clickable */}
      <div className="absolute top-0 left-0 w-full z-50" style={{ pointerEvents: 'auto' }}>
        <HeroHeader isMobile={isMobile} />
      </div>
      
      {/* Gallery motion elements with lower z-index */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          position: 'relative',
          zIndex: 0,
          marginTop: isMobile ? '160px' : '400px'
        }}
        className="relative"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 md:space-x-20 mb-4 md:mb-20 overflow-x-hidden">
          {firstRow.map((item) => (
            <GalleryCard
              item={item}
              translate={translateX}
              key={item.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-4 md:mb-20 space-x-2 md:space-x-20 overflow-x-hidden">
          {secondRow.map((item) => (
            <GalleryCard
              item={item}
              translate={translateXReverse}
              key={item.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 md:space-x-20 mb-4 md:mb-0 overflow-x-hidden">
          {thirdRow.map((item) => (
            <GalleryCard
              item={item}
              translate={translateX}
              key={item.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        
        {/* Fourth row only for mobile */}
        {isMobile && (
          <motion.div className="flex flex-row space-x-2 overflow-x-hidden">
            {fourthRow.map((item) => (
              <GalleryCard
                item={item}
                translate={translateXReverse}
                key={item.title}
                isMobile={isMobile}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const HeroHeader = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className={`max-w-7xl relative mx-auto ${isMobile ? 'py-8 mb-8' : 'py-10 md:py-20 lg:py-40'} px-4 w-full left-0 top-0 z-20`}>
      {/* Mobile gradient background */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/40 dark:from-gray-900/90 dark:to-gray-900/40 -z-10 rounded-xl"></div>
      )}
      
      <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold ${isMobile ? 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-600 dark:from-indigo-400 dark:to-purple-400 leading-tight' : 'text-gray-900 dark:text-gray-100'}`}>
        Transform Your <br className={isMobile ? 'block' : 'hidden sm:block'} /> Digital Presence
      </h1>
      <p className={`max-w-2xl text-base md:text-xl ${isMobile ? 'mt-3 font-medium' : 'mt-4 md:mt-8'} ${isMobile ? 'text-gray-700' : 'text-gray-600'} dark:text-gray-400`}>
        Innovative marketing solutions crafted to elevate your brand, expand your reach, and drive meaningful growth.
      </p>
      <div className={`flex flex-wrap gap-3 ${isMobile ? 'mt-6' : 'mt-6 md:mt-8'} relative`} style={{ zIndex: 100, pointerEvents: 'auto' }}>
        <a 
          href="/services" 
          className={`bg-indigo-600 text-white hover:bg-indigo-700 font-medium shadow-md px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base cursor-pointer ${isMobile ? 'flex-1 text-center' : ''}`}
        >
          Explore Services
        </a>
        <a 
          href="/contact" 
          className={`border-2 border-indigo-600 bg-white text-indigo-600 dark:text-indigo-400 dark:border-indigo-500 hover:bg-indigo-600/10 dark:hover:bg-indigo-900/20 font-medium px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base cursor-pointer ${isMobile ? 'flex-1 text-center' : ''}`}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

interface GalleryCardProps {
  item: GalleryItem;
  translate: MotionValue<number>;
  isMobile: boolean;
}

const GalleryCard = ({ item, translate, isMobile }: GalleryCardProps) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={!isMobile ? {
        y: -50,
        scale: 1.15,
        zIndex: 50,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      } : {
        y: -8,
        scale: 1.05,
        zIndex: 10,
        transition: { duration: 0.2 }
      }}
      className={`group/item ${isMobile ? 'h-28 w-24 rounded-lg overflow-hidden' : 'h-72 sm:h-96 w-60 sm:w-[30rem]'} relative flex-shrink-0`}
    >
      {/* Desktop custom hover effect */}
      {!isMobile && (
        <div className="absolute -inset-px scale-105 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover/item:opacity-100 rounded-lg blur-sm -z-10 transition-all duration-300"></div>
      )}
      
      <Link
        to={item.link}
        className="block h-full w-full relative z-10"
      >
        <img
          src={item.thumbnail}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-lg shadow-md"
          alt={item.title}
        />
        {/* Gradient overlay for text visibility */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent ${isMobile ? 'opacity-80' : 'opacity-60'} rounded-lg`}></div>

        {/* Hover overlay effect - only applied for desktop */}
        {!isMobile && (
          <div className="absolute inset-0 h-full w-full opacity-0 group-hover/item:opacity-75 bg-gradient-to-br from-white/90 to-indigo-100/90 dark:from-indigo-900/90 dark:to-purple-900/90 rounded-lg transition-all duration-500"></div>
        )}
        
        {/* Title always visible but with pointer-events-none */}
        <h2 className={`absolute ${isMobile ? 'bottom-1.5 left-1.5 text-[10px] leading-tight' : 'bottom-6 left-6 text-base sm:text-xl'} font-medium text-white group-hover/item:text-indigo-800 dark:group-hover/item:text-indigo-200 transition-all duration-300 z-10 pointer-events-none`}>
          {item.title}
        </h2>
      </Link>
    </motion.div>
  );
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Digital Marketing",
    link: "/services/digital-marketing",
    thumbnail: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Brand Strategy",
    link: "/services/brand-strategy",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Social Media Management",
    link: "/services/social-media",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Local Marketing",
    link: "/services/local-marketing",
    thumbnail: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "SEO Optimization",
    link: "/services/seo",
    thumbnail: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Content Creation",
    link: "/services/content",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Email Marketing",
    link: "/services/email",
    thumbnail: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "PPC Advertising",
    link: "/services/ppc",
    thumbnail: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Analytics & Reporting",
    link: "/services/analytics",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Conversion Optimization",
    link: "/services/conversion",
    thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Market Research",
    link: "/services/research",
    thumbnail: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Branding & Identity",
    link: "/services/branding",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Social Media Advertising",
    link: "/services/social-ads",
    thumbnail: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    title: "Video Production",
    link: "/services/video",
    thumbnail: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Marketing Automation",
    link: "/services/automation",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
]; 