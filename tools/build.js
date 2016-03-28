({
	baseUrl: '../www/res/js',
	mainConfigFile: '../www/res/js/common.js',
	name: 'common',
	out: '../www-built/output',
    paths: {
        jquery: "empty:"
    },
    optimize: 'uglify2',
    removeCombined: true,
    preserveLicenseComments: false
})