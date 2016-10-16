var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var gutil       = require('gulp-util');
var sassLint    = require('gulp-sass-lint');
var notify      = require('gulp-notify');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './',
    open: false
  });

  gulp.watch(['src/*.sass', 'src/**/*.sass'], ['sass']);
  gulp.watch('examples/*.html').on('change', browserSync.reload);
});

gulp.task('lint', function () {
  return gulp.src('src/**/*.s+(a|c)ss')
    .pipe(sassLint({
     config: '.sass-lint.yml' 
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('sass', function() {
  return gulp.src('src/css-loader.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      noCache: true
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('build', ['sass'], function() {
  return gulp.src('src/css-loader.sass')
    .pipe(sass({
      outputStyle: 'compressed',
      noCache: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(notify({
      title: 'Build task completed! <o/',
      message: 'CSS file created in => dist/css-loader.css',
      onLast: true
    }))
});

gulp.task('default', ['serve']);