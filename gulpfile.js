var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

var jsSources = [
  'components/scripts/script.js'
];
// combine all js files form jsSouses array
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/dev/js'))
});
