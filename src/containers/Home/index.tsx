import { Post } from "@/domain";
import { Container, Title } from "./styles";

type PageProps = {
  posts: Post[];
};

export default function Home({ posts }: PageProps): JSX.Element {
  return (
    <Container>
      <Title>Home</Title>

      {posts.map(({ id, attributes}) => (
      <div key={id}>
        <h2>{attributes.title}</h2>
        <p>{attributes.content}</p>
      </div>
    ))}
    </Container>
  )
} 