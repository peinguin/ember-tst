module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: [
          'index.html',
          'js/**/*.js',
          'Gruntfile.js'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
    jsvalidate: {
      options:{
        globals: {},
        esprimaOptions: {},
        verbose: false
      },
      targetName:{
        files:{
          src:['dist/build.js']
        }
      }
    },
    jshint: {
      all: [
      'Gruntfile.js',
      'js/app/app.js']
    },
    emberTemplates: {
      compile: {
        files: {
          "js/app/templates.js":"hbs/**/*.hbs"
        },
        options: {
          concatenate: true,
          templateFileExtensions: /\.hbs/,
          templateBasePath: /hbs\//
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsvalidate');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('template', ['emberTemplates']);
  grunt.registerTask('default', ['jshint', 'emberTemplates', 'jsvalidate']);
};
