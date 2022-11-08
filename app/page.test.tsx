import { render, screen } from '@testing-library/react';
import IndexPage from './page';

describe('Index Page', () => {
  it('renders a heading', () => {
    render(<IndexPage />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
