pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
				git branch: 'main', url: 'https://github.com/hungdang362/agendash.git'
            }
        }
        stage('Docker Build') {
            steps{
                script {
                    dockerImage = docker.build("agendash:v1")
                }
            }
		}
        
    }
}