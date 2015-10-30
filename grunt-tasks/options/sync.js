
module.exports = {
  dev: {
    files: [
      //Fonts
      {cwd: '<%= config.dev %>fonts/', src: ['**/*'], dest: '<%= config.tmp %><%=config.assets %>fonts'},

      //Videos
      {cwd: '<%= config.dev %>videos/', src: ['**/*'], dest: '<%= config.tmp %><%=config.assets %>videos'},

      //Sounds
      {cwd: '<%= config.dev %>sounds/', src: ['**/*'], dest: '<%= config.tmp %><%=config.assets %>sounds'},

      // Data
      {cwd: '<%= config.dev %>data/', src: ['**/*'], dest: '<%= config.tmp %><%=config.assets %>data'},

      // Layout
      //{cwd: '<%= config.dev %>layout/', src: ['**/*.{html,php}'], dest: '<%= config.tmp %>'},

      // Mobile
      {cwd: '<%= config.dev %>mobile/', src: ['**/*'], dest: '<%= config.tmp %>mobile'},
    ],
    verbose: true,
    updateOnly: true
  },

  build: {
    files: [
      //Fonts
      {cwd: '<%= config.dev %>fonts/', src: ['**/*'], dest: '<%= config.build %><%=config.assets %>fonts'},

      //Videos
      {cwd: '<%= config.dev %>videos/', src: ['**/*'], dest: '<%= config.build %><%=config.assets %>videos'},

      //Sounds
      {cwd: '<%= config.dev %>sounds/', src: ['**/*'], dest: '<%= config.build %><%=config.assets %>sounds'},

      // Data
      {cwd: '<%= config.dev %>data/', src: ['**/*'], dest: '<%= config.build %><%=config.assets %>data'},

      // Layout
      //{cwd: '<%= config.dev %>layout/', src: ['**/*.{html,php}'], dest: '<%= config.build %>'},
    ],
    verbose: true,
    updateOnly: true
  }
};
