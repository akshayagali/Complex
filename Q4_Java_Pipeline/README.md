# Q4 — Java CI/CD using Jenkins Pipeline Script, GitHub and Maven

## 1. Push to GitHub
Create repository `q4-java-pipeline` and push this folder, including `Jenkinsfile`, to `main`:
```powershell
git init
git add .
git commit -m "Add Java pipeline project"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/q4-java-pipeline.git
git push -u origin main
```

## 2. Create Jenkins Pipeline job
1. Jenkins → **New Item** → `Q4-Java-Pipeline` → **Pipeline**.
2. Under **Pipeline**, select **Pipeline script from SCM**.
3. SCM = **Git**; enter the repository URL; branch `*/main`; Script Path `Jenkinsfile`.
4. Under **Build Triggers**, optionally enable Poll SCM with `H/2 * * * *`.
5. Save → **Build Now**.
6. Check stage view and Console Output for `BUILD SUCCESS`; inspect archived JAR.

## Note
The included `Jenkinsfile` uses `bat`, which is suitable for a Windows Jenkins agent. Use `sh` instead on Linux.
