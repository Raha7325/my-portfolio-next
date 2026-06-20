import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href={`${basePath}/images/favicon.ico`} />
        <title>Raha Kashir Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;