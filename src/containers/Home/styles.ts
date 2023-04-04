import styled from "styled-components";

export const Container = styled.main`
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 3rem;
`;

export const PostsContainer = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 3rem;
`;