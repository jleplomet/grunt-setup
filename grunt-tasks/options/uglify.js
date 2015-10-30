
module.exports = {
  options: {
    compress: {
      drop_console: true
    }
  },
  build: {
    files: {
      '<%= config.build %><%= config.assets %>js/main.js': ['<%= config.build %><%= config.assets %>js/main.js'],
      '<%= config.build %><%= config.assets %>js/plugins.js': ['<%= config.build %><%= config.assets %>js/plugins.js']
    }
  }
}
