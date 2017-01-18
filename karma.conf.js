var webpackConf = require('./webpack.config.js');

webpackConf.entry = {};
webpackConf.module.postLoaders = [
    {
        test: /\.ts$/,
        loader: 'istanbul-instrumenter-loader',
        exclude: [
            'node_modules',
			/test/
        ]
    }
];

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', 'source-map-support'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'], 
		singleRun: true,
		reporters: ['dots', 'coverage'], 
		files: [
			'test/index.ts'
		],
		webpack: webpackConf,
		preprocessors: {
			'test/index.ts': ['webpack']
		},
		coverageReporter: {
			type: 'lcovonly',
			dir: 'coverage/'
		},
		mime: {
			'text/x-typescript': ['ts']
		}
	});
};
