import { render, screen } from '@testing-library/react';

import NotFoundPage from '@/app/not-found';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<NotFoundPage />);

    const heading = screen.getByText(/Page Not Found/i);

    expect(heading).toBeInTheDocument();
  });
});
