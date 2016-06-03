

module.exports = function () {

  return {
    files: [
      
      {pattern: 'node_modules/systemjs/dist/system.js', instrument: false},
      {pattern: 'systemjs.config.js', instrument: false},


      {pattern: 'node_modules/core-js/client/shim.min.js', instrument: false},


      {pattern: 'node_modules/reflect-metadata/Reflect.js', instrument: false},
      {pattern: 'node_modules/zone.js/dist/zone.js', instrument: false},
      {pattern: 'node_modules/zone.js/dist/jasmine-patch.js', instrument: false},
      {pattern: 'node_modules/zone.js/dist/async-test.js', instrument: false},
      {pattern: 'node_modules/zone.js/dist/fake-async-test.js', instrument: false},

      {pattern: 'app/**/*+(ts|html|css)', load: false},
      {pattern: 'app/**/*.spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'app/**/*.spec.ts', load: false}
    ],

    middleware: function (app, express) {
      app.use('/node_modules', express.static(require('path').join(__dirname, 'node_modules')));
    },

    testFramework: 'jasmine',

    debug: true,

    bootstrap: function (wallaby) {
      wallaby.delayStart();

      System.config({
        packageWithIndex: true 
      });

      System.import('systemjs.config.js')
        .then(function () {
          return Promise.all([
            System.import('@angular/core/testing'),
            System.import('@angular/platform-browser-dynamic/testing')
          ])
        })
        .then(function (providers) {
          var testing = providers[0];
          var testingBrowser = providers[1];

          testing.setBaseTestProviders(
            testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
            testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

     
          return Promise.all(wallaby.tests.map(function (specFile) {
            return System.import(specFile);
          }));
        })
        .then(function () {
          wallaby.start();
        })
        .catch(function (e) {
          setTimeout(function () {
            throw e;
          }, 0);
        });
    }
  };
};
