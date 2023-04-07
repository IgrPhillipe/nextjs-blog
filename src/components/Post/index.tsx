import Link from 'next/link';
import Image from 'next/image';
import { Post as PostType } from '@/domain';

interface PostProps extends Omit<PostType, 'id'> {}

const Post = ({ attributes }: PostProps): JSX.Element => {
  const { title, content, createdAt, cover, slug } = attributes;

  return (
    <div>
      <div>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            {/* <Image
              layout="fill"
              objectFit="cover"
              src={cover.data.attributes.url}
              alt={title}
            /> */}
          </a>
        </Link>
      </div>

      <div>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a style={{ all: 'unset' }}>
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
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
