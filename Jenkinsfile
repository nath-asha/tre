pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS 14', type: 'NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
        BASE_URL = "https://api.trello.com"
        API_KEY = "317504a743a9934c3781d65a2ba38f18"
        API_TOKEN = "ATTAe4d17af1e18f602de087649bf69185c28cc6b2f92313c61c5f1f2102b1161098213F2294"
    }

    stages {
        stage('Install dependencies') {
            steps {
                script {
                 
                    sh 'npm install'
                }
            }
        }

        stage('Run Trello CRUD Operations with Cypress') {
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
