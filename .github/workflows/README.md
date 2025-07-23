# GitHub Actions Workflows

This project uses GitHub Actions to automatically check and maintain code quality. Below are the workflows that have been set up:

## 📋 Workflow List

### Core Quality Workflows

#### 1. 🔍 Code Quality Check (`code-quality.yml`)

- **Triggers**: Push and Pull Request to `main` or `develop`
- **Purpose**: Comprehensive code quality verification
- **Runs on**: Ubuntu with Node.js 18.x and 20.x
- **Steps**:
  - ✅ ESLint check for client and server
  - ✅ Prettier format check for client and server
  - ✅ Build test for client
  - ✅ Auto-fix and commit (only when pushing to main)

#### 2. 🚀 Pull Request Check (`pr-check.yml`)

- **Triggers**: Pull Request to `main` or `develop`
- **Purpose**: Quick code quality check for PRs
- **Runs on**: Ubuntu with Node.js 20.x
- **Steps**:
  - 🔍 ESLint check
  - 🎨 Prettier format check
  - 🏗️ Build test
  - ✅ Result notification

#### 3. 🎨 Auto Format Code (`auto-format.yml`)

- **Triggers**: Push to `main` (only when code changes occur)
- **Purpose**: Automatically format and fix code
- **Runs on**: Ubuntu with Node.js 20.x
- **Steps**:
  - 🔧 Auto-fix ESLint issues
  - 🎨 Auto-format with Prettier
  - 📤 Commit and push changes (if any)

### Advanced CI/CD Workflows

#### 4. 🚀 Advanced CI/CD Pipeline (`ci-cd-advanced.yml`)

- **Triggers**: Push to `main`/`develop`/`staging`, PRs, manual dispatch
- **Purpose**: Production-ready deployment pipeline
- **Features**:
  - 🛡️ Quality Gate with security audit
  - 🧪 Matrix testing (Node.js 18.x, 20.x, 21.x on Ubuntu/Windows)
  - 🏗️ Build & performance analysis
  - 🔄 Integration tests with MongoDB
  - 🚀 Automated deployment to staging/production
  - 📊 Comprehensive pipeline summary

#### 5. 📊 Code Analysis & Reporting (`code-analysis.yml`)

- **Triggers**: Push, PRs, weekly schedule, manual dispatch
- **Purpose**: Deep code analysis and security scanning
- **Components**:
  - 🔍 SonarCloud analysis
  - 🔒 Security analysis (CodeQL + Snyk)
  - 📈 Performance analysis (Lighthouse CI + Web Vitals)
  - 🧹 Code quality metrics (ESLint + complexity)
  - 🐛 Dependency vulnerability scanning
  - 📊 Weekly comprehensive reports

### README & Documentation Automation

#### 6. 📝 README Automation (`readme-automation.yml`)

- **Triggers**: Daily schedule, manual dispatch, workflow changes
- **Purpose**: Keep README.md fresh and up-to-date
- **Features**:
  - 📊 GitHub statistics and activity graphs
  - 🏆 Profile stats and trophies
  - 📈 Live project metrics
  - 🌟 Contributors showcase

### Fun & Utility Workflows

#### 7. 🎮 Fun Automation & Utilities (`fun-automation.yml`)

- **Triggers**: Weekly/daily schedules, issue events, PR events
- **Purpose**: Community engagement and project maintenance
- **Features**:
  - 🔄 Automated dependency updates
  - 🎯 Auto-labeling for issues
  - 🎉 Welcome messages for new contributors
  - 📊 Weekly project statistics
  - 🎮 Daily developer inspiration (quotes + facts)
  - 🧹 Automated workflow cleanup

## 🛡️ Branch Protection

These workflows help ensure:

- ✅ All merged code adheres to coding standards
- ✅ No ESLint errors or format issues
- ✅ Build process works correctly
- ✅ Code is automatically formatted when needed

## 🔧 Setup & Configuration

### Prerequisites

Before using these workflows, ensure you have:

1. **Required Secrets** (in GitHub repository settings):

   ```
   SONAR_TOKEN          # For SonarCloud analysis
   SNYK_TOKEN           # For security scanning
   WAKATIME_API_KEY     # For coding stats (optional)
   GH_TOKEN             # For enhanced GitHub stats
   ```

2. **Configuration Files**:
   - `lighthouserc.json` - Lighthouse CI configuration
   - `.eslintrc.js` - ESLint rules for both client and server
   - `.prettierrc` - Prettier formatting rules

### Local Development Setup

To run these checks locally before committing:

```bash
# Check code quality for the entire project
npm run lint
npm run format:check

# Auto-fix issues
npm run lint:fix
npm run format

# Run full analysis locally
npm run test:coverage
npm run build
```

### Environment Setup

For full workflow functionality:

```bash
# Install additional development tools
npm install -g lighthouse-ci bundlesize
npm install --save-dev @lighthouse-ci/cli

# Setup Lighthouse CI
mkdir -p .lighthouseci
echo "token: YOUR_LHCI_TOKEN" > .lighthouseci/lighthouserc.yml
```

## 📝 Available Scripts

### Root Level

- `npm run lint` - Check ESLint for both client and server
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check format without changes

### Client Level

- `cd client && npm run lint` - ESLint for React app
- `cd client && npm run format` - Prettier for React app (with Tailwind sorting)

### Server Level

- `cd server && npm run lint` - ESLint for Node.js API
- `cd server && npm run format` - Prettier for Node.js API

