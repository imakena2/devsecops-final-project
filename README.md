# DevSecOps Final Project

This project demonstrates a complete **DevSecOps pipeline** integrating key tools and practices from development to deployment. It focuses on containerized application deployment using **Kubernetes** and **Helm**, running locally on **Minikube** and deployed via **AWS S3** for production.

---

## ✅ Project Structure (Steps Completed)

### **Step 1: Project Initialization**

- Set up project folder `devsecops-final-project`.
- Initialized Git for version control.
- Installed and configured:
  - Docker
  - Minikube (Hyper-V driver for Windows compatibility)
  - kubectl (Kubernetes CLI)

### **Step 2: Containerization**

- Created a `Dockerfile` for a basic Nginx application.
- Built a Docker image:
  ```bash
  docker build -t devsecops-nginx .
  ```

### **Step 3: CI/CD Pipeline with Jenkins**

- Set up **Jenkins** locally using Docker.
- Configured a Jenkins pipeline using `Jenkinsfile`:
  - Builds Docker image
  - Pushes to Docker Hub
  - Triggers deployment to Kubernetes

### **Step 4: Kubernetes Deployment**

- Minikube used to run Kubernetes cluster locally.
- Created Helm chart to deploy app to Kubernetes.
- Used `kubectl` and `helm` for deployment.

---

## 🔄 CI/CD Architecture

- GitHub (Source Repository)
- Jenkins (CI/CD Pipeline)
- Docker Hub (Image Registry)
- Kubernetes via Minikube (Deployment Target)
- Helm (Package Manager for Kubernetes)

---

## 🛡️ Static Code Analysis (SAST) with SonarQube

We integrated **SonarQube** to perform **Static Application Security Testing (SAST)** to ensure code quality and detect security vulnerabilities.

### ✅ Setup Summary:

- **Tool Used:** SonarQube (Community Edition)
- **Executed via:** `sonar-scanner`
- **Analysis Includes:**
  - Code smells
  - Bugs
  - Vulnerabilities
  - Test coverage with Jest

### 📁 Configuration Highlights:

In `sonar-project.properties`:

```properties
sonar.projectKey=devsecops-app
sonar.host.url=http://localhost:9000
sonar.token=<your-token>
sonar.sources=.
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

> Replace `<your-token>` with the actual SonarQube token or use an environment variable.

### 📊 Report & Dashboard:

Access full analysis on the local SonarQube instance: 👉 [SonarQube Dashboard for DevSecOps App](http://localhost:9000/dashboard?id=devsecops-app)

---

## 🔍 Dynamic Application Security Testing (DAST)

We performed **DAST** to test the running application for vulnerabilities in a black-box manner.

### ✅ Tool Used: OWASP ZAP

- **Scan Method:** Baseline scan using ZAP Docker image
- **Target:** Application deployed on Minikube or AWS S3

### 🛠️ Execution:

```bash
docker run -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-stable   zap-baseline.py -t http://devsecops-website-project-portfolio.s3-website-us-east-1.amazonaws.com/ -r zap-report.html
```

### 📄 Report:

- HTML report generated: `zap-report.html`
- Includes detection of:
  - XSS
  - Broken Authentication
  - Sensitive Data Exposure
  - Security Header Issues

---

## 📈 Monitoring with Grafana

To monitor application performance and infrastructure:

- **Prometheus** used as a data source.
- **Grafana** for dashboards and visualization.
- Exported metrics from Kubernetes pods.

### 📸 Dashboard Screenshot

*Include screenshot image or link here.*

---

## ☁️ Deployment Target

- **Primary Option:** Minikube (for local development/testing)
- **Production Deployment:** AWS S3 (Static Website Hosting)

### 🔗 AWS S3 Deployment Steps

1. Created an S3 bucket `devsecops-website-project-portfolio`.
2. Enabled static website hosting.
3. Uploaded static build files (`index.html`, CSS, JS).
4. Configured public access policy.
5. Deployed at:

👉 **[Live Project on AWS S3](http://devsecops-website-project-portfolio.s3-website-us-east-1.amazonaws.com/)**

---

## 📦 Deliverables

### 📌 Project Plan

- Agile board screenshots from Trello or Jira

### 📄 Documentation (README.md)

Includes:

- Project Overview
- SDLC Model used (Agile)
- CI/CD Pipeline Architecture
- Security Implementations (SAST, DAST, containerization)

### 💻 GitHub Repository

- Application Source Code
- `Dockerfile`
- `Jenkinsfile`
- `sonar-project.properties`
- `Helm` charts

### 🎥 Working Demo

- Video walkthrough or live demo link

### 📊 Performance Dashboard

- Screenshot from Grafana dashboard

### 📄 Security Test Reports

- SonarQube analysis results
- ZAP HTML report

---

## 👨‍💻 Technologies Used

- Docker
- Kubernetes (Minikube)
- Jenkins
- SonarQube
- OWASP ZAP
- Helm
- Grafana + Prometheus
- AWS S3
- JavaScript (Node.js/React depending on app)

---

## ✅ Next Steps

- Perform **Dynamic Analysis (DAST)** (✔️ Done)
- Configure security scanning in CI (e.g., Trivy, Snyk)
- Implement RBAC policies for Kubernetes
- Automate security testing in pipeline
- Integrate Selenium for automated browser testing (optional)

---

## 🙌 Author

**Idah Makena Ncooro**

> DevSecOps Final Project | Strathmore University