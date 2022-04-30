var gulp = require("gulp");
var pug = require("gulp-pug");
var concat = require("gulp-concat");
var prefixer = require("gulp-autoprefixer");
var sass = require("gulp-sass")(require("sass"));
var uglify = require("gulp-uglify");
const { parallel } = require("gulp");

function html() {
  return gulp
    .src("./src/pug/components/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./dist/"));
}

function css() {
  return gulp
    .src("./src/sass/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(prefixer("last 2 versions"))
    .pipe(concat("main.css"))
    .pipe(gulp.dest("./dist/"));
}

function imgs() {
  return gulp.src("./src/imgs/*.*").pipe(gulp.dest("./dist/imgs/"));
}

function js() {
  return gulp
    .src("./src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
}

// watch(['./src/**/*.*'],[css,html]);

gulp.task("watch", () => {
  gulp.watch("./src/pug/**/*.*", html);
  gulp.watch("./src/sass/**/*.*", css);
  gulp.watch("./src/js/*.js", js);
  gulp.watch("./src/imgs/*.*", imgs);
});
exports.default = parallel(html, css, js, imgs);
