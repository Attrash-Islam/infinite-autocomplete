var webpackConf = require('./webpack.config.js');

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		client: {
    		captureConsole: true
		},
		browsers: ['PhantomJS'],
		singleRun: true,
		reporters: ['dots'], 
		files: [
			'test/index.ts'
		],
		webpack: webpackConf,
		preprocessors: {
			'test/index.ts': ['webpack']
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage/'
		},
		mime: {
			'text/x-typescript': ['ts']
		}
	});
};
