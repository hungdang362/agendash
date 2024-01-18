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
                sshagent(['ssh-oneclinic']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l ubuntu 3.1.15.255'
                    sh 'pwd'
                }
            }
        }
    }
}