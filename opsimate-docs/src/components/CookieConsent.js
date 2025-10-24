import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from '@docusaurus/Link';
import "./CookieConsent.css";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consentGiven = localStorage.getItem("opsimateCookieConsent");
      if (consentGiven) {
        const data = JSON.parse(consentGiven);
        const expiryMonths = 12; // 12-month expiration (standard)
        const isExpired = Date.now() - data.timestamp > expiryMonths * 30 * 24 * 60 * 60 * 1000;
        if (isExpired || data.status !== 'accepted') {
          setShowBanner(true);
        }
      } else {
        setShowBanner(true);
      }
    } catch (error) {
      // If localStorage is unavailable, show banner to be GDPR-safe
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      const consentData = {
        status: 'accepted',
        timestamp: Date.now()
      };
      localStorage.setItem("opsimateCookieConsent", JSON.stringify(consentData));
      setShowBanner(false);
      // Tell GA component to inject the scripts
      window.dispatchEvent(new Event("cookie-consent-accepted"));
    } catch (error) {
      // Cannot persist consent - do not enable analytics
      setShowBanner(false);
    }
  };

  const handleReject = () => {
    try {
      const consentData = {
        status: 'rejected',
        timestamp: Date.now()
      };
      localStorage.setItem("opsimateCookieConsent", JSON.stringify(consentData));
    } catch (error) {
      // If storage fails, banner will reappear on next visit (acceptable fallback)
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      className="cookie-consent-banner" 
      role="dialog" 
      aria-labelledby="cookie-banner-title" 
      aria-live="polite"
    >
      <div className="cookie-consent-content">
        <div className="cookie-text">
          <h4 id="cookie-banner-title">🍪 We use cookies</h4>
          <p>
            We use cookies to understand how visitors interact with our documentation. 
            By accepting, you agree to the OpsiMate{" "}
            <Link to="/docs/legal/privacy">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn-reject" onClick={handleReject}>
            Reject
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CookieConsentWrapper() {
  return (
    <BrowserOnly>
      {() => <CookieConsent />}
    </BrowserOnly>
  );
}

