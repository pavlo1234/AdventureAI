# AdventureAI

<h1>Instruction:</h1>

1. Create virtual environment: ../server> python -m venv env
2. Activate environment:
    For Windows: ../server> env/Scripts/Activate.ps1
    For MacOS: ../server> source myvenv/bin/activate
3. Install required packages:
    ../server> pip install -r project/requirements.txt 
4. Init database settings:
    ../server/project> python manage.py makemigrations
    ../server/project> python manage.py migrate
5. Run server:
    ../server/project> python manage.py runserver

To see API: http://localhost:8000/docs
