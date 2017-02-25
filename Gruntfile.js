module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        compass: {
            dev: {
                options: {
                    sassDir: 'source/sass/',
                    cssDir: 'css/'
                }
            }
        },
        watch: {
            files: ['source/sass/*'],
            tasks: ['compass:dev'],
        },

    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['compass','watch']);

};
