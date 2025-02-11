pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Palak4796/task9.2d-sit313.git' // Replace with your repo URL
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install' // Installs project dependencies
                }
            }
        }

        stage('Build React App') {
            steps {
                script {
                    sh 'npm run build' // Generates production-ready build
                }
            }
        }
    }

    post {
        success {
            echo "Build completed successfully!"
        }
        failure {
            echo "Build failed!"
        }
    }
}
