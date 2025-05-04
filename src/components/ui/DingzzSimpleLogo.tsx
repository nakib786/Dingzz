import React from 'react';

interface DingzzSimpleLogoProps {
  className?: string;
  height?: number;
  width?: number;
}

const DingzzSimpleLogo: React.FC<DingzzSimpleLogoProps> = ({ 
  className = '', 
  height = 60, 
  width = 200
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 60" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top smaller bar */}
      <rect x="40" y="10" width="120" height="20" rx="4" fill="#0056b3"/>
      
      {/* Bottom larger bar */}
      <rect x="10" y="40" width="180" height="20" rx="4" fill="#0056b3"/>
      
      {/* Optional: Add text */}
      <text x="100" y="74" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#0056b3" textAnchor="middle">Dingzz</text>
    </svg>
  );
};

export default DingzzSimpleLogo; 