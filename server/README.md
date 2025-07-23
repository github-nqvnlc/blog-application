# 🚀 Blog Backend API

A robust and scalable Node.js backend API for a modern blog application, built with Express.js, MongoDB, and JWT authentication.

## ✨ Features

### 🔐 **Authentication & Authorization**
- JWT-based authentication system
- Password hashing with bcryptjs
- Role-based access control (Admin/User)
- Account verification system
- Secure middleware protection

### 📝 **Content Management**
- CRUD operations for blog posts
- Rich text content support (JSON format)
- Image upload and file management
- Post categorization and tagging
- Slug generation for SEO-friendly URLs

### 💬 **Comment System**
- Nested comment replies
- Comment moderation capabilities
- User-based comment management
- Real-time comment updates

### 👥 **User Management**
- User registration and profile management
- Avatar upload functionality
- Admin dashboard capabilities
- User verification system

### 🛡️ **Security & Performance**
- CORS configuration
- File upload validation
- Error handling middleware
- MongoDB connection optimization
- Environment-based configuration

## 🛠️ Tech Stack

### **Core Framework**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **ES Modules** - Modern JavaScript modules

### **Database & ODM**
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### **Authentication & Security**
- **JSON Web Tokens (JWT)** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-Origin Resource Sharing

### **File Handling**
- **Multer** - File upload middleware
- **UUID** - Unique identifier generation

### **Development Tools**
- **Nodemon** - Development server with auto-restart
- **dotenv** - Environment variable management

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start MongoDB service
# On Windows: net start MongoDB
# On macOS/Linux: brew services start mongodb-community

# Start development server
npm run dev
```

The API will be available at `http://localhost:3001`

### Environment Variables

Create a `.env` file in the server directory:

```env
# Database Configuration
DB_URI=mongodb://localhost:27017/blog-app

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
PORT=3001
NODE_ENV=development

# File Upload Configuration
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=jpg,jpeg,png,gif
```

## 📁 Project Structure

```
server/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controllers/              # Request handlers and business logic
│   ├── userControllers.js    # User management operations
│   ├── postControllers.js    # Blog post operations
│   ├── commentControllers.js # Comment system operations
│   └── postCategoriesController.js # Category management
├── middleware/               # Custom middleware functions
│   ├── authMiddleware.js     # JWT authentication & authorization
│   ├── uploadPictureMiddleware.js # File upload handling
│   └── errorHandler.js       # Global error handling
├── models/                   # MongoDB/Mongoose schemas
│   ├── User.js              # User schema with authentication
│   ├── Post.js              # Blog post schema
│   ├── Comment.js           # Comment schema with nesting
│   └── PostCategories.js    # Post category schema
├── routes/                   # API route definitions
│   ├── userRoutes.js        # User-related endpoints
│   ├── postRoutes.js        # Post-related endpoints
│   ├── commentRoutes.js     # Comment-related endpoints
│   └── postCategoriesRoutes.js # Category endpoints
├── uploads/                  # File upload storage directory
├── utils/                    # Utility functions
│   └── fileRemover.js       # File deletion utility
├── server.js                # Main application entry point
├── package.json             # Dependencies and scripts
└── .env                     # Environment variables (create this)
```

## 📚 API Documentation

### Base URL
```
http://localhost:3001/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Login User
```http
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Get User Profile
```http
GET /api/users/profile
Authorization: Bearer <jwt-token>
```

### Post Endpoints

#### Get All Posts
```http
GET /api/posts?page=1&limit=10&search=keyword
```

#### Get Single Post
```http
GET /api/posts/:slug
```

#### Create Post (Admin only)
```http
POST /api/posts
Authorization: Bearer <admin-jwt-token>
Content-Type: multipart/form-data

{
  "title": "Post Title",
  "caption": "Post caption",
  "body": "{json-content}",
  "tags": ["tag1", "tag2"],
  "categories": ["categoryId1", "categoryId2"],
  "photo": <file>
}
```

#### Update Post (Admin only)
```http
PUT /api/posts/:slug
Authorization: Bearer <admin-jwt-token>
```

#### Delete Post (Admin only)
```http
DELETE /api/posts/:slug
Authorization: Bearer <admin-jwt-token>
```

### Comment Endpoints

#### Get Post Comments
```http
GET /api/comments?postSlug=post-slug
```

#### Create Comment
```http
POST /api/comments
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "desc": "Comment content",
  "slug": "post-slug",
  "parent": "parentCommentId" // optional for replies
}
```

#### Update Comment
```http
PUT /api/comments/:commentId
Authorization: Bearer <jwt-token>
```

#### Delete Comment
```http
DELETE /api/comments/:commentId
Authorization: Bearer <jwt-token>
```

### Category Endpoints

