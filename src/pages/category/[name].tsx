import { GetServerSidePropsContext } from 'next';
import { Post as PostProps } from '@/domain';
import { getAllPosts } from '@/pages/api';
import { Home } from '@/containers';
import { Page } from '@/components';

interface CategoryPostsProps {
  posts: PostProps[];
}

const CategoryPost = ({ posts }: CategoryPostsProps): JSX.Element => {
  return (
    <Page>
      <Home posts={posts} />
    </Page>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{ category: string }>) => {
  try {
    const { data } = await getAllPosts({
      populate: '*',
      filters: {
        filter: 'category',
        value: params?.category,
        operation: 'contains',
        field: 'name',
      },
    });

    return { props: { posts: data } };
  } catch (error) {
    return { notFound: true };
  }
};

export default CategoryPost;
