import Head from 'next/head';
import FooterSection from '../components/footer';
import GallerySection from '../components/gallery';
import Header from '../components/header';

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>lifestyle.olegchursin</title>
        <meta
          name="description"
          content="Oleg Chursin - NYC Lifestyle Potography"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="dark:bg-gray-900">
        <main className="container mx-auto">
          <GallerySection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
