import { Content, LinkBox, LinkText } from './styles';

export default function Header(): JSX.Element {
  return (
    <Content>
      <LinkBox active>
        <LinkText href="#">HOME</LinkText>
      </LinkBox>

      <LinkBox>
        <LinkText href="#">CONTACT</LinkText>
      </LinkBox>
    </Content>
  );
}
