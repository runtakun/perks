var gulp = require('gulp');
var browserify = require('browserify');
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');

gulp.task('watch', function() {
    gulp.watch(['src/**/*.js', './*.html', 'components/**/*.vue'], ['browserify']);
});

gulp.task('browserify', function() {
  return browserify('./src/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function(){
    runSequence('browserify', 'watch');
});
