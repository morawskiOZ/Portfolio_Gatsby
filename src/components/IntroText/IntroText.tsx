import React, { ReactElement } from 'react'
import './IntroText.scss'

const IntroText = (): ReactElement => {
	return (
		<section className='IntroText IntroText--centered appFrame--paddingBottom appFrame--paddingTop'>
			<p>Creating reusable components in React with TypeScript is my jam.</p>
			<br />
			<p>
				Everything can be tested is my motto. Unit tests with Chai/Enzyme and
				Karma. Occasionally some work in Cypress tests.
			</p>
			<br />
			{/* <p>
        I have experience as a member of an agile team working on a large-scale SAAS project in the field of 
        engineering simulation.
      </p>
      <br /> */}
			<p>
				My programming role model is Dan Abramov. I follow his blog and Twitter
				extensively.
			</p>
		</section>
	)
}

export default IntroText
