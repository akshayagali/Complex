# Q2 — Python CI/CD using Jenkins Freestyle and GitHub

## Files
- `app.py`: simple Python application

## 1. Check prerequisites
```powershell
git --version
python --version
```
Make sure the Jenkins service/agent can run `python` from its PATH.

## 2. Push to GitHub
Create a repository named `q2-python-freestyle`, then run in this folder:
```powershell
git init
git add .
git commit -m "Add Python CI project"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/q2-python-freestyle.git
git push -u origin main
```

## 3. Create Jenkins Freestyle job
1. Jenkins → **New Item** → `Q2-Python-Freestyle` → **Freestyle project**.
2. **Source Code Management** → Git → repository URL; branch `*/main`.
3. **Build Triggers** → Poll SCM → `H/2 * * * *`.
4. **Build Steps** → **Execute Windows batch command**:
   ```bat
   python --version
   python -m py_compile app.py
   python app.py
   ```
5. Save → **Build Now** → check Console Output.

Python is interpreted; `py_compile` is used here as a syntax/bytecode validation step, rather than Java-style compilation.

## 4. Demonstrate source checkout on changes
Edit the output, commit and push. Wait for polling or click **Build Now**.

## Result
Jenkins checks out the Python source, validates its syntax and executes the application.
