import React from 'react';

interface DingzzLogoProps {
  className?: string;
  height?: number;
  width?: number;
}

const DingzzLogo: React.FC<DingzzLogoProps> = ({ 
  className = '', 
  height = 60, 
  width = 200
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 80" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="200" height="80" fill="transparent"/>
      
      {/* Letter D shape */}
      <path d="M20 20 H120 C130 20, 140 30, 140 40 V50 C140 60, 130 70, 120 70 H20 V20 Z" fill="#0056b3"/>
      
      {/* Cut out of D letter */}
      <path d="M40 35 H90 C95 35, 100 40, 100 45 C100 50, 95 55, 90 55 H40 V35 Z" fill="white"/>
      
      {/* Z shape */}
      <path d="M150 20 H180 V35 L155 55 H180 V70 H150 V55 L175 35 H150 V20 Z" fill="#0056b3"/>
      
      {/* Dot for i */}
      <circle cx="130" cy="30" r="5" fill="#0056b3"/>
      
      {/* Text DINGZZ */}
      <text x="100" y="80" fontSize="16" fontWeight="bold" fill="#0056b3" textAnchor="middle">DINGZZ</text>
    </svg>
  );
};

export default DingzzLogo; 