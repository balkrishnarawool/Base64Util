const gulp = require('gulp')
const del = require('del')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync').create()

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
    (async () => {const deletedPaths = await del(['./public/build/*.js', '*/public/build/*.css'])})()
    cb()
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
    js()
    css()
    cb()
}

function js() {
    var js_src = ['./node_modules/bootstrap/dist/js/bootstrap.min.js', './node_modules/jquery/dist/jquery.min.js']
    var js_dest = './public/build'
    // pipe the js through concat, console log stripping, uglification and then store
    return gulp.src(js_src)
        .pipe(concat('app.min.js')) // concat all files in the src
        .pipe(uglify())   // uglify them all
        .pipe(gulp.dest(js_dest)) // save the file
}

function css() {
    var css_src = ['./node_modules/bootstrap/dist/css/bootstrap.min.css']
    var css_dest = './public/build'
    // pipe the css through concat, minify and then store
    return gulp.src(css_src)
        .pipe(concat('app.min.css')) // concat all files in the src
        .pipe(cleanCSS())   // minify them all
        .pipe(gulp.dest(css_dest)) // save the file
}

function serve(done) {
    var called = false;
    return nodemon({
        script: './server.js'
    })
    .on('start', function () {
      if (!called) {
        called = true;
      }
    })
    done()
}

function sync(done) {
    browserSync.init(null, {
        proxy: 'localhost:3000',
        port: 8080
    })
    gulp.watch('./public/**/*.css', browserSync.reload) // css change works only for the first time. All subsequent changes are ignored.
    gulp.watch('./public/**/*.html').on('change', browserSync.reload)
    gulp.watch('./public/**/*.js').on('change', browserSync.reload)
    done()
}

exports.build = build
exports.default = gulp.series(clean, build, gulp.parallel(serve, sync))