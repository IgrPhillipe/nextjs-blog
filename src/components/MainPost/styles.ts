import styled from "styled-components";

type SmallProps = {
  light?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: opacity 300ms ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  object-fit: cover;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 500;
`;

export const Description = styled.p`
  display: -webkit-box;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  text-align: justify;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Small = styled.small<SmallProps>`
  font-weight: ${({ light }) => light ? 'light' : 'bold'};
  color: ${({ theme }) => theme.colors.lightGray};
`;
