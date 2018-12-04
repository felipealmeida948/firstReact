/*
gulp.task - defina as tarefas que o Gulp realizará
gulp.src - pasta de arquivos
gulp.dest - definia a saida do arquivo depois de realziar a tarefa
gulp-watch - Assiste as alterações de aquivos para acionar as tarefas
*/

// Modulos
var gulp = require('gulp')
var sass = require('gulp-sass')
var watchSass = require('gulp-watch-sass')
var rename = require('gulp-rename')

// Pastas
var styleSRC = './src/assets/sass/style.scss'
var styleDIST = './src/css'

gulp.task('sass', function () {
  gulp.src(styleSRC)
    .pipe(sass({
      outputStyle: 'compressed'
    })
      .on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(styleDIST))
})

gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass'])
})

gulp.task('default', function () {
// Sua taks
})
