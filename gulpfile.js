var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat');

var jsSources = [
  'components/scripts/script.js'
];
// combine all js files form jsSouses array
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/dev/js'))
});
