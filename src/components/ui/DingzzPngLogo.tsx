import React from 'react';
import logo from '../../assets/images/dingzz-logo.png';

interface DingzzPngLogoProps {
  className?: string;
  height?: number;
  width?: number;
}

const DingzzPngLogo: React.FC<DingzzPngLogoProps> = ({ 
  className = '', 
  height = 80, 
  width = 240
}) => {
  return (
    <img
      src={logo}
      alt="Dingzz Logo"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default DingzzPngLogo; 