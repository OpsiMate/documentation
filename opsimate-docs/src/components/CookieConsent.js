import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("opsimateCookieConsent");
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("opsimateCookieConsent", "accepted");
    setShowBanner(false);
    // You can trigger additional analytics scripts here
    if (typeof window !== "undefined") {
      // Add your analytics scripts here when accepted
      console.log("Cookies accepted - analytics enabled");
    }
  };

  const handleReject = () => {
    localStorage.setItem("opsimateCookieConsent", "rejected");
    setShowBanner(false);
    // Ensure analytics scripts are not loaded
    console.log("Cookies rejected - analytics disabled");
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content">
        <div className="cookie-text">
          <h4>🍪 We use cookies</h4>
          <p>
            We, our service providers and third-party partners use cookies and other 
            technologies to personalize content, measure usage, support marketing efforts 
            (including cross-contextual and behavioral targeting advertising efforts) and 
            provide an optimal experience as permitted by applicable law. Some cookies 
            are required for the site to function and cannot be turned off. Update your 
            preferences any time by selecting the "Privacy Choices" link. By accepting, 
            you agree to the OpsiMate{" "}
            <a href="/docs/legal/privacy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-btn-reject" onClick={handleReject}>
            Reject All
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

// Wrap in BrowserOnly to avoid SSR issues
export default function CookieConsentWrapper() {
  return (
    <BrowserOnly>
      {() => <CookieConsent />}
    </BrowserOnly>
  );
}