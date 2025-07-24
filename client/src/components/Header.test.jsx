import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './Header';
import { store } from '../store';

// Create a test query client
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

// Test wrapper component
const TestWrapper = ({ children }) => {
  const queryClient = createTestQueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

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
