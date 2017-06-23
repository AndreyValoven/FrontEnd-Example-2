var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify  = require('gulp-uglifyjs');

gulp.task('sass', function() {
    return gulp.src('app/sass/main.sass') 
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('scripts', function () {
   return gulp.src('app/js/*.js')
       .pipe(concat(('main.min.js')))
       .pipe(uglify())
       .pipe(gulp.dest("app/js"));
});


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});





gulp.task('watch', ['sass', 'browser-sync'], function() {
    gulp.watch('app/sass/**/*.+(scss|sass)',['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});