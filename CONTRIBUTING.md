# Contributing to Modern Blog Application

We love your input! We want to make contributing to this blog application as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## 🚀 Quick Start for Contributors

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- Git
- Code editor (VS Code recommended)

### Setup Development Environment

1. **Fork and Clone**
   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR-USERNAME/blog-applicationlication.git
   cd blog-application
   ```

2. **Install Dependencies**
   ```bash
   # Install root dependencies and client/server dependencies
   npm run install:all
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   
   # Edit the .env files with your local configuration
   ```

4. **Start Development Servers**
   ```bash
   # Start both client and server
   npm run dev
   ```

## 🔄 Development Workflow

### Branch Strategy
- `main` - Production ready code
- `develop` - Development branch (default for PRs)
- `feature/feature-name` - New features
- `bugfix/bug-description` - Bug fixes
- `hotfix/critical-fix` - Critical fixes for production

### Making Changes

1. **Create a Branch**
   ```bash
   # Always branch from develop
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Add tests for new features
   - Update documentation if needed

3. **Test Your Changes**
   ```bash
   # Run tests for both client and server
   npm test
   
   # Run linting
   npm run lint
   
   # Manual testing
   npm run dev
   ```

4. **Commit Your Changes**
   ```bash
   # Use conventional commit messages
   git add .
   git commit -m "feat: add user avatar upload functionality"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   # Then create a Pull Request on GitHub
   ```

## 📝 Coding Standards

