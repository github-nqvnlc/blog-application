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

### 🚀 **Development & Code Quality**
- **🔍 GitHub Actions** - Automated CI/CD with code quality checks
- **✨ ESLint + Prettier** - Consistent code formatting and linting
- **🎨 Tailwind Sorting** - Automatic CSS class ordering
- **🛠️ Script Management** - Cross-platform development scripts
- **📋 Auto-fixing** - Automatic code quality improvements

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
| **ESLint** | Latest | Code Linting |
| **Prettier** | 3.6.2 | Code Formatting |
| **prettier-plugin-tailwindcss** | 0.5.14 | Tailwind Class Sorting |
| **highlight.js** | Latest | Syntax Highlighting |

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
| **ESLint** | 9.x | Code Linting (ES Modules) |
| **Prettier** | 3.6.2 | Code Formatting |

### **DevOps & Automation**
| Technology | Version | Purpose |
|------------|---------|---------|
| **GitHub Actions** | v4 | CI/CD Automation |
| **Cross-platform Scripts** | Custom | Development Workflows |
| **Auto-formatting** | Custom | Code Quality Maintenance |

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
# 📦 Installation & Setup
npm run install:all          # Install dependencies for both client and server
npm run install:client       # Install client dependencies only
npm run install:server       # Install server dependencies only

# 🚀 Development Servers
npm run dev                  # Start both development servers
npm run dev:client           # Start client development server only
npm run dev:server           # Start server development server only

# 🏗️ Production Build
npm run build                # Build both applications for production
npm run build:client         # Build client for production
npm run start                # Start both production servers
npm run start:client         # Start client production server
npm run start:server         # Start server production server

# 🧪 Testing
npm run test                 # Run tests for both applications
npm run test:client          # Run client tests
npm run test:server          # Run server tests

# 🔍 Code Quality & Linting
npm run lint                 # Check ESLint for both client and server
npm run lint:fix             # Auto-fix ESLint issues for both
npm run lint:client          # Check ESLint for client only
npm run lint:client:fix      # Auto-fix ESLint issues for client
npm run lint:server          # Check ESLint for server only
npm run lint:server:fix      # Auto-fix ESLint issues for server

# 🎨 Code Formatting
npm run format               # Format code with Prettier (both)
npm run format:check         # Check code formatting (both)
npm run format:client        # Format client code with Prettier
npm run format:client:check  # Check client code formatting
npm run format:server        # Format server code with Prettier
npm run format:server:check  # Check server code formatting

# 🧹 Cleanup & Maintenance
npm run clean                # Clean build files and dependencies
npm run clean:install        # Clean and reinstall all dependencies
```

### Client Commands
```bash
cd client

# 🚀 Development
npm start                    # Start development server (port 3000)
npm run build                # Build for production
npm test                     # Run tests with Jest
npm run eject                # Eject from Create React App

# 🔍 Code Quality
npm run lint                 # Run ESLint check
npm run lint:fix             # Auto-fix ESLint issues
npm run format               # Format with Prettier + Tailwind sorting
npm run format:check         # Check formatting without changes
npm run format:lint          # Format + lint fix in one command

# 📊 Analysis & Dependencies
npm run analyze              # Bundle analyzer (if configured)
npm run update               # Update dependencies
```

### Server Commands
```bash
cd server

# 🚀 Development
npm run dev                  # Start with nodemon (port 3001)
npm start                    # Start production server
npm test                     # Run tests with Jest
npm run test:watch           # Run tests in watch mode

# 🔍 Code Quality
npm run lint                 # Run ESLint check
npm run lint:fix             # Auto-fix ESLint issues
npm run format               # Format with Prettier
npm run format:check         # Check formatting without changes
npm run format:lint          # Format + lint fix in one command

# 🗄️ Database Operations
npm run seed                 # Seed database (if available)
npm run migrate              # Run migrations (if available)
npm run db:reset             # Reset database (if available)

# 🧹 Utilities
npm run clean:uploads        # Clean upload directory
npm run logs                 # View application logs
```

### 🤖 GitHub Actions Workflows

Our repository includes automated workflows that run on every commit and pull request:

#### 🔍 Code Quality Check (`code-quality.yml`)
- **Triggers**: Push and Pull Request to `main` or `develop`
- **Runs on**: Ubuntu with Node.js 18.x and 20.x
- **Steps**:
  - Install dependencies for both client and server
  - Run ESLint checks for both applications
  - Run Prettier format checks
  - Build client application
  - Auto-fix and commit changes (main branch only)

#### 🚀 Pull Request Check (`pr-check.yml`)
- **Triggers**: Pull Request to `main` or `develop`
- **Purpose**: Quick quality check before merge
- **Steps**:
  - ESLint validation
  - Prettier format validation
  - Build test
  - Success confirmation

#### 🎨 Auto Format Code (`auto-format.yml`)
- **Triggers**: Push to `main` (code files only)
- **Purpose**: Automatically fix and format code
- **Steps**:
  - Auto-fix ESLint issues
  - Format code with Prettier
  - Sort Tailwind classes automatically
  - Commit and push changes if needed

### 📋 Local Development Workflow

```bash
# 1. Setup project
git clone <repository-url>
cd blog-application
npm run install:all

# 2. Start development
npm run dev

# 3. Before committing - run quality checks
npm run lint:fix          # Fix linting issues
npm run format            # Format all code
npm run test              # Run tests

# 4. Commit changes
git add .
git commit -m "feat: add new feature"
git push

# 5. GitHub Actions will automatically:
# - Run quality checks
# - Auto-format if needed
# - Build and test the application
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

## 🤖 GitHub Actions & Code Quality

This project includes a comprehensive CI/CD pipeline and automated code quality management:

### 🔄 Continuous Integration Workflows

#### 📋 Automated Quality Checks
- **ESLint Analysis**: Ensures code follows best practices and catches potential bugs
- **Prettier Formatting**: Maintains consistent code style across the entire codebase
- **Tailwind CSS Sorting**: Automatically organizes Tailwind classes for better readability
- **Build Testing**: Validates that both client and server applications build successfully
- **Cross-platform Testing**: Tests on Node.js 18.x and 20.x environments

#### 🔧 Auto-fixing & Maintenance
- **Smart Auto-fixes**: Automatically resolves fixable ESLint issues
- **Code Formatting**: Applies Prettier formatting to all code files
- **Commit Integration**: Pushes fixes back to the repository when needed
- **Branch Protection**: Ensures code quality before merging pull requests

### 📊 Code Quality Metrics

Our codebase maintains high quality standards through:

```bash
# Current Quality Stats
✅ ESLint: 0 errors, 0 warnings
✅ Prettier: All files formatted correctly
✅ Build: All applications compile successfully
✅ Tailwind: Classes properly sorted and optimized
```

### 🛠️ Development Tools Integration

#### ESLint Configuration
- **Frontend**: React-specific rules with hooks and JSX best practices
- **Backend**: Node.js ES modules with modern JavaScript standards
- **Shared**: Prettier integration to avoid conflicts

#### Prettier Configuration
- **Frontend**: Includes Tailwind CSS class sorting plugin
- **Backend**: Standard JavaScript/Node.js formatting
- **Global**: Consistent spacing, quotes, and line endings

### 🚦 Workflow Status

Check the status of our automated workflows:
- ![Code Quality](https://github.com/username/repo/workflows/Code%20Quality%20Check/badge.svg)
- ![PR Check](https://github.com/username/repo/workflows/Pull%20Request%20Check/badge.svg)
- ![Auto Format](https://github.com/username/repo/workflows/Auto%20Format%20Code/badge.svg)

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

### ✅ Completed Features (v1.5)
- [x] **GitHub Actions CI/CD** - Automated testing and deployment
- [x] **Code Quality Automation** - ESLint + Prettier integration
- [x] **Tailwind Class Sorting** - Automatic CSS organization
- [x] **Cross-platform Scripts** - Development workflow automation
- [x] **Auto-fixing Pipeline** - Automatic code quality improvements

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
- [x] **CI/CD Pipeline** - ✅ Automated testing and deployment (GitHub Actions)
- [ ] **Testing Coverage** - Achieve 90%+ test coverage
- [ ] **Performance Monitoring** - Add APM tools
- [ ] **Security Scanning** - Automated vulnerability checks
- [ ] **Docker Containers** - Containerized deployment
- [ ] **Database Optimization** - Query performance improvements

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

[🐛 Report Bug](https://github.com/github-nqvnlc/blog-app/issues) • [✨ Request Feature](https://github.com/github-nqvnlc/blog-app/issues) • [📖 Documentation](./docs/) • [🤖 GitHub Actions](./.github/workflows/README.md)

*Built with ❤️ by Van Loc using modern web technologies*

</div> 
<!-- GITHUB_STATS:START -->
## 📊 GitHub Statistics

### 🔥 GitHub Stats
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=github-nqvnlc&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117)

### 💻 Most Used Languages
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=github-nqvnlc&layout=compact&theme=radical&hide_border=true&bg_color=0D1117)

### 🔥 GitHub Streak
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=github-nqvnlc&theme=radical&hide_border=true&background=0D1117)

### 📈 Activity Graph
![GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=github-nqvnlc&theme=react-dark&hide_border=true&bg_color=0D1117)

### 🏆 GitHub Trophies
![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=github-nqvnlc&theme=radical&no-frame=true&no-bg=true&margin-w=4)

### 📊 Profile Views
![Profile Views](https://komarev.com/ghpvc/?username=github-nqvnlc&color=brightgreen&style=flat-square&label=Profile+Views)

<!-- GITHUB_STATS:END -->

<!-- PROJECT_METRICS:START -->
## 📈 Project Metrics

| Metric | Client | Server | Total |
|--------|--------|--------|-------|
| 📄 Lines of Code | 5257 | 1561 | **6818** |
| 📁 Files | 71 | 25 | **96** |
| 📦 Dependencies | 70 | 46 | **181** |

### 🏗️ Tech Stack Overview
- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **DevOps**: GitHub Actions + ESLint + Prettier
- **Testing**: Jest + React Testing Library

### 📊 Last Updated
*Updated on: 2025-07-24 05:15 UTC*

<!-- PROJECT_METRICS:END -->
