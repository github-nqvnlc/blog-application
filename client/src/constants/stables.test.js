import stables from './stables';

describe('Stables Constants', () => {
  test('stables should be defined', () => {
    expect(stables).toBeDefined();
    expect(typeof stables).toBe('object');
  });

  test('UPLOAD_FOLDER_BASE_URL should be defined', () => {
    expect(stables.UPLOAD_FOLDER_BASE_URL).toBeDefined();
    expect(typeof stables.UPLOAD_FOLDER_BASE_URL).toBe('string');
  });

  test('API_BASE_URL should be defined', () => {
    expect(stables.API_BASE_URL).toBeDefined();
    expect(typeof stables.API_BASE_URL).toBe('string');
  });

  test('URLs should be valid', () => {
    expect(stables.UPLOAD_FOLDER_BASE_URL).toMatch(/^https?:\/\/.+/);
    expect(stables.API_BASE_URL).toMatch(/^https?:\/\/.+/);
  });
});
