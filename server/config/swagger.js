import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get environment information
const getEnvironmentInfo = () => {
  const dbConnection = process.env.DB_URI
    ? process.env.DB_URI.includes('mongodb+srv')
      ? 'MongoDB Atlas (Cloud)'
      : 'MongoDB Local'
    : 'Not configured';

  return {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    database: dbConnection,
    jwtConfigured: process.env.JWT_SECRET ? 'Yes' : 'No',
    corsOrigins:
      process.env.CORS_ALLOWED_ORIGINS || 'Default localhost origins',
    apiBaseUrl:
      process.env.API_BASE_URL ||
      `http://localhost:${process.env.PORT || 3001}/api`,
    productionUrl: process.env.PRODUCTION_API_URL || 'Not configured',
    swaggerUrl: `${process.env.SWAGGER_SERVER_URL || `http://localhost:${process.env.PORT || 3001}`}/api-docs`,
  };
};

const envInfo = getEnvironmentInfo();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API Documentation',
      version: '1.0.0',
      description: `API documentation for Blog application with user management, posts, comments and categories

📊 **Environment Configuration:**
- Environment: ${envInfo.environment}
- Server Port: ${envInfo.port}
- Database: ${envInfo.database}
- JWT Configured: ${envInfo.jwtConfigured}
- CORS Origins: ${envInfo.corsOrigins}

🌐 **Server URLs:**
- API Base URL: ${envInfo.apiBaseUrl}
- Production URL: ${envInfo.productionUrl}
- Swagger UI: ${envInfo.swaggerUrl}

🔐 **Authentication:**
- Bearer token required for protected endpoints
- Use the "Authorize" button to set your JWT token

🚀 **Getting Started:**
1. Register a new account via POST /api/users/register
2. Login via POST /api/users/login to get your JWT token
3. Use the "Authorize" button and enter: Bearer <your-token>
4. Test protected endpoints`,
      contact: {
        name: 'API Support',
        email: 'support@blogapi.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === 'production'
            ? process.env.PRODUCTION_API_URL ||
              'https://your-production-domain.com/api'
            : process.env.API_BASE_URL ||
              `http://localhost:${process.env.PORT || 3001}/api`,
        description:
          process.env.NODE_ENV === 'production'
            ? 'Production server'
            : 'Development server',
      },
      {
        url:
          process.env.SWAGGER_SERVER_URL ||
          `http://localhost:${process.env.PORT || 3001}`,
        description: 'Swagger server (without /api prefix)',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'User ID',
            },
            name: {
              type: 'string',
              description: 'User name',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'User email',
            },
            avatar: {
              type: 'string',
              description: 'User avatar URL',
            },
            verified: {
              type: 'boolean',
              description: 'User verification status',
            },
            admin: {
              type: 'boolean',
              description: 'Admin status',
            },
            token: {
              type: 'string',
              description: 'JWT token',
            },
          },
        },
        Post: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Post ID',
            },
            title: {
              type: 'string',
              description: 'Post title',
            },
            caption: {
              type: 'string',
              description: 'Post caption',
            },
            slug: {
              type: 'string',
              description: 'Post slug',
            },
            body: {
              type: 'object',
              description: 'Post content in JSON format',
            },
            photo: {
              type: 'string',
              description: 'Post photo URL',
            },
            user: {
              type: 'string',
              description: 'Author user ID',
            },
            tags: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Post tags',
            },
            categories: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: 'Post categories',
            },
          },
        },
        Comment: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Comment ID',
            },
            user: {
              type: 'string',
              description: 'Commenter user ID',
            },
            desc: {
              type: 'string',
              description: 'Comment description',
            },
            post: {
              type: 'string',
              description: 'Related post ID',
            },
            check: {
              type: 'boolean',
              description: 'Comment approval status',
            },
            parent: {
              type: 'string',
              description: 'Parent comment ID for replies',
            },
            replyOnUser: {
              type: 'string',
              description: 'User being replied to',
            },
          },
        },
        Category: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Category ID',
            },
            title: {
              type: 'string',
              description: 'Category title',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Error message',
            },
            stack: {
              type: 'string',
              description: 'Error stack trace (development only)',
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js', './server.js'], // Path to the API files
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
