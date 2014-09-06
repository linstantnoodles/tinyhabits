module.exports = (grunt) ->
  grunt.initConfig {
    coffee: {
      compileJoined: {
        options: {
          join: true
        },
        files: {
          'src/app.js': [
            'my-app.coffee',
            'controllers/*.coffee',
            'directives/*.coffee',
            'factories/*.coffee'
          ]
        }
      }
    }
  }

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.registerTask 'default', ['coffee']
