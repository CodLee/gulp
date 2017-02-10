var gulp = require("gulp"),
	connect = require("gulp-connect"),
	less = require("gulp-less"),
	cssmin = require("gulp-clean-css"),
	htmlmin = require("gulp-htmlmin"),
	imgmin = require("gulp-imagemin");
	//jsmin = require("gulp-uglify");


//css,less等相关处理
gulp.task("css",function(){
	gulp.src("./src/less/*.less").pipe(less()).pipe(cssmin()).pipe(gulp.dest("./dist/css"));
	gulp.src("./src/css/*.css").pipe(cssmin()).pipe(gulp.dest("./dist/css"));
});

//js相关处理
gulp.task("js",function(){
	var jsData = {
            mangle: {except: ['require' ,'exports' ,'module' ,'$']},//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
        }

	//gulp.src("./src/js/*.js").pipe(jsmin(jsData)).pipe(gulp.dest("./dist/js"));
	gulp.src("./src/js/*.js").pipe(gulp.dest("./dist/js"));
});

//html文件相关处理
gulp.task("html",function(){
	var htmlData = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
	gulp.src("./src/html/*.html").pipe(htmlmin(htmlData)).pipe(gulp.dest("./dist/html"));
})


// 监听模块
gulp.task("watch",function(){
	gulp.watch("./src/css/*.css",["css","reload"]);
	gulp.watch("./src/less/*.less",["css","reload"]);
	gulp.watch("./src/js/*.js",["js","reload"]);
	gulp.watch("./src/html/*.html",["html","reload"]);//模块刷新
});

//手动控制编译
gulp.task("init",["css","html","js"]);

//执行刷新
gulp.task("reload",function(){
	gulp.src("./dist/html/*.html").pipe(connect.reload());
});

// 测试命令
gulp.task('test',function(){
	console.info('gulp测试');
});

//开启web服务器
gulp.task("server",function(){
	connect.server({
		root : "./dist",
		port : 8001,
		livereload :true
	});
});

//配置默认启动项
gulp.task("default",["server","watch"]);
