var path = require("path");
var fs = require("fs");
var hb = require("handlebars");
var underscore = require("underscore");

module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            main: {
                options: {
                    install: false,
                    layout: "byComponent",
                    cleanTargetDir: true,
                    targetDir: "static/lib"
                }
            }
        },
        handlebars: {
            dev: {
                files: {
                    "static/templates.js": ["src/templates/**/*.hbs"]
                },
                options: {
                    namespace: 'hw2.templates',
                    processName: function(filePath) {
                        var pieces = filePath.split("/");
                        return pieces[pieces.length - 1].replace('.hbs', ''); 
                    }
                }
            }
        },
        /*
        requirejs: {
            compile: {
                options: {
                    name: 'main',
                    baseUrl: 'src/js/',
                    mainConfigFile: 'src/js/main.js',
                    out: 'prod/js/main.js'
                }
            }
        },
        */
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['static/lib/**/*.js']
            },
            grunt: ['./Gruntfile.js'],
            src: ['static/js/**/*.js']
        },
        connect: {
            options: {
                port: 8000,
                base: 'static/'
            }
        }
    });
    
    grunt.registerTask('build', ['bower:main']);
    grunt.registerTask('default', ['build']);
    
};
