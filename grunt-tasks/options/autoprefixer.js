//jscs:disable

module.exports = {
  options: {
    browsers: [ '> 1%', 'last 2 versions', 'ie 9', 'Firefox ESR' ],
  },
  dev: {
    options: {
      map: true
    },
    expand: true,
    flatten: true,
    src: '<%= config.tmp %><%= config.assets %>css/*.css',
    dest: '<%= config.tmp %><%= config.assets %>css/'
  },
  build: {
    expand: true,
    flatten: true,
    src: '<%= config.build %><%= config.assets %>css/*.css',
    dest: '<%= config.build %><%= config.assets %>css/'
  }
};
