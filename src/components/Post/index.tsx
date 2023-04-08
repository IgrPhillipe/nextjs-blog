import Link from 'next/link';
import Image from 'next/image';
import { Post as PostType } from '@/domain';

interface PostProps extends Omit<PostType, 'id'> {}

const Post = ({ attributes }: PostProps): JSX.Element => {
  const { title, content, createdAt, cover, slug, category, author } =
    attributes;

  return (
    <div className="flex h-160 w-full flex-col items-center gap-8 transition-opacity ease-in-out hover:opacity-80">
      <div className="relative h-1/2 w-full overflow-hidden rounded-3xl bg-light-gray">
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a className="block h-full w-full">
            <Image
              layout="fill"
              objectFit="cover"
              src={cover?.data?.attributes?.url}
              alt={title}
            />
          </a>
        </Link>
      </div>

      <div className="flex h-1/2 w-full cursor-pointer flex-col items-start justify-between gap-4 leading-8">
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a
            style={{
              all: 'unset',
              height: '90%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div className="flex h-full flex-col justify-start">
              <div>
                <p className="text-sm font-bold text-ultra-violet">
                  {category?.data?.attributes?.name}
                </p>
                <h1 className="box-orient-vertical text-md mb-2 box-border line-clamp-3 font-bold text-russian-violet">
                  {title}
                </h1>
              </div>
              <p className="box-orient-vertical box-border line-clamp-4 w-full overflow-hidden text-justify text-sm font-light">
                {content}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-african-violet"></div>
              <div>
                <h5 className="line-clamp-2 truncate font-bold text-russian-violet">
                  {author?.data?.attributes?.name}
                </h5>
                <small className="font-light">
                  {new Date(createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </small>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
