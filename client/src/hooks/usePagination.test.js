import { renderHook, act } from '@testing-library/react';
import usePagination from './usePagination';

describe('usePagination Hook', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => usePagination());

    expect(result.current).toBeDefined();
    expect(typeof result.current).toBe('object');
  });

  test('should handle pagination parameters', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 100,
        pageSize: 10,
        siblingCount: 1,
        currentPage: 1,
      })
    );

    expect(result.current).toBeDefined();
  });

  test('should handle edge cases', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 0,
        pageSize: 10,
        currentPage: 1,
      })
    );

    expect(result.current).toBeDefined();
  });
});
