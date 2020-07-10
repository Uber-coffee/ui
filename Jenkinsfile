#!/usr/bin/env groovy

// Jenkins file for Frontend

node {
    try {
        stage('git') {
            git([
                    url: 'git@github.com:Uber-coffee/Front-end.git',
                    branch: "${env.BRANCH_NAME}",
                    credentialsId: "meshcheryakov_backend"
            ])
        }

        stage('Job started notification') {
            telegram_msg("Build ${env.BRANCH_NAME} started. Build id: ${env.BUILD_ID}")
        }

        docker.image('node:12').inside() {
            stage('Build') {
                sh 'npm install'
                sh 'npm run build'
                sh 'ls -la' //todo remove
            }
        }

        stage('Build docker image') {
            docker.build("frontend:${env.BUILD_ID}")
        }

        stage('Push to registry and deploy') {
            if (env.BRANCH_NAME == 'develop'
                || env.BRANCH_NAME == 'deployment' // for testing purposes. TODO: remove
            ) {
                ansiblePlaybook playbook: 'deploy_dev_playbook.yaml'
                telegram_msg("Develop has been deployed to dev")
            }

            if (env.BRANCH_NAME == 'master') {
                ansiblePlaybook playbook: 'deploy_prod_playbook.yaml'
                telegram_msg("Master has been deployed to production, pray for success :)")
            }
        }

        stage('Job success notification') {
            telegram_msg("Build ${env.BRANCH_NAME} finished, image: auth: ${env.BUILD_ID}")
        }
    } catch (Exception ex) {
        telegram_msg("Build ${env.BRANCH_NAME} failed")
        throw ex
    }
}

def telegram_msg(String msg) {
    telegramSend(
            message: '[Frontend] ' + msg,
            chatId: -1001336690990 // https://t.me/epambuildlogs
    )
}


