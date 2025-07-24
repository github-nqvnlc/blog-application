// Simple test to verify Jest is working on server
describe('Simple Server Test', () => {
  test('should pass basic math', () => {
    expect(1 + 1).toBe(2);
    expect(2 * 3).toBe(6);
  });

  test('should handle async operations', async () => {
    const result = await Promise.resolve('success');
    expect(result).toBe('success');
  });

  test('should work with objects', () => {
    const testObj = { name: 'test', env: 'node' };
    expect(testObj).toHaveProperty('name');
    expect(testObj.env).toBe('node');
  });
});
