export const Container = `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = `
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5rem;

  @media (min-width: 1366px) {
    width: 1366px;
  }
`;