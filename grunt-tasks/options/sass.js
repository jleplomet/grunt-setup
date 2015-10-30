
module.exports = {
  dev: {
    options: {
      style: 'nested',
      sourcemap: 'none'
    },
    files: {
      "<%= config.tmp %><%= config.assets %>css/main.css": "<%= config.dev %>scss/main.scss",
    }
  },
  build: {
    options: {
      style: "compressed",
      sourcemap: 'none'
    },
    files: {
      "<%= config.build %><%= config.assets %>css/main.css": "<%= config.dev %>scss/main.scss",
    }
  }
};
