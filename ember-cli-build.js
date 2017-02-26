/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var fs = require('fs');
var path = require('path');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    snippetPaths: ['tests/dummy/snippets'],
    snippetSearchPaths: ['app', 'tests/dummy/app', 'addon'],
    trees: {
      'public': 'tests/dummy/public'
    }
  });
  app.import('bower_components/moment/moment.js');

  if (fs.statSync('./bower_components/ember/bower.json').isFile()) {
    if (!/^1\.[89]/.test(require('./bower_components/ember/bower.json').version)) {
      app.import('bower_components/ember/ember-template-compiler.js', { type: 'test' });
    }
  }

  var bootstrap = 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap';
  fs.readdirSync(bootstrap).forEach(function(font){
    app.import(path.join(bootstrap, font), { destDir: '/fonts/bootstrap'});
  });


  return app.toTree();
};
