var gulp 			= require('gulp'),
	watch			= require('gulp-watch'),
	browserSync		= require('browser-sync');

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	gulp.watch('./app/index.html', function() {
		browserSync.reload();
	});

	gulp.watch('./app/assets/css/**/*.css', function() {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['css'], function() {
	return gulp.src('.app/temp/styles/style.css')
		.pipe(browserSync.reload({stream: true}));
});