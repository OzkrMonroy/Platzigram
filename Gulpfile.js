var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babel = require('babelify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

// Asignamos una tarea
gulp.task('styles', function(){
	// Mediante src le indicamos el archivo sobre el que trabajará
	// Mediante cada pipe se le indique que realize una acción.
	gulp
	.src('index.scss')
	.pipe(sass())
	.pipe(rename('app.css'))
	.pipe(gulp.dest('public')); /*Mediante esta línea indicamos el lugar en el que dejará el archivo.*/
})

gulp.task('assets', function(){
	gulp
	.src('assets/*')
	.pipe(gulp.dest('public'));
})

//Función para compilar y recompilar
function compile(watch){
	var bundle = browserify('./src/index.js', {debug: true});

	if (watch) {
		bundle = watchify(bundle)
		bundle.on('update', function(){
			console.log('--> Building...');
			rebundle();
		})
	}

	function rebundle(){
	bundle
	.transform(babel)
	.bundle()
	.on('error', function(err) { console.log(err); this.emit('end') })
	.pipe(source('index.js'))
	.pipe(rename('app.js'))
	.pipe(gulp.dest('public'));
}

	rebundle();
}

gulp.task('build', function(){return compile(); })

gulp.task('watch', function(){ return compile(true); })
// A continuación indicaremos cual es la tarea por default
gulp.task('default', ['styles', 'assets', 'build'])