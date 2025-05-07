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

    // Configure Tawk.to when it's ready
    const configureChat = () => {
      if (window.Tawk_API && window.Tawk_API.onLoad) {
        window.Tawk_API.onLoad = function() {
          // Allow tawk.to to fully load and scan the site
          window.Tawk_API.showWidget();
          
          // Enable crawler and scanning functionality
          if (window.Tawk_API.setAttributes) {
            window.Tawk_API.setAttributes({
              // Allow tawk.to to scan and crawl the website
              'allow-crawling': true,
              'enable-scanning': true
            }, function(error: unknown) {
              console.log('Tawk.to attributes set', error);
            });
          }
        };
      } else {
        // If Tawk_API isn't ready yet, try again after a short delay
        setTimeout(configureChat, 100);
      }
    };

    // Start the configuration process
    configureChat();

    // Clean up function
    return () => {
      // Remove the script if component unmounts
      if (s1 && s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default TawkToChat; 