# 🌟 Modern Blog Application

A full-stack blog application built with modern technologies, featuring a React frontend and Node.js backend API. This project provides a complete content management system with user authentication, rich text editing, and responsive design.

## 🏗️ Project Architecture

```
📁 Blog Application
├── 🎨 client/          # React Frontend Application
│   ├── React 18 + TypeScript
│   ├── Tailwind CSS + DaisyUI
│   ├── Redux Toolkit + React Query
│   ├── TipTap Rich Text Editor
│   └── Responsive Design
│
├── 🚀 server/          # Node.js Backend API
│   ├── Express.js + ES Modules
│   ├── MongoDB + Mongoose
│   ├── JWT Authentication
│   ├── File Upload (Multer)
│   └── RESTful API Design
│
└── 📚 Documentation    # Project Documentation
    ├── API Documentation
    ├── Setup Guides
    └── Contributing Guidelines
```

## ✨ Key Features

### 🎯 **Core Functionality**
- **📝 Rich Text Blogging** - Advanced content creation with TipTap editor
- **👥 User Management** - Registration, authentication, and profile management
- **💬 Comment System** - Nested comments with real-time interactions
- **🏷️ Categorization** - Post categories and tagging system
- **🔍 Search & Filter** - Advanced search capabilities
- **📱 Responsive Design** - Mobile-first, cross-device compatibility

### 🔐 **Security & Performance**
- **🛡️ JWT Authentication** - Secure token-based authentication
- **🔒 Role-based Access** - Admin and user permission levels
- **📊 Data Validation** - Comprehensive input validation
- **⚡ Optimized Performance** - Query optimization and caching
- **🔄 Real-time Updates** - Live notifications and updates

### 🎨 **User Experience**
- **Modern UI/UX** - Clean, intuitive interface design
- **🌙 Theme Support** - Dark/Light mode capabilities
- **📸 Image Management** - Upload, crop, and optimize images
- **🔗 SEO Friendly** - Optimized URLs and meta tags
- **♿ Accessibility** - WCAG compliant design

## 🛠️ Technology Stack

### **Frontend (Client)**
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI Library |
| **Redux Toolkit** | 1.9.3 | State Management |
| **React Query** | 4.28.0 | Server State Management |
| **Tailwind CSS** | 3.2.4 | Styling Framework |
| **DaisyUI** | 3.0.3 | Component Library |
| **TipTap** | 2.0.3 | Rich Text Editor |
| **React Router** | 6.8.1 | Client-side Routing |
| **Axios** | 1.3.4 | HTTP Client |

### **Backend (Server)**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ | JavaScript Runtime |
| **Express.js** | 4.18.2 | Web Framework |
| **MongoDB** | 6+ | Database |
| **Mongoose** | 6.9.2 | ODM |
| **JWT** | 9.0.0 | Authentication |
| **bcryptjs** | 2.4.3 | Password Hashing |
| **Multer** | 1.4.5 | File Upload |
| **Nodemon** | 3.0.0 | Development Tool |

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**
- **Git**

### 1. Clone Repository
```bash
# Clone the project
git clone <repository-url>
cd blog-application

# Install dependencies for both client and server
npm run install:all
# or manually:
# cd client && npm install
# cd ../server && npm install
```

### 2. Environment Setup

#### Server Environment (.env)
```bash
# Navigate to server directory
cd server

# Create environment file
cp .env.example .env

# Edit .env file with your configurations
```

```env
# Database Configuration
DB_URI=mongodb://localhost:27017/blog-app

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
PORT=3001
NODE_ENV=development

# Client URL for CORS
CLIENT_URL=http://localhost:3000
```

#### Client Environment (.env)
```bash
# Navigate to client directory
cd client

# Create environment file
cp .env.example .env

# Edit .env file
```

```env
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_UPLOAD_URL=http://localhost:3001

# App Configuration
REACT_APP_SITE_NAME=My Blog
REACT_APP_VERSION=1.0.0
```

### 3. Database Setup
```bash
# Start MongoDB service
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Verify MongoDB is running
mongosh
```

### 4. Start Development Servers

#### Option A: Start Both Services
```bash
# From root directory
npm run dev

# This will start:
# - Server on http://localhost:3001
# - Client on http://localhost:3000
```

#### Option B: Start Individually
```bash
# Terminal 1 - Start Backend
cd server
npm run dev

# Terminal 2 - Start Frontend
cd client
npm start
```

### 5. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Documentation**: http://localhost:3001/api-docs (if available)

## 📁 Project Structure

```
blog-application/
│
├── 📂 client/                    # Frontend React Application
│   ├── 📂 public/               # Static assets
│   ├── 📂 src/
│   │   ├── 📂 components/       # Reusable components
│   │   ├── 📂 pages/           # Page components
│   │   ├── 📂 hooks/           # Custom React hooks
│   │   ├── 📂 services/        # API service functions
│   │   ├── 📂 store/           # Redux store
│   │   ├── 📂 utils/           # Utility functions
│   │   └── 📂 assets/          # Images and resources
│   ├── 📄 package.json         # Dependencies
│   ├── 📄 tailwind.config.js   # Tailwind configuration
│   └── 📄 README.md           # Client documentation
│
├── 📂 server/                    # Backend Node.js API
│   ├── 📂 config/              # Configuration files
│   ├── 📂 controllers/         # Request handlers
│   ├── 📂 middleware/          # Custom middleware
│   ├── 📂 models/              # Database models
│   ├── 📂 routes/              # API routes
│   ├── 📂 utils/               # Utility functions
│   ├── 📂 uploads/             # File upload storage
│   ├── 📄 server.js            # Application entry point
│   ├── 📄 package.json         # Dependencies
│   └── 📄 README.md           # Server documentation
│
├── 📂 docs/                      # Project documentation
│   ├── 📄 API.md               # API documentation
│   ├── 📄 DEPLOYMENT.md        # Deployment guide
│   └── 📄 CONTRIBUTING.md       # Contributing guidelines
│
├── 📄 package.json              # Root package.json
├── 📄 README.md                 # This file
├── 📄 LICENSE.md                # MIT License
└── 📄 .gitignore                # Git ignore rules
```

## 🔧 Development Scripts

### Root Level Commands
```bash
# Install dependencies for both client and server
npm run install:all

# Start both development servers
npm run dev

# Build both applications for production
npm run build

# Run tests for both applications
npm run test

# Clean all node_modules and reinstall
npm run clean:install
```

### Client Commands
```bash
cd client

# Development
npm start              # Start development server
npm run build          # Build for production
npm test               # Run tests
npm run lint           # Run ESLint
npm run format         # Format with Prettier

# Dependencies
npm run analyze        # Bundle analyzer
npm run update         # Update dependencies
```

### Server Commands
```bash
cd server

# Development
npm run dev            # Start with nodemon
npm start              # Start production server
npm test               # Run tests
npm run lint           # Run ESLint

# Database
npm run seed           # Seed database (if available)
npm run migrate        # Run migrations (if available)

# Utilities
npm run clean:uploads  # Clean upload directory
```

## 🌐 API Endpoints

### Authentication
```http
POST   /api/users/register     # User registration
POST   /api/users/login        # User login
GET    /api/users/profile      # Get user profile
PUT    /api/users/profile      # Update user profile
POST   /api/users/upload       # Upload avatar
```

### Posts
```http
GET    /api/posts              # Get all posts
GET    /api/posts/:slug        # Get single post
POST   /api/posts              # Create post (Admin)
PUT    /api/posts/:slug        # Update post (Admin)
DELETE /api/posts/:slug        # Delete post (Admin)
```

### Comments
```http
GET    /api/comments           # Get comments by post
POST   /api/comments           # Create comment
PUT    /api/comments/:id       # Update comment
DELETE /api/comments/:id       # Delete comment
```

### Categories
```http
GET    /api/post-categories    # Get all categories
POST   /api/post-categories    # Create category (Admin)
PUT    /api/post-categories/:id # Update category (Admin)
DELETE /api/post-categories/:id # Delete category (Admin)
```

## 🎯 Usage Examples

### Creating a New Blog Post
1. **Admin Login** - Authenticate as admin user
2. **Navigate to Create** - Go to admin dashboard
3. **Write Content** - Use rich text editor
4. **Add Media** - Upload and crop images
5. **Set Categories** - Choose relevant categories
6. **Publish** - Make post live

### User Registration Flow
1. **Sign Up** - Create new account
2. **Email Verification** - Verify email address
3. **Profile Setup** - Add avatar and bio
4. **Start Commenting** - Engage with content

### Admin Management
1. **User Management** - View and manage users
2. **Content Moderation** - Approve/reject comments
3. **Category Management** - Organize content
4. **Analytics** - View engagement metrics

## 🚀 Deployment

