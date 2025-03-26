import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to My Portfolio/i);
  expect(headingElement).toBeInTheDocument();
});

