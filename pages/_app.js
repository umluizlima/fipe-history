import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Histórico de usados</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script data-goatcounter="https://usados-umluizlima.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
