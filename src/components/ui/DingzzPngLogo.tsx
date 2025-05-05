import React, { useMemo } from 'react';
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
  
  // Only apply filter in dark mode, leave light mode completely untouched
  const logoStyle = useMemo(() => {
    if (isDarkMode) {
      return {
        objectFit: 'contain' as const,
        filter: 'brightness(0) invert(1)'
      };
    }
    
    // No filter in light mode - completely original black logo
    return {
      objectFit: 'contain' as const
    };
  }, [isDarkMode]);
  
  return (
    <img
      src={logo}
      alt="Dingzz Logo"
      width={width}
      height={height}
      className={className}
      style={logoStyle}
    />
  );
};

export default DingzzPngLogo; 