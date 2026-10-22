# Q10 — Integrate Docker and Kubernetes

## Aim
Automate the deployment and execution of a containerized Python application using Docker and Kubernetes, following the Week 8 Docker/Kubernetes integration lab.

## Prerequisites
- Docker Desktop installed and running
- Kubernetes enabled in Docker Desktop
- `kubectl` available on PATH

Verify the cluster:
```powershell
kubectl get nodes
```
The node should show `Ready` before continuing.

## 1. Build the Flask app image
Run these commands from this `Q10_Docker_Kubernetes` folder:
```powershell
docker build -t exp10-python-app .
docker run -d -p 5000:5000 --name exp10-container exp10-python-app
```
Open `http://localhost:5000` to verify the app. If the container name already exists, remove the old one with `docker rm -f exp10-container` before rerunning.

## 2. Deploy to Kubernetes
The local image must be available to Docker Desktop's Kubernetes node. The manifest uses `imagePullPolicy: IfNotPresent` so Kubernetes can use the local image.

```powershell
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl get pods
```
Wait for the deployment to show `1/1` ready and the pod to show `Running`.

## 3. Expose the app
```powershell
kubectl apply -f service.yaml
kubectl get services
```
Try `http://localhost:30080`. NodePort access can vary by Kubernetes setup; if it does not open, use port forwarding in a separate terminal:
```powershell
kubectl port-forward service/exp10-service 5001:5000
```
Then open `http://localhost:5001`.

## 4. Final verification
```powershell
kubectl get nodes
kubectl get deployments
kubectl get pods
kubectl get services
kubectl describe deployment exp10-deployment
```

## Result
The Flask application is packaged as a Docker image and deployed through a Kubernetes Deployment and Service. Confirm successful status with the verification commands above.
