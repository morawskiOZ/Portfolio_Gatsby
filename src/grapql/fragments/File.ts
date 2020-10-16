import { graphql } from 'gatsby'

export const query = graphql`
	fragment FluidImage on File {
		childImageSharp {
			fluid {
				...GatsbyImageSharpFluid_withWebp
			}
		}
	}
`
