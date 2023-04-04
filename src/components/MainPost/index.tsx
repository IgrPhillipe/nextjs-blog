import Link from 'next/link';
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

interface MainPostProps extends Omit<Post, 'id'> {};

export default function MainPost({ attributes }: MainPostProps): JSX.Element {
  const { title, content, createdAt, cover, slug } = attributes;

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