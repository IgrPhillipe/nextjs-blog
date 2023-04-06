export const Container = `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Cover = `
  width: 100%;
  height: 25rem;
  background-color: theme.colors.lightGray;
  object-fit: cover;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const Content = `
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

export const MainContent = `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

export const Title = `
  font-size: 56px;
  font-weight: 500;
`;

export const Description = `
  display: -webkit-box;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  text-align: justify;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Small = `
  font-weight: light ? 'light' : 'bold';
  color: theme.colors.lightGray;
`;
