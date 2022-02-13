import { render, screen } from '@testing-library/react';
import NotFoundHeader from '../NotFoundHeader';

it('renders Not Found', () => {
  render(<NotFoundHeader />);
  const headerElement = screen.getByText('Not Found');
  expect(headerElement).toBeInTheDocument();
});
