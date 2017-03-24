'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // bower: {
        //     install: {
        //         //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
        //     }
        // },
        connect: {
            server: {
                options: {
                    livereload: true,
                    base: './',
                    port: 9009
                }
            }
        },
        watch: {
            sass: {
                files: [
                    'css/*.scss'
                ],
                tasks: ['less:dev']
            },
            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    './*'
                ]
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'css',
                        src: ['*.scss'],
                        dest: './css',
                        ext: '.css'
                    }
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass']);

    grunt.registerTask('dev', ['connect:server', 'watch']);
};
