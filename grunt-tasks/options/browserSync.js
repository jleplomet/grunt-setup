
module.exports = {
  dev: {
    files: {
      src : [
        "<%= config.tmp %>**/*",
        "!<%= config.tmp %>files/css/main.css.map"
      ]
    },
    options: {
      watchTask: true,
      watchOptions: {
        ignored: ''
      },
      server: "<%= config.tmp %>"
    }
  }
};
