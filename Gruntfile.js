var fs = require('fs');

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
    grunt.registerTask('creaDirs','Crea directorios necesarios', function(error){

        function existeDir(path) {
            try {
                return fs.statSync(path).isDirectory();
            } catch (e) {
                return false;
            }
        }

        if (!existeDir("./uploads")){
            fs.mkdirSync("./uploads");
            console.log("Directorio ./uploadS creado.");
        } else {
            console.log("El directorio ./uploads ya existía.");
        }

        if (!existeDir("./logs")){
            fs.mkdirSync("./logs");
            console.log("Directorio ./logs creado.");
        }else {
            console.log("El directorio ./logs ya existía");

        }
    });

    grunt.registerTask('Inicializa','Tareas iniciales: Crear directorios, Copiar Bootstrap a Public, etc.', ['copy:main','creaDirs']);

};