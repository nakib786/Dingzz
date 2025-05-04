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

  // Adjust rows based on viewport
  const itemsPerRow = isMobile ? 2 : 5;
  const firstRow = items.slice(0, itemsPerRow);
  const secondRow = items.slice(itemsPerRow, itemsPerRow * 2);
  const thirdRow = items.slice(itemsPerRow * 2, itemsPerRow * 3);
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Adjust animation values for mobile
  const translateXValue = isMobile ? 400 : 1000;
  
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, translateXValue]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -translateXValue]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 5 : 15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 5 : 20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? -50 : -700, isMobile ? 50 : 500]),
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
          pointerEvents: 'none',
          marginTop: isMobile ? '200px' : '400px'
        }}
        className="relative"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 mb-4 md:mb-20 overflow-x-hidden">
          {firstRow.map((item) => (
            <GalleryCard
              item={item}
              translate={translateX}
              key={item.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-4 md:mb-20 space-x-4 md:space-x-20 overflow-x-hidden">
          {secondRow.map((item) => (
            <GalleryCard
              item={item}
              translate={translateXReverse}
              key={item.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 overflow-x-hidden">
          {thirdRow.map((item) => (
            <GalleryCard
              item={item}
              translate={translateX}
              key={item.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const HeroHeader = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className={`max-w-7xl relative mx-auto ${isMobile ? 'py-6 mb-10' : 'py-10 md:py-20 lg:py-40'} px-4 w-full left-0 top-0 z-20`}>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100">
        Transform Your <br className="hidden sm:block" /> Digital Presence
      </h1>
      <p className={`max-w-2xl text-base md:text-xl ${isMobile ? 'mt-2' : 'mt-4 md:mt-8'} text-gray-600 dark:text-gray-400`}>
        Innovative marketing solutions crafted to elevate your brand, expand your reach, and drive meaningful growth.
      </p>
      <div className={`flex flex-wrap gap-4 ${isMobile ? 'mt-4' : 'mt-6 md:mt-8'} relative`} style={{ zIndex: 100, pointerEvents: 'auto' }}>
        <a 
          href="/services" 
          className="bg-indigo-600 text-white hover:bg-indigo-700 font-medium shadow-md px-4 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base cursor-pointer"
        >
          Explore Services
        </a>
        <a 
          href="/contact" 
          className="border-2 border-indigo-600 bg-white text-indigo-600 dark:text-indigo-400 dark:border-indigo-500 hover:bg-indigo-600/10 dark:hover:bg-indigo-900/20 font-medium px-4 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base cursor-pointer"
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
      whileHover={{
        y: isMobile ? -5 : -20,
      }}
      key={item.title}
      className={`group/item ${isMobile ? 'h-24 w-20' : 'h-72 sm:h-96 w-60 sm:w-[30rem]'} relative flex-shrink-0`}
    >
      <Link
        to={item.link}
        className="block group-hover/item:shadow-2xl"
      >
        <img
          src={item.thumbnail}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
          alt={item.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/item:opacity-80 bg-white/80 dark:bg-gray-900/80 pointer-events-none rounded-lg transition-opacity duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/item:opacity-100 text-indigo-600 dark:text-indigo-400 font-medium text-xs sm:text-lg transition-opacity duration-300">
        {item.title}
      </h2>
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