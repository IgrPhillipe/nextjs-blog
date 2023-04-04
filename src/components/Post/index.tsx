import { Post as PostType } from "@/domain";
import {
  Container,
  Image,
  Content,
  Description,
  Title,
  Small,
  MainContent
} from "./styles";

interface PostProps extends Omit<PostType, 'id'> {};

export default function Post({ attributes }: PostProps): JSX.Element {
  const { title, content, createdAt, cover } = attributes;

  return (
    <Container>
        <Image src={cover.data.attributes.url} alt={title} />
        <Content>
          <MainContent>
            <Small light>{new Date(createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</Small>
            <Title>{title}</Title>
            <Description>{content}</Description>
          </MainContent>
        </Content>
      </Container>
  )
} 