module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        compass: {
            dev: {
                options: {
                    sassDir: 'scss/',
                    cssDir: 'css/'
                }
            }
        },
        watch: {
            files: ['scss/*'],
            tasks: ['compass:dev'],
        },

    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['compass','watch']);

};
