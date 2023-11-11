pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
				git branch: 'main', url: 'https://github.com/hungdang362/agendash.git'
            }
        }
        stage('SSH server') {
            steps {
                sshagent(['ssh-remote']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l root 171.244.28.234 touch jenkins.txt'
                }
            }
        }
    }
}