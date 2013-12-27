module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    zip: {
      extension: {
      cwd: './../src',
      // Files to zip together
      src: ['./../src/*.{js,png,html,json}'],

      // Destination of zip file
      dest: '../out/extension.zip'
    },

    }
  });

  grunt.loadNpmTasks('grunt-zip');

  grunt.registerTask('default', ['zip']);

};