## 🚨 Error Handling

If workflows fail:

1. **ESLint errors**: Run `npm run lint:fix` to auto-fix
2. **Format errors**: Run `npm run format` to format code
3. **Build errors**: Check dependencies and code syntax

## ⚙️ Customization

To customize workflows:

- Edit `.yml` files in this directory
- Change Node.js versions in `strategy.matrix`
- Add/remove branches in `on.push.branches`
- Adjust paths filter in `auto-format.yml`

## 🔄 Workflow Details

### Code Quality Check Workflow

This is the main workflow that runs comprehensive checks:

```yaml
# Triggers on push/PR to main or develop
# Tests with Node.js 18.x and 20.x
# Includes auto-fix job for main branch
```

**Matrix Strategy**: Tests across multiple Node.js versions to ensure compatibility.

**Auto-fix Job**: Only runs on push to main branch, automatically fixes and commits code quality issues.

### Pull Request Check Workflow

Lightweight workflow for quick PR validation:

```yaml
# Quick checks for pull requests
# Single Node.js version (20.x)
# Focused on validation, not fixing
```

**Fast Feedback**: Provides quick feedback to developers on PR quality.

**No Auto-fixing**: Only validates code, doesn't make changes.

### Auto Format Workflow

Specialized workflow for code maintenance:

```yaml
# Triggers only on code file changes
# Automatically fixes and commits
# Includes change detection
```

**Smart Triggering**: Only runs when actual code files are modified.

**Change Detection**: Checks if formatting changes were made before committing.

## 📊 Workflow Status

Monitor workflow execution:

- **Success**: All checks pass, code is ready
- **Failure**: Issues found, check logs for details
- **Skipped**: No relevant changes detected

## 🎯 Best Practices

### For Developers

1. **Run local checks** before pushing
2. **Use meaningful commit messages**
3. **Keep PRs focused** and small
4. **Address workflow failures** promptly

### For Maintainers

1. **Review workflow logs** regularly
2. **Update Node.js versions** as needed
3. **Adjust rules** based on project needs
4. **Monitor performance** of workflows

## 🔧 Troubleshooting

### Common Issues

**Node.js Version Mismatch**

```bash
# Update .nvmrc file or workflow Node.js versions
node-version: ['18.x', '20.x']
```

**Cache Issues**

```bash
# Workflows use npm cache, sometimes needs refresh
cache: 'npm'
```

**Permission Errors**

```bash
# Ensure GITHUB_TOKEN has necessary permissions
token: ${{ secrets.GITHUB_TOKEN }}
```

### Debugging Workflows

1. **Check workflow logs** in GitHub Actions tab
2. **Verify environment variables** are set correctly
3. **Test locally** with same Node.js version
4. **Review recent changes** that might affect workflows

## 📈 Performance Metrics

### Typical Execution Times

- **PR Check**: ~3-5 minutes
- **Code Quality**: ~5-8 minutes (due to matrix)
- **Auto Format**: ~2-4 minutes

### Optimization Tips

- **Cache dependencies** (already implemented)
- **Run only on relevant changes** (path filtering)
- **Use appropriate triggers** (push vs PR)

## 🔐 Security Considerations

### Token Usage

- Workflows use `GITHUB_TOKEN` for authentication
- Limited permissions for security
- No custom secrets required

### Code Safety

- Auto-formatting only on main branch
- No arbitrary code execution
- All changes are tracked in git history

## 🌟 Workflow Features Summary

### 🔄 Automation Benefits

Our comprehensive workflow system provides:

1. **Quality Assurance**
   - ✅ Automated code quality checks
   - ✅ Security vulnerability scanning
   - ✅ Performance monitoring
   - ✅ Dependency management

2. **Developer Experience**
   - 🚀 Fast feedback on pull requests
   - 🎯 Auto-labeling and issue management
   - 🎉 Welcome messages for new contributors
   - 📊 Real-time project statistics

3. **Content Management**
   - 📝 Automated README updates
   - 🏆 GitHub statistics showcase
   - 📈 Live project metrics

4. **Fun & Engagement**
   - 🎮 Daily developer inspiration
   - 🎯 Programming quotes and facts
   - 📊 Weekly project reports
   - 🌟 Contributor recognition

### 📊 Workflow Statistics

- **Total Workflows**: 7
- **Automated Jobs**: 25+
- **Coverage Areas**: Quality, Security, Performance, Documentation, Fun
- **Triggers**: Push, PR, Schedule, Manual, Issue events
- **Platforms**: Ubuntu, Windows (matrix testing)
- **Node.js Versions**: 18.x, 20.x, 21.x

### 🎯 Advanced Features

- **Matrix Testing**: Multi-platform and multi-version compatibility
- **Quality Gates**: Prevent poor code from being merged
- **Automatic Deployment**: Staging and production environments
- **Performance Monitoring**: Lighthouse CI with Web Vitals
- **Security Scanning**: CodeQL and Snyk integration
- **Community Automation**: Issue labeling and contributor welcome
- **Content Freshness**: Daily README updates with project metrics

---

💡 **Tip**: Use `[skip ci]` in commit messages to bypass workflows when necessary.

🔗 **Related Documentation**:

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Node.js Setup Action](https://github.com/actions/setup-node)
- [ESLint Documentation](https://eslint.org/docs/)
- [Prettier Documentation](https://prettier.io/docs/)
- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci)
- [SonarCloud Documentation](https://sonarcloud.io/documentation)
- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
