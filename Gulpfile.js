var gulp = require('gulp');
var phpspec = require('gulp-phpspec');
var run = require('gulp-run');
var notify = require('gulp-notify');

gulp.task('test', function() {
    gulp.src('spec/**/*.php')
        .pipe(phpspec('', { notify: true }))
        .on('error', notify.onError({
            title: 'Crap',
            message: 'Test has been failed!'
        }))
        .pipe(notify('All Done!'))
});
