pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Syntax Check') {
            steps {
                bat 'python -m py_compile app.py'
            }
        }
        stage('Run Application') {
            steps {
                bat 'python app.py'
            }
        }
    }
}
