
module.exports = {
  dev: [
    'sass:dev',
    'htmlmin:dev',
    'imagemin:dev',
    'sync:dev'
  ],
  build: [
    'sass:build',
    'htmlmin:build',
    'imagemin:build',
    'browserify:build',
    'sync:build'
  ]
}
