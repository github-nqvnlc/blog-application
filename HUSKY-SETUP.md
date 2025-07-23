# 🐕 Husky Setup - Git Hooks cho Blog Application

Husky đã được setup để tự động kiểm tra code quality khi commit. Đây là hướng dẫn sử dụng.

## ✅ Setup đã hoàn thành

### 📦 Dependencies đã cài đặt:

- `husky`: Git hooks management
- `lint-staged`: Chạy linters trên staged files
- `@commitlint/cli`: Kiểm tra commit message format
- `@commitlint/config-conventional`: Rules cho conventional commits

### 🎯 Git Hooks đã setup:

#### 1. **Pre-commit Hook** (`.husky/pre-commit`)

- ✅ Tự động chạy ESLint và fix lỗi
- ✅ Tự động format code với Prettier
- ✅ Kiểm tra cho cả client (React) và server (Node.js)
- ✅ Format markdown và JSON files

#### 2. **Commit-msg Hook** (`.husky/commit-msg`)

- ✅ Kiểm tra commit message theo chuẩn conventional commits
- ✅ Đảm bảo commit messages có format đúng

## 🚀 Cách sử dụng

### 📝 Commit thông thường:

```bash
# Stage files bạn muốn commit
git add .

# Commit với message hợp lệ
git commit -m "feat: add new feature"
```

### 📋 Conventional Commit Format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### 🎯 Các types hợp lệ:

- `feat`: Tính năng mới
- `fix`: Sửa bug
- `docs`: Thay đổi documentation
- `style`: Changes không ảnh hưởng logic (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Thêm hoặc sửa tests
- `chore`: Maintenance tasks (build, deps, etc.)
- `perf`: Performance improvements
- `ci`: CI/CD changes
- `build`: Build system changes
- `revert`: Revert previous commit

### ✅ Ví dụ commit messages hợp lệ:

```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login validation bug"
git commit -m "docs: update API documentation"
git commit -m "style: format code with prettier"
git commit -m "refactor: restructure user service"
git commit -m "test: add unit tests for auth module"
git commit -m "chore: update dependencies"
```

### ❌ Ví dụ commit messages không hợp lệ:

```bash
git commit -m "fix stuff"              # Subject quá vague
git commit -m "Add new feature"        # Không có type
git commit -m "FEAT: add feature"      # Type phải lowercase
git commit -m "feat: Add new feature." # Không được kết thúc bằng dấu chấm
```

## 🛠️ Lint-staged Configuration

Khi commit, các files staged sẽ được xử lý tự động:

### 📱 Client Files (React):

- **Files**: `client/src/**/*.{js,jsx,ts,tsx}`
- **Actions**:
  - `npm run lint:client:fix` - Fix ESLint errors
  - `npm run format:client` - Format với Prettier + Tailwind sorting

### 🚀 Server Files (Node.js):

- **Files**: `server/**/*.js`
- **Actions**:
  - `npm run lint:server:fix` - Fix ESLint errors
  - `npm run format:server` - Format với Prettier

### 📄 Documentation Files:

- **Files**: `*.{md,json}`
- **Actions**:
  - `prettier --write` - Format markdown và JSON

## 🔧 Troubleshooting

### ❌ Nếu pre-commit hook fail:

1. Xem error messages để hiểu vấn đề
2. Fix manually nếu auto-fix không hoạt động
3. Add files đã fix và commit lại

### ❌ Nếu commit message bị reject:

1. Kiểm tra format theo conventional commits
2. Đảm bảo type hợp lệ và lowercase
3. Không kết thúc subject bằng dấu chấm
4. Giữ subject dưới 100 characters

### 🔄 Bypass hooks (không khuyến khích):

```bash
# Bypass pre-commit hook
git commit --no-verify -m "message"

# Bypass commit-msg hook
git commit --no-verify -m "any message format"
```

## 📊 Kết quả

Với Husky setup này:

- ✅ **Code quality** được đảm bảo trước khi commit
- ✅ **Consistent formatting** cho toàn dự án
- ✅ **Conventional commits** giúp generate changelogs
- ✅ **Team collaboration** được cải thiện
- ✅ **CI/CD pipelines** ít bị fail do code quality issues

## 🎯 Lợi ích

1. **Tự động**: Không cần nhớ chạy lint/format manually
2. **Consistent**: Tất cả team members có cùng code style
3. **Fast feedback**: Phát hiện issues ngay khi commit
4. **Professional**: Commit history đẹp và có ý nghĩa
5. **Integration**: Hoạt động tốt với GitHub Actions workflows

---

🎉 **Setup hoàn tất! Từ giờ mọi commit sẽ được kiểm tra tự động.**
