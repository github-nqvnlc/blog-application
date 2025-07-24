import { renderHook, act } from '@testing-library/react';
import { usePagination } from './usePagination';

describe('usePagination Hook', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() =>
      usePagination({
        siblingCount: 1,
        currentPage: 1,
        totalPageCount: 5,
      })
    );

    expect(result.current).toBeDefined();
    expect(Array.isArray(result.current)).toBe(true);
  });

  test('should handle pagination parameters', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalPageCount: 10,
        siblingCount: 1,
        currentPage: 1,
      })
    );

    expect(result.current).toBeDefined();
    expect(Array.isArray(result.current)).toBe(true);
  });

  test('should handle edge cases', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalPageCount: 1,
        siblingCount: 1,
        currentPage: 1,
      })
    );

    expect(result.current).toBeDefined();
    expect(Array.isArray(result.current)).toBe(true);
  });
});
