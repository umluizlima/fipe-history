import Head from 'next/head';
import { GCScript } from "next-goatcounter";
import { DefaultSeo } from 'next-seo'

import '../styles/globals.css';
import SEO from '../utils/seo'

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <GCScript siteUrl={"https://usados-umluizlima.goatcounter.com/count"} />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
