# AdventureAI

<h1>Instruction:</h1>

1. Create virtual environment: python -m venv env
2. Activate environment:
    For Windows: env/Scripts/Activate.ps1
    For MacOS: source env/bin/activate
3. Install required packages:
    pip install -r requirements.txt
4. In "settings.py" change DATABASE variable to your database settings
5. Init database settings:
    python manage.py makemigrations
    python manage.py migrate
6. Init static files:
    python manage.py collectstatic
7. Run server:
    python manage.py runserver

To see API: http://localhost:8000/swagger