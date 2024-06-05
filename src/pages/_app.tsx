import { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';
import { StoreProvider } from '@/components/layout/StoreProvider';
import LoginProvider from '@/components/layout/WebLoginProvider';
import Seo from '@/components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <LoginProvider>
        <Layout>
          <Seo templateTitle='AeFinder' />
          <Component {...pageProps} />
        </Layout>
      </LoginProvider>
    </StoreProvider>
  );
}

export default MyApp;
