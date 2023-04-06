import styled from "styled-components";

interface LinkProps {
  active?: boolean;
}

export const Content = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1366px) {
    width: 1366px;
  }
`;

export const LinkBox = styled.div<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  border-bottom: ${({ active }) => active ? '3px solid black' : '3px solid transparent'};

  a {
    color: ${({ active, theme }) => active ? 'black' : theme.colors.lightGray};
  }


  &:hover {
    border-bottom: 3px solid black;

    a {
      color: black;
    }
  }

  transition: border-bottom 0.2s;
`;

export const LinkText = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.2s;
`;