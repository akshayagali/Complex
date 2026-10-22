# Q7 — Develop simple containerized applications using Docker (Python and Node.js)

The question bank requests both Python and Node.js. They are kept in separate folders with separate Dockerfiles, images, and containers.

## Prerequisites
Start Docker Desktop and verify:
```powershell
docker --version
docker info
```

## A. Python container
1. Open PowerShell in `Q7_Docker_Apps/Python_app`.
2. Build the image:
   ```powershell
   docker build -t myfirstpythonapp .
   ```
3. Run:
   ```powershell
   docker run --name python-prime myfirstpythonapp
   ```
4. Expected output:
   ```text
   29 is a prime number
   ```
5. Verify:
   ```powershell
   docker ps -a
   docker images
   ```
   `Exited (0)` is normal because the program prints its result and exits.
6. If `python-prime` already exists from an earlier run:
   ```powershell
   docker rm python-prime
   ```

## B. Node.js container
1. Open PowerShell in `Q7_Docker_Apps/Node_app`.
2. Build:
   ```powershell
   docker build -t myfirstnodeapp .
   ```
3. Run:
   ```powershell
   docker run --name node-prime myfirstnodeapp
   ```
4. Expected output:
   ```text
   29 is a prime number
   ```
5. Verify:
   ```powershell
   docker ps -a
   docker images
   ```
6. If `node-prime` already exists:
   ```powershell
   docker rm node-prime
   ```

## Note about port 5000
The Python Dockerfile keeps `EXPOSE 5000` to align with the supplied Week 7 PDF. However, the shown prime-number program is a console program and does not listen on port 5000. Port mapping is not required for this app; `EXPOSE` alone does not create a web server.

## Result
The Python and Node.js programs are built as separate Docker images and run in separate containers.
