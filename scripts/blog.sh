#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${CYAN}[BLOG-APP]${NC} $1"
}

# Function to check if directory exists
check_directory() {
    if [ ! -d "$1" ]; then
        print_error "Directory '$1' does not exist!"
        exit 1
    fi
}

# Install functions
install_client() {
    print_status "Installing client dependencies..."
    check_directory "client"
    cd client
    npm install
    if [ $? -eq 0 ]; then
        print_success "Client dependencies installed successfully!"
    else
        print_error "Failed to install client dependencies!"
        exit 1
    fi
    cd ..
}

install_server() {
    print_status "Installing server dependencies..."
    check_directory "server"
    cd server
    npm install
    if [ $? -eq 0 ]; then
        print_success "Server dependencies installed successfully!"
    else
        print_error "Failed to install server dependencies!"
        exit 1
    fi
    cd ..
}

install_all() {
    print_header "Installing all dependencies..."
    install_client
    install_server
    print_success "All dependencies installed successfully!"
}

# Development functions
dev_client() {
    print_status "Starting client development server..."
    check_directory "client"
    cd client
    npm start
}

dev_server() {
    print_status "Starting server development..."
    check_directory "server"
    cd server
    npm run dev
}

dev_all() {
    print_warning "Development mode requires 2 separate terminals:"
    echo "Terminal 1: ./scripts/blog.sh dev:client"
    echo "Terminal 2: ./scripts/blog.sh dev:server"
    echo ""
    print_status "Or use: npm run dev:client & npm run dev:server"
}

# Start functions (production)
start_client() {
    print_status "Starting client production server..."
    check_directory "client"
    cd client
    npm start
}

start_server() {
    print_status "Starting server production..."
    check_directory "server"
    cd server
    npm start
}

start_all() {
    print_warning "Production mode requires 2 separate terminals:"
    echo "Terminal 1: ./scripts/blog.sh start:client"
    echo "Terminal 2: ./scripts/blog.sh start:server"
    echo ""
    print_status "Or use: npm run start:client & npm run start:server"
}

# Build functions
build_client() {
    print_status "Building client with increased memory limit..."
    check_directory "client"
    cd client
    npm run build
    if [ $? -eq 0 ]; then
        print_success "Client built successfully!"
    else
        print_error "Failed to build client!"
        exit 1
    fi
    cd ..
}

build_server() {
    print_status "Building server..."
    check_directory "server"
    cd server
    npm run build
    if [ $? -eq 0 ]; then
        print_success "Server built successfully!"
    else
        print_error "Failed to build server!"
        exit 1
    fi
    cd ..
}

build_all() {
    print_header "Building all components..."
    build_client
    build_server
    print_success "All components built successfully!"
}

# Test functions
test_client() {
    print_status "Running client tests..."
    check_directory "client"
    cd client
    npm test -- --watchAll=false
    if [ $? -eq 0 ]; then
        print_success "Client tests passed!"
    else
        print_error "Client tests failed!"
        exit 1
    fi
    cd ..
}

test_server() {
    print_status "Running server tests..."
    check_directory "server"
    cd server
    npm test
    if [ $? -eq 0 ]; then
        print_success "Server tests passed!"
    else
        print_error "Server tests failed!"
        exit 1
    fi
    cd ..
}

test_all() {
    print_header "Running all tests..."
    test_client
    test_server
    print_success "All tests passed!"
}

# Lint functions
lint_client() {
    print_status "Linting client code..."
    check_directory "client"
    cd client
    npm run lint
    if [ $? -eq 0 ]; then
        print_success "Client code linted successfully!"
    else
        print_error "Client linting failed!"
        exit 1
    fi
    cd ..
}

lint_client_fix() {
    print_status "Linting and fixing client code..."
    check_directory "client"
    cd client
    npm run lint:fix
    if [ $? -eq 0 ]; then
        print_success "Client code linted and fixed successfully!"
    else
        print_error "Client linting failed!"
        exit 1
    fi
    cd ..
}

format_client() {
    print_status "Formatting client code..."
    check_directory "client"
    cd client
    npm run format
    if [ $? -eq 0 ]; then
        print_success "Client code formatted successfully!"
    else
        print_error "Client formatting failed!"
        exit 1
    fi
    cd ..
}

format_client_check() {
    print_status "Checking client code formatting..."
    check_directory "client"
    cd client
    npm run format:check
    if [ $? -eq 0 ]; then
        print_success "Client code formatting is correct!"
    else
        print_error "Client code needs formatting!"
        exit 1
    fi
    cd ..
}

lint_server() {
    print_status "Linting server code..."
    check_directory "server"
    cd server
    npm run lint
    if [ $? -eq 0 ]; then
        print_success "Server code linted successfully!"
    else
        print_error "Server linting failed!"
        exit 1
    fi
    cd ..
}

lint_server_fix() {
    print_status "Linting and fixing server code..."
    check_directory "server"
    cd server
    npm run lint:fix
    if [ $? -eq 0 ]; then
        print_success "Server code linted and fixed successfully!"
    else
        print_error "Server linting failed!"
        exit 1
    fi
    cd ..
}

format_server() {
    print_status "Formatting server code..."
    check_directory "server"
    cd server
    npm run format
    if [ $? -eq 0 ]; then
        print_success "Server code formatted successfully!"
    else
        print_error "Server formatting failed!"
        exit 1
    fi
    cd ..
}

format_server_check() {
    print_status "Checking server code formatting..."
    check_directory "server"
    cd server
    npm run format:check
    if [ $? -eq 0 ]; then
        print_success "Server code formatting is correct!"
    else
        print_error "Server code needs formatting!"
        exit 1
    fi
    cd ..
}

lint_all() {
    print_header "Linting all code..."
    lint_client
    lint_server
    print_success "All code linted successfully!"
}

lint_all_fix() {
    print_header "Linting and fixing all code..."
    lint_client_fix
    lint_server_fix
    print_success "All code linted and fixed successfully!"
}

format_all() {
    print_header "Formatting all code..."
    format_client
    format_server
    print_success "All code formatted successfully!"
}

format_all_check() {
    print_header "Checking all code formatting..."
    format_client_check
    format_server_check
    print_success "All code formatting is correct!"
}

# Clean functions
clean_client() {
    print_status "Cleaning client dependencies..."
    check_directory "client"
    cd client
    rm -rf node_modules package-lock.json
    if [ $? -eq 0 ]; then
        print_success "Client dependencies cleaned!"
    else
        print_error "Failed to clean client dependencies!"
        exit 1
    fi
    cd ..
}

clean_server() {
    print_status "Cleaning server dependencies..."
    check_directory "server"
    cd server
    rm -rf node_modules package-lock.json
    if [ $? -eq 0 ]; then
        print_success "Server dependencies cleaned!"
    else
        print_error "Failed to clean server dependencies!"
        exit 1
    fi
    cd ..
}

clean_all() {
    print_header "Cleaning all dependencies..."
    clean_client
    clean_server
    print_success "All dependencies cleaned!"
}

clean_install() {
    print_header "Clean install: removing and reinstalling all dependencies..."
    clean_all
    install_all
    print_success "Clean install completed!"
}

