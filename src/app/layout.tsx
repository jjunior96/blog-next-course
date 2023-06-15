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
