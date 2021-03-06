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
import '../../fonts/fonts.css'
import { SCRIPTS } from './Scripts'
import { SEO } from './SEO'

const App = ({ images }: { images: any }): ReactElement => {
	// const data = useStaticQuery(graphql`
	// 	query CloudinaryImage {
	// 		file(name: { eq: "parallax3_small" }) {I
	// 			...FluidImage
	// 		}
	// 	}
	// `)
	const { parallax3_small, square_avatar, ...restImages } = images

	return (
		<>
			<SEO />
			<SCRIPTS />
			<Menu />
			<MainParallax parallaxImage={parallax3_small || null}>
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
					<ProjectCardContainer images={restImages} />
				</ProjectsSection>
				<InfoCardSection id='Contact'>
					<InfoCard
						fullName='Piotr Morawski'
						title='Front-End Developer'
						links={links}
						photo={square_avatar}
					/>
				</InfoCardSection>
			</div>
			<Footer />
		</>
	)
}

export default App
