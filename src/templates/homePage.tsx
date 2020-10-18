import React, { ReactElement } from 'react'
import App from 'src/components/App/App'

const HomePage = ({ pageContext }): ReactElement => (
	<App images={pageContext.images} />
)

export default HomePage
