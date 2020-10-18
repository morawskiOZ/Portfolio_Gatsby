import React, { ReactElement } from 'react'
import App from 'src/components/App/App'
import Layout from 'src/components/layout'

const HomePage = ({ pageContext }): ReactElement => (
	<Layout>
		<App images={pageContext.images} />
	</Layout>
)

export default HomePage
