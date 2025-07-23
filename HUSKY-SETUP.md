# 🐕 Husky Setup - Git Hooks for Blog Application

Husky has been set up to automatically check code quality when committing. This is the usage guide.

## ✅ Setup Completed

### 📦 Dependencies Installed:

- `husky`: Git hooks management
- `lint-staged`: Run linters on staged files
- `@commitlint/cli`: Check commit message format
- `@commitlint/config-conventional`: Rules for conventional commits

### 🎯 Git Hooks Configured:

#### 1. **Pre-commit Hook** (`.husky/pre-commit`)

- ✅ Automatically run ESLint and fix errors
- ✅ Automatically format code with Prettier
- ✅ Check both client (React) and server (Node.js)
- ✅ Format markdown and JSON files

#### 2. **Commit-msg Hook** (`.husky/commit-msg`)

- ✅ Check commit message according to conventional commits standard
- ✅ Ensure commit messages have correct format

## 🚀 How to Use

### 📝 Regular Commit:

```bash
# Stage files you want to commit
git add .

# Commit with valid message
git commit -m "feat: add new feature"
```

### 📋 Conventional Commit Format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### 🎯 Valid Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Changes that don't affect logic (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or fixing tests
- `chore`: Maintenance tasks (build, deps, etc.)
- `perf`: Performance improvements
- `ci`: CI/CD changes
- `build`: Build system changes
- `revert`: Revert previous commit

### ✅ Valid Commit Message Examples:

```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login validation bug"
git commit -m "docs: update API documentation"
git commit -m "style: format code with prettier"
git commit -m "refactor: restructure user service"
git commit -m "test: add unit tests for auth module"
git commit -m "chore: update dependencies"
```

### ❌ Invalid Commit Message Examples:

```bash
git commit -m "fix stuff"              # Subject too vague
git commit -m "Add new feature"        # Missing type
git commit -m "FEAT: add feature"      # Type must be lowercase
git commit -m "feat: Add new feature." # Cannot end with period
```

## 🛠️ Lint-staged Configuration

When committing, staged files will be processed automatically:

### 📱 Client Files (React):

- **Files**: `client/src/**/*.{js,jsx,ts,tsx}`
- **Actions**:
  - `npm run lint:client:fix` - Fix ESLint errors
  - `npm run format:client` - Format with Prettier + Tailwind sorting

### 🚀 Server Files (Node.js):

- **Files**: `server/**/*.js`
- **Actions**:
  - `npm run lint:server:fix` - Fix ESLint errors
  - `npm run format:server` - Format with Prettier

### 📄 Documentation Files:

- **Files**: `*.{md,json}`
- **Actions**:
  - `prettier --write` - Format markdown and JSON

## 🔧 Troubleshooting

### ❌ If pre-commit hook fails:

1. Check error messages to understand the issue
2. Fix manually if auto-fix doesn't work
3. Add fixed files and commit again

### ❌ If commit message is rejected:

1. Check format according to conventional commits
2. Ensure type is valid and lowercase
3. Don't end subject with period
4. Keep subject under 100 characters

### 🔄 Bypass hooks (not recommended):

```bash
# Bypass pre-commit hook
git commit --no-verify -m "message"

# Bypass commit-msg hook
git commit --no-verify -m "any message format"
```

## 📊 Results

With this Husky setup:

- ✅ **Code quality** is ensured before commit
- ✅ **Consistent formatting** for entire project
- ✅ **Conventional commits** help generate changelogs
- ✅ **Team collaboration** is improved
- ✅ **CI/CD pipelines** fail less due to code quality issues

## 🎯 Benefits

1. **Automated**: No need to remember running lint/format manually
2. **Consistent**: All team members have same code style
3. **Fast feedback**: Detect issues right when committing
4. **Professional**: Beautiful and meaningful commit history
5. **Integration**: Works well with GitHub Actions workflows

---

🎉 **Setup complete! From now on, every commit will be automatically checked.**
✅ Husky setup completed successfully!
