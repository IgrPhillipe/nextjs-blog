import { GetServerSidePropsContext } from 'next';
import { Category, Post as PostProps, StrapiInstance } from '@/domain';
import { getAllCategories, getAllPosts } from '@/pages/api';
import { Home } from '@/containers';
import { Page } from '@/components';

interface CategoryPostsProps {
  posts: PostProps[];
  category: string;
  categories: StrapiInstance<Category>[];
}

const CategoryPost = ({
  posts,
  category,
  categories,
}: CategoryPostsProps): JSX.Element => {
  return (
    <Page>
      <Home posts={posts} category={category} categories={categories} />
    </Page>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{ name: string }>) => {
  try {
    const { data: posts } = await getAllPosts({
      populate: '*',
      filters: {
        filter: 'category',
        value: params?.name,
        operation: 'eq',
        field: 'name',
      },
    });

    const { data: categories } = await getAllCategories({
      sort: { created_at: 'ASC' },
    });

    return {
      props: {
        posts,
        categories,
        category: params?.name ?? '',
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default CategoryPost;
