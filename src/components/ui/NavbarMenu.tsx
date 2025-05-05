import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BackgroundPaths } from "./background-paths";
import logo from '../../assets/images/dingzz-logo.png';
import { useTheme } from "../../lib/ThemeContext";

// Dark mode styles component
const DarkModeStyles = () => {
  useEffect(() => {
    const darkModeLogoStyle = document.createElement('style');
    darkModeLogoStyle.innerHTML = `
      /* ONLY apply in dark mode - never affect light mode */
      @media (prefers-color-scheme: dark) {
        img[src*="home-thumbnail"] {
          filter: brightness(0) invert(1) !important;
        }
      }
      
      /* ONLY apply to elements with dark mode class - never affect light mode */
      html.dark img[src*="home-thumbnail"],
      .dark img[src*="home-thumbnail"],
      html[data-theme="dark"] img[src*="home-thumbnail"] {
        filter: brightness(0) invert(1) !important;
      }
      
      /* Ensure no filter in light mode */
      img[src*="home-thumbnail"] {
        filter: none !important;
      }
    `;
    document.head.appendChild(darkModeLogoStyle);
    
    return () => {
      document.head.removeChild(darkModeLogoStyle);
    };
  }, []);
  
  return null;
};

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative px-2">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white text-lg font-medium"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden border border-black/[0.05] dark:border-white/[0.05] shadow-lg"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex justify-center space-x-10 px-12 py-7"
    >
      <DarkModeStyles />
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  to,
  src
}: {
  title: string;
  description: string;
  to: string;
  src: string;
}) => {
  const [imgError, setImgError] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // For home thumbnail, only apply special handling in dark mode
  const isHomeThumbnail = src.includes('home-thumbnail');
  
  // Use original source by default
  const finalSrc = imgError ? logo : src;
  
  // Only apply filter in dark mode - never in light mode
  const imageStyle = isDarkMode && isHomeThumbnail ? 
    { filter: 'brightness(0) invert(1)' } : 
    { filter: 'none' };
  
  return (
    <Link to={to} className="flex items-center space-x-3">
      <img
        src={finalSrc}
        width={140}
        height={70}
        alt={title}
        className="w-[140px] h-[70px] object-contain"
        style={imageStyle}
        onError={() => setImgError(true)}
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, to, ...rest }: any) => {
  return (
    <Link
      to={to}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
      {...rest}
    >
      {children}
    </Link>
  );
};

export { BackgroundPaths }; 