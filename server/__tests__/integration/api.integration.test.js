/* eslint-disable */
const request = require('supertest');
const { createTestApp } = require('../testAppFactory');

describe('API Integration Tests', () => {
  let app;

  beforeAll(() => {
    app = createTestApp({ withApi: true });
  });

  describe('Health Check', () => {
    it('should respond to health check', async () => {
      const response = await request(app).get('/health').expect(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Server is healthy');
    });
  });

  describe('API Endpoints', () => {
    it('should respond to posts endpoint', async () => {
      const response = await request(app).get('/api/posts').expect(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
    });

    it('should respond to users endpoint', async () => {
      const response = await request(app).get('/api/users').expect(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
    });
  });

  describe('Database Connection', () => {
    it('should handle database connection gracefully', async () => {
      // Test that app starts without database errors
      const response = await request(app).get('/health').expect(200);
      expect(response.body.success).toBe(true);
    });
  });
});
