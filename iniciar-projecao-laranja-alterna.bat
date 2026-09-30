@echo off
REM Opens the screensaver full screen on both projectors using Microsoft Edge.
REM Projector 1 = main display, Projector 2 = extended display to its right.
REM If the displays are not 1920 px wide, change 1920 below to the width of the main display.

set PAGE=file:///%~dp0conference-screensaver-laranja-alterna.html
set PAGE=%PAGE:\=/%
set EDGE="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not exist %EDGE% set EDGE="C:\Program Files\Microsoft\Edge\Application\msedge.exe"


start "" %EDGE% --kiosk "%PAGE%#1" --edge-kiosk-type=fullscreen --no-first-run --window-position=0,0 --user-data-dir="%TEMP%\laranja-alterna1"
timeout /t 2 >nul
start "" %EDGE% --kiosk "%PAGE%#2" --edge-kiosk-type=fullscreen --no-first-run --window-position=1920,0 --user-data-dir="%TEMP%\laranja-alterna2"
