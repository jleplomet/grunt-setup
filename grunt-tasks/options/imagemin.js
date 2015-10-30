
module.exports = {
  dev: {
    options: {
      optimizationLevel: 0,
      svgoPlugins: [{mergePaths: false}]
    },
    files: [{
      expand: true,
      cwd: '<%= config.dev %>images/',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= config.tmp %><%= config.assets %>images/'
    }]
  },
  build: {
    options: {
      optimizationLevel: 3
    },
    files: [{
      expand: true,
      cwd: '<%= config.dev %>images/',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= config.build %><%= config.assets %>images/'
    }]
  }
};
