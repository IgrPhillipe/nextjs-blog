import { GetStaticProps } from "next";
import { Inter } from 'next/font/google'
import { getPosts } from "./api";
import { Home } from "@/containers";
import { Post } from "@/domain";

const inter = Inter({ subsets: ['latin'] })

type PageProps = {
  posts: Post[];
};

export default function App({ posts }: PageProps): JSX.Element {

  return (
    <div className={inter.className}>
      <Home posts={posts} />      
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getPosts();

  return {
    props: {
      posts: data,
    }
  }
};
