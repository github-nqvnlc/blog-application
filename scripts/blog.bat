@echo off
setlocal enabledelayedexpansion

echo Blog Application Management Script (Windows)
echo.

if "%1"=="install:client" goto :install_client
if "%1"=="install-client" goto :install_client
if "%1"=="install:server" goto :install_server
if "%1"=="install-server" goto :install_server
if "%1"=="install:all" goto :install_all
if "%1"=="install-all" goto :install_all
if "%1"=="setup" goto :install_all

if "%1"=="dev:client" goto :dev_client
if "%1"=="dev-client" goto :dev_client
if "%1"=="dev:server" goto :dev_server
if "%1"=="dev-server" goto :dev_server
if "%1"=="dev" goto :dev_all

if "%1"=="start:client" goto :start_client
if "%1"=="start-client" goto :start_client
if "%1"=="start:server" goto :start_server
if "%1"=="start-server" goto :start_server
if "%1"=="start" goto :start_all

if "%1"=="build:client" goto :build_client
if "%1"=="build-client" goto :build_client
if "%1"=="build:server" goto :build_server
if "%1"=="build-server" goto :build_server
if "%1"=="build" goto :build_all

if "%1"=="test:client" goto :test_client
if "%1"=="test-client" goto :test_client
if "%1"=="test:server" goto :test_server
if "%1"=="test-server" goto :test_server
if "%1"=="test" goto :test_all

if "%1"=="lint:client" goto :lint_client
if "%1"=="lint-client" goto :lint_client
if "%1"=="lint:client:fix" goto :lint_client_fix
if "%1"=="lint-client-fix" goto :lint_client_fix
if "%1"=="lint:server" goto :lint_server
if "%1"=="lint-server" goto :lint_server
if "%1"=="lint:server:fix" goto :lint_server_fix
if "%1"=="lint-server-fix" goto :lint_server_fix
if "%1"=="lint" goto :lint_all
if "%1"=="lint:fix" goto :lint_all_fix
if "%1"=="lint-fix" goto :lint_all_fix

if "%1"=="format:client" goto :format_client
if "%1"=="format-client" goto :format_client
if "%1"=="format:server" goto :format_server
if "%1"=="format-server" goto :format_server
if "%1"=="format:check" goto :format_client_check
if "%1"=="format-check" goto :format_client_check
if "%1"=="format:server:check" goto :format_server_check
if "%1"=="format-server-check" goto :format_server_check
if "%1"=="format" goto :format_all
if "%1"=="format:check:all" goto :format_all_check
if "%1"=="format-check-all" goto :format_all_check

if "%1"=="clean:client" goto :clean_client
if "%1"=="clean-client" goto :clean_client
if "%1"=="clean:server" goto :clean_server
if "%1"=="clean-server" goto :clean_server
if "%1"=="clean" goto :clean_all
if "%1"=="clean:install" goto :clean_install
if "%1"=="clean-install" goto :clean_install

if "%1"=="help" goto :help
if "%1"=="-h" goto :help
if "%1"=="--help" goto :help
if "%1"=="" goto :help

echo [ERROR] Unknown command: %1
echo.
goto :help

:install_client
echo [INFO] Installing client dependencies...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
call npm install
if errorlevel 1 (
    echo [ERROR] Failed to install client dependencies!
    exit /b 1
)
cd ..
echo [SUCCESS] Client dependencies installed successfully!
goto :end

:install_server
echo [INFO] Installing server dependencies...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
call npm install
if errorlevel 1 (
    echo [ERROR] Failed to install server dependencies!
    exit /b 1
)
cd ..
echo [SUCCESS] Server dependencies installed successfully!
goto :end

:install_all
echo [BLOG-APP] Installing all dependencies...
call :install_client
call :install_server
echo [SUCCESS] All dependencies installed successfully!
goto :end

:dev_client
echo [INFO] Starting client development server...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
call npm start
goto :end

:dev_server
echo [INFO] Starting server development...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
call npm run dev
goto :end

:dev_all
echo [WARNING] Development mode requires 2 separate terminals:
echo Terminal 1: scripts\blog.bat dev:client
echo Terminal 2: scripts\blog.bat dev:server
echo.
echo [INFO] Or use: npm run dev:client ^& npm run dev:server
goto :end

:start_client
echo [INFO] Starting client production server...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
call npm start
goto :end

:start_server
echo [INFO] Starting server production...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
call npm start
goto :end

:start_all
echo [WARNING] Production mode requires 2 separate terminals:
echo Terminal 1: scripts\blog.bat start:client
echo Terminal 2: scripts\blog.bat start:server
echo.
echo [INFO] Or use: npm run start:client ^& npm run start:server
goto :end

:build_client
echo [INFO] Building client with increased memory limit...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Failed to build client!
    exit /b 1
)
echo [SUCCESS] Client built successfully!
cd ..
goto :eof

:build_server
echo [INFO] Building server...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
call npm run build
if errorlevel 1 (
    echo [ERROR] Failed to build server!
    exit /b 1
)
cd ..
echo [SUCCESS] Server built successfully!
goto :end

:build_all
echo [BLOG-APP] Building all components...
call :build_client
call :build_server
echo [SUCCESS] All components built successfully!
goto :end

:test_client
echo [INFO] Running client tests...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
call npm test -- --watchAll=false
if errorlevel 1 (
    echo [ERROR] Client tests failed!
    exit /b 1
)
cd ..
echo [SUCCESS] Client tests passed!
goto :end

:test_server
echo [INFO] Running server tests...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
call npm test
if errorlevel 1 (
    echo [ERROR] Server tests failed!
    exit /b 1
)
cd ..
echo [SUCCESS] Server tests passed!
goto :end

:test_all
echo [BLOG-APP] Running all tests...
call :test_client
call :test_server
echo [SUCCESS] All tests passed!
goto :end

:lint_client
echo [INFO] Linting client code...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
call npm run lint
if errorlevel 1 (
    echo [ERROR] Client linting failed!
    exit /b 1
)
cd ..
echo [SUCCESS] Client code linted successfully!
goto :end

:lint_client_fix
echo [INFO] Linting and fixing client code...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
call npm run lint:fix
if errorlevel 1 (
    echo [ERROR] Client linting failed!
    exit /b 1
)
cd ..
echo [SUCCESS] Client code linted and fixed successfully!
goto :end

:format_client
echo [INFO] Formatting client code...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
call npm run format
if errorlevel 1 (
    echo [ERROR] Client formatting failed!
    exit /b 1
)
cd ..
echo [SUCCESS] Client code formatted successfully!
goto :end

:format_client_check
echo [INFO] Checking client code formatting...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
call npm run format:check
if errorlevel 1 (
    echo [ERROR] Client code needs formatting!
    exit /b 1
)
cd ..
echo [SUCCESS] Client code formatting is correct!
goto :end

:lint_server
echo [INFO] Linting server code...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
call npm run lint
if errorlevel 1 (
    echo [ERROR] Server linting failed!
    exit /b 1
)
cd ..
echo [SUCCESS] Server code linted successfully!
goto :end

:lint_server_fix
echo [INFO] Linting and fixing server code...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
call npm run lint:fix
if errorlevel 1 (
    echo [ERROR] Server linting failed!
    exit /b 1
)
cd ..
echo [SUCCESS] Server code linted and fixed successfully!
goto :end

:format_server
echo [INFO] Formatting server code...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
call npm run format
if errorlevel 1 (
    echo [ERROR] Server formatting failed!
    exit /b 1
)
cd ..
echo [SUCCESS] Server code formatted successfully!
goto :end

:format_server_check
echo [INFO] Checking server code formatting...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
call npm run format:check
if errorlevel 1 (
    echo [ERROR] Server code needs formatting!
    exit /b 1
)
cd ..
echo [SUCCESS] Server code formatting is correct!
goto :end

:lint_all
echo [BLOG-APP] Linting all code...
call :lint_client
call :lint_server
echo [SUCCESS] All code linted successfully!
goto :end

:lint_all_fix
echo [BLOG-APP] Linting and fixing all code...
call :lint_client_fix
call :lint_server_fix
echo [SUCCESS] All code linted and fixed successfully!
goto :end

:format_all
echo [BLOG-APP] Formatting all code...
call :format_client
call :format_server
echo [SUCCESS] All code formatted successfully!
goto :end

:format_all_check
echo [BLOG-APP] Checking all code formatting...
call :format_client_check
call :format_server_check
echo [SUCCESS] All code formatting is correct!
goto :end

:clean_client
echo [INFO] Cleaning client dependencies...
if not exist "client" (
    echo [ERROR] Directory 'client' does not exist!
    exit /b 1
)
cd client
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul
cd ..
echo [SUCCESS] Client dependencies cleaned!
goto :end

:clean_server
echo [INFO] Cleaning server dependencies...
if not exist "server" (
    echo [ERROR] Directory 'server' does not exist!
    exit /b 1
)
cd server
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul
cd ..
echo [SUCCESS] Server dependencies cleaned!
goto :end

:clean_all
echo [BLOG-APP] Cleaning all dependencies...
call :clean_client
call :clean_server
echo [SUCCESS] All dependencies cleaned!
goto :end

:clean_install
echo [BLOG-APP] Clean install: removing and reinstalling all dependencies...
call :clean_all
call :install_all
echo [SUCCESS] Clean install completed!
goto :end

:help
echo Blog Application Management Script
echo.
echo Usage:
echo   scripts\blog.bat [command]
echo.
echo Install Commands:
echo   install:client     - Install client dependencies only
echo   install:server     - Install server dependencies only
echo   install:all        - Install all dependencies
echo   setup             - Same as install:all
echo.
echo Development Commands:
echo   dev:client        - Start client development server
echo   dev:server        - Start server development
echo   dev               - Show instructions for running both
echo.
echo Production Commands:
echo   start:client      - Start client production server
echo   start:server      - Start server production
echo   start             - Show instructions for running both
echo.
echo Build Commands:
echo   build:client      - Build client for production
echo   build:server      - Build server for production
echo   build             - Build all components
echo.
echo Test Commands:
echo   test:client       - Run client tests
echo   test:server       - Run server tests
echo   test              - Run all tests
echo.
echo Lint Commands:
echo   lint:client       - Lint client code
echo   lint:client:fix   - Lint and fix client code
echo   lint:server       - Lint server code
echo   lint:server:fix   - Lint and fix server code
echo   lint              - Lint all code
echo   lint:fix          - Lint and fix all code
echo.
echo Format Commands:
echo   format:client     - Format client code
echo   format:server     - Format server code
echo   format:check      - Check client code formatting
echo   format:server:check - Check server code formatting
echo   format            - Format all code
echo   format:check:all  - Check all code formatting
echo.
echo Clean Commands:
echo   clean:client      - Clean client dependencies
echo   clean:server      - Clean server dependencies
echo   clean             - Clean all dependencies
echo   clean:install     - Clean and reinstall all
echo.
echo Other Commands:
echo   help              - Show this help
echo.
echo Examples:
echo   scripts\blog.bat install:all
echo   scripts\blog.bat dev:client
echo   scripts\blog.bat build
echo   scripts\blog.bat test
echo   scripts\blog.bat lint:fix
echo   scripts\blog.bat format
goto :end

:end
endlocal 