{
    appDir: '../www',
    dir: '../www-built',
    baseUrl: '../js/thirdparty',
//    mainConfigFile: '../www/res/js/common.js',
    modules: [
        {
            name: 'common',
            include: ['jquery',
                     'bootstrap'
                     ]
        },
        {
            name: 'application_js/drawChart',
            include: ['drawChart'],
            exclude: ['common']
        },
        {
            
        }
    ],
    paths: {
        jquery: "empty:",
        application_js: '../application_js'
    },
    optimize: 'uglify2',
    optimizeCss: 'standard',
    removeCombined: true,
    preserveLicenseComments: false
}