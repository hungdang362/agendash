pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
				git url: 'https://github.com/hungdang362/agendash.git', branch: 'main'
            }
        }
        stage('Docker Build') {
			steps {
				sh 'docker build -t agendash-v1:latest .'
			}
		}
        
    }
}