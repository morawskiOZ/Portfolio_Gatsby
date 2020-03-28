import { ProjectCardProps } from 'src/components/ProjectCardContainer/ProjectCard/ProjectCard'
import batman from 'src/photo/batman.png'
import express from 'src/photo/express.png'
import fruits from 'src/photo/fruits.png'
import gameOfLife from 'src/photo/gameOfLife.jpg'
import portfolio from 'src/photo/portfolio.jpg'
import prime from 'src/photo/prime.png'
import './ProjectCardContainer.scss'

export const projects: ProjectCardProps[] = [
	{
		codeLink: 'https://github.com/morawskiOZ/Portfolio_Gatsby',
		description: 'Gatsby project with CI and one push deployment on Netlify.',
		id: 'portfolio',
		liveLink: '#',
		photoURL: portfolio,
		title: 'Portfolio',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Monterail_Task',
		description: 'Multi input and dynamic form with validation',
		id: 'monterail',
		liveLink: 'https://https://monterail-morawski.herokuapp.com',
		photoURL:
			'https://pmorawski.s3.eu-west-2.amazonaws.com/monterail_on_laptop.png',
		title: 'Event Form',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/KRD_task',
		description: 'Interface to search for debtors data from remote API',
		id: 'krd',
		photoURL: 'https://pmorawski.s3.eu-west-2.amazonaws.com/image_KRD.png',
		title: 'Debtor search UI',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Get_Prime_Numbers',
		description: 'APP that shows prime numbers between given inputs.',
		id: 'Prime',
		liveLink: 'https://where-are-my-primes.herokuapp.com/',
		photoURL: prime,
		title: 'Prime Numbers',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Node_Express_Server',
		description:
			'Express server boilerplate with mailing. Easy to scale up with more routes and controllers. TypeScript ready.',
		id: 'express',
		photoURL: express,
		title: 'Mailing server',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Game_Of_Life',
		description:
			'Classic 0 player game - Game of Life. My second project in JS',
		id: 'gameOfLife',
		liveLink: 'https://morawskioz.github.io/Game_Of_Life/',
		photoURL: gameOfLife,
		title: 'Game of Life',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Fruits_Web',
		description: 'Website created from pdf as a recruitment task',
		id: 'fruits',
		liveLink: 'https://morawskioz.github.io/Fruits_Web/',
		photoURL: fruits,
		title: 'Website - Fruits',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Furry_Game',
		description: 'My first game in JS. Move batman to collect Kryptonite :)',
		id: 'batman',
		liveLink: 'https://morawskioz.github.io/Furry_Game/',
		photoURL: batman,
		title: 'Batman Game',
	},
]
