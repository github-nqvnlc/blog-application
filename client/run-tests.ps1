# PowerShell script to run tests
Write-Host "Running React tests..." -ForegroundColor Green

# Set location to current directory
Set-Location $PSScriptRoot

try {
    # Run tests
    npm test -- --watchAll=false --passWithNoTests --verbose
    Write-Host "Tests completed!" -ForegroundColor Green
} catch {
    Write-Host "Error running tests: $_" -ForegroundColor Red
}

# Keep window open
Read-Host "Press Enter to continue..." 