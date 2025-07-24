/**
 * CORS Configuration for Blog Application
 * Secure CORS setup with environment-specific origins and security headers
 */

// Define allowed origins based on environment
const getAllowedOrigins = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isProduction = process.env.NODE_ENV === 'production';
  const isTest = process.env.NODE_ENV === 'test';

  // Base allowed origins
  let allowedOrigins = [];

  if (isDevelopment || isTest) {
    // Development and test environments - more permissive
    allowedOrigins = [
      'http://localhost:3000', // React dev server
      'http://localhost:3001', // Express server
      'http://127.0.0.1:3000', // Alternative localhost
      'http://127.0.0.1:3001', // Alternative localhost
      'http://localhost:5000', // Alternative port
      'http://localhost:8080', // Alternative port
      null, // Allow requests with no origin (Swagger UI)
    ];
  }

  if (isProduction) {
    // Production environment - restrictive origins
    allowedOrigins = [
      'https://your-production-domain.com',
      'https://www.your-production-domain.com',
      'https://your-app.vercel.app',
      'https://your-app.netlify.app',
      // Add your actual production domains here
    ];
  }

  // Allow additional origins from environment variable
  const envOrigins = process.env.CORS_ALLOWED_ORIGINS;
  if (envOrigins) {
    const additionalOrigins = envOrigins
      .split(',')
      .map(origin => origin.trim());
    allowedOrigins.push(...additionalOrigins);
  }

  return allowedOrigins;
};

// CORS configuration object
const corsConfig = {
  origin: (origin, callback) => {
    const allowedOrigins = getAllowedOrigins();

    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) {
      return callback(null, true);
    }

    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`🚫 CORS blocked request from origin: ${origin}`);
      callback(new Error('Not allowed by CORS policy'), false);
    }
  },

  // Allowed HTTP methods
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

  // Allowed headers
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Accept-Version',
    'Content-Length',
    'Content-MD5',
    'Date',
    'X-Api-Version',
    'X-CSRF-Token',
  ],

  // Headers exposed to the client
  exposedHeaders: [
    'X-Total-Count',
    'X-Page-Count',
    'X-Current-Page',
    'X-Per-Page',
    'X-RateLimit-Limit',
    'X-RateLimit-Remaining',
    'X-RateLimit-Reset',
  ],

  // Allow credentials (cookies, authorization headers)
  credentials: true,

  // Cache preflight response for 24 hours
  maxAge: 86400,

  // Handle preflight requests
  preflightContinue: false,
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// Development-specific CORS (more permissive)
const corsConfigDev = {
  ...corsConfig,
  origin: true, // Allow all origins in development
  credentials: true,
};

// Get CORS config based on environment
export const getCorsConfig = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const config = isDevelopment ? corsConfigDev : corsConfig;

  console.log(
    `🔒 CORS configured for ${process.env.NODE_ENV || 'development'} environment`
  );
  console.log(`📍 Allowed origins:`, getAllowedOrigins());

  return config;
};

// Export for use in tests
export { getAllowedOrigins, corsConfig, corsConfigDev };

export default getCorsConfig;
