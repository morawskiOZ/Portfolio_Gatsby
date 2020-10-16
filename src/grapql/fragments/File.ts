import { graphql } from 'gatsby'

export const query = graphql`
	fragment FluidImage on File {
		childImageSharp {
			fluid(quality: 100) {
				...GatsbyImageSharpFluid_withWebp
			}
		}
	}
`
