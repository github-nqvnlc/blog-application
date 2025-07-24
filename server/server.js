import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import cors from 'cors';
import getCorsConfig from './config/corsConfig.js';
import {
  errorResponserHandler,
  invalidPathHandler,
} from './middleware/errorHandler.js';
import { specs, swaggerUi } from './config/swagger.js';

// Routes
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import postCategoriesRoutes from './routes/postCategoriesRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
connectDB();

const app = express();

// Apply secure CORS configuration
const corsConfig = getCorsConfig();
app.use(cors(corsConfig));

app.use(express.json());

/**
 * @swagger
 * /:
 *   get:
 *     summary: Project overview and documentation
 *     tags: [System]
 *     security: []
 *     responses:
 *       200:
 *         description: Project overview page
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: HTML page with project documentation
 */
app.get('/', (req, res) => {
  const envInfo = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    database: process.env.DB_URI
      ? process.env.DB_URI.includes('mongodb+srv')
        ? 'MongoDB Atlas (Cloud)'
        : 'MongoDB Local'
      : 'Not configured',
    jwtConfigured: process.env.JWT_SECRET ? 'Yes' : 'No',
    apiBaseUrl:
      process.env.API_BASE_URL ||
      `http://localhost:${process.env.PORT || 3001}/api`,
    swaggerUrl: `http://localhost:${process.env.PORT || 3001}/api-docs`,
  };

  const html = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog API Server - Project Overview</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            font-weight: 700;
        }
        
        .header p {
            font-size: 1.2em;
            opacity: 0.9;
        }
        
        .status-badge {
            display: inline-block;
            background: #27ae60;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
            margin-top: 15px;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .content {
            padding: 40px;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .card {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 25px;
            border-left: 5px solid #3498db;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .card-title {
            font-size: 1.3em;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .card-title::before {
            content: '';
            width: 8px;
            height: 8px;
            background: #3498db;
            border-radius: 50%;
            margin-right: 10px;
        }
        
        .config-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            padding: 5px 0;
            border-bottom: 1px dotted #ddd;
        }
        
        .config-label {
            font-weight: 500;
            color: #555;
        }
        
        .config-value {
            color: #27ae60;
            font-weight: 600;
        }
        
        .quick-links {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            margin-top: 30px;
        }
        
        .quick-links h3 {
            color: white;
            margin-bottom: 20px;
            font-size: 1.4em;
        }
        
        .link-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            background: white;
            color: #3498db;
            padding: 12px 24px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .btn:hover {
            background: transparent;
            color: white;
            border-color: white;
            transform: translateY(-2px);
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .feature {
            background: white;
            border: 2px solid #ecf0f1;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            transition: border-color 0.3s ease;
        }
        
        .feature:hover {
            border-color: #3498db;
        }
        
        .feature-icon {
            font-size: 2.5em;
            margin-bottom: 15px;
        }
        
        .feature h4 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .footer {
            background: #34495e;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-top: 15px;
        }
        
        .tech-tag {
            background: #e74c3c;
            color: white;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.8em;
            font-weight: 500;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2em;
            }
            
            .content {
                padding: 20px;
            }
            
            .link-buttons {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Blog API Server</h1>
            <p>RESTful API for Blog Management System</p>
            <div class="status-badge">🟢 Server Running</div>
        </div>
        
        <div class="content">
            <div class="grid">
                <div class="card">
                    <div class="card-title">📊 Server Configuration</div>
                    <div class="config-item">
                        <span class="config-label">Environment:</span>
                        <span class="config-value">${envInfo.environment}</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Port:</span>
                        <span class="config-value">${envInfo.port}</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Database:</span>
                        <span class="config-value">${envInfo.database}</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">JWT Configured:</span>
                        <span class="config-value">${envInfo.jwtConfigured}</span>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-title">🔌 API Endpoints</div>
                    <div class="config-item">
                        <span class="config-label">API Base:</span>
                        <span class="config-value">/api</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Users:</span>
                        <span class="config-value">/api/users</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Posts:</span>
                        <span class="config-value">/api/posts</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Comments:</span>
                        <span class="config-value">/api/comments</span>
                    </div>
                    <div class="config-item">
                        <span class="config-label">Categories:</span>
                        <span class="config-value">/api/post-categories</span>
                    </div>
                </div>
            </div>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">🔐</div>
                    <h4>Authentication</h4>
                    <p>JWT-based secure authentication system</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">📝</div>
                    <h4>CRUD Operations</h4>
                    <p>Complete Create, Read, Update, Delete operations</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🔍</div>
                    <h4>Search & Filter</h4>
                    <p>Advanced search and filtering capabilities</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">📄</div>
                    <h4>Pagination</h4>
                    <p>Efficient data pagination for large datasets</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🛡️</div>
                    <h4>CORS Security</h4>
                    <p>Secure Cross-Origin Resource Sharing</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">📚</div>
                    <h4>API Documentation</h4>
                    <p>Interactive Swagger UI documentation</p>
                </div>
            </div>
            
            <div class="quick-links">
                <h3>🚀 Quick Access</h3>
                <div class="link-buttons">
                    <a href="${envInfo.swaggerUrl}" class="btn" target="_blank">📚 API Documentation</a>
                    <a href="${envInfo.apiBaseUrl}/health" class="btn" target="_blank">❤️ Health Check</a>
                    <a href="${envInfo.swaggerUrl}/#/Users" class="btn" target="_blank">👥 Users API</a>
                    <a href="${envInfo.swaggerUrl}/#/Posts" class="btn" target="_blank">📝 Posts API</a>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>&copy; 2024 Blog API Server | Developed with Locnv14 ❤️</p>
            <div class="tech-stack">
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">Express.js</span>
                <span class="tech-tag">MongoDB</span>
                <span class="tech-tag">JWT</span>
                <span class="tech-tag">Swagger</span>
                <span class="tech-tag">REST API</span>
            </div>
        </div>
    </div>
</body>
</html>
  `;

  res.send(html);
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint for CI/CD
 *     tags: [System]
 *     security: []
 *     responses:
 *       200:
 *         description: Server health status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Server is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 env:
 *                   type: string
 *                   example: development
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development',
  });
});

// Swagger API Documentation
app.use(
  '/api-docs',
  (req, res, next) => {
    // Set CORS headers for Swagger UI
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, Content-Length, X-Requested-With'
    );
    next();
  },
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Blog API Documentation',
    swaggerOptions: {
      validatorUrl: null, // Disable schema validation
      tryItOutEnabled: true,
    },
  })
);

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/post-categories', postCategoriesRoutes);

// static assets
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
