# 📁 Scripts Directory

This directory contains management scripts for the Blog Application - powerful shell/batch scripts that handle all project operations.

## 📋 Files

- `blog.sh` - **Main shell script** for Git Bash, Linux, macOS (replaces all npm scripts)
- `blog.bat` - **Main batch script** for Windows Command Prompt (replaces all npm scripts)
- `README.md` - This documentation file

## 🚀 Usage

### Via npm scripts (Recommended)

```bash
# Install commands
npm run install:client    # Install client dependencies only
npm run install:server    # Install server dependencies only
npm run install:all       # Install both client and server
npm run setup             # Same as install:all

# Development commands
npm run dev               # Show dev instructions
npm run dev:client        # Start client dev server
npm run dev:server        # Start server dev mode

# Production commands
npm run start             # Show start instructions
npm run start:client      # Start client production
npm run start:server      # Start server production

# Build commands
npm run build             # Build both client and server
npm run build:client      # Build client only
npm run build:server      # Build server only

# Test commands
npm run test              # Run all tests
npm run test:client       # Run client tests
npm run test:server       # Run server tests

# Lint commands
npm run lint              # Lint all code
npm run lint:client       # Lint client code
npm run lint:server       # Lint server code

# Clean commands
npm run clean             # Clean all dependencies
npm run clean:client      # Clean client dependencies
npm run clean:server      # Clean server dependencies
npm run clean:install     # Clean and reinstall all
```

### Direct script execution (Advanced)

#### Git Bash / Linux / macOS

```bash
./scripts/blog.sh install:all
./scripts/blog.sh dev:client
./scripts/blog.sh build
./scripts/blog.sh test
./scripts/blog.sh clean:install
./scripts/blog.sh help
```

#### Windows Command Prompt

```cmd
scripts\blog.bat install:all
scripts\blog.bat dev:client
scripts\blog.bat build
scripts\blog.bat test
scripts\blog.bat clean:install
scripts\blog.bat help
```

## ✨ Features

- ✅ **Complete project management** - All project operations handled through these unified scripts
- ✅ **Cross-platform compatibility** - Works on all operating systems
- ✅ **Comprehensive commands** - Install, dev, build, test, lint, clean operations
- ✅ **Error handling** - Robust error checking and clear messages
- ✅ **Color output** - Beautiful colored output (shell script)
- ✅ **Help system** - Detailed usage instructions and examples
- ✅ **Alternative syntax** - Supports both `:` and `-` separators (e.g., `dev:client` or `dev-client`)

## 🎯 Benefits

- **Single source of truth** - All project operations managed through unified scripts
- **No complex npm command chaining** - Simple, readable script logic
- **Better error messages** - Clear feedback when operations fail
- **Development workflow optimization** - Streamlined commands for common tasks
- **Cross-platform consistency** - Same commands work everywhere

## 📝 Notes

- **Scripts install dependencies separately** for client and server directories
- **No root folder dependencies** - Keeps root clean and focused
- **Automatic platform detection** - Scripts choose the right executable
- **npm scripts are now wrappers** - All real logic is in shell/batch scripts
- **Unified management** - Single scripts handle all project operations
