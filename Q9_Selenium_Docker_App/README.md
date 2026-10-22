# Q9 — Develop Selenium test cases for a containerized application

This folder contains the Flask web application described in the supplied Week 12 lab PDF, its Dockerfile, and Selenium test cases. It is a web app so the browser can reach it at `http://localhost:5000`.

## Folder structure
```text
Q9_Selenium_Docker_App/
├── app/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
└── tests/
    ├── package.json
    └── test.js
```

## Prerequisites
- Docker Desktop installed and running
- Node.js and npm installed
- Google Chrome installed

## A. Build and run the Flask app in Docker
1. Open PowerShell in the `app` folder.
2. Build the image:
   ```powershell
   docker build -t selenium-flask-app .
   ```
3. Start the container:
   ```powershell
   docker run -d -p 5000:5000 --name selenium-flask-container selenium-flask-app
   ```
4. Verify the container and port mapping:
   ```powershell
   docker ps
   ```
   Look for `0.0.0.0:5000->5000/tcp` (or the equivalent Windows Docker port display).
5. Open `http://localhost:5000` in Chrome. Expected page text:
   `Hello Students! This application is running inside Docker`

If a container with that name already exists, remove it first with `docker rm -f selenium-flask-container`. If host port 5000 is already occupied, stop the other service or choose another host port and update the URL in `tests/test.js` accordingly.

## B. Install and run Selenium tests
1. Open a second terminal in the `tests` folder.
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Run all checks in the test script:
   ```powershell
   npm test
   ```
   Alternatively, run `node test.js`.

## Test cases
| Test ID | Test | Expected result |
|---|---|---|
| TC01 | Open `http://localhost:5000` | Application opens in Chrome |
| TC02 | Read body text and check for `Hello` | PASS when expected text is present |
| TC03 | Verify current URL | PASS when URL is `http://localhost:5000/` |
| TC04 | Verify the complete Flask response | PASS when the full expected message is present |

The browser stays open for about 10 seconds and then closes. The script prints PASS/FAIL output. A Selenium startup error can occur if Chrome or its driver cannot be launched; fix that environment issue before interpreting the test result.

## Cleanup
When finished, stop and remove the container if desired:
```powershell
docker stop selenium-flask-container
docker rm selenium-flask-container
```

## Result
The Flask application runs in a Docker container, and Selenium WebDriver checks that it opens, displays the expected content, and uses the expected URL.
