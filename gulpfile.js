var gulp = require('gulp');
var traceur = require('gulp-traceur');
var connect = require('gulp-connect');

var path = {
  src: './src/**/*.js'
};

// Transpile to ES6.
gulp.task('build', function() {
  gulp.src(path.src)
    .pipe(traceur({sourceMaps: true}))
    .pipe(gulp.dest('compiled/src'));
});


// Watch files for changes.
gulp.task('watch', function() {
  gulp.watch(path.src, ['build']);
});


// Serve files.
gulp.task('serve', function() {
  connect.server({
    root: [__dirname],
    port: 4000,
    open: true,
    livereload: false
  });
});
