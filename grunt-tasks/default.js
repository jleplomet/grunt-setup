
module.exports = function(grunt) {
  grunt.registerTask('default', [
    'clean:build',
    'concurrent:build',
    'autoprefixer:build',
    'uglify:build',
    'sync:build'
  ]);
};
