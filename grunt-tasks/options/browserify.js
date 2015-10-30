
module.exports = {
  options: {
    transform: [['babelify', {externalHelpers: true, stage: 0}]]
  },

  dev: {
    files: {
      '<%= config.tmp %><%= config.assets %>js/main.js': '<%= config.dev %>js/main.js',
      '<%= config.tmp %><%= config.assets %>js/plugins.js': '<%= config.dev %>js/plugins.js',
    },
    options: {
      watch: true, // use watchify for incremental builds!
      keepAlive: false,
      browserifyOptions: {
        debug: true
      }
    }
  },

  build: {
    files: {
      '<%= config.build %><%= config.assets %>js/main.js': '<%= config.dev %>js/main.js',
      '<%= config.build %><%= config.assets %>js/plugins.js': '<%= config.dev %>js/plugins.js'
    },
    options: {
      browserifyOptions: {
        debug: false
      }
    }
  }
}
