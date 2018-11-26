const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

/* gulp.task - define tasks
 * gulp.src - point to files to use
 * gulp.dest - points to folder to output
 * gulp.watch - watch files and folders for changes
 * */

// copy All HTML files
gulp.task('copyhtml', function(){
		gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

//optomize images
gulp.task('imageMin', function() {
		gulp.src('src/resources/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});

// Minify JS
gulp.task('minify', function(){
		gulp.src('src/resources/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// gulp-autoprefixer


gulp.task('default', ['copyhtml','minify','imageMin']);

