import { Post } from "@/domain";
import {
  Container,
  Image,
  Content,
  Description,
  Title,
  Small,
  MainContent
} from "./styles";

export default function MainPost({ id, attributes }: Post): JSX.Element {
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