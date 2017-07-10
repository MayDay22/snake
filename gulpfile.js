const gulp = require('gulp');
var rename = require("gulp-rename");
const sass = require('gulp-ruby-sass');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');


gulp.task('sass', () =>
    sass('scss/style.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('css'))
);

gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
  .pipe(rename('style.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'))
});


gulp.task('watch', function(){
    gulp.watch('scss/style.scss', ['sass']); 
    gulp.watch('css/style.css', ['minify-css']);
});
