import { render, screen } from '@testing-library/react';

import NotFoundPage from '@/app/not-found';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<NotFoundPage />);

    const heading = screen.getByText(/Nie znaleziono strony/i);

    expect(heading).toBeInTheDocument();
  });
});
