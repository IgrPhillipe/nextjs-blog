import { GetServerSidePropsContext } from 'next';
import { Post as PostProps } from '@/domain';
import { getAllPosts } from '@/pages/api';
import { Home } from '@/containers';
import { Page } from '@/components';

interface CategoryPostsProps {
  posts: PostProps[];
  category: string;
}

const CategoryPost = ({ posts, category }: CategoryPostsProps): JSX.Element => {
  return (
    <Page>
      <Home posts={posts} category={category} />
    </Page>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{ name: string }>) => {
  try {
    const { data } = await getAllPosts({
      populate: '*',
      filters: {
        filter: 'category',
        value: params?.name,
        operation: 'eq',
        field: 'name',
      },
    });

    return { props: { posts: data, category: params?.name ?? '' } };
  } catch (error) {
    return { notFound: true };
  }
};

export default CategoryPost;
