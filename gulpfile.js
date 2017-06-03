var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.+(scss|sass)')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});



gulp.task('watch', ['sass', 'sync'], function() {
    gulp.watch('app/sass/**/*.+(scss|sass)',['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});