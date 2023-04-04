import { Post as PostType} from "@/domain";
import { Container, PostsContainer, Title } from "./styles";
import { MainPost, Post } from "@/components";

type PageProps = {
  posts: PostType[];
};

export default function Home({ posts }: PageProps): JSX.Element {
  const [mainPost, ...rest] = posts;

  return (
    <Container>
      <Title>The Blog</Title>

      <MainPost id={mainPost.id} attributes={mainPost.attributes} />

      <PostsContainer>
        {[mainPost, mainPost, mainPost].map(({ id, attributes}) => (
          <Post key={`Post - ${mainPost.id}`} id={mainPost.id} attributes={mainPost.attributes} />
        ))}
        {[mainPost, mainPost, mainPost].map(({ id, attributes}) => (
          <Post key={`Post - ${mainPost.id}`} id={mainPost.id} attributes={mainPost.attributes} />
        ))}
      </PostsContainer>
    </Container>
  )
} 