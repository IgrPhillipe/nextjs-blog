import { GetStaticProps } from 'next';
import { Home } from '@/containers';
import { Post } from '@/domain';
import { getAllPosts } from '@/pages/api';
import { Page } from '@/components';

type PageProps = {
  posts: Post[];
};

const App = ({ posts }: PageProps): JSX.Element => {
  return (
    <Page>
      <Home main posts={posts} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllPosts({
    sort: { created_at: 'ASC' },
    populate: '*',
  });

  return {
    props: {
      posts: data,
    },
    revalidate: 1,
  };
};

export default App;
