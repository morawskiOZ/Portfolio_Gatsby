import React from 'react'
import CircleCILogo from '../../../static/assets/CircleCILogo.svg'
import { mongoDbIcon, nodeJSIcon } from '../../icons/backEndIcons'
import { gitIcon, ubuntuIcon } from '../../icons/developmentIcons'
import {
	css3Icon,
	html5Icon,
	jQueryIcon,
	JSIcon,
	reactIcon,
	SassIcon,
	TypeScriptIcon,
} from '../../icons/frontEndIcons'
import GitHubSvg from '../../../static/assets/github.svg'
import HomeSvg from '../../../static/assets/home.svg'
import LinkedInSvg from '../../../static/assets/linkedIn.svg'
import { InfoLinkProps } from './types'

export const links: InfoLinkProps[] = [
	{
		address: '#',
		description: 'Portfolio',
		icon: <HomeSvg />,
	},
	{
		address: 'https://www.linkedin.com/in/piotrmorawski90/',
		description: 'LinkedIn',
		icon: <LinkedInSvg />,
	},
	{
		address: 'https://github.com/morawskioz',
		description: 'GitHub',
		icon: <GitHubSvg />,
	},
]

export const frontEndIcons = [
	reactIcon,
	css3Icon,
	html5Icon,
	jQueryIcon,
	JSIcon,
	SassIcon,
	TypeScriptIcon,
]
export const backEndIcons = [mongoDbIcon, nodeJSIcon]
export const developmentIcons = [gitIcon, ubuntuIcon, <CircleCILogo />]
