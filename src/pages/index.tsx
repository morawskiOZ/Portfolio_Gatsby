import React, { ReactElement } from 'react'
import App from 'src/components/App/App'
import { graphql } from 'gatsby'

const HomePage = ({ data }): ReactElement => <App data={data} />

export const query = graphql`
	query HomePageQuery {
		allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
			edges {
				node {
					...FluidImage
					name
				}
			}
			totalCount
		}
	}
`
export default HomePage
