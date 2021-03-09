const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("./styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("./styles"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./styles/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
