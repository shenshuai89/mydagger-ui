const { series, src, dest } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");

//编译scss文件，并拷贝到指定目录下
function compile() {
  return src("./src/components/*.scss")
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["ie > 9", "last 2 versions"],
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(dest("./lib/style"));
}
// 拷贝字体文件
function copyfont() {
  return src("./src/fonts/**").pipe(cssmin()).pipe(dest("./lib/fonts"));
}

exports.build = series(compile, copyfont);
