import Head from 'next/head';
import { DefaultSeo } from 'next-seo'
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css';
import SEO from '../utils/seo'

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script data-goatcounter="https://usados-umluizlima.goatcounter.com/count" async src="//gc.zgo.at/count.js" />
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;
