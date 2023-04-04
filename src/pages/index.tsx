import { GetStaticProps } from "next";
import { Roboto } from 'next/font/google'
import { getAllPosts } from "./api";
import { Home } from "@/containers";
import { Header } from "@/components";
import { Post } from "@/domain";
import { Container, Page } from "./styles";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
})

type PageProps = {
  posts: Post[];
};

export default function App({ posts }: PageProps): JSX.Element {

  return (
    <Page>
      <Header />
      <Container className={roboto.className}>
        <Home posts={posts} />      
      </Container>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllPosts({ query: '_sort=create_at:DESC' });

  return {
    props: {
      posts: data,
    }
  }
};
