/* eslint-disable */
const request = require('supertest');
const { createTestApp } = require('../utils/testAppFactory');

describe('Server Tests', () => {
  let app;

  beforeAll(() => {
    app = createTestApp();
  });

  describe('GET /', () => {
    it('should return server running message', async () => {
      const response = await request(app).get('/').expect(200);
      expect(response.text).toBe('Server is running...');
    });
  });

  describe('GET /health', () => {
    it('should return health check status', async () => {
      const response = await request(app).get('/health').expect(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', 'Server is healthy');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('env');
    });

    it('should return 200 status code', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
    });
  });
});
