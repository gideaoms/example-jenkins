pipeline {
    agent {
        dockerfile true
        docker {
            image 'node:8.9.1'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'pwd && ls -al'
            }
        }
    }
}
