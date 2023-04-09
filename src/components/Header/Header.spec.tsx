import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';

describe('<Header />', () => {
  it('should render the title', () => {
    render(<Header />);
    const title = screen.getByText(/the blog/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the globe image', () => {
    render(<Header />);
    const globeImage = screen.getByRole('img');
    expect(globeImage).toBeInTheDocument();
  });

  it('should render the GitHub link', () => {
    render(<Header />);
    const link = screen.getByRole('link', { name: /source code/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://github.com/IgrPhillipe/nextjs-blog'
    );
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should render the mobile GitHub icon', () => {
    jest.mock('react-responsive', () => ({
      useMediaQuery: jest.fn().mockReturnValue(true),
    }));

    render(<Header />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });
});
