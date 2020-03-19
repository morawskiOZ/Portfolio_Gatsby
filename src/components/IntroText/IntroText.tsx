import React, { ReactElement } from 'react'
import './IntroText.scss'

const IntroText = (): ReactElement => {
	return (
		<section className='IntroText IntroText--centered appFrame--paddingBottom appFrame--paddingTop'>
			<p>
				Creating reusable components in React with TypeScript is my jam. For
				styles I prefer JSS but sure can get my hands dirty with old-school
				Sass.
			</p>
			<br />
			<p>
				Everything can be tested is my motto. Unit tests with Jest. E2E tests?
				You bet, Cucumber and Puppeteer is my go to for them.
			</p>
			<br />
			<p>
				My programming role model is Dan Abramov. I follow his blog and Twitter
				extensively. Also Wes Bos, I did nearly all of his courses, and listen
				to Syntax on daily basis.
			</p>
		</section>
	)
}

export default IntroText
