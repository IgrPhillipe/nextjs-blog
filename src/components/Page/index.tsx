import { Home } from '@/containers';
import { Header } from '@/components';
import { Post } from '@/domain';
import { getAllPosts } from '@/pages/api';
import { Container, Content } from './styles';
import Head from 'next/head';

interface PageProps {
  page?: string;
  children: React.ReactNode;
}

const Page = ({ page, children }: PageProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{page ?? 'Next.js Blog'}</title>
        <meta name="description" content="App to study Next.js" />
      </Head>
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default Page;
