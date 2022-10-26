const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

function buildSCSS() {
  return src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("dist/css"));
}

function buildJS() {
  return src("src/js/*.js").pipe(concat("bundle.js")).pipe(dest("dist/js"));
}

exports.default = function () {
  watch("src/scss/*.scss", buildSCSS);
  watch("src/js/*.js", buildJS);
};
