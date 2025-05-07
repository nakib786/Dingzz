import React from 'react';

const MarketingStoryImage: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-indigo-900 to-violet-800 dark:from-gray-900 dark:to-indigo-950 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float-${i % 3} ${Math.random() * 15 + 15}s linear infinite`,
            }}
          />
        ))}
      </div>
      
      {/* Marketing Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-4/5 h-4/5">
          {/* Center glowing orb */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white to-blue-100 opacity-30 animate-pulse" 
            style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-white to-blue-200 opacity-50 animate-pulse"
            style={{ animationDuration: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white opacity-80"></div>
          
          {/* Company Logo/Icon in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-indigo-600">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          {/* Orbiting Marketing Icons */}
          {[
            { icon: "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z", label: "SEO", color: "text-emerald-400", delay: "0s", duration: "20s", distance: "120px" },
            { icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z", label: "Social", color: "text-blue-400", delay: "3s", duration: "25s", distance: "130px" },
            { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Local", color: "text-red-400", delay: "6s", duration: "30s", distance: "115px" },
            { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", label: "Team", color: "text-purple-400", delay: "9s", duration: "22s", distance: "135px" },
            { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: "Growth", color: "text-amber-400", delay: "12s", duration: "18s", distance: "150px" }
          ].map((item, index) => (
            <div 
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{
                animation: `orbit ${item.duration} linear infinite`,
                animationDelay: item.delay
              }}
            >
              <div 
                className={`bg-white dark:bg-gray-800 rounded-full p-2 md:p-3 shadow-lg flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2`}
                style={{
                  transform: `translate(${item.distance}, 0)`,
                  width: '50px',
                  height: '50px'
                }}
              >
                <svg className={`w-5 h-5 mb-1 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{item.label}</span>
                
                {/* Connection line to center */}
                <div className="absolute top-1/2 right-full w-full h-px bg-gradient-to-r from-transparent to-white opacity-30"></div>
              </div>
            </div>
          ))}
          
          {/* Growing stats lines */}
          <div className="absolute bottom-4 left-8 right-8 flex items-end space-x-1 h-24">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i}
                className="flex-1 bg-white dark:bg-blue-400 opacity-40 rounded-t-sm"
                style={{
                  height: `${10 + Math.sin(i * 0.9) * 8 + i * 4}%`,
                  animation: `grow-bar 3s ease-out`,
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              ></div>
            ))}
          </div>
          
          {/* Year labels */}
          <div className="absolute bottom-0 left-8 right-8 flex justify-between opacity-70">
            <span className="text-xs text-white">2018</span>
            <span className="text-xs text-white">Now</span>
          </div>
        </div>
      </div>
      
      {/* Overlay text */}
      <div className="absolute top-5 left-5 z-20">
        <h3 className="text-white text-xl font-bold">Our Journey</h3>
        <p className="text-white/70 text-sm">Digital Growth Partners</p>
      </div>
      
      {/* CSS for animations - using style tag without jsx prop */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(0); }
          to { transform: rotate(360deg) translateX(0); }
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
          to { transform: scaleY(1); opacity: 0.4; }
        }
      `}} />
    </div>
  );
};

export default MarketingStoryImage;