// package.json  comands - saved here just for reference
//
// "dev:live-server": "live-server builds/dev",
// "prod:server": "live-server builds/prod"

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    // browserify = require('gulp-browserify'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    concat = require('gulp-concat');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "builds/prod"
    });
    gulp.watch("components/sass/**/*.scss", ['sass']);
    gulp.watch("builds/prod/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("components/sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("builds/prod/css"))
        .pipe(browserSync.stream());
});

gulp.task('sync', ['serve']);


var jsSources = [
  // 'components/scripts/vendor.js',
  'components/scripts/script.js'
];
// combine all js files form jsSources array
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    // .pipe(browserify())
    .pipe(gulp.dest('builds/dev/js'))
});
