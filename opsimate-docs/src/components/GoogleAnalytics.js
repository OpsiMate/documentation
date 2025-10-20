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

      // Load GA4 script
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = "https://www.googletagmanager.com/gtag/js?id=G-60FKG0TFT5";
      document.head.appendChild(script1);

      // Initialize GA4
      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-60FKG0TFT5', { anonymize_ip: true });
      `;
      document.head.appendChild(script2);
    }

    return () => {
      window.removeEventListener("cookie-consent-accepted", injectGAScript);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
