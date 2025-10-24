import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    const consent = localStorage.getItem("opsimateCookieConsent");

    if (consent === "accepted") {
      injectGAScript();
    } else {
      window.addEventListener("cookie-consent-accepted", injectGAScript);
    }

    function injectGAScript() {
      // Prevent double injection
      if (window.gtag) return;

      // Hardcode the GA ID to avoid environment variable issues in browser
      const GA_MEASUREMENT_ID = 'G-60FKG0TFT5';

      // Load GA4 script with error handling
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script1.onerror = () => console.warn('Failed to load Google Analytics');
      document.head.appendChild(script1);

      // Initialize GA4
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, { 
        anonymize_ip: true
      });
    }

    return () => {
      window.removeEventListener("cookie-consent-accepted", injectGAScript);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;