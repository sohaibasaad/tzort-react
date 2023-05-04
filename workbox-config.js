module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.mp4'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};