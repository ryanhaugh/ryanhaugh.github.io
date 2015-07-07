var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('less', function(){
    gulp.src('./forexlive/src/css/education.less')
        .pipe(less())
        //.pipe(minifyCSS())
        .pipe(gulp.dest('./forexlive/src/css'));
});

gulp.task('build', ['less']);

gulp.task('default', ['build']);
