# 🧪 CI/CD Workflow Testing Guide

## ✅ Những gì đã chuẩn bị

### 1. 🔧 Server Testing Setup

- ✅ Đã thêm Jest và Supertest vào `server/package.json`
- ✅ Đã tạo các script test cần thiết:
  - `npm test` - Chạy unit tests với coverage
  - `npm run test:integration` - Chạy integration tests
- ✅ Đã tạo file test cơ bản:
  - `server/__tests__/server.test.js` - Test basic server functionality
  - `server/__tests__/integration/api.integration.test.js` - Test API endpoints
  - `server/controllers/__tests__/postControllers.test.js` - Test controllers

### 2. 🏥 Health Endpoint

- ✅ Đã thêm `/health` endpoint vào `server/server.js`
- ✅ Health endpoint trả về JSON với status, message, timestamp, và environment

### 3. 🔍 ESLint Configuration

- ✅ Đã cập nhật `server/eslint.config.js` để support Jest globals
- ✅ Đã thêm Jest globals: `jest`, `describe`, `it`, `test`, `expect`, etc.

### 4. 🎨 Code Formatting

- ✅ Đã format tất cả code với Prettier
- ✅ Client và server code đều đã được format

## 🚀 Cách test workflow

### Option 1: Test trên GitHub Actions (Recommended)

1. **Tạo test branch:**

   ```bash
   git checkout -b test/ci-cd-workflow
   git add .
   git commit -m "feat: add server tests and health endpoint for CI/CD"
   git push origin test/ci-cd-workflow
   ```

2. **Tạo Pull Request:**
   - Tạo PR từ `test/ci-cd-workflow` vào `main` hoặc `develop`
   - Workflow sẽ tự động chạy

3. **Hoặc push vào main/develop/staging:**
   ```bash
   git checkout main
   git merge test/ci-cd-workflow
   git push origin main
   ```

### Option 2: Test Local (có thể gặp lỗi trên Windows)

```bash
# Install dependencies
npm run install:all

# Test linting
npm run lint

# Test formatting
npm run format:check

# Test client
cd client && npm test -- --coverage --watchAll=false --ci

# Test server
cd ../server && npm test

# Test build
cd .. && npm run build:client
```

## 📋 Workflow sẽ test những gì

### 🛡️ Quality Gate Job

- ✅ ESLint checking
- ✅ Prettier format checking
- ✅ Security audit
- ✅ Dependencies installation

### 🧪 Test Matrix Job

- ✅ Test trên Node.js 18.x, 20.x, 21.x
- ✅ Test trên Ubuntu và Windows
- ✅ Client tests với coverage
- ✅ Server tests với coverage
- ✅ Upload coverage to Codecov

### 🏗️ Build & Performance Job

- ✅ Build client application
- ✅ Bundle analysis
- ✅ Production build test
- ✅ Upload build artifacts

### 🔄 Integration Tests Job

- ✅ MongoDB service setup
- ✅ Integration tests
- ✅ Health endpoint testing (`/health`)
- ✅ API endpoint testing (`/api/posts`)

### 🚀 Deployment Jobs

- ✅ Deploy to staging (develop branch)
- ✅ Deploy to production (main branch)
- ✅ Smoke tests

## 🎯 Expected Results

### ✅ Nếu thành công:

- Tất cả jobs sẽ có status "✅ Success"
- Coverage reports sẽ được upload
- Build artifacts sẽ được tạo
- Health checks sẽ pass

### ❌ Nếu có lỗi:

- Workflow sẽ dừng ở job bị lỗi
- Logs chi tiết sẽ hiện trong GitHub Actions
- Email notification sẽ được gửi (nếu được config)

## 🔧 Troubleshooting

### Server Test Issues

```bash
# Nếu Jest có lỗi ES modules
npm install --save-dev @babel/preset-env

# Nếu MongoDB connection issues
export DB_URI="mongodb://testuser:testpass@localhost:27017/test-blog"
```

### Client Test Issues

```bash
# Nếu React tests fail
cd client && npm test -- --verbose
```

### Build Issues

```bash
# Clear cache và rebuild
npm run clean
npm run install:all
npm run build
```

## 📊 Monitoring

- Workflow results: `.github/workflows` actions tab
- Coverage reports: Codecov dashboard
- Build artifacts: Actions artifacts section
- Deployment logs: Deployment job logs

## 🎉 Next Steps

1. **Sau khi workflow pass:**
   - Review coverage reports
   - Check build artifacts
   - Test deployed applications

2. **Optimization:**
   - Thêm performance tests
   - Thêm E2E tests
   - Setup notification webhooks

3. **Production ready:**
   - Setup environment secrets
   - Configure deployment targets
   - Setup monitoring & alerts

---

**💡 Tip:** Workflow này đã được tối ưu hóa cho dự án blog application với React frontend và Node.js backend. Tất cả dependencies và scripts đã được setup sẵn!
