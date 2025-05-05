// Remove imports since they're unused

interface BackgroundImageProps {
  imagePath: string;
  glowColor?: string;
  glowOpacity?: number;
  overlayOpacity?: number;
  glowSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function BackgroundImage({
  imagePath,
  glowColor = 'rgba(79, 70, 229, 0.4)', // Default indigo glow color
  glowOpacity = 0.6,
  overlayOpacity = 0.2,
  glowSize = 'md',
  className = '',
}: BackgroundImageProps) {
  // Removed unused isMobile state

  // Define glow sizes
  const glowSizes = {
    sm: '100px',
    md: '150px',
    lg: '200px',
  };

  const currentGlowSize = glowSizes[glowSize];
  
  return (
    <>
      {/* Background image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${className}`}
        style={{ backgroundImage: `url('${imagePath}')` }}
      />
      
      {/* Overlay to control image darkness/lightness */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Glow effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent ${currentGlowSize})`,
          opacity: glowOpacity,
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
} 