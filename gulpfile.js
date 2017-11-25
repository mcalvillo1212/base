// package.json  comands - saved here just for reference
//
// "dev:live-server": "live-server builds/dev",
// "prod:server": "live-server builds/prod"

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    // browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

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

// combine all js files form jsSources array
gulp.task('images', function() {
  gulp.src('builds/dev/images/**/*.*')
});
