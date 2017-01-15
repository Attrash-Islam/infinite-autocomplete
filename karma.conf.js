var webpackConf = require('./webpack.config.js');

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		singleRun: true,
		reporters: ['dots'], 
		files: [
			'src/Components/InfiniteAutocomplete.ts',
			'test/index.ts'
		],
		webpack: webpackConf,
		preprocessors: {
			'src/Components/InfiniteAutocomplete.ts': ['webpack'], 
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
