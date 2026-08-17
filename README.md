# Civic Tracker - Full-Stack Civic Grievance Platform

[![Frontend](https://img.shields.io/badge/frontend-React%2019%20%2B%20Vite-61DAFB?logo=react&logoColor=white)](frontend/package.json)
[![Backend](https://img.shields.io/badge/backend-Django%20%2B%20DRF-092E20?logo=django&logoColor=white)](backend/requirement.txt)
[![License](https://img.shields.io/badge/license-Not%20specified-lightgrey)](#license)

Civic Tracker is a full-stack civic grievance platform where citizens can report local issues and authorities can review, track, and resolve them through a role-based workflow.

## Table of Contents

- [What This Project Does](#what-this-project-does)
- [Why This Project Is Useful](#why-this-project-is-useful)
- [System Overview](#system-overview)
- [How to Get Started](#how-to-get-started)
- [Usage Examples](#usage-examples)
- [Who Maintains and Contributes](#who-maintains-and-contributes)
- [License](#license)

## What This Project Does

Civic Tracker helps communities and civic authorities manage public issue reporting end to end:

- Citizens can sign up, log in, and file complaints with category, location, description, and optional image evidence.
- Authorities can view all complaints, update status through controlled transitions, and monitor dashboard metrics.
- Citizens can confirm resolutions or reopen complaints and submit feedback.

### Core Domain Workflow

1. Citizen creates complaint (`PENDING`)
2. Authority moves complaint to `IN_PROGRESS`
3. Authority marks complaint `RESOLVED_BY_AUTHORITY`
4. Citizen confirms:
  - `true` -> `CLOSED`
  - `false` -> `REOPENED` (feedback can be submitted)

## Why This Project Is Useful

- Clear role separation (`CITIZEN` and `AUTHORITY`) with JWT-based access control.
- Structured civic lifecycle with guarded status transitions.
- Complaint evidence support through image uploads.
- Useful admin analytics and complaint management views.
- End-to-end local development setup with modern React + Django tooling.

## System Overview

### Tech Stack

- Frontend: React 19, Vite, React Router, Tailwind CSS 4, Axios, Framer Motion, Recharts
- Backend: Django, Django REST Framework, Simple JWT, django-cors-headers
- Database: SQLite (default)

### Project Structure

- [frontend](frontend)
- [backend](backend)

Important entry points:

- Frontend app routes: [frontend/src/App.jsx](frontend/src/App.jsx)
- Frontend API client: [frontend/src/services/api.js](frontend/src/services/api.js)
- Django settings: [backend/backend/settings.py](backend/backend/settings.py)
- Root API routing: [backend/backend/urls.py](backend/backend/urls.py)
- Complaint API viewset: [backend/complaints/views.py](backend/complaints/views.py)

## How to Get Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm 9+

### 1. Clone the repository

```bash
git clone https://github.com/darshan3187/HackX.git
cd HackX
```

### 2. Backend setup (Django)

```bash
cd backend
python -m venv .venv
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
# macOS/Linux
# source .venv/bin/activate

pip install -r requirement.txt
python manage.py migrate
python manage.py runserver
```

Backend will run at:

- http://127.0.0.1:8000

Optional: create an authority/admin account

```bash
python manage.py createsuperuser
```

### 3. Frontend setup (React + Vite)

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

- http://127.0.0.1:5173

### 4. Run backend tests

```bash
cd backend
python manage.py test
```

## Usage Examples

### Authentication flow

1. Register a user via API or UI signup page
2. Log in to receive JWT access/refresh tokens
3. Frontend stores tokens in local storage and uses `Authorization: Bearer <access_token>`

### API example: register and login

```bash
# Register
curl -X POST http://127.0.0.1:8000/api/users/register/ \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","email":"alice@example.com","password":"StrongPass123"}'

# Login
curl -X POST http://127.0.0.1:8000/api/token/ \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","password":"StrongPass123"}'
```

### API example: create complaint (authenticated)

```bash
curl -X POST http://127.0.0.1:8000/api/complaints/ \
  -H "Authorization: Bearer <access_token>" \
  -F "title=Pothole near market" \
  -F "description=Large pothole causing traffic risk" \
  -F "category=POTHOLE" \
  -F "street=Main Street" \
  -F "area=Central" \
  -F "city=Sample City" \
  -F "state=Sample State" \
  -F "pincode=123456" \
  -F "image=@/path/to/photo.jpg"
```

### Main frontend routes

- `/` -> Public home
- `/login` -> Login
- `/signup` -> Signup
- `/dashboard` -> Citizen dashboard (protected)
- `/dashboard/report` -> Report issue form
- `/admin` -> Authority dashboard (protected)

## Who Maintains and Contributes

### Maintainer

- Repository owner: [@darshan3187](https://github.com/darshan3187)

### Contributing

Contributions are welcome. For now, follow this lightweight workflow:

1. Fork the repository
2. Create a feature branch
3. Make focused changes with clear commit messages
4. Run backend tests and frontend lint/build locally
5. Open a pull request with context, screenshots, and test notes

Suggested local checks before opening a PR:

```bash
# Backend
cd backend
python manage.py test

# Frontend
cd ../frontend
npm run lint
npm run build
```

