pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID = credentials('AKIA2ZIONJOFOG424CVG')
        AWS_SECRET_ACCESS_KEY = credentials('TkYmFwfjWCDBbXQicj10OPuCbRKXUJ7yNt3O5Mmt')
        SONARQUBE_URL = 'http://your-sonarqube-server'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/Palak4796/task9.2d-sit313.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'mvn test'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                echo 'Running SonarQube analysis...'
                sh 'mvn sonar:sonar -Dsonar.host.url=$SONARQUBE_URL'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                sh 'docker build -t myapp .'
                sh 'docker run -d -p 8080:8080 myapp'
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing to production...'
                sh 'docker push myapp:latest'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}


