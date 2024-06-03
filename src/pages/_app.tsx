import { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';
import { StoreProvider } from '@/components/layout/StoreProvider';
import Seo from '@/components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Layout>
        <Seo templateTitle='AeFinder' />
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
