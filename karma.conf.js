//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    files: [
      {pattern: 'bower_components/**/*.js', included: false},
      {pattern: 'ui/app/**/*.js', included: false},
      {pattern: 'ui/**/*.spec.js', included: false},
      'unit-test/main.js'
    ],

    autoWatch: true,
    
    reporters: ['html'],

    frameworks: ['jasmine', 'requirejs'],

    //browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE'],
    browsers: ['PhantomJS'],
    
    // karma-html-reporter config
    htmlReporter: {
      outputDir: 'unit-test/report/', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'karma-report-html', // report summary filename; browser info by default


      // experimental
      preserveDescribeNesting: true, // folded suites stay folded
      foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-requirejs',
      'karma-html-reporter'
    ]

  });
};
