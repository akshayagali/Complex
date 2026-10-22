# Q5 — Python CI/CD using Jenkins Pipeline Script and GitHub

## 1. Push to GitHub
Create repository `q5-python-pipeline` and push this folder, including `Jenkinsfile`, to `main`:
```powershell
git init
git add .
git commit -m "Add Python pipeline project"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/q5-python-pipeline.git
git push -u origin main
```

## 2. Create Jenkins Pipeline job
1. Jenkins → **New Item** → `Q5-Python-Pipeline` → **Pipeline**.
2. Under **Pipeline**, select **Pipeline script from SCM**.
3. SCM = **Git**; enter repository URL; branch `*/main`; Script Path `Jenkinsfile`.
4. Optionally enable Poll SCM with `H/2 * * * *`.
5. Save → **Build Now**.
6. Check the pipeline stages and Console Output.

## Note
This Jenkinsfile uses `bat` for Windows. On Linux agents, use `sh` and typically `python3`.
