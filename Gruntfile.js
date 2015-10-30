
// Utility to load the different option files based on their names
function _loadConfig(path) {
  var glob = require('glob');
  var object = {};
  var key;

  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/, '');

    object[key] = require(path + option);
  });

  return object;
}

module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  // Initial Config
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    config: require('./grunt-tasks/config')
  };

  grunt.loadTasks('grunt-tasks');

  grunt.util._.extend(config, _loadConfig('./grunt-tasks/options/'));

  grunt.initConfig(config);

  require('time-grunt')(grunt);
}
