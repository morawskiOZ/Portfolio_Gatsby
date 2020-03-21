import React, { ReactElement } from 'react'
import AutoCarousel from 'src/components/AutoCarousel/AutoCarousel'
import Footer from 'src/components/Footer/Footer'
import { InfoCard } from 'src/components/InfoCard/InfoCard'
import InfoCardSection from 'src/components/Sections/InfoCardSection/InfoCardSection'
import IntroSection from 'src/components/Sections/IntroSection/IntroSection'
import DownArrows from 'src/components/MainParallax/DownArrows/DownArrows'
import ParallaxTitle from 'src/components/MainParallax/ParallaxTitle/ParallaxTitle'
import ProjectCardContainer from 'src/components/ProjectCardContainer/ProjectCardContainer'
import parallax from 'src/photo/parallax3.jpg'
import photoID from 'src/photo/photoID.jpg'
import IntroText from '../IntroText/IntroText'
import MainParallax from '../MainParallax/MainParallax'
import Menu from '../Menu/Menu'
import ProjectsSection from '../Sections/ProjectsSection/ProjectsSection'
import './App.scss'
import './reset.scss'

import { backEndIcons, developmentIcons, frontEndIcons, links } from './data'

const App = (): ReactElement => {
	return (
		<>
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
