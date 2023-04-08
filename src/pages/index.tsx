import { GetStaticProps } from 'next';
import { Home } from '@/containers';
import { Category, Post, StrapiInstance } from '@/domain';
import { getAllCategories, getAllPosts } from '@/pages/api';
import { Page } from '@/components';

type PageProps = {
  posts: Post[];
  categories: StrapiInstance<Category>[];
};

const App = ({ posts, categories }: PageProps): JSX.Element => {
  return (
    <Page>
      <Home main posts={posts} categories={categories} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts } = await getAllPosts({
    sort: { created_at: 'ASC' },
    populate: '*',
  });

  const { data: categories } = await getAllCategories({
    sort: { created_at: 'ASC' },
  });

  return {
    props: {
      posts,
      categories,
    },
    revalidate: 30,
  };
};

export default App;
