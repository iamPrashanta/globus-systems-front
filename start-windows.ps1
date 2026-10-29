# Run this script in PowerShell after extracting the project on Windows.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    throw "Node.js and npm are required. Install Node.js 20.9+ before running this project."
}
npm install
if ($LASTEXITCODE -ne 0) { throw "npm install failed." }
npm run dev
