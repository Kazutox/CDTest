@echo off
echo Starting Build Process For Plugins
set back=%cd%
for /d %%i in (.\plugins\*) do (
cd "%%i"

npm install
npm run build

cd %back%
)
echo Plugins Built Successfully