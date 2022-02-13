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

it('renders navigation html tab', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole('navigation');
  expect(linkElement).toBeInTheDocument();
});

it('renders search icon', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const linkElement = screen.getByAltText(/search icon/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders log-in icon', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const linkElement = screen.getByAltText(/log-in/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders cart link', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const linkElement = screen.getByAltText(/shopping cart/i);
  expect(linkElement).toBeInTheDocument();
});
