import { Post as PostType} from "@/domain";
import { Container, PostsContainer, Title } from "./styles";
import { MainPost, Post } from "@/components";
import Link from "next/link";

type PageProps = {
  posts: PostType[];
};

export default function Home({ posts }: PageProps): JSX.Element {
  const [mainPost, ...rest] = posts;

  return (
    <Container>
      <Title>The Blog</Title>

      <Link style={{ all: 'initial', cursor: 'pointer' }} href="/post[slug]" as={`/post/${mainPost.attributes.slug}`} key={mainPost.attributes.slug}>
        <MainPost attributes={mainPost.attributes} />
      </Link>

      <PostsContainer>
        {[mainPost, mainPost, mainPost].map(({ id, attributes }) => (
          <Link style={{ all: 'unset', cursor: 'pointer' }} href="/post[slug]" as={`/post/${attributes.slug}`} key={attributes.slug}>
            <Post attributes={mainPost.attributes} />
          </Link>
        ))}
        {[mainPost, mainPost, mainPost].map(({ id, attributes }) => (
          <Link style={{ all: 'unset', cursor: 'pointer' }} href="/post[slug]" as={`/post/${attributes.slug}`} key={attributes.slug}>
            <Post key={`Post - ${mainPost.id}`} attributes={mainPost.attributes} />
          </Link>
        ))}
      </PostsContainer>
    </Container>
  )
} 