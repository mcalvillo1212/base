// package.json start comand - saved here just for reference
// "start": "npm-run-all --parallel dev:*",

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    // browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

var jsSources = [
  // 'components/scripts/vendor.js',
  'components/scripts/script.js'
];
// combine all js files form jsSouses array
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    // .pipe(browserify())
    .pipe(gulp.dest('builds/dev/js'))
});
