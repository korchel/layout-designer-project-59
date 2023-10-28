const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
  browserSync.init({
    server: "build/"
  });

  watch('app/sass/*.scss', buildSass);
  watch('app/pug/**/*.pug', buildPug);
};

const buildSass = () => {
  console.log('Компиляция SASS');

  return src('app/sass/app.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'))
    .pipe(browserSync.stream());
};

const buildPug = () => {
  console.log('Компиляция Pug');

  return src('app/pug/index.pug')
    .pipe(pug())
    .pipe(dest('build/'))
    .pipe(browserSync.stream());
};

const development = () => {
  console.log('development');
  buildPug();
  buildSass();
  browserSyncJob();
};

exports.default = development;
