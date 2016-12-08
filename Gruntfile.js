module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    // Copia CSS
                    {expand: true, cwd: 'node_modules/bootstrap/dist/css/', src: '**', dest: 'public/stylesheets/', filter: 'isFile'},

                    // Copia Javascript
                    {expand: true, cwd: 'node_modules/bootstrap/dist//js/', src: '**', dest: 'public/javascripts/', filter: 'isFile'}
                ]
            }
        }
    });

    // Load the plugin that provides the "copy" task.
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Lotes de tareas(s).
    grunt.registerTask('Inicializa','Tareas iniciales: Copiar Bootstrap a Public, etc.', ['copy:main']);

};