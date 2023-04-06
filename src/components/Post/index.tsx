import Link from 'next/link';
import Image from 'next/image';
import { Post as PostType } from '@/domain';
import {
  Cover,
  Container,
  Content,
  Description,
  Title,
  Small,
  MainContent,
} from './styles';

interface PostProps extends Omit<PostType, 'id'> {}

export default function Post({ attributes }: PostProps): JSX.Element {
  const { title, content, createdAt, cover, slug } = attributes;

  return (
    <Container>
      <Cover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <Image
              layout="fill"
              objectFit="cover"
              src={cover.data.attributes.url}
              alt={title}
            />
          </a>
        </Link>
      </Cover>

      <Content>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a style={{ all: 'unset' }}>
            <MainContent>
              <Small light>
                {new Date(createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </Small>
              <Title>{title}</Title>
              <Description>{content}</Description>
            </MainContent>
          </a>
        </Link>
      </Content>
    </Container>
  );
}
