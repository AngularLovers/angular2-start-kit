// @AngularClass

module.exports = function(config) {
  var testWebpackConfig = require('./webpack.test.js');

  config.set({

    //basePath 相对目录，这里如果填了，files和exclude里的文件路径都会相对于它
    //默认情况下（没设置basePath），里面所有的路径，其实都是相对于 karma.config.js 的所在目录，也就是karma目录
    //如果设置了 basePath，那 basePath 就是相对于 karma.config.js 的所在目录（karma目录），而 files 和 exclude 里的路径则相对于 basePath
    basePath: '',

    //frameworks 需要用到的断言库，这里我们只用jsamine
    frameworks: ['jasmine'],

    // list of files to exclude
    //exclude 测试时，浏览器会忽略掉这个list里面的文件，不加载它们
    exclude: [ ],

    // list of files / patterns to load in the browser
    //files 测试时，浏览器需要加载的文件list
    // we are building the test environment in ./spec-bundle.js
    files: [ { pattern: './config/spec-bundle.js', watched: false } ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

    // Webpack Config at ./webpack.test.js
    webpack: testWebpackConfig,

    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },

    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'mocha', 'coverage' ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    //browsers 测试浏览器，有IE，Chrome，ChromeCanary，FireFox，Opera，Safari，PhantomJS
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Safari',
      'FireFox',
      'Chrome',
      'PhantomJS'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });

};
