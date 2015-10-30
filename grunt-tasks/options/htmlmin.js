
module.exports = {
  options: {
    removeStyleLinkTypeAttributes: true,
    removeComments: true,
    collapseWhitespace: true
  },
  dev: {
    files: {
      '<%= config.tmp %>/index.html': '<%= config.dev %>layout/index.html'
    }
  },
  build: {
    files: {
      '<%= config.build %>/index.html': '<%= config.dev %>layout/index.html'
    }
  }
}
