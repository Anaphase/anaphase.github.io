module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['**/*.js', '**/*.css', '**/*.html'],
      options: {
        'livereload': true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
