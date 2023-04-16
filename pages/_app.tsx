import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script async src="https://analytics.umami.is/script.js" data-website-id="76113375-d302-4728-a21e-da3a62ebbe0a" />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;