var gulp = require('gulp');
var pug = require('gulp-pug');
var concat = require('gulp-concat');
var prefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass')(require('sass'));
var cleanCss =require('gulp-clean-css');

const {parallel} = require('gulp');

function html(){
    return gulp.src('./src/pug/components/index.pug')
                .pipe(pug({pretty:true}))
                .pipe(gulp.dest('./dist/'))
}

function css(){
    return gulp.src('./src/sass/main.scss')
            .pipe(sass({outputStyle:'compressed'}))
            .pipe(prefixer('last 2 versions'))
            .pipe(concat('main.css'))
            .pipe(gulp.dest('./dist/'))
}

gulp.task('watch',()=>{
    gulp.watch('./src/pug/**/*.*',gulp.series('html'));
    gulp.watch('./src/sass/**/*.*',gulp.series('css'));
})
exports.default = parallel(html,css);