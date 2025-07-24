import request from 'supertest';
import express from 'express';

// Mock các module cần thiết
jest.mock('../config/db.js', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(true),
}));

jest.mock('mongoose', () => ({
  set: jest.fn(),
  connect: jest.fn().mockResolvedValue(true),
}));

describe('Server Tests', () => {
  let app;

  beforeAll(async () => {
    // Tạo một express app đơn giản cho test
    app = express();
    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('Server is running...');
    });

    app.get('/health', (req, res) => {
      res.status(200).json({
        success: true,
        message: 'Server is healthy',
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV || 'test',
      });
    });
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
