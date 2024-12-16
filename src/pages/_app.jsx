import Layout from '../components/Layout';
import '../app/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Head>
            <title>Raha Kashir Portfolio</title>
        </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;