# Q3 — Node.js CI/CD using Jenkins Freestyle and GitHub

## Important note
The question bank mentions Maven for Node.js, but Maven is normally the build tool for Java. This Node.js example uses npm/Node, the appropriate tools for this project.

## 1. Check prerequisites
```powershell
git --version
node --version
npm --version
```

## 2. Push to GitHub
Create a repository named `q3-node-freestyle`, then run in this folder:
```powershell
git init
git add .
git commit -m "Add Node.js CI project"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/q3-node-freestyle.git
git push -u origin main
```

## 3. Create Jenkins Freestyle job
1. Jenkins → **New Item** → `Q3-Node-Freestyle` → **Freestyle project**.
2. **Source Code Management** → Git → repository URL; branch `*/main`.
3. **Build Triggers** → Poll SCM → `H/2 * * * *`.
4. **Build Steps** → **Execute Windows batch command**:
   ```bat
   node --version
   npm --version
   npm start
   ```
5. Save → **Build Now** → review Console Output.

## 4. Demonstrate changes
Edit the output, commit and push. Wait for polling or click **Build Now**.

## Result
Jenkins checks out the Node.js source and runs the application.
