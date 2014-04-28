var gulp = require('gulp');
var traceur = require('gulp-traceur');

var path = {
  src: './src/**/*.js'
};

// Transpile to ES6.
gulp.task('compile', function() {
  gulp.src(path.src)
    .pipe(traceur({sourceMaps: true}))
    .pipe(gulp.dest('compiled'));
});


// Watch files for changes.
gulp.task('watch', function() {
  gulp.watch(path.src, ['compile']);
});

gulp.task('default', ['compile']);
