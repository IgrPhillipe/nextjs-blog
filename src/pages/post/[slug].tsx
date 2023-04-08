import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { Header, Page } from '@/components';
import { Post as PostProps } from '@/domain';
import { getAllPosts, getPostBySlug } from '@/pages/api';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Error from 'next/error';

type Slug = {
  slug: string;
};

const SlugPost = ({ attributes }: PostProps): JSX.Element => {
  const { title, content, createdAt, cover, category, author } = attributes;
  const { isFallback } = useRouter();

  if (!attributes) {
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
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="w-full max-w-screen-lg">
            <div className="mb-5">
              <Link href={`/category/${category.data.attributes.name}`}>
                <a>
                  <p className="md:text-md mb-3 text-sm font-bold text-ultra-violet hover:underline">
                    {category?.data?.attributes?.name}
                  </p>
                </a>
              </Link>
              <h1 className="box-orient-vertical text-md mb-3 box-border line-clamp-3 font-bold text-russian-violet md:text-5xl">
                {title}
              </h1>
              <small>
                {new Date(createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </small>
            </div>
            <div className="relative mb-8 h-160 w-full overflow-hidden rounded-3xl">
              <Image
                layout="fill"
                objectFit="cover"
                src={cover?.data?.attributes?.url}
                alt={title}
              />
            </div>

            <p className="mb-10 w-full text-justify text-lg font-light">
              {content}
            </p>

            <div
              className="flex w-full items-center gap-3"
              justify-center
              items-center
            >
              <div className="h-12 w-12 rounded-full bg-african-violet md:h-16 md:w-16"></div>
              <div>
                <h5 className="line-clamp-2 truncate font-bold text-russian-violet">
                  {author?.data?.attributes?.name}
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </Page>
  );
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<Slug>) => {
  try {
    const { data } = await getPostBySlug({
      populate: '*',
      filters: {
        filter: 'slug',
        value: params?.slug,
        operation: 'eq',
      },
    });

    const [post] = data;

    return {
      props: { attributes: post.attributes },
      revalidate: 30,
    };
  } catch (error) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await getAllPosts({ fields: ['slug'] });

    const slugs = data.map(({ attributes }) => ({
      params: { slug: attributes.slug },
    }));

    return { paths: slugs, fallback: true };
  } catch {
    return { paths: [], fallback: true };
  }
};

export default SlugPost;
