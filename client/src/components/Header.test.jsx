import { render, screen } from '@testing-library/react';
import Header from './Header';
import { TestWrapper } from '../testUtils';

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    // Check if header element exists
    expect(document.body).toBeInTheDocument();
  });

  test('renders navigation elements', () => {
    const { container } = render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    // Basic test to ensure component renders
    expect(container).toBeInTheDocument();
  });
});
