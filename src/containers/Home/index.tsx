import { Category, Post as PostType, StrapiInstance } from '@/domain';
import { MainPost, Post, Tabs } from '@/components';
import noResults from '../../../public/noSearchResult.svg';
import Image from 'next/image';

type PageProps = {
  main?: boolean;
  posts: PostType[];
  categories?: StrapiInstance<Category>[];
  category?: string;
};

const Home = ({
  main,
  posts,
  category,
  categories,
}: PageProps): JSX.Element => {
  const tabs =
    categories?.map(({ attributes }) => ({
      name: attributes.name,
      href: `/category/${attributes.name}`,
    })) ?? [];

  return (
    <>
      <Tabs tabs={tabs ?? []} category={category} />

      {main ? (
        <>
          <MainPost
            key={posts[0].attributes.slug}
            attributes={posts[0].attributes}
          />
          <section className="my-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.slice(1)?.map(({ attributes }) => (
              <Post key={attributes.slug} attributes={attributes} />
            ))}
          </section>
        </>
      ) : (
        <section className="my-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts?.map(({ attributes }) => (
            <Post key={attributes.slug} attributes={attributes} />
          ))}
        </section>
      )}

      {posts.length === 0 && (
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-lg font-normal text-ultra-violet">
            No results found.
          </h1>
        </div>
      )}
    </>
  );
};

export default Home;
