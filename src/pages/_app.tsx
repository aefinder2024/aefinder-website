import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';
import { StoreProvider } from '@/components/layout/StoreProvider';
import Seo from '@/components/Seo';

const LoginProviderDynamic = dynamic(
  async () => {
    const LoginProvider = await import(
      '@/components/layout/WebLoginProvider'
    ).then((module) => module);
    return LoginProvider;
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <LoginProviderDynamic>
        <Layout>
          <Seo templateTitle='AeFinder' />
          <Component {...pageProps} />
        </Layout>
      </LoginProviderDynamic>
    </StoreProvider>
  );
}

export default MyApp;
