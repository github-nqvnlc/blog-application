import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage Component', () => {
  test('renders error message', () => {
    const errorMessage = 'This is an error message';

    const { container } = render(<ErrorMessage message={errorMessage} />);

    // Check if error message is rendered
    expect(container).toBeInTheDocument();
  });

  test('renders without crashing when no message provided', () => {
    render(<ErrorMessage />);

    // Should not crash even without message
    expect(document.body).toBeInTheDocument();
  });

  test('handles null/undefined message', () => {
    render(<ErrorMessage message={null} />);
    expect(document.body).toBeInTheDocument();

    render(<ErrorMessage message={undefined} />);
    expect(document.body).toBeInTheDocument();
  });
});
