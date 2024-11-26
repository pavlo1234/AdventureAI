# Шлях до вашого Django-проекту
$ProjectPath = "D:\WorkFiles\4_year\project\AdventureAI\server"

# Шлях до віртуального середовища
$VenvPath = "$ProjectPath\env"

# Перевірка існування віртуального середовища
if (-Not (Test-Path -Path "$VenvPath\Scripts\Activate.ps1")) {
    Write-Host "[ERROR] Venv doesn't exist at path: $VenvPath" -ForegroundColor Red
    exit 1
}

# Запуск Django-сервера в новій консолі
Write-Host "Starting Django-server ..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "
    cd $ProjectPath;
    & $VenvPath\Scripts\Activate.ps1;
    python $ProjectPath\project\manage.py runserver 127.0.0.1:8000;
"

# Пауза для запуску сервера
Start-Sleep -Seconds 5

# Запуск ngrok у новій консолі
Write-Host "Starting ngrok ..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "
    ngrok http --url=nearby-lucky-earwig.ngrok-free.app 80;
"

Write-Host "Django-сервер & ngrok started" -ForegroundColor Yellow

# Змінна з шляхом до nginx.exe
$nginxPath = "C:\Program Files\nginx-1.26.2\nginx.exe"  # Вкажіть правильний шлях до nginx.exe

# Перевіряємо, чи Nginx вже запущений
$process = Get-Process nginx -ErrorAction SilentlyContinue
if ($process) {
    Write-Output "Nginx is working"
} else {
    Write-Output "Nginx startup..."
    Start-Process -FilePath $nginxPath -NoNewWindow
    Write-Output "Nginx has been started."
}
