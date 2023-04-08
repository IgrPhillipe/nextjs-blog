import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { Header, Page } from '@/components';
import { Post as PostProps } from '@/domain';
import { getAllPosts, getPostBySlug } from '@/pages/api';

type Slug = {
  slug: string;
};

const SlugPost = ({ attributes }: PostProps): JSX.Element => {
  const { title, content, createdAt, cover } = attributes;

  return (
    <Page>
      <Header />
      <div>
        <div>
          <Image
            layout="fill"
            objectFit="cover"
            src={cover?.data?.attributes?.url}
            alt={title}
          />
        </div>

        <div>
          <div>
            <small>
              {new Date(createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </small>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        </div>
      </div>
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
      revalidate: 1,
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
