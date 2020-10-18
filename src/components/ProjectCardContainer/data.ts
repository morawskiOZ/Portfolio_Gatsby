import { ProjectCardProps } from 'src/components/ProjectCardContainer/types'

export const projects: ProjectCardProps[] = [
	{
		codeLink: 'https://github.com/morawskiOZ/Portfolio_Gatsby',
		description: 'Gatsby project with CI and one push deployment on Netlify.',
		id: 'portfolio',
		liveLink: '#',
		imageName: 'portfolio',
		title: 'Portfolio',
	},
	{
		codeLink: 'https://www.npmjs.com/package/react-native-hook-image-slider',
		description: 'Open source react native image slider component',
		id: 'slider',
		imageName: 'npm_rn',
		title: 'React Native NPM package',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Monterail_Task',
		description: 'Multi input and dynamic form with validation',
		id: 'monterail',
		liveLink: 'https://monterail-morawski.herokuapp.com',
		imageName: 'monterail_on_laptop',
		title: 'Event Form',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/KRD_task',
		description: 'Interface to search for debtors data from remote API',
		id: 'krd',
		imageName: 'image_KRD',
		title: 'Debtor search UI',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Get_Prime_Numbers',
		description: 'APP that shows prime numbers between given inputs.',
		id: 'Prime',
		liveLink: 'https://where-are-my-primes.herokuapp.com/',
		imageName: 'prime',
		title: 'Prime Numbers',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Node_Express_Server',
		description:
			'Express server boilerplate with mailing. Easy to scale up with more routes and controllers. TypeScript ready.',
		id: 'express',
		imageName: 'express',
		title: 'Mailing server',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Game_Of_Life',
		description:
			'Classic 0 player game - Game of Life. My second project in JS',
		id: 'gameOfLife',
		liveLink: 'https://morawskioz.github.io/Game_Of_Life/',
		imageName: 'gameOfLife_small',
		title: 'Game of Life',
	},
	{
		codeLink: 'https://github.com/morawskiOZ/Furry_Game',
		description: 'My first game in JS. Move batman to collect Kryptonite :)',
		id: 'batman',
		liveLink: 'https://morawskioz.github.io/Furry_Game/',
		imageName: 'batman',
		title: 'Batman Game',
	},
]
