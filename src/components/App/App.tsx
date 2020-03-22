import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import AutoCarousel from 'src/components/AutoCarousel/AutoCarousel'
import Footer from 'src/components/Footer/Footer'
import { InfoCard } from 'src/components/InfoCard/InfoCard'
import DownArrows from 'src/components/MainParallax/DownArrows/DownArrows'
import ParallaxTitle from 'src/components/MainParallax/ParallaxTitle/ParallaxTitle'
import ProjectCardContainer from 'src/components/ProjectCardContainer/ProjectCardContainer'
import InfoCardSection from 'src/components/Sections/InfoCardSection/InfoCardSection'
import IntroSection from 'src/components/Sections/IntroSection/IntroSection'
import parallax from 'src/photo/parallax3.jpg'
import photoID from 'src/photo/photoID.jpg'
import IntroText from '../IntroText/IntroText'
import MainParallax from '../MainParallax/MainParallax'
import Menu from '../Menu/Menu'
import ProjectsSection from '../Sections/ProjectsSection/ProjectsSection'
import './App.scss'
import { backEndIcons, developmentIcons, frontEndIcons, links } from './data'
import './reset.scss'

const App = (): ReactElement => {
	return (
		<>
			<Helmet>
				<title> Piotr Morawski Frontend developer portfolio</title>
				<meta
					name='description'
					content='Piotr Morawski programming frontend developer portfolio React Javascript Node Typescript'
				/>
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta
					name='keywords'
					content='react,javascript,typescript,frontend,backend,node,nodejs,css,scss,jss,golang,go'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='robots'
					content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				/>
				<link rel='canonical' href='https://morawski.online' />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Piotr Morawski | Frontend developer'
				/>
				<meta
					property='og:description'
					content='Favorite stack for now? React, TS, Node, Netlify, CircleCI, Jest. Also React Native maniac and trying to absorb Golang'
				/>
				<meta property='og:url' content='https://yourapp.com' />
				<meta property='og:site_name' content='Portfolio' />
				<meta
					property='og:image'
					content='https://pmorawski.s3.eu-west-2.amazonaws.com/avatar_Limango.jpg'
				/>
				<meta
					property='og:image:secure_url'
					content='https://pmorawski.s3.eu-west-2.amazonaws.com/avatar_Limango.jpg'
				/>
				<meta property='og:image:width' content='1280' />
				<meta property='og:image:height' content='630' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:description'
					content='React JavaScript TypeScript developer'
				/>
				<meta name='twitter:title' content='Piotr Morawski FE Dev' />
				<meta
					name='twitter:image'
					content='https://pmorawski.s3.eu-west-2.amazonaws.com/avatar_Limango.jpg'
				/>
			</Helmet>
			<Menu />
			<MainParallax parallaxImage={parallax}>
				<>
					<ParallaxTitle />
					<DownArrows href='#Intro' />
				</>
			</MainParallax>
			<div className='appFrame-timeLineZone'>
				<div className='TimeLine-thirdLine' />
				<IntroSection id='Intro'>
					<AutoCarousel
						items={[...frontEndIcons, ...backEndIcons, ...developmentIcons]}
						autoRotate
					/>
					<IntroText />
				</IntroSection>
				<ProjectsSection id='Projects'>
					<ProjectCardContainer />
				</ProjectsSection>
				<InfoCardSection id='Contact'>
					<InfoCard
						email='piotrmorawski90@gmail.com'
						fullName='Piotr Morawski'
						title='Front-End Developer'
						links={links}
						photoUrl={photoID}
					/>
				</InfoCardSection>
			</div>
			<Footer />
		</>
	)
}

export default App
