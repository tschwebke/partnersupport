REM set "source=D:\GitHubRepo\partnersupport\v4\TopPartnerQuestions2.xml"
REM for /f "delims=" %%D in ('dir /b /s /ad "D:\GitHubRepo\partnersupport\v4\*") do (
REM   copy "%source%" "%%~D"
REM )
d:
cd D:\GitHubRepo\partnersupport\v4
dir /ad /s /b > filename1
for /F %%i IN (filename1) do copy D:\GitHubRepo\partnersupport\v4\TopPartnerQuestions2.xml %%i