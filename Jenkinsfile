#!/usr/bin/env groovy
node {
	
	stage('git') {
	git([url: 'git@github.com:Uber-coffee/Front-end.git', branch: "${env.BRANCH_NAME}", credentialsId: "front_github_ssh"])
	}
	stage('check dir'){
		sh 'ls -la'
	}
	stage('Telegram test') {
		telegramSend(message: 'Frontend here', chatId: 350534737)
	}
	stage('run command inside docker agent') {
		docker.image('node:10').inside {
			sh 'cat /etc/*releases*'
		}
	}
}
