# DevSecOps Final Project Report

**Student Name:** Idah Makena Ncooro  
**Institution:** Strathmore University  
**Project Title:** End-to-End DevSecOps Implementation Using Kubernetes, Jenkins, SonarQube, and AWS

---

## ⚑ Project Overview

This project demonstrates a complete **DevSecOps pipeline** applied to a **personal portfolio web application**, with the goal of integrating security into the development and deployment lifecycle. The solution utilizes **Kubernetes (Minikube)** for container orchestration and **AWS S3** for hosting the production-ready web application. Key DevSecOps tools like **Jenkins**, **SonarQube**, **OWASP ZAP**, **Docker**, **Helm**, and **Grafana** were integrated to cover CI/CD, SAST, DAST, monitoring, and deployment.

---

## 🎯 Project Objectives

- ✅ Apply DevSecOps principles to a real-world application.
- ✅ Containerize the portfolio web app using Docker.
- ✅ Automate the CI/CD pipeline using Jenkins.
- ✅ Deploy the application on Kubernetes (Minikube locally).
- ✅ Ensure code and runtime security using tools like SonarQube and OWASP ZAP.
- ✅ Host the final build of the portfolio website on **AWS S3** for public access.
- ✅ Visualize metrics using Grafana and Prometheus for performance monitoring.

---

## 🧱 Project Workflow

### 1. Project Setup
- Git initialized in folder `devsecops-final-project`.
- Tools installed: Docker, Jenkins, Minikube, Helm, Kubectl, SonarQube, Prometheus, Grafana.

### 2. Containerization
- Created a `Dockerfile` for the portfolio web app.
- Built Docker image:
  ```bash
  docker build -t devsecops-nginx .
  ```

### 3. CI/CD Pipeline with Jenkins
- Jenkins running in a Docker container.
- `Jenkinsfile` automates:
  - GitHub code checkout
  - Docker image build & push
  - Helm-based deployment to Minikube

### 4. Kubernetes Deployment with Helm
- Created custom Helm charts.
- Deployed app using `kubectl` and Helm.

---

## 🔐 Security Integration

### ✅ Static Application Security Testing (SAST) - SonarQube
- Installed locally with Docker.
- Used `sonar-scanner` and `sonar-project.properties`.
- Detected bugs, code smells, vulnerabilities.

### ✅ Dynamic Application Security Testing (DAST) - OWASP ZAP
- Ran ZAP Docker container:
  ```bash
  docker run -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-stable \
  zap-baseline.py -t http://devsecops-website-project-portfolio.s3-website-us-east-1.amazonaws.com/ -r zap-report.html
  ```
- Scanned for XSS, broken auth, missing headers, etc.

---

## 📊 Monitoring and Logging

- Used Prometheus to collect Kubernetes metrics.
- Configured Grafana dashboards for visualization.

---

## 🌐 Deployed Application on AWS S3

My personal portfolio web application is successfully deployed and accessible via:

### → [Live Portfolio Website](http://devsecops-website-project-portfolio.s3-website-us-east-1.amazonaws.com/)

Deployment steps:
- Created S3 bucket and enabled static hosting.
- Uploaded `index.html` and assets.
- Set bucket policies for public access.

---

## ✨ Achievements

- ✅ Built a secure CI/CD pipeline from scratch.
- ✅ Gained hands-on experience with advanced DevSecOps tools.
- ✅ Deployed a production-ready portfolio app on AWS S3.
- ✅ Integrated automated security testing.
- ✅ Configured performance dashboards with Grafana.

---

## ⚠️ Challenges Faced

- 📚 Required extensive research and tool documentation.
- 🤀 Complex configurations with Jenkins, Helm, and Minikube.
- 🔐 Setting up and integrating security tools took time.
- ⛅️ Steep learning curve on cloud services and container orchestration.

---

## 💡 Lessons Learned

- ⛔ Security should be integrated early and continuously.
- ⚙️ Each DevSecOps tool has a distinct role.
- 🔍 Monitoring helps maintain system health and performance.
- 💬 Collaboration is vital in DevOps practices.
- ☁️ AWS services offer reliable, scalable, and fast deployment platforms.

---

## 📅 Deliverables Summary

| Deliverable | Description |
|------------|-------------|
| Source Code | Available on GitHub (link) |
| Jenkinsfile | CI/CD pipeline automation |
| Dockerfile | Portfolio image build |
| Sonar Project File | SAST config |
| Helm Charts | Kubernetes deployment |
| ZAP Report | DAST scan summary |
| Grafana Dashboard | Metrics visualization |
| Deployed App | [Click to View](http://devsecops-website-project-portfolio.s3-website-us-east-1.amazonaws.com/) |
| Demo Video | (Insert Link) |
| Trello Board | (Insert Screenshot or Link) |

---

## 🙌 Conclusion

This DevSecOps project has been a transformative learning experience. I was able to develop, secure, monitor, and deploy a fully functional web application using modern tools and best practices. It has equipped me with practical skills necessary for real-world DevSecOps environments.

---

**Prepared by:**  
**Idah Makena Ncooro**  
*Strathmore University*
