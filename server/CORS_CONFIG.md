# 🔒 CORS Configuration Guide

## Overview

This application uses a secure CORS (Cross-Origin Resource Sharing) configuration that automatically adapts based on the environment.

## Environment-Based Configuration

### Development Environment

- **Allows**: All localhost origins on common ports
- **Credentials**: Enabled
- **Security**: More permissive for development ease

### Production Environment

- **Allows**: Only specified production domains
- **Credentials**: Enabled with strict origin checking
- **Security**: Highly restrictive for production safety

### Test Environment

- **Allows**: Same as development
- **Credentials**: Enabled for testing scenarios

## Configuration Options

### Allowed Origins

#### Development/Test

```javascript
[
  'http://localhost:3000', // React dev server
  'http://localhost:3001', // Express server
  'http://127.0.0.1:3000', // Alternative localhost
  'http://127.0.0.1:3001', // Alternative localhost
  'http://localhost:5000', // Alternative port
  'http://localhost:8080', // Alternative port
];
```

#### Production

```javascript
[
  'https://your-production-domain.com',
  'https://www.your-production-domain.com',
  'https://your-app.vercel.app',
  'https://your-app.netlify.app',
];
```

### Environment Variables

Add to your `.env` file:

```bash
# Production CORS configuration
NODE_ENV=production
CORS_ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com,https://your-app.vercel.app

# Development CORS configuration
NODE_ENV=development
# CORS_ALLOWED_ORIGINS not needed in development
```

## Security Features

### ✅ Implemented Security Measures

1. **Origin Validation**: Strict whitelist-based origin checking
2. **Credentials Support**: Secure cookie and authorization header handling
3. **Method Restrictions**: Only allowed HTTP methods (GET, POST, PUT, PATCH, DELETE, OPTIONS)
4. **Header Control**: Specific allowed and exposed headers
5. **Preflight Caching**: 24-hour cache for preflight requests
6. **Environment Awareness**: Different configs for dev/prod
7. **Logging**: CORS violations are logged for monitoring

### 🔒 Security Headers

#### Allowed Headers

- Content-Type
- Authorization
- X-Requested-With
- Accept
- Accept-Version
- Content-Length
- Content-MD5
- Date
- X-Api-Version
- X-CSRF-Token

#### Exposed Headers

- X-Total-Count
- X-Page-Count
- X-Current-Page
- X-Per-Page
- X-RateLimit-Limit
- X-RateLimit-Remaining
- X-RateLimit-Reset

## Production Setup

### 1. Update Production Domains

Edit `server/config/corsConfig.js`:

```javascript
if (isProduction) {
  allowedOrigins = [
    'https://youractualdomainn.com',
    'https://www.youractualdomain.com',
    // Add your real production domains
  ];
}
```

### 2. Set Environment Variables

```bash
NODE_ENV=production
CORS_ALLOWED_ORIGINS=https://yourdomain.com,https://api.yourdomain.com
```

### 3. Test CORS Configuration

```bash
# Test allowed origin
curl -H "Origin: https://yourdomain.com" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: X-Requested-With" \
     -X OPTIONS \
     http://your-api-domain.com/api/users

# Test blocked origin
curl -H "Origin: https://malicious-site.com" \
     -H "Access-Control-Request-Method: POST" \
     -X OPTIONS \
     http://your-api-domain.com/api/users
```

## Troubleshooting

### Common Issues

1. **CORS Error in Development**
   - Ensure `NODE_ENV=development` is set
   - Check if client is running on localhost:3000

2. **CORS Error in Production**
   - Verify production domains are added to allowedOrigins
   - Check CORS_ALLOWED_ORIGINS environment variable
   - Ensure HTTPS is used for production origins

3. **Credentials Not Working**
   - Verify `credentials: true` in CORS config
   - Ensure client sends `withCredentials: true`
   - Check that origin is exactly matched (including protocol)

### Debug Logging

The CORS configuration logs important information:

```bash
🔒 CORS configured for production environment
📍 Allowed origins: ['https://yourdomain.com']
🚫 CORS blocked request from origin: https://malicious-site.com
```

## Best Practices

1. **Never use `origin: true` in production**
2. **Always specify exact domains (no wildcards)**
3. **Use HTTPS for all production origins**
4. **Monitor CORS violations in logs**
5. **Test CORS configuration before deployment**
6. **Keep allowed origins list minimal**
7. **Use environment variables for domain configuration**

## Related Files

- `server/config/corsConfig.js` - Main CORS configuration
- `server/server.js` - CORS middleware setup
- `.env` - Environment variables
- `server/middleware/errorHandler.js` - Error handling
