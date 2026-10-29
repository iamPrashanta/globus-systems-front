@echo off
setlocal
cd /d "%~dp0"
title Globus Systems - Local Development

where node >nul 2>nul
if errorlevel 1 goto missing_node
where npm >nul 2>nul
if errorlevel 1 goto missing_node

if exist "node_modules\.bin\next.cmd" goto run
echo Installing project dependencies...
call npm ci
if errorlevel 1 goto failed

:run
echo Starting Globus Systems...
echo Open the Local URL printed below in your browser.
echo Keep this window open. Press Ctrl+C to stop the server.
call npm run dev
if errorlevel 1 goto failed
exit /b 0

:missing_node
echo Node.js and npm are required. Install Node.js 20.9 or newer,
echo then double-click this file again.
pause
exit /b 1

:failed
echo The project could not start. See the error above.
pause
exit /b 1