### Prerequisites for Production
- **VPS/Cloud Server** (AWS, DigitalOcean, etc.)
- **Domain Name** (optional)
- **MongoDB Atlas** (or self-hosted MongoDB)
- **SSL Certificate** (Let's Encrypt recommended)

### Frontend Deployment (Netlify/Vercel)

#### Netlify
```bash
# Build settings
Build command: npm run build
Publish directory: build
Environment variables: Add REACT_APP_* variables
```

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd client
vercel --prod
```

### Backend Deployment (Heroku/Railway)

#### Heroku
```bash
# Install Heroku CLI
heroku create your-blog-api

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set DB_URI=your-mongodb-atlas-uri
heroku config:set JWT_SECRET=your-production-secret

# Deploy
git subtree push --prefix server heroku main
```

#### Railway
```bash
# Install Railway CLI
npm i -g @railway/cli

# Deploy
cd server
railway login
railway deploy
```

### Docker Deployment

#### Docker Compose
```yaml
version: '3.8'
services:
  frontend:
    build: ./client
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_BASE_URL=http://backend:3001/api
  
  backend:
    build: ./server
    ports:
      - "3001:3001"
    environment:
      - DB_URI=mongodb://mongo:27017/blog-app
      - JWT_SECRET=your-secret
    depends_on:
      - mongo
  
  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

```bash
# Deploy with Docker Compose
docker-compose up -d
```

## 🧪 Testing

### Frontend Testing
```bash
cd client

# Unit tests
npm test

# Component tests
npm run test:components

# E2E tests (if configured)
npm run test:e2e

# Test coverage
npm run test:coverage
```

### Backend Testing
```bash
cd server

# Unit tests
npm test

# Integration tests
npm run test:integration

# API tests
npm run test:api

# Load tests
npm run test:load
```

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Post creation and editing
- [ ] Comment system functionality
- [ ] File upload and image handling
- [ ] Admin dashboard features
- [ ] Responsive design on mobile devices
- [ ] Performance on slow connections

## 📊 Performance Optimization

### Frontend Optimizations
- **Code Splitting** - Lazy loading of components
- **Image Optimization** - WebP format and responsive images
- **Bundle Analysis** - Monitor and reduce bundle size
- **Caching** - Service worker and browser caching
- **CDN** - Serve static assets from CDN

### Backend Optimizations
- **Database Indexing** - Optimize query performance
- **Caching** - Redis for session and data caching
- **Compression** - Gzip compression middleware
- **Rate Limiting** - Prevent API abuse
- **Load Balancing** - Scale horizontally

## 🔒 Security Considerations

### Frontend Security
- **Input Sanitization** - Prevent XSS attacks
- **HTTPS Only** - Secure data transmission
- **Content Security Policy** - Restrict resource loading
- **Authentication State** - Secure token storage

### Backend Security
- **Authentication** - JWT with proper expiration
- **Authorization** - Role-based access control
- **Data Validation** - Comprehensive input validation
- **Rate Limiting** - Prevent brute force attacks
- **CORS Configuration** - Proper cross-origin setup
- **Security Headers** - Helmet.js middleware

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Style Guidelines
- **Frontend**: Follow React best practices and ESLint rules
- **Backend**: Follow Node.js conventions and ESLint rules
- **Commits**: Use conventional commit messages
- **Documentation**: Update README and docs for new features

### Issue Reporting
- Use issue templates
- Provide detailed reproduction steps
- Include environment information
- Add relevant labels

## 📈 Roadmap

### Version 2.0 Features
- [ ] **Real-time Chat** - WebSocket integration
- [ ] **Advanced Analytics** - User engagement metrics
- [ ] **Mobile App** - React Native application
- [ ] **Multi-language** - Internationalization support
- [ ] **Advanced SEO** - Meta tags and sitemap generation
- [ ] **Email Notifications** - Comment and post notifications
- [ ] **Social Login** - Google, Facebook, GitHub authentication
- [ ] **Content Scheduling** - Schedule posts for future publication

### Technical Improvements
- [ ] **GraphQL API** - Alternative to REST API
- [ ] **Microservices** - Split into smaller services
- [ ] **Testing Coverage** - Achieve 90%+ test coverage
- [ ] **Performance Monitoring** - Add APM tools
- [ ] **CI/CD Pipeline** - Automated testing and deployment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

## 👨‍💻 Author

**Van Loc (locnv14)**

- 🌐 Portfolio: [locnv](https://locnv.vercel.app)
- 📧 Email: [Email](mailto:locnv14@gmail.com)
- 💼 LinkedIn: [LinkedIn](https://www.linkedin.com/in/linkedlocnv14)
- 📘 Facebook: [Facebook](https://www.facebook.com/fb.nqvnlc)
- 🐙 GitHub: [Github](https://github.com/github-nqvnlc)

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **MongoDB Team** - For the robust database solution
- **Tailwind CSS** - For the utility-first CSS framework
- **Open Source Community** - For all the amazing packages and tools

## 📞 Support

### Getting Help
- 📚 **Documentation**: Check the `/docs` directory
- 🐛 **Issues**: Report bugs on GitHub Issues
- 💬 **Discussions**: Join GitHub Discussions
- 📧 **Email**: Contact the maintainer directly

### Frequently Asked Questions

**Q: How do I reset my admin password?**
A: Use the password reset endpoint or directly update in MongoDB.

**Q: Can I customize the theme?**
A: Yes, modify the Tailwind configuration and DaisyUI settings.

**Q: How do I add new post categories?**
A: Use the admin dashboard or POST to `/api/post-categories`.

**Q: Is there a mobile app?**
A: Currently web-only, but mobile app is in the roadmap.

---

<div align="center">

**⭐ Star this repository if you find it useful!**

[🐛 Report Bug](https://github.com/github-nqvnlc/blog-app/issues) • [✨ Request Feature](https://github.com/github-nqvnlc/blog-app/issues) • [📖 Documentation](./docs/)

*Built with ❤️ by Van Loc using modern web technologies*

</div> 