import { UPLOAD_PATH } from './stables';

describe('Stables Constants', () => {
  test('UPLOAD_PATH should be defined', () => {
    expect(UPLOAD_PATH).toBeDefined();
    expect(typeof UPLOAD_PATH).toBe('string');
  });

  test('UPLOAD_PATH should be a valid URL path', () => {
    expect(UPLOAD_PATH).toMatch(/^https?:\/\/.+|^\/.*$/);
  });
});
