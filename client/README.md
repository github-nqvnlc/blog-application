# 📝 Blog Frontend Application

A modern, responsive blog frontend built with React 18, featuring a rich text editor, user authentication, and comprehensive content management.

## ✨ Features

### 🎨 **User Interface**
- Modern and responsive design with Tailwind CSS
- DaisyUI components for consistent styling
- Dark/Light theme support
- Mobile-first responsive layout

### 📖 **Content Management**
- Rich text editor with TipTap
- Image upload and cropping functionality
- Code syntax highlighting
- Article categories and tagging
- Search and filtering capabilities

### 👤 **User Authentication & Management**
- User registration and login
- Profile management with avatar upload
- Role-based access control (Admin/User)
- JWT token authentication

### 🎯 **Blog Features**
- Article creation and editing
- Comment system with nested replies
- Article pagination and infinite scroll
- Social sharing buttons
- Breadcrumb navigation

### ⚡ **Performance & Experience**
- Optimized with React Query for data fetching
- Redux Toolkit for state management
- Form validation with React Hook Form
- Toast notifications for user feedback
- Lazy loading and code splitting

## 🛠️ Tech Stack

### **Core**
- **React 18** - UI library with latest features
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **React Query (TanStack)** - Server state management

### **Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **React Icons** - Icon library

### **Editor & Forms**
- **TipTap** - Rich text editor
- **React Hook Form** - Form management
- **React Easy Crop** - Image cropping
- **Lowlight** - Code syntax highlighting

### **HTTP & API**
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notifications

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Backend server running (see `/server` directory)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd client

# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

### Environment Variables

Create a `.env` file in the client directory:

```env
# API Base URL
REACT_APP_API_BASE_URL=http://localhost:3001/api

# Upload URL for images
REACT_APP_UPLOAD_URL=http://localhost:3001

# Other configurations
REACT_APP_SITE_NAME=Your Blog Name
```

## 📁 Project Structure

```
client/
├── public/                    # Static assets
│   ├── images/               # Public images
│   └── index.html           # HTML template
├── src/
│   ├── assets/              # Images and static resources
│   ├── components/          # Reusable React components
│   │   ├── comments/        # Comment system components
│   │   ├── crop/           # Image cropping components
│   │   └── editor/         # Rich text editor components
│   ├── constants/           # Application constants
│   ├── data/               # Mock/static data
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   │   ├── admin/          # Admin dashboard pages
│   │   ├── articleDetail/  # Article detail page
│   │   ├── blog/           # Blog listing page
│   │   ├── home/           # Homepage
│   │   ├── login/          # Authentication pages
│   │   ├── profile/        # User profile page
│   │   └── register/       # User registration
│   ├── services/           # API service functions
│   ├── store/              # Redux store configuration
│   │   ├── actions/        # Redux actions
│   │   └── reducers/       # Redux reducers
│   └── utils/              # Utility functions
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Styling & Theming

### Color Palette
- **Primary**: `#1565D8` (Blue)
- **Dark Light**: `#5A7184`
- **Dark Hard**: `#0D2436`
- **Dark Soft**: `#183B56`

### Typography
- **Open Sans** - Primary font family
- **Roboto** - Secondary font family

### DaisyUI Configuration
The project uses DaisyUI with custom prefix `d-` to avoid conflicts:
```javascript
daisyui: {
  themes: [],
  base: false,
  styled: true,
  utils: true,
  prefix: "d-",
}
```

## 📚 Available Scripts

```bash
# Development
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App

# Linting & Formatting
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

## 🔧 Key Features Implementation

### Rich Text Editor
```javascript
// TipTap editor with extensions
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
```

### State Management
```javascript
// Redux Toolkit store
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducers'

// React Query for server state
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
```

### API Integration
```javascript
// Axios configuration
import axios from 'axios'

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})
```

## 🔒 Authentication Flow

1. **Registration/Login** - User credentials sent to backend
2. **JWT Token** - Received and stored in localStorage
3. **Protected Routes** - Automatic redirection for unauthorized access
4. **Token Refresh** - Automatic token renewal
5. **Role-based Access** - Admin/User permissions

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints** - Tailwind's responsive utilities
- **Flexible Layouts** - CSS Grid and Flexbox
- **Touch-friendly** - Optimized for touch interactions

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- Header.test.js
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables

### Environment Variables for Production
```env
REACT_APP_API_BASE_URL=https://your-api-domain.com/api
REACT_APP_UPLOAD_URL=https://your-api-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Author

**Van Loc (locnv14)**

---

## 🔗 Related Projects

- **Backend API**: See `/server` directory for the Node.js backend
- **Admin Dashboard**: Advanced admin features for content management
- **Mobile App**: React Native version (coming soon)

---

*Built with ❤️ using React and modern web technologies*
