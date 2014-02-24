module.exports = function(grunt) {
 
  grunt.initConfig({
    compass: {                  // Task
      options : {
        require: ['breakpoint', 'singularitygs', 'modular-scale']
      },
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'assets/sass',
          cssDir: 'assets/css',
          environment: 'production'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'assets/sass',
          cssDir: 'assets/css',
          watch: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass']);

};