import { Header } from '@/components';
import Head from 'next/head';

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>The Blog</title>
        <meta name="description" content="App to study Next.js" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex-col items-center">
        <Header />
        <section className="max-w-screen-3xl h-full w-full flex-col items-start justify-start p-6 pt-0 md:p-24 md:pt-0">
          {children}
        </section>
      </main>
    </>
  );
};

export default Page;
