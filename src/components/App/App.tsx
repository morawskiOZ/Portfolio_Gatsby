import React, { ReactElement } from 'react'
import AutoCarousel from 'src/components/AutoCarousel/AutoCarousel'
import Footer from 'src/components/Footer/Footer'
import DownArrows from 'src/components/MainParallax/DownArrows/DownArrows'
import ParallaxTitle from 'src/components/MainParallax/ParallaxTitle/ParallaxTitle'
import ProjectCardContainer from 'src/components/ProjectCardContainer/ProjectCardContainer'
import InfoCardSection from 'src/components/Sections/InfoCardSection/InfoCardSection'
import IntroSection from 'src/components/Sections/IntroSection/IntroSection'
import IntroText from '../IntroText/IntroText'
import MainParallax from '../MainParallax/MainParallax'
import Menu from '../Menu/Menu'
import ProjectsSection from '../Sections/ProjectsSection/ProjectsSection'
import './App.scss'
import { backEndIcons, developmentIcons, frontEndIcons, links } from './data'
import './reset.scss'
import { InfoCard } from '../InfoCard/InfoCard'
import { SCRIPTS } from './Scripts'
import { SEO } from './SEO'

const App = (): ReactElement => {
	return (
		<>
			<SEO />
			<SCRIPTS />
			<Menu />
			<MainParallax parallaxImage='https://pmorawski.s3.eu-west-2.amazonaws.com/parallax3.jpg'>
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
						photoUrl='https://pmorawski.s3.eu-west-2.amazonaws.com/square_avatar.jpg'
					/>
				</InfoCardSection>
			</div>
			<Footer />
		</>
	)
}

export default App
