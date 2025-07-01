pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-idah') // This must match Jenkins Credentials ID
    IMAGE_NAME = "imakena/devsecops-app"
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/imakena2/devsecops-final-project.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Docker Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage('Push to DockerHub') {
      steps {
        sh 'docker push $IMAGE_NAME'
      }
    }
  }
}