import Script from 'next/script';

import { mainNavConfig } from '@/config';

import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';

import '@/styles/globals.css';

export const metadata = {
  title: {
    template: '%s | Junior Alves',
    default: 'Junior Alves'
  },
  description: 'Description',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        async
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      />
      <body className="bg-primary text-gray-100">
        <Header />

        <Layout>
          <div className="py-20">{children}</div>
        </Layout>

        <BackToTop />

        <Footer items={mainNavConfig.mainNav} />
      </body>
    </html>
  );
}
