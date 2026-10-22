# DevOps Complex Questions 1–10 — Clean Pack

This folder contains practical source/configuration files and step-by-step README procedures for Complex Questions 1–10. The question bank's Additional Questions are intentionally excluded.

## Folder map
- `Q1_Java_Freestyle/` — Java source, Maven `pom.xml`, and Jenkins Freestyle procedure
- `Q2_Python_Freestyle/` — Python source and Jenkins Freestyle procedure
- `Q3_Node_Freestyle/` — Node.js source, `package.json`, and Jenkins Freestyle procedure
- `Q4_Java_Pipeline/` — Java source, Maven configuration, Jenkinsfile, and procedure
- `Q5_Python_Pipeline/` — Python source, Jenkinsfile, and procedure
- `Q6_Docker_Commands/` — Docker command practice guide
- `Q7_Docker_Apps/` — separate Python and Node.js Docker applications
- `Q8_Selenium_JavaScript/` — Selenium WebDriver JavaScript test
- `Q9_Selenium_Docker_App/` — Flask app, Dockerfile, and Selenium tests
- `Q10_Docker_Kubernetes/` — Flask app, Dockerfile, Kubernetes Deployment and Service YAML, and procedure

## Notes
- Replace `YOUR_GITHUB_USERNAME` in Git commands with your GitHub username and actual repository URL.
- Jenkins instructions use Windows batch steps (`bat` / Execute Windows batch command). On Linux agents, change `bat` to `sh`.
- Q3's question-bank wording mentions Maven, but Node.js normally uses npm.
- Q7's Python prime program is a console program, not a web server. Q9 therefore uses a separate Flask web app for browser-based Selenium tests.
- Q8 and Q9 require Node.js/npm and Chrome. Q9 also requires Docker Desktop.
- Q10 requires Docker Desktop Kubernetes and `kubectl`; the Kubernetes image must be accessible to the cluster.
