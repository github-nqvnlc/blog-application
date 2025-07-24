/* eslint-disable */
const express = require('express');

// Mock database connection (for all tests)
jest.mock('../config/db.js', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(true),
}));

jest.mock('mongoose', () => ({
  set: jest.fn(),
  connect: jest.fn().mockResolvedValue(true),
}));

// Factory function to create a test app with common routes
function createTestApp({ withApi = false } = {}) {
  const app = express();
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

  if (withApi) {
    app.get('/api/posts', (req, res) => {
      res.status(200).json({
        success: true,
        data: [],
        message: 'Posts retrieved successfully',
      });
    });
    app.get('/api/users', (req, res) => {
      res.status(200).json({
        success: true,
        data: [],
        message: 'Users retrieved successfully',
      });
    });
  }

  return app;
}

module.exports = { createTestApp };
