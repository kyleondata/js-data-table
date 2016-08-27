var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var sassbeautify = require('gulp-sassbeautify');
var cssbeautify = require('gulp-cssbeautify');
var sourcemaps = require('gulp-sourcemaps');
var compass = require('gulp-compass');
var path = require('path');

'use strict';

/* To compile .scss files into css and watch for further changes */

gulp.task('sass', function () {
  gulp.src('sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

/* To adjust for vendor prefixing. This takes care of different browser need*/

gulp.task('browser-autoprefix', function () {
  return gulp.src('public/css/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('public/css/'));
});


/* To minify the output of javascript files for faster page load.
Switch file path in production environment */

gulp.task('compress', function () {
  return gulp.src(['public/js/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('public/js/min-js/'));
});


/* To minify the output of css files for faster page load.
Switch file path in production environment*/

gulp.task('min-css', function () {
  return gulp.src('public/css/*.css')
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest('public/css/min-css/'));
});


/* Type the first argument in for each of the task below in console followed by 'gulp'
to do what you want to do. For ex. gulp sass-and-watch */

gulp.task('sass-and-watch', ['sass', 'sass:watch']);
gulp.task('minify-js', ['compress']);
gulp.task('minify-css', ['min-css']);
gulp.task('css-pretty', ['css']);
gulp.task('vendor-fixin', ['browser-autoprefix']);

/* For the Forgetful. To Finish this list */
gulp.task('gulp-commands', function () {
  var obj = {
    sass: 'sass-and-watch',
    minifyjs: 'minify-js'
  };
  console.log(obj);
});

