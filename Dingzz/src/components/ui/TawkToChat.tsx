import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6817e50aee59f1190ddafab7/1iqeldckd';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    // Check if device is mobile
    const checkIfMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    };

    // Configure Tawk.to when it's ready
    const configureChat = () => {
      if (window.Tawk_API && window.Tawk_API.onLoad) {
        window.Tawk_API.onLoad = function() {
          // If on mobile, hide the auto popup but keep the chat bubble visible
          if (checkIfMobile()) {
            // Disable automatic popup on mobile
            window.Tawk_API.hideWidget();
            
            // After a short delay, show just the widget without the popup
            setTimeout(() => {
              window.Tawk_API.showWidget();
              // Disable the auto popup permanently for this session
              window.Tawk_API.disablePopups();
            }, 100);
          }
        };
      } else {
        // If Tawk_API isn't ready yet, try again after a short delay
        setTimeout(configureChat, 100);
      }
    };

    // Start the configuration process
    configureChat();

    // Handle window resize (if user rotates device or resizes browser)
    const handleResize = () => {
      if (window.Tawk_API) {
        if (checkIfMobile()) {
          window.Tawk_API.disablePopups();
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up function
    return () => {
      // Remove the script and event listener if component unmounts
      if (s1 && s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default TawkToChat; 