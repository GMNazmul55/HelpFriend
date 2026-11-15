# Hasib_001613_QuizApp

Django quiz app with participant accounts, profile editing, randomized questions/options, quiz attempts, scores and leaderboards.

## UI and project changes

- White background with the exact green accent `#00EA64`; text uses a deep green shade.
- Linear-style sidebar, green summary boxes, simple forms, quiz cards and ranking tables.
- All eight page templates redesigned under `quiz/templates/quiz/`.
- Shared styles updated in `quiz/static/quiz/css/styles.css`.
- Quiz navigation lives in `quiz/static/quiz/js/quiz.js`; selected answers remain available when moving between questions. It includes progress and answer validation. With JavaScript disabled, all questions are displayed with a standard submit button.
- Outer folder renamed from `Quiz_App` to `Hasib_001613_QuizApp`.
- Django configuration package renamed from `Name_ID_Quiz` to `Hasib_001613_QuizApp`.
- Updated `manage.py`, configuration `settings.py`, `urls.py`, `asgi.py` and `wsgi.py` references and descriptions.
- The navigation brand and browser titles use the new name.
- `requirements.txt` pins the Django version used for verification.

The outer folder contains `manage.py`. The inner folder with the same name contains `settings.py`, `urls.py`, `asgi.py` and `wsgi.py`.

## Run on Ubuntu / Linux

Extract the ZIP under `~/project/`, then run:

```bash
cd ~/project/Hasib_001613_QuizApp
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Use a supported Python version such as 3.12, 3.13 or 3.14.

If venv is missing, install it using `sudo apt install python3-venv python3-pip`, then retry creating the environment.

## Run on Windows (Command Prompt / CMD)

Extract the ZIP into the `project` folder under your Windows user folder:

```bat
cd /d "%USERPROFILE%\project\Hasib_001613_QuizApp"
py -m venv .venv
.venv\Scripts\activate.bat
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Run on Windows PowerShell

Open PowerShell in the folder containing `manage.py`:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py runserver
```

This uses the virtual environment directly and does not require an activation script.

## Open and use the app

Open http://127.0.0.1:8000/. Register or log in, complete your participant profile, then choose a quiz. Keep the server terminal open. Stop the server with Ctrl+C.

To create an admin account, activate the environment and run:

```bash
python manage.py createsuperuser
```

Then start the server and open http://127.0.0.1:8000/admin/ to manage quiz content.

## Data and reruns

The bundled database is retained. To bring across changes made in your own local copy after the upload, copy its `db.sqlite3` into the new project before running migrations.

After the first setup, open the project folder, activate the environment and run `python manage.py runserver`.
