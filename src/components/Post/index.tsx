import Link from 'next/link';
import Image from 'next/image';
import { Post as PostType } from '@/domain';
import user from '../../../public/user.svg';

interface PostProps extends Omit<PostType, 'id'> {}

const Post = ({ attributes }: PostProps): JSX.Element => {
  const { title, content, createdAt, cover, slug, category, author } =
    attributes;

  return (
    <div className="flex h-144 w-full flex-col items-center gap-8 transition-opacity ease-in-out hover:opacity-80">
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
            }}
          >
            <div className="mb-5 flex flex-col justify-start">
              <div>
                <p className="text-sm font-bold text-ultra-violet">
                  {category?.data?.attributes?.name}
                </p>
                <h1 className="box-orient-vertical mb-2 box-border line-clamp-3 h-8 text-lg font-bold text-russian-violet">
                  {title}
                </h1>
              </div>
              <p className="box-orient-vertical text-md box-border line-clamp-4 w-full overflow-hidden text-justify font-light">
                {content}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                <Image
                  objectFit="cover"
                  height={40}
                  width={40}
                  src={user}
                  alt={author?.data?.attributes?.name}
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <h5 className="line-clamp-2 truncate text-sm font-bold text-russian-violet">
                  {author?.data?.attributes?.name}
                </h5>
                <small className="text-xs font-light">
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
