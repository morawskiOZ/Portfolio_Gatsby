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
