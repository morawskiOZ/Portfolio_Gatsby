const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.onCreateNode = async ({
	node,
	actions: { createNode },
	store,
	cache,
	createNodeId,
}) => {
	if (node.internal.type === 'CloudinaryMedia' && node.secure_url) {
		await createRemoteFileNode({
			url: node.secure_url, // string that points to the URL of the image
			parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
			createNode, // helper function in gatsby-node to generate the node
			createNodeId, // helper function in gatsby-node to generate the node id
			cache, // Gatsby's cache
			store, // Gatsby's redux store
		})
	}
}

exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
		query {
			allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
				edges {
					node {
						childImageSharp {
							fluid(quality: 100) {
								base64
								tracedSVG
								srcWebp
								srcSetWebp
								originalImg
								originalName
								aspectRatio
								presentationHeight
								presentationWidth
								sizes
								src
								srcSet
							}
						}
						name
					}
				}
			}
		}
	`)

	const imagesData = data.allFile.edges

	const createImageHashMap = images => {
		if (!images) return {}
		return {
			...images.reduce((result, image) => {
				const imageName = image && image.node && image.node.name
				if (imageName) {
					return { ...result, [imageName]: { ...image.node.childImageSharp } }
				}
				return result
			}, {}),
		}
	}
	const imageHashMap = createImageHashMap(imagesData)
	actions.createPage({
		path: '/',
		component: require.resolve(`./src/templates/homePage.tsx`),
		context: { images: imageHashMap },
	})
}