#### Get All Categories
```http
GET /api/post-categories
```

#### Create Category (Admin only)
```http
POST /api/post-categories
Authorization: Bearer <admin-jwt-token>
Content-Type: application/json

{
  "title": "Category Name"
}
```

## 🔒 Authentication & Authorization

### JWT Token Structure
```javascript
{
  "id": "userId",
  "iat": 1234567890,
  "exp": 1234567890
}
```

### Protected Routes
- **User Authentication Required**: Profile management, creating comments
- **Admin Authorization Required**: Post CRUD operations, user management, category management

### Middleware Usage
```javascript
// Authentication required
router.use(authGuard);

// Admin authorization required
router.use(authGuard, adminGuard);
```

## 💾 Database Schema

### User Model
```javascript
{
  avatar: String,
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  verified: Boolean (default: false),
  verificationCode: String,
  admin: Boolean (default: false),
  timestamps: true
}
```

### Post Model
```javascript
{
  title: String (required),
  caption: String (required),
  slug: String (required, unique),
  body: Object (required), // Rich text JSON
  photo: String,
  user: ObjectId (ref: User),
  tags: [String],
  categories: [ObjectId] (ref: PostCategories),
  timestamps: true
}
```

### Comment Model
```javascript
{
  user: ObjectId (ref: User),
  desc: String (required),
  post: ObjectId (ref: Post),
  check: Boolean (default: false),
  parent: ObjectId (ref: Comment), // For nested replies
  replyOnUser: ObjectId (ref: User),
  timestamps: true
}
```

## 🔧 Available Scripts

```bash
# Development
npm run dev         # Start development server with nodemon
npm start          # Start production server

# Database
npm run seed       # Seed database with sample data (if available)

# Testing
npm test           # Run tests (if configured)

# Utilities
npm run clean      # Clean uploads directory
```

## 🛡️ Security Features

### Password Security
```javascript
// Password hashing before saving
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }
  next();
});
```

### File Upload Security
- File type validation (images only)
- File size limits (5MB default)
- Unique filename generation
- Secure file storage

### CORS Configuration
```javascript
const corsOptions = {
  exposedHeaders: "*",
  credentials: true,
  origin: process.env.CLIENT_URL || "http://localhost:3000"
};
```

## 🚀 Deployment

### Environment Setup for Production
```env
# Production Environment Variables
NODE_ENV=production
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog-app
JWT_SECRET=your-production-jwt-secret
PORT=3001
CLIENT_URL=https://your-frontend-domain.com
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

### Deploy to Heroku
```bash
# Install Heroku CLI and login
heroku create your-blog-api

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set DB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-jwt-secret

# Deploy
git push heroku main
```

### MongoDB Atlas Setup
1. Create MongoDB Atlas account
2. Create new cluster
3. Configure network access (IP whitelist)
4. Create database user
5. Get connection string for `DB_URI`

## 🧪 Testing

### API Testing with Postman
1. Import the API collection (if available)
2. Set environment variables:
   - `baseUrl`: `http://localhost:3001/api`
   - `authToken`: JWT token from login

### Manual Testing
```bash
# Test server health
curl http://localhost:3001/

# Test user registration
curl -X POST http://localhost:3001/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

## 📈 Performance Optimization

### Database Optimization
- MongoDB indexes on frequently queried fields
- Mongoose query optimization
- Connection pooling

### File Upload Optimization
- Image resizing and compression
- CDN integration ready
- Efficient file storage structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Add tests for new features
5. Commit changes: `git commit -am 'Add new feature'`
6. Push to branch: `git push origin feature/new-feature`
7. Submit a Pull Request

### Development Guidelines
- Follow ES6+ standards
- Use meaningful commit messages
- Add JSDoc comments for functions
- Maintain consistent code formatting
- Write tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](../client/LICENSE.md) file for details.

## 👨‍💻 Author

**Van Loc (locnv14)**

## 🔗 Related Projects

- **Frontend Client**: See `/client` directory for the React frontend
- **Admin Dashboard**: Advanced admin panel for content management
- **Mobile API**: Additional endpoints for mobile applications

## 🐛 Known Issues & Solutions

### Common Issues

1. **MongoDB Connection Error**
   ```bash
   # Solution: Ensure MongoDB is running
   # Windows: net start MongoDB
   # macOS: brew services start mongodb-community
   ```

2. **Port Already in Use**
   ```bash
   # Solution: Change port in .env or kill existing process
   lsof -ti:3001 | xargs kill -9
   ```

3. **File Upload Issues**
   ```bash
   # Solution: Check uploads directory permissions
   mkdir uploads
   chmod 755 uploads
   ```

## 📊 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": "Detailed error information"
  }
}
```

---

*Built with ❤️ using Node.js, Express.js, and MongoDB* 