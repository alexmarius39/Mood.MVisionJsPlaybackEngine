:: Created by npm, please don't edit manually.
@SET SCRIPT="%~dp0\.\ares-push.js"

@IF EXIST "%~dp0\x86\node.exe" (
    @SETLOCAL
    @SET "PATH=%~dp0\x86;%PATH%"
    node %SCRIPT% %*
) ELSE (
  node  %SCRIPT% %*
)
