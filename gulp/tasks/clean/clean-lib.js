'use strict'

const config = require('../../config');
const gulp = require('gulp');
const del = require('del');

gulp.task('clean:lib', function () {
  return del(['lib/', 'lib/**/*']);
});
