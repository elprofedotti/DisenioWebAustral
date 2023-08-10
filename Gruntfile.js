module.exports = function(grunt) {
    // Configuración de tareas
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
    // Configuración de la tarea para compilar SASS
    sass: {
        dist: {
            options: {
                implementation: require('sass'), // Agrega esta línea
            },
            files: {
                'css/styles.css': 'scss/styles.scss'
            }
        }
    },
  
      // Configuración de la tarea para copiar archivos a la carpeta de distribución
      copy: {
        main: {
          expand: true,
          cwd: './',
          src: [
            '*.html',
            'css/*',
            'js/*',
            'media/*',
            'node_modules/bootstrap/dist/css/bootstrap.min.css', // Ruta a Bootstrap CSS
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', // Ruta a Bootstrap JS
            'node_modules/jquery/dist/jquery.min.js' // Ruta a jQuery
            ], // Ajusta los archivos que deseas copiar
          dest: 'dist/'
        }
      }
    });
  
    // Carga de plugins de Grunt
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    // Definición de tareas
    grunt.registerTask('default', ['sass', 'copy']);
  };
  