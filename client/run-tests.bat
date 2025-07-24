@echo off
echo Running React tests...
cd /d "%~dp0"
npm test -- --watchAll=false --passWithNoTests --verbose
pause 