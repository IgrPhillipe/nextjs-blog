type LinkProps = {
  active?: boolean;
};

export const Content = `
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1366px) {
    width: 1366px;
  }
`;

export const LinkLabel = `
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;
  cursor: pointer;
  font-weight: bold;
  color: active ? theme.colors.frenchViolet : theme.colors.lightGray;
`;