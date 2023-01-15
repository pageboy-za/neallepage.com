import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;