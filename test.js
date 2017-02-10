var gulp= require('gulp'),
	eslint=require('gulp-eslint'),
	minify=require('gulp-minify-css'),//css压缩
	 concat = require('gulp-concat'),//文件合并
    uglify = require('gulp-uglify'),//js压缩
    rename = require('gulp-rename'),//文件重命名
    imagemin = require('gulp-imagemin'),//压缩图片
    clean = require('gulp-clean'),//清空文件夹
    rev = require('gulp-rev'),//更改版本号
    revCollector = require('gulp-rev-collector'),//gulp-rev插件，用于html模板更改引用路径
    /*-----------------------------------------
    更新-------------------------------------*/
    upload = require('gulp-qndn').upload,//七牛上传
    cdn = require('gulp-cdn-replace');//替换CDN链接


//压缩css
gulp.task('minifyCss', function(){
    return gulp.src('public/css/*.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(minify())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'));
});

//压缩js
gulp.task('minifyJs', function(){
    return gulp.src('public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//压缩图片
gulp.task('minifyImg', function(){
    return gulp.src('public/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'));
});

// 文件合并
gulp.task('minifyCss', function(){
    return gulp.src('public/css/*.css')
        .pipe(minify())
        .pipe(concat('main.css'))//里面是合并后文件名
        .pipe(gulp.dest('dist/css'));
});
// 版本控制
gulp.task('minifyCss', function(){
    return gulp.src('public/css/*.css')
        // .pipe(rename({suffix: '.min'}))
        .pipe(minify())
        .pipe(concat('main.css'))
        .pipe(rev())//会自动在原先文件名上添加随机序号
        .pipe(gulp.dest('dist/app/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/css'));
});

// 上传
/*var qnOptions = {
    accessKey: '**',
    secretKey: '**',
    bucket: '存放资源的容器名',
    domin:'你的cdn链接',
    delete: false（每次上传，如果你要删除同名文件就改为true）
}

gulp.task('minifyJs', function(){
    return gulp.src('public/js/*.js')
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(upload({qn: qnOptions}))
        .pipe(gulp.dest('dest/js'));
});*/