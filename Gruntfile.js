module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.task.loadTasks('./buildTools/grunt-install-dependencies/tasks');
  grunt.initConfig({
    'install-dependencies': {
        options: {
            isDevelopment: true,
            stdout: true,
            stderr: false    //npm install is very chatty on stderr. Enable if you have install errors and want the messages.
        }
    },

    clean: {
        options: {
            force: true,
            expand: true
        },
        all: ["bower_components", "node_modules"]
    },

    jshint: {
        ui: {
            options: {
                jquery: true,
                jasmine: true,
                globals: {
                    define: true,
                    require: true,
                    angular: true,
                    console: true,
                    module: true,
                    inject: true,
                    document: true
                }
            },
           files: {
                src: ['ui/**/*.js']
            }
        }
    },

    availabletasks: {
        tasks: {
            options: {
                filter: 'include',
                tasks: ['run-setup', 'run-linting', 'run-unittest'],
                descriptions: {
                    'run-setup': 'Install necessary npm modules and bower components.',
                    'run-linting': 'Run linting for the code to find any syntax errors.'
                }
            }
        }
    }
  });

  //tasks
  grunt.registerTask('run-setup', ['clean:all', 'install-dependencies']);
  grunt.registerTask('run-linting', ['jshint']);
  grunt.registerTask('help', ['availabletasks']);
  grunt.registerTask('default', ['help']);

};