# Help function
show_help() {
    echo "Blog Application Management Script"
    echo ""
    echo "Usage:"
    echo "  ./scripts/blog.sh [command]"
    echo ""
    echo "Install Commands:"
    echo "  install:client     - Install client dependencies only"
    echo "  install:server     - Install server dependencies only"
    echo "  install:all        - Install all dependencies"
    echo "  setup             - Same as install:all"
    echo ""
    echo "Development Commands:"
    echo "  dev:client        - Start client development server"
    echo "  dev:server        - Start server development"
    echo "  dev               - Show instructions for running both"
    echo ""
    echo "Production Commands:"
    echo "  start:client      - Start client production server"
    echo "  start:server      - Start server production"
    echo "  start             - Show instructions for running both"
    echo ""
    echo "Build Commands:"
    echo "  build:client      - Build client for production"
    echo "  build:server      - Build server for production"
    echo "  build             - Build all components"
    echo ""
    echo "Test Commands:"
    echo "  test:client       - Run client tests"
    echo "  test:server       - Run server tests"
    echo "  test              - Run all tests"
    echo ""
    echo "Lint Commands:"
    echo "  lint:client       - Lint client code"
    echo "  lint:client:fix   - Lint and fix client code"
    echo "  lint:server       - Lint server code"
    echo "  lint:server:fix   - Lint and fix server code"
    echo "  lint              - Lint all code"
    echo "  lint:fix          - Lint and fix all code"
    echo ""
    echo "Format Commands:"
    echo "  format:client     - Format client code"
    echo "  format:server     - Format server code"
    echo "  format:check      - Check client code formatting"
    echo "  format:server:check - Check server code formatting"
    echo "  format            - Format all code"
    echo "  format:check:all  - Check all code formatting"
    echo ""
    echo "Clean Commands:"
    echo "  clean:client      - Clean client dependencies"
    echo "  clean:server      - Clean server dependencies"
    echo "  clean             - Clean all dependencies"
    echo "  clean:install     - Clean and reinstall all"
    echo ""
    echo "Other Commands:"
    echo "  help              - Show this help"
    echo ""
    echo "Examples:"
    echo "  ./scripts/blog.sh install:all"
    echo "  ./scripts/blog.sh dev:client"
    echo "  ./scripts/blog.sh build"
    echo "  ./scripts/blog.sh test"
    echo "  ./scripts/blog.sh lint:fix"
    echo "  ./scripts/blog.sh format"
}

# Main script logic
case "$1" in
    # Install commands
    "install:client"|"install-client")
        install_client
        ;;
    "install:server"|"install-server")
        install_server
        ;;
    "install:all"|"install-all"|"setup")
        install_all
        ;;
    
    # Development commands
    "dev:client"|"dev-client")
        dev_client
        ;;
    "dev:server"|"dev-server")
        dev_server
        ;;
    "dev")
        dev_all
        ;;
    
    # Production commands
    "start:client"|"start-client")
        start_client
        ;;
    "start:server"|"start-server")
        start_server
        ;;
    "start")
        start_all
        ;;
    
    # Build commands
    "build:client"|"build-client")
        build_client
        ;;
    "build:server"|"build-server")
        build_server
        ;;
    "build")
        build_all
        ;;
    
    # Test commands
    "test:client"|"test-client")
        test_client
        ;;
    "test:server"|"test-server")
        test_server
        ;;
    "test")
        test_all
        ;;
    
    # Lint commands
    "lint:client"|"lint-client")
        lint_client
        ;;
    "lint:client:fix"|"lint-client-fix")
        lint_client_fix
        ;;
    "lint:server"|"lint-server")
        lint_server
        ;;
    "lint:server:fix"|"lint-server-fix")
        lint_server_fix
        ;;
    "lint")
        lint_all
        ;;
    "lint:fix"|"lint-fix")
        lint_all_fix
        ;;
    
    # Format commands
    "format:client"|"format-client")
        format_client
        ;;
    "format:server"|"format-server")
        format_server
        ;;
    "format:check"|"format-check")
        format_client_check
        ;;
    "format:server:check"|"format-server-check")
        format_server_check
        ;;
    "format")
        format_all
        ;;
    "format:check:all"|"format-check-all")
        format_all_check
        ;;
    
    # Clean commands
    "clean:client"|"clean-client")
        clean_client
        ;;
    "clean:server"|"clean-server")
        clean_server
        ;;
    "clean")
        clean_all
        ;;
    "clean:install"|"clean-install")
        clean_install
        ;;
    
    # Help
    "help"|"-h"|"--help")
        show_help
        ;;
    
    # Default case
    "")
        print_warning "No command specified. Showing help..."
        echo ""
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac 