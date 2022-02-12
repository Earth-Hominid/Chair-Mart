import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

it('renders logo link', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const linkElement = screen.getByAltText(/chair-mart logo/i);
  expect(linkElement).toBeInTheDocument();
});
