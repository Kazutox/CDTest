@echo off
echo Starting Build Process For Core
cd ./core
echo %CD%
call npm install
call ng build --prod
echo Core Is Built