### General Guidelines
- **DRY (Don't Repeat Yourself)** - Avoid code duplication
- **KISS (Keep It Simple, Stupid)** - Write simple, understandable code
- **Single Responsibility** - Each function/component should have one job
- **Consistent Naming** - Use descriptive, consistent naming conventions

### Frontend (React) Standards

#### Component Structure
```javascript
// ✅ Good component structure
import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ title, content, author, publishedAt }) => {
  return (
    <article className="blog-post">
      <h1>{title}</h1>
      <p className="author">By {author}</p>
      <time>{publishedAt}</time>
      <div className="content">{content}</div>
    </article>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};

export default BlogPost;
```

#### Hooks Guidelines
```javascript
// ✅ Custom hooks should start with 'use'
const useUserProfile = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(userId).then(setUser).finally(() => setLoading(false));
  }, [userId]);
  
  return { user, loading };
};
```

#### State Management
- Use **Redux Toolkit** for global state
- Use **React Query** for server state
- Use local **useState** for component-specific state

### Backend (Node.js) Standards

#### API Structure
```javascript
// ✅ Good controller structure
const createPost = async (req, res, next) => {
  try {
    const { title, content, categories } = req.body;
    
    // Validation
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required'
      });
    }
    
    // Business logic
    const post = await Post.create({
      title,
      content,
      author: req.user.id,
      categories
    });
    
    // Success response
    res.status(201).json({
      success: true,
      data: post,
      message: 'Post created successfully'
    });
  } catch (error) {
    next(error);
  }
};
```

#### Database Queries
```javascript
// ✅ Efficient database queries
const getPosts = async (page = 1, limit = 10) => {
  const posts = await Post.find({ published: true })
    .populate('author', 'name avatar')
    .populate('categories', 'name slug')
    .sort({ createdAt: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .lean(); // Use lean() for read-only operations
    
  return posts;
};
```

### Code Style

#### Naming Conventions
- **Variables & Functions**: camelCase (`userName`, `calculateTotal`)
- **Components**: PascalCase (`BlogPost`, `UserProfile`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_FILE_SIZE`)
- **Files**: kebab-case (`user-profile.js`, `blog-post.jsx`)

#### ESLint Configuration
We use ESLint with these rules:
- No unused variables
- No console.log in production
- Prefer const over let
- Always use semicolons
- Max line length: 100 characters

## 🧪 Testing Guidelines

### Frontend Testing
```javascript
// ✅ Component testing with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import BlogPost from '../BlogPost';

describe('BlogPost', () => {
  const mockProps = {
    title: 'Test Post',
    content: 'Test content',
    author: 'John Doe',
    publishedAt: '2024-01-01'
  };

  test('renders blog post correctly', () => {
    render(<BlogPost {...mockProps} />);
    
    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('By John Doe')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const onClickMock = jest.fn();
    render(<BlogPost {...mockProps} onClick={onClickMock} />);
    
    fireEvent.click(screen.getByText('Test Post'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
```

### Backend Testing
```javascript
// ✅ API endpoint testing with Jest and Supertest
describe('POST /api/posts', () => {
  test('should create a new post', async () => {
    const postData = {
      title: 'Test Post',
      content: 'Test content',
      categories: ['tech']
    };

    const response = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${authToken}`)
      .send(postData)
      .expect(201);

    expect(response.body.success).toBe(true);
    expect(response.body.data.title).toBe(postData.title);
  });

  test('should validate required fields', async () => {
    const response = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${authToken}`)
      .send({}) // Empty body
      .expect(400);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toContain('required');
  });
});
```

## 📚 Documentation Standards

### Code Comments
```javascript
// ✅ Good comments explain WHY, not WHAT
/**
 * Calculates the reading time for a blog post
 * Uses average reading speed of 200 words per minute
 * @param {string} content - The blog post content
 * @returns {number} Reading time in minutes
 */
const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(' ').length;
  return Math.ceil(wordCount / wordsPerMinute);
};
```

### README Updates
When adding new features:
- Update the relevant README.md
- Add usage examples
- Update environment variables if needed
- Add to the feature list

### API Documentation
For new endpoints, document:
- HTTP method and URL
- Request parameters
- Request body schema
- Response schema
- Example requests/responses
- Error codes

## 🐛 Bug Reports

### Before Submitting
1. Check existing issues
2. Try to reproduce the bug
3. Test on different browsers/devices
4. Gather system information

### Bug Report Template
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
- Node.js version:
- MongoDB version:

**Additional context**
Any other context about the problem.
```

## ✨ Feature Requests

### Feature Request Template
```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Other solutions you've considered.

**Additional context**
Screenshots, mockups, or examples.

**Implementation ideas**
If you have ideas about how to implement this.
```

## 🔍 Code Review Process

### For Contributors
- Keep PRs small and focused
- Write descriptive PR titles and descriptions
- Respond to feedback promptly
- Update documentation if needed

### For Reviewers
- Be constructive and respectful
- Focus on code quality and maintainability
- Test the changes locally if possible
- Approve when ready for merge

### PR Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or properly documented)
- [ ] Commits are meaningful and atomic

## 🏷️ Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(auth): add social login with Google
fix(api): resolve user profile update issue
docs(readme): update installation instructions
style(client): format components with prettier
refactor(server): optimize database queries
test(auth): add unit tests for login function
chore(deps): update dependencies to latest versions
```

## 🚀 Deployment

### Development Deployment
Contributors can test their changes in a development environment:

```bash
# Build for development
npm run build

# Deploy to staging (if access provided)
npm run deploy:staging
```

### Production Deployment
Only maintainers can deploy to production:
- Automatic deployment from `main` branch
- Manual approval required
- Rollback procedures in place

## 📞 Getting Help

### Community Channels
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and community chat
- **Email**: For private matters (contact maintainer)

### Maintainer Contact
- **Van Loc**: [@locnv14](https://github.com/github-nqvnlc)

## 🎯 Contribution Recognition

We recognize all types of contributions:
- Code contributions
- Documentation improvements
- Bug reports
- Feature suggestions
- Community support

Contributors will be:
- Listed in our README
- Mentioned in release notes
- Invited to maintainer team (for significant contributors)

## 📄 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

**Thank you for contributing to the Modern Blog Application! 🎉**

Your contributions help make this project better for everyone in the community. 