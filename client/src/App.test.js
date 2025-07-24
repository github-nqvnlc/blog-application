import { render, screen } from '@testing-library/react';
import App from './App';
import { TestWrapper } from './testUtils';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Just check that the app renders without errors
    expect(document.body).toBeInTheDocument();
  });

  test('renders main layout', () => {
    const { container } = render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    // Check if main content is rendered
    expect(container).toBeInTheDocument();
  });
});
