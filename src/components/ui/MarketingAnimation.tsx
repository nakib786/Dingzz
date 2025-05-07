import React from 'react';

const MarketingAnimation: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-indigo-900 to-violet-800 dark:from-gray-900 dark:to-indigo-950 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float-${i % 3} ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>
      
      {/* Digital network connections - NEW */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = Math.random() * 100;
          const endY = Math.random() * 100;
          return (
            <div 
              key={`line-${i}`}
              className="absolute bg-blue-200 dark:bg-blue-400"
              style={{
                height: '1px',
                width: `${Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))}%`,
                top: `${startY}%`,
                left: `${startX}%`,
                transformOrigin: 'left center',
                transform: `rotate(${Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)}deg)`,
                opacity: Math.random() * 0.3 + 0.2,
              }}
            />
          );
        })}
      </div>
      
      {/* Stats indicators - MOVED TO TOP RIGHT */}
      <div className="absolute top-5 right-5 z-20 flex flex-col items-end">
        <div className="flex items-center mb-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></div>
          <span className="text-white text-xs">+124% Growth</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-white text-xs">300+ Clients</span>
        </div>
      </div>
      
      {/* Marketing Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-4/5 h-4/5">
          {/* Center glowing orb */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-white to-blue-100 opacity-30 animate-pulse" 
            style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-white to-blue-200 opacity-50 animate-pulse"
            style={{ animationDuration: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white opacity-80"></div>
          
          {/* Ring around center - NEW */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-white/20 animate-spin"
               style={{ animationDuration: '40s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-56 md:h-56 rounded-full border border-white/10"></div>
          
          {/* Company Logo/Icon in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-indigo-600">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          {/* Main orbital ring - NEW */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full border border-white/20 rotate-[30deg]"></div>
          
          {/* Orbiting Marketing Icons - IMPROVED */}
          {[
            { icon: "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z", label: "SEO", color: "text-emerald-400", angle: 30, duration: "20s", distance: 140, description: "Visibility" },
            { icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z", label: "Social", color: "text-blue-400", angle: 100, duration: "20s", distance: 140, description: "Engagement" },
            { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Local", color: "text-red-400", angle: 170, duration: "20s", distance: 140, description: "Presence" },
            { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", label: "Team", color: "text-purple-400", angle: 240, duration: "20s", distance: 140, description: "Expertise" },
            { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: "Growth", color: "text-amber-400", angle: 310, duration: "20s", distance: 140, description: "Results" }
          ].map((item, index) => {
            const angleInRadians = (item.angle * Math.PI) / 180;
            const x = Math.cos(angleInRadians) * item.distance;
            const y = Math.sin(angleInRadians) * item.distance;
            
            return (
              <div 
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transformOrigin: "center",
                  animation: `orbit-fixed ${item.duration} linear infinite`,
                }}
              >
                <div 
                  className={`bg-white/90 dark:bg-gray-800 rounded-xl p-2 shadow-lg flex flex-col items-center justify-center`}
                  style={{
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    width: '65px',
                    height: '65px'
                  }}
                >
                  <svg className={`w-6 h-6 mb-1 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{item.label}</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400">{item.description}</span>
                  
                  {/* Connection line to center - IMPROVED */}
                  <div className="absolute z-[-1] top-1/2 left-1/2 h-px bg-gradient-to-r from-white/5 via-white/30 to-white/5"
                    style={{
                      width: `${item.distance}px`,
                      transform: `rotate(${item.angle + 180}deg)`,
                      transformOrigin: "left center",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
          
          {/* Growing stats lines - IMPROVED */}
          <div className="absolute bottom-4 left-8 right-8 flex items-end space-x-1 h-20">
            {Array.from({ length: 14 }).map((_, i) => (
              <div 
                key={i}
                className="flex-1 bg-gradient-to-t from-white/70 to-white/20 dark:from-blue-400/70 dark:to-blue-400/20 rounded-t-sm"
                style={{
                  height: `${12 + Math.sin(i * 0.9) * 15 + i * (i % 3 === 0 ? 5 : 3)}%`,
                  animation: `grow-bar 3s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                {/* Adding value markers for higher bars - NEW */}
                {(i % 3 === 0) && (
                  <div className="w-full flex justify-center -mt-5">
                    <div className="bg-white/80 dark:bg-blue-300/80 rounded-sm h-1 w-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Category labels - NEW */}
          <div className="absolute bottom-0 left-8 right-8 flex justify-between text-white/70">
            <span className="text-[9px]">Strategy</span>
            <span className="text-[9px]">Implementation</span>
            <span className="text-[9px]">Results</span>
          </div>
        </div>
      </div>
      
      {/* Overlay text - IMPROVED */}
      <div className="absolute top-5 left-5 z-20">
        <h3 className="text-white text-xl font-bold">Digital Marketing</h3>
        <div className="flex items-center mt-1">
          <div className="w-12 h-[2px] bg-gradient-to-r from-white/80 to-white/0 mr-2"></div>
          <p className="text-white/70 text-sm">Your Growth Partners</p>
        </div>
      </div>
      
      {/* CSS for animations - IMPROVED */}
      <style>
        {`
        @keyframes orbit-fixed {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes float-0 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(15px) translateX(15px); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(15px) translateX(-15px); }
          50% { transform: translateY(-15px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(15px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(-15px); }
          50% { transform: translateY(20px) translateX(10px); }
          75% { transform: translateY(10px) translateX(-10px); }
        }
        
        @keyframes grow-bar {
          from { transform: scaleY(0); opacity: 0; }
          to { transform: scaleY(1); opacity: 1; }
        }
        `}
      </style>
    </div>
  );
};

export default MarketingAnimation; 