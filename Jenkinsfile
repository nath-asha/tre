pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS 14', type: 'NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    sh 'npx cypress run'
                }
            }
        }

        stage('Generate Mochawesome Report') {
            steps {
                script {
                    sh 'npx mochawesome-merge cypress/reports/mocha/*.json | npx mochawesome-report-generator'
                }
            }
        }

        stage('Archive Mochawesome Reports') {
            steps {
                archiveArtifacts artifacts: 'mochawesome-report/*.html', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
