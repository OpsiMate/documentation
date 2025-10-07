import React from 'react';
import Layout from '@theme-original/Layout';
import CookieConsent from '@site/src/components/CookieConsent';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <CookieConsent />
    </>
  );
}
