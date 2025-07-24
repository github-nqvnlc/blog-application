import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

// Test wrapper component
const TestWrapper = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );

    // Check if component renders without errors
    expect(document.body).toBeInTheDocument();
  });

  test('renders footer content', () => {
    const { container } = render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );

    // Basic test to ensure component renders
    expect(container).toBeInTheDocument();
  });
});
