const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require ('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
    done();
}

function images() {
    return gulp.src('./src/images/**/*', {encoding: false})
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false},gulp.series(scripts));  
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false},gulp.series(styles)); 
    gulp.watch('./source/images/*', {ignoreInitial: false},gulp.series(images)); 
}
