# Environment Variables Documentation

## Server Configuration

### Basic Settings

```env
PORT=8081                    # Server port
NODE_ENV=development         # Environment mode (development/production)
JWT_SECRET=your-secret-key   # JWT signing secret
```

### Database Configuration

```env
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/BlogDB?retryWrites=true&w=majority&appName=Cluster
```

### URL Configuration

#### API URLs

```env
# Development API base URL (used in Swagger)
API_BASE_URL=http://localhost:8081/api

# Production API base URL
PRODUCTION_API_URL=https://your-production-domain.com/api

# Swagger server URL (without /api prefix)
SWAGGER_SERVER_URL=http://localhost:8081
```

#### Additional URL Variables

```env
# Alternative URL variables (for flexibility)
SERVER_URL_DEV=http://localhost:8081/api
SERVER_URL_PROD=https://your-production-domain.com/api
API_BASE_PATH=/api
SWAGGER_UI_PATH=/api-docs
```

### CORS Configuration

```env
# Allowed origins for CORS (comma-separated)
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8081
```

## Usage in Swagger Configuration

The Swagger configuration automatically uses these variables:

1. **API_BASE_URL**: Used as the default server URL in development
2. **PRODUCTION_API_URL**: Used when NODE_ENV=production
3. **SWAGGER_SERVER_URL**: Additional server option without /api prefix
4. **PORT**: Fallback port if other URL variables not set

## Environment-Specific Behavior

### Development Mode (NODE_ENV=development)

- Primary server: `API_BASE_URL` or `http://localhost:{PORT}/api`
- Secondary server: `SWAGGER_SERVER_URL` or `http://localhost:{PORT}`
- CORS: Permissive settings with allowed origins

### Production Mode (NODE_ENV=production)

- Primary server: `PRODUCTION_API_URL`
- CORS: Restrictive settings
- Security headers enabled

## Swagger UI Access

Based on current configuration:

- **Swagger UI**: http://localhost:8081/api-docs
- **API Base**: http://localhost:8081/api
- **Health Check**: http://localhost:8081/health

## Updating URLs

To change URLs, update the corresponding variables in `.env`:

```bash
# For development API URL
API_BASE_URL=http://localhost:8081/api

# For production deployment
PRODUCTION_API_URL=https://yourdomain.com/api

# For Swagger server reference
SWAGGER_SERVER_URL=http://localhost:8081
```

After updating, restart the server for changes to take effect.
