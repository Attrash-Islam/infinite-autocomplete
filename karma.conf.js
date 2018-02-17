var webpackConf = {
  devtool: 'inline-source-map',
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.ts$/,
        loader: 'istanbul-instrumenter-loader',
        enforce: 'post',
        exclude: [
          /node_modules/,
          /test/
        ]
      }
    ]
  }
};

module.exports = function (config) {
	config.set({
    client: {
      captureConsole: false,
    },
		basePath: '',
		frameworks: ['jasmine', 'source-map-support'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'], 
		singleRun: true,
		reporters: ['progress', 'coverage'], 
		files: [
      "node_modules/es6-promise/dist/es6-promise.auto.js",
			'test/index.ts'
		],
		webpack: webpackConf,
		preprocessors: {
			'test/index.ts': ['webpack']
		},
		coverageReporter: {
			reporters: [
				{ type: 'lcovonly', dir: 'coverage/' },
				{ type: 'text-summary' }
			]
		},
		mime: {
			'text/x-typescript': ['ts']
		}
	});
};
