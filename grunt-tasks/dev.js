
module.exports = function(grunt) {
  grunt.registerTask('dev', [
    'clean:dev',
    'concurrent:dev',
    'autoprefixer:dev',
    'browserify:dev',
    'browserSync:dev',
    'watch',
  ]);
};
