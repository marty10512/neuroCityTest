var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');

var reload = browserSync.reload;

gulp.task('styl', () => {
  return gulp.src('src/css/*.styl')
  .pipe(plumber())
  .pipe(stylus({
    'include css': true,
      compress: true
  }))
  .pipe(concat('main.css'))
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream())
})

gulp.task('pug',() => {
  return gulp.src('src/html/*.pug')
  .pipe(plumber())
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('dist'))
})

gulp.task('js', () => {
  return gulp.src('src/js/*.js')
  .pipe(plumber())
  .pipe(gulp.dest('dist'))
})

gulp.task('clear-css', () => {
  return gulp.src('dist/*.css', {read: false})
  .pipe(clean());
})

gulp.task('clear-html', () => {
  return gulp.src('dist/*.html', {read: false})
  .pipe(clean());
})

gulp.task('clear-js', () => {
  return gulp.src('dist/*.js', {read: false})
  .pipe(clean());
})

gulp.task('watch', () => {
  global.watch = true;
  browserSync.init(['dist/*.css', 'dist/*.html'],{
    server: "./dist/"
  });
  gulp.watch('src/css/*.styl', gulp.series('clear-css', 'styl'));
  gulp.watch('src/html/*.pug', gulp.series('clear-html', 'pug'));
  gulp.watch('src/js/*.js', gulp.series('clear-js', 'js'));
  gulp.watch('dist/*.html').on("change", reload);
})



gulp.task('default', gulp.series('styl', 'pug', 'js', 'watch'));