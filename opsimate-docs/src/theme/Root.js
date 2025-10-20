import React from "react";
import CookieConsent from "../components/CookieConsent";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default function Root({ children }) {
  return (
    <>
      <CookieConsent />
      <GoogleAnalytics />
      {children}
    </>
  );
}
