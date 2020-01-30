const gulp    = require('gulp');
const babel   = require("gulp-babel");
const concat  = require('gulp-concat');
const uglify  = require('gulp-uglify');
const inject  = require('gulp-inject');
const webpack = require('webpack-stream');
const del     = require('del');

// -------------------------------------------------------------------------- //
// card                                                                       //
// -------------------------------------------------------------------------- //

gulp.task('compile-front', () => {
    return gulp.src('app/main-front.js')
        .pipe(webpack({ mode: 'production' }))
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(concat('front.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/anki'));
});

gulp.task('compile-back', () => {
    return gulp.src('app/main-back.js')
        .pipe(webpack({ mode: 'production' }))
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(concat('back.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/anki'));
});

gulp.task('inject-front', () => {
    return gulp.src('./app/assets/front.html')
        .pipe(inject(gulp.src(['./build/anki/front.min.js']), {
            starttag: '<script>',
            endtag: '</script>',
            transform: function (filepath, file) {
                return file.contents.toString();
            }
        }))
        .pipe(gulp.dest('build/anki'));
});

gulp.task('inject-back', () => {
    return gulp.src('./app/assets/back.html')
        .pipe(inject(gulp.src(['./build/anki/back.min.js']), {
            starttag: '<script>',
            endtag: '</script>',
            transform: function (filepath, file) {
                return file.contents.toString();
            }
        }))
        .pipe(gulp.dest('build/anki'));
});

gulp.task('copycss-anki', () => {
    return gulp.src('./app/assets/*.css')
        .pipe(gulp.dest('build/anki'));
});

gulp.task('cleanup-anki', () => {
    return del(['build/anki/*js']);
});

gulp.task('card', gulp.series('compile-front', 'compile-back', 'inject-front', 
    'inject-back','copycss-anki', 'cleanup-anki'));

// -------------------------------------------------------------------------- //
// demo                                                                       //
// -------------------------------------------------------------------------- //

gulp.task('compile-web', () => {
    return gulp.src('app/main.js')
        .pipe(webpack({ mode: 'production' }))
        .pipe(babel({presets: ['@babel/preset-env']}))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('build/demo'));
});

gulp.task('copy-assets', () => {
    return gulp.src(['./app/assets/*.css', './app/assets/index.html'])
        .pipe(gulp.dest('build/demo'));
});

gulp.task('web', gulp.series('compile-web', 'copy-assets'));

// -------------------------------------------------------------------------- //
// exposed                                                                    //
// -------------------------------------------------------------------------- //

gulp.task('default', gulp.series('web', 'card'));

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['default']);
});