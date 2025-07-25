# Swagger API Documentation Setup

## Introduction

The Blog API project has been integrated with Swagger UI to provide interactive documentation for all endpoints with real-time configuration from environment variables.

## Accessing API Documentation

After starting the server, you can access Swagger UI at:

```
http://localhost:8081/api-docs
```

> **Note**: The port is automatically configured from your `.env` file (`PORT=8081`)

## Key Features

### 🔒 Authentication

- System uses JWT Bearer token for authentication
- Protected endpoints will display a lock icon
- To test protected endpoints, click the "Authorize" button and enter token in format: `Bearer <your-token>`

### 📝 API Groups

1. **System** - System endpoints
   - GET `/` - Project overview page with live configuration
   - GET `/health` - Health check for CI/CD monitoring

2. **Users** - User management
   - POST `/api/users/register` - Register new account
   - POST `/api/users/login` - User login
   - GET `/api/users/profile` - Get user profile (requires token)
   - PUT `/api/users/updateProfile/{userId}` - Update user profile (requires token)
   - PUT `/api/users/updateProfilePicture` - Update avatar (requires token)
   - GET `/api/users` - Get all users (admin only)
   - DELETE `/api/users/{userId}` - Delete user (admin only)

3. **Posts** - Blog post management
   - GET `/api/posts` - Get all posts (with pagination and search)
   - POST `/api/posts` - Create new post (admin only)
   - GET `/api/posts/{slug}` - Get post details
   - PUT `/api/posts/{slug}` - Update post (admin only)
   - DELETE `/api/posts/{slug}` - Delete post (admin only)

4. **Comments** - Comment management
   - GET `/api/comments` - Get all comments (admin only)
   - POST `/api/comments` - Create new comment (requires token)
   - PUT `/api/comments/{commentId}` - Update comment (requires token)
   - DELETE `/api/comments/{commentId}` - Delete comment (requires token)

5. **Categories** - Category management
   - GET `/api/post-categories` - Get all categories
   - POST `/api/post-categories` - Create new category (admin only)
   - GET `/api/post-categories/{postCategoryId}` - Get category details
   - PUT `/api/post-categories/{postCategoryId}` - Update category (admin only)
   - DELETE `/api/post-categories/{postCategoryId}` - Delete category (admin only)

### 🔧 How to Use

1. **Registration/Login**
   - Use `/api/users/register` endpoint to create an account
   - Use `/api/users/login` endpoint to login and get JWT token

2. **Authentication**
   - Copy token from login response
   - Click the "Authorize" button at the top of Swagger UI
   - Enter token in format: `Bearer <your-token>`
   - Click "Authorize"

3. **Testing APIs**
   - Authenticated endpoints will automatically include the token
   - Click "Try it out" to test an endpoint
   - Fill in parameters and request body
   - Click "Execute"

### 📋 Request/Response Examples

#### User Registration

```json
POST /api/users/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Create Post

```json
POST /api/posts
Content-Type: multipart/form-data

title: "My First Blog Post"
caption: "This is a sample post"
body: "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"text\",\"text\":\"Hello World!\"}]}]}"
photo: [file upload]
tags: "technology,programming"
categories: "category_id_1,category_id_2"
```

### 🔨 Customization

To add documentation for new endpoints:

1. Add JSDoc comments with `@swagger` format in route files
2. Use OpenAPI 3.0 specification
3. Reference examples in `routes/*.js`

### 📚 Schema Definitions

The API uses the following schema definitions:

- **User**: User information with JWT token
- **Post**: Blog post with metadata
- **Comment**: User comments and replies
- **Category**: Post categories
- **Error**: Standard error format

## Troubleshooting

### Server won't start

- Check MongoDB connection
- Ensure environment variables are properly set
- Check if port 8081 is not being used by another process

### Swagger UI not displaying

- Check the `/api-docs` path
- Review server logs for errors
- Ensure `swagger-ui-express` and `swagger-jsdoc` packages are installed

### Authentication not working

- Verify token format: `Bearer <token>`
- Ensure token is valid and not expired
- Check if endpoint requires admin privileges

## Environment Variables

Current configuration from your `.env` file:

```env
NODE_ENV=development
PORT=8081
DB_URI=mongodb+srv://locnv14:***@cluster.6qegekc.mongodb.net/BlogDB
JWT_SECRET=***
API_BASE_URL=http://localhost:8081/api
PRODUCTION_API_URL=https://your-production-domain.com/api
SWAGGER_SERVER_URL=http://localhost:8081
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8081
```

## Additional Features

### 🌐 Environment-Aware Configuration

- Swagger automatically detects and displays current environment settings
- Server URLs are dynamically configured from environment variables
- Database connection status is shown in real-time

### 📊 Live Configuration Display

- Visit `http://localhost:8081/` for a beautiful project overview
- Real-time server configuration display
- Quick access links to all important endpoints

### 🔗 Quick Links

From the main page (`http://localhost:8081/`), you can access:

- **API Documentation**: Direct link to Swagger UI
- **Health Check**: Server status monitoring
- **API Endpoints**: Direct links to test APIs

With Swagger UI and environment variable integration, API testing and documentation becomes easier and more professional!
