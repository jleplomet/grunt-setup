
module.exports = [
  '/**',
  ' * <%= pkg.name %> - v<%= pkg.version %>',
  ' *',
  ' * Built: <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>',
  ' *',
  ' * Agency: Avatarlabs',
  ' * Tech Lead, Dev: Jeff Leplomet <jeff@avatarlabs.com>',
  ' */\n'
].join('\n');
