# Hasib_001613_JobPortal

A Django job portal with recruiter and job seeker accounts, job listings, skill matching, applications, resume uploads and company logos.

The UI uses a white background and the green accent `#00EA64`.

## Name changes

| Location | Change |
| --- | --- |
| Outer project folder | `Job_Portal_With_Django/` → `Hasib_001613_JobPortal/` |
| Django configuration package | `MdRiyadulIslamRatul_REG_ICT_WADP_L4_001145_JobPortal/` → `Hasib_001613_JobPortal/` |
| `manage.py` | `DJANGO_SETTINGS_MODULE` points to `Hasib_001613_JobPortal.settings`. |
| `Hasib_001613_JobPortal/settings.py` | `ROOT_URLCONF` points to `Hasib_001613_JobPortal.urls`; `WSGI_APPLICATION` points to `Hasib_001613_JobPortal.wsgi.application`. |
| `Hasib_001613_JobPortal/wsgi.py` | The module description and `DJANGO_SETTINGS_MODULE` use the new package name. |
| `templates/base.html` and page templates | The navigation brand, browser titles and login text use `Hasib_001613_JobPortal`. |
| `jobs/static/jobs/css/style.css` | Added a small style for the longer navigation name. |
| `requirements.txt` | Added the Django and Pillow versions used for verification. |

The outer folder contains `manage.py`. The inner folder with the same name contains `settings.py`, `urls.py`, `wsgi.py` and `__init__.py`.

## Run on Ubuntu / Linux

Use Python 3.12, 3.13 or 3.14. Extract the ZIP under `~/project/`, then open a terminal:

```bash
cd ~/project/Hasib_001613_JobPortal
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Open http://127.0.0.1:8000/ in your browser. Keep the terminal open while using the site. Stop the server with Ctrl+C.

If creating the environment reports that venv is missing:

```bash
sudo apt update
sudo apt install python3-venv python3-pip
```

Then repeat the environment setup commands.

## Run again later

```bash
cd ~/project/Hasib_001613_JobPortal
source .venv/bin/activate
python manage.py runserver
```

## Optional admin account

With the environment active:

```bash
python manage.py createsuperuser
```

Then run the server and open http://127.0.0.1:8000/admin/.

## Using data from an existing local copy

To carry over data created after the original ZIP was uploaded, stop the old server and copy its `db.sqlite3` and `media/` into this project before running migrations.
