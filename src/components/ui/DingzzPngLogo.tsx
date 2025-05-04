import React from 'react';
import { useTheme } from '../../lib/ThemeContext';
import logo from '../../assets/images/dingzz-logo.png';

interface DingzzPngLogoProps {
  className?: string;
  height?: number;
  width?: number;
  forceDarkMode?: boolean;
}

const DingzzPngLogo: React.FC<DingzzPngLogoProps> = ({ 
  className = '', 
  height = 80, 
  width = 240,
  forceDarkMode = false
}) => {
  const { theme } = useTheme();
  const isDarkMode = forceDarkMode || theme === 'dark';
  
  return (
    <img
      src={logo}
      alt="Dingzz Logo"
      width={width}
      height={height}
      className={`${className} ${isDarkMode ? 'brightness-0 invert' : ''}`}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default DingzzPngLogo; 