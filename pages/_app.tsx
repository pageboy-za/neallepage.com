import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <script async src="https://analytics.umami.is/script.js" data-website-id="76113375-d302-4728-a21e-da3a62ebbe0a"></script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;