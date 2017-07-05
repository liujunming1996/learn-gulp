// yarn add --dev gulp-sass安装插件的方法
var gulp = require('gulp');
// var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
gulp.task('script', function() {
  return gulp.src(['javascripts/jquery.js',
   'javascripts/modernizer.js'])
   .pipe(concat('vendor.js'))
   .pipe(gulp.dest('dist/js'))
   .pipe(uglify())
   .pipe(rename('Vendor.min.js'))
   .pipe(gulp.dest('dist/js'))
});
gulp.task('server', function() {
  connect.server({
    root: 'dist/',
    livereload: true
  })
})
// gulp.task('sass', function() {
//   return gulp.src('stylesheets/**/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('dist/css'));
// })
gulp.task('copy-index', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
});
gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/images'));
})
gulp.task('data', function() {
  return gulp.src(['xml/*.xml', 'json/*.json', '!json/secret-*.json'])
    .pipe(gulp.dest('dist/data'));
})
gulp.task('build',
 ['copy-index', 'images', 'data'], function() {
   console.log('活干完了!');
})
gulp.task('watch', function() {
  gulp.watch('index.html', ['copy-index']);
  // gulp.watch('index.html', ['copy-index']);
})
// 定义前端开发阶段的任务
gulp.task('hello', function() {
  console.log('您好');
});

gulp.task('default', ['server', 'watch'])
