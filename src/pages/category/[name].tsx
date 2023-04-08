import { GetServerSidePropsContext } from 'next';
import { Category, Post as PostProps, StrapiInstance } from '@/domain';
import { getAllCategories, getAllPosts } from '@/pages/api';
import { Home } from '@/containers';
import { Page } from '@/components';
import { useRouter } from 'next/router';
import Error from 'next/error';

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
  const { isFallback } = useRouter();

  if (!category) {
    return <Error statusCode={404} />;
  }

  return (
    <Page>
      {isFallback ? (
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-lg font-normal text-ultra-violet">
            No results found.
          </h1>
        </div>
      ) : (
        <Home posts={posts} category={category} categories={categories} />
      )}
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
