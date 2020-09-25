import { ProjectCardProps } from 'src/components/ProjectCardContainer/ProjectCard/ProjectCard'
import './ProjectCardContainer.scss'

export const projects: ProjectCardProps[] = [
	{
		codeLink: 'https://github.com/morawskiOZ/Portfolio_Gatsby',
		description: 'Gatsby project with CI and one push deployment on Netlify.',
		id: 'portfolio',
		liveLink: '#',
		photoURL:
			'https://res.cloudinary.com/milus/image/upload/v1601044544/portfolio/portfolio.jpg',
		title: 'Portfolio',
	},
	{
		codeLink: 'https://www.npmjs.com/package/react-native-hook-image-slider',
		description: 'Open source react native image slider component',
		id: 'slider',
		photoURL:
			'https://res.cloudinary.com/milus/image/upload/v1601046955/portfolio/npm_rn.png',
		title: 'React Native NPM package',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Monterail_Task',
		description: 'Multi input and dynamic form with validation',
		id: 'monterail',
		liveLink: 'https://https://monterail-morawski.herokuapp.com',
		photoURL:
			'https://res.cloudinary.com/milus/image/upload/v1601045953/portfolio/monterail_on_laptop.png',
		title: 'Event Form',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/KRD_task',
		description: 'Interface to search for debtors data from remote API',
		id: 'krd',
		photoURL:
			'https://res.cloudinary.com/milus/image/upload/v1601045924/portfolio/image_KRD.png',
		title: 'Debtor search UI',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Get_Prime_Numbers',
		description: 'APP that shows prime numbers between given inputs.',
		id: 'Prime',
		liveLink: 'https://where-are-my-primes.herokuapp.com/',
		photoURL:
			'https://res.cloudinary.com/milus/image/upload/v1601044543/portfolio/prime.png',
		title: 'Prime Numbers',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Node_Express_Server',
		description:
			'Express server boilerplate with mailing. Easy to scale up with more routes and controllers. TypeScript ready.',
		id: 'express',
		photoURL:
			'https://res.cloudinary.com/milus/image/upload/v1601044543/portfolio/express.png',
		title: 'Mailing server',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Game_Of_Life',
		description:
			'Classic 0 player game - Game of Life. My second project in JS',
		id: 'gameOfLife',
		liveLink: 'https://morawskioz.github.io/Game_Of_Life/',
		photoURL:
			'https://res.cloudinary.com/milus/image/upload/v1601045903/portfolio/gameOfLife_small.jpg',
		title: 'Game of Life',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Furry_Game',
		description: 'My first game in JS. Move batman to collect Kryptonite :)',
		id: 'batman',
		liveLink: 'https://morawskioz.github.io/Furry_Game/',
		photoURL:
			'https://res.cloudinary.com/milus/image/upload/v1601044543/portfolio/batman.png',
		title: 'Batman Game',
	},
]
