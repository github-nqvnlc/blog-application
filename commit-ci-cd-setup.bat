@echo off
echo [INFO] Committing CI/CD workflow setup...

echo [STEP 1] Adding all changes...
git add .

echo [STEP 2] Checking git status...
git status

echo [STEP 3] Committing changes...
git commit -m "feat: add complete test suite for CI/CD workflow

- Setup Jest/Supertest for server (3 test files)
- Create React component tests (7 test files) 
- Add health endpoint and ESLint Jest config
- Fix Testing Library linting issues
- Ready for GitHub Actions workflow"

echo [SUCCESS] Changes committed successfully!
echo [INFO] You can now push to trigger the CI/CD workflow:
echo git push origin main
echo.
echo [INFO] Or create a test branch:
echo git checkout -b test/ci-cd-workflow
echo git push origin test/ci-cd-workflow

pause 