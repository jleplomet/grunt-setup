
module.exports = {
  options: {
    spawn: false
  },
  css: {
    files: ['<%= config.dev %>scss/**/*'],
    tasks: ['sass:dev', 'autoprefixer:dev']
  },
  html: {
    files: ['<%= config.dev %>layout/**/*'],
    tasks: ['htmlmin:dev']
  },
  data: {
    files: ['<%= config.dev %>data/**/*'],
    tasks: ['sync:dev']
  },
  //images: {
  //  files: ['<%= config.dev %>images/**/*'],
  //  tasks: ['newer:imagemin:dev']
  //}
};
