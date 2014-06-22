var gulp = require('gulp')
  , gutil = require('gulp-util')
  , concat = require('gulp-concat')
  , less = require('gulp-less')

gulp.task('stylesheets', function() {
  gulp.src('stylesheets/index.less')
    .pipe(less({ compress: true })).on('error', gutil.log)
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./stylesheets'))
})

gulp.task('watch', function() {
  gulp.watch([
    'index.html',
    'stylesheets/*.less'
  ], ['stylesheets'])
})

gulp.task('default', ['stylesheets', 'watch'])
