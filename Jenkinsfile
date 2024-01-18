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
                sshagent(['phatgiao-vn']) {
                    sh 'pwd'
                    sh 'ssh -o StrictHostKeyChecking=no -l root 171.244.28.234 -p 222 touch jenkins-test.txt'
                    sh 'cd /home'
                }
            }
        }
    }
}