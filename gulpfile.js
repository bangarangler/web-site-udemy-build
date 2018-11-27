var webserver = require('gulp-webserver');
const gulp = require('gulp');
var paths = {
		src: 'src/**/*',
		srcHTML: 'src/**/*.html',
		srcCSS: 'src/**/*.css',
		srcJS: 'src/**/*.js',
		srcimgjp: 'src/imgjp/**/*',

		tmp: 'tmp',
		tmpIndex: 'tmp/index.html',
		tmpCSS: 'tmp/**/*.css',
		tmpJS: 'tmp/**/*.js',
		tmpimgjp: 'tmp/imgjp/**/*',


		dist: 'dist',
		distIndex: 'dist/index.html',
		distCSS: 'dist/**/*.css',
		distJS: 'dist/**/*.js',
		distimgjp: 'dist/imgjp/**/*'
};
var inject = require('gulp-inject');

gulp.task('html', function(){
		return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task('css', function() {
		return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
});

gulp.task('js', function(){
		return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});

gulp.task('imgjp', function(){
		return gulp.src(paths.srcimgjp).pipe(gulp.dest(paths.tmp));
});

gulp.task('copy', ['html','css','js','imgjp']);

gulp.task('inject', ['copy'], function(){
		var css = gulp.src(paths.tmpCSS);
		var js = gulp.src(paths.tmpJS);
		var imgjp = gulp.src(paths.tmpimgjp);
		return gulp.src(paths.tmpIndex)
		.pipe(inject( css, { relative:true } ))
		.pipe(inject( js, { relative:true } ))
		.pipe(inject( imgjp, { relative:true } ))
		.pipe(gulp.dest(paths.tmp));
});

gulp.task('serve', ['inject'], function(){
		return gulp.src(paths.tmp)
		.pipe(webserver({
				port:3000,
				livereload: true
		}));
});

gulp.task('watch', ['serve'], function(){
		gulp.watch(paths.src, ['inject']);
});

gulp.task('default', ['watch']);

/*const browserSync = require('browser-sync').create();*/
//const uglifycss = require('gulp-uglifycss');
//const csso = require('gulp-csso');
//const autoprefixer = require('gulp-autoprefixer');
//const imagemin = require('gulp-imagemin');

//gulp.task('sync', function(){
		//browserSync.init({
				//server: {
						//baseDir: "./",
				//}
		//})
//});

//gulp.task('imagemin', function(){
		//gulp.src('src/esources/image/*')
		//.pipe(imagemin())
		//.pipe(gulp.dest('dist/images'))
//});





//gulp.task('css', function(){
		//gulp.src('./src/resources/image/*.css')
		//.pipe(uglifycss({
				//"uglyComments": true
		//}))
		//.pipe(gulp.dest('dist'));
//});

////gulp.task('styles', function() {
		////return gulp.src('./src/resources/css/*.css')
		////.pipe(autoprefixer(['browsers: last 2 versions']))
		////.pipe(csso())
		////.pipe(gulp.dest('./dist/css'));
////});


//gulp.task('default', ['css','imagemin','sync']);

