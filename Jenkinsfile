groovy
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/hungdang362/agendash.git'
            }
        }
        
        stage('Build') {
            steps {
                script {
                    docker.build('agendash-v1:latest')
                }
            }
        }s
    }
}