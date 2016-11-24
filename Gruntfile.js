// var config = require('./config.json');

module.exports = function(grunt){

	// 项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: [
					'app.js',
					'config/*.json',
					'routes/*.js',
					'module/*.js',
					'views/*.ejs',
					'views/**/*.ejs',
				],
				tasks: ['develop'],
				options: {
					debounceDelay: 300,
					nospawn: true
				}
			}
		},
		develop: {
			server: {
				file: 'app.js',
				env: { NODE_ENV: 'development'}
			}
		}
	});

	// 加载任务插件
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-develop');

	// 默认任务
	grunt.registerTask('default', ['develop', 'watch']);
};