import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("opsimateCookieConsent");
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("opsimateCookieConsent", "accepted");
    setShowBanner(false);
    // Tell GA component to inject the scripts
    window.dispatchEvent(new Event("cookie-consent-accepted"));
  };

  const handleReject = () => {
    localStorage.setItem("opsimateCookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content">
        <div className="cookie-text">
          <h4>🍪 We use cookies</h4>
          <p>
            We use cookies to understand how visitors interact with our documentation. 
            By accepting, you agree to the OpsiMate{" "}
            <a href="/docs/legal/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>.
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

