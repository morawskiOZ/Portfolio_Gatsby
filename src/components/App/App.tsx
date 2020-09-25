import { graphql, useStaticQuery } from 'gatsby'
import React, { ReactElement } from 'react'
import AutoCarousel from 'src/components/AutoCarousel/AutoCarousel'
import Footer from 'src/components/Footer/Footer'
import DownArrows from 'src/components/MainParallax/DownArrows/DownArrows'
import ParallaxTitle from 'src/components/MainParallax/ParallaxTitle/ParallaxTitle'
import ProjectCardContainer from 'src/components/ProjectCardContainer/ProjectCardContainer'
import InfoCardSection from 'src/components/Sections/InfoCardSection/InfoCardSection'
import IntroSection from 'src/components/Sections/IntroSection/IntroSection'
import { InfoCard } from '../InfoCard/InfoCard'
import IntroText from '../IntroText/IntroText'
import MainParallax from '../MainParallax/MainParallax'
import Menu from '../Menu/Menu'
import ProjectsSection from '../Sections/ProjectsSection/ProjectsSection'
import './App.scss'
import { backEndIcons, developmentIcons, frontEndIcons, links } from './data'
import './reset.scss'
import { SCRIPTS } from './Scripts'
import { SEO } from './SEO'

const App = (): ReactElement => {
	const data = useStaticQuery(graphql`
		query CloudinaryImage {
			cloudinaryMedia(public_id: { eq: "portfolio/parallax3" }) {
				secure_url
				public_id
			}
		}
	`)

	const imageUrl =
		'https://res.cloudinary.com/milus/image/upload/f_auto,q_auto:low/v1601044811/portfolio/parallax3_small.jpg'
	const parallaxImage = data?.cloudinaryMedia?.secure_url
	return (
		<>
			<SEO />
			<SCRIPTS />
			<Menu />
			<MainParallax parallaxImage={parallaxImage || imageUrl}>
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
						photoUrl='https://res.cloudinary.com/milus/image/upload/q_auto:low/portfolio/square_avatar.jpg'
					/>
				</InfoCardSection>
			</div>
			<Footer />
		</>
	)
}

export default App
