# Q6 — Explore Docker commands for container management

## 1. Verify Docker
```powershell
docker --version
docker info
docker compose version
```
If Docker cannot connect, start Docker Desktop and wait until the engine is running.

## 2. Inspect containers and images
```powershell
docker ps
docker ps -a
docker images
```
- `docker ps`: running containers.
- `docker ps -a`: all containers, including stopped ones.
- `docker images`: images stored locally.

## 3. Pull and run a sample image
```powershell
docker pull hello-world
docker run hello-world
```
Expected: Docker prints “Hello from Docker!”

## 4. Container lifecycle
```powershell
docker run -d --name devops-test nginx
docker ps
docker stop devops-test
docker ps -a
docker start devops-test
docker restart devops-test
docker stop devops-test
docker rm devops-test
```
Docker downloads `nginx` if needed. `start`, `stop`, `restart`, and `rm` use the container name/ID, not the image ID.

## 5. Remove an image (optional)
```powershell
docker images
docker rmi hello-world
```
If a container still uses the image, remove the container first.

## 6. Demonstrate commit (optional)
```powershell
docker run -it --name commit-demo alpine sh
```
Inside the container, type `exit`, then:
```powershell
docker commit commit-demo devops-committed-image:v1
docker images
docker rm commit-demo
```
`docker commit` saves the container filesystem state as a new image; a Dockerfile is preferable for reproducible builds.

## Result
Demonstrate image pulling, running, listing, starting, stopping, restarting, removing containers, and listing images.
