export const createImageHashMap = images => {
	if (!images) return {}
	return {
		...images.reduce((result, image) => {
			const imageName = image?.node?.name
			if (imageName) {
				return { ...result, [imageName]: { ...image.node.childImageSharp } }
			}
			return result
		}, {}),
	}
}
