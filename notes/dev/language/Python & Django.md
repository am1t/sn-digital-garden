---
title: Notes on python and Django
---

## Notes on Python & Django

Taking the course https://www.youtube.com/watch?v=rHux0gMZ3Eg

- Django has a great community -- someone always there to answer
- In built features for ORM, authentication, caching

### pipenv
- pipenv is important for managing virtual environments for projects -- `pip3 install pipenv`
> Pipenv is primarily meant to provide users and developers of applications with an easy method to setup a working environment

- Install django using pipenv -- `pipenv install django`
- Enter virtual env through `pipenv shell`

### django-admin
- startproject - to create a new django project
	- Creates all the necessary files - main are `urls.py`, `settings.py` and others for deployment
	- `manage.py` is a wrapper around django-admin. **Use this** as this considers the project's settings.
	- `python manage.py runserver` to run the server
	- By default, installed apps for admin, auth, messages and staticfiles
	- `python manage.py startapp <app-name>` to create a custom new app
		- register apps in `installed-apps` in `settings.py`

### Apps in django
- created app has admin module, apps (config), models, tests and view (request handler).
- Function definition for request hanling in `views.py`.
- URL mapping to function in new file by name `urls.py` (by convention) with array parameter `urlpatterns`
- **ALWAYS end the route (url) with a forward slash "/"**
- Django Debug Toolbar (django-debug-toolbar) is an important way to debug django apps