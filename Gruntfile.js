module.exports = function(grunt){ 
	"use strict";

	grunt.initConfig({
		pug: {
			main: {
				files: {
					"index.html": "src/index.pug"
				}
			}
		},

		sass: {
			main: {
				options: {
					sourceMap: true
				},
				files: {
					"css/main.css": "src/main.sass"
				}
			}
		},
		
		autoprefixer: {
			options: {
				browsers: [
					"Android 2.3",
					"Android >= 4",
					"Chrome >= 20",
					"Firefox >= 24",
					"Explorer >= 8",
					"iOS >= 6",
					"Opera >= 12",
					"Safari >= 6"
				]
			},
			main: {
				options: {
					map: true,
				},
				src: "css/main.css"
			}
		},

		cssmin: {
			main: {
				options: {
					sourceMap: true
				},
				files: {
					"css/main.css": "css/main.css"
				}
			}
		},
		
		connect: {
			server: {
				options: {
					hostname: "localhost",
					port: 3000,
					livereload: 3030,
					open: "http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>",
				}
			}
		},

		watch: {
			output: {
				options: {
					livereload: 3030
				},
				files: [
					"index.html",
					"css/main.css",
					"js/main.js"
				],
			},
			css: {
				files: "src/**/*.sass",
				tasks: ["sass", "autoprefixer", "cssmin"]
			},
			html: {
				files: "src/index.pug",
				tasks: "pug"
			}
		}
	});
	
	grunt.registerTask("default", function(){
		grunt.task.run(["pug", "sass","autoprefixer", "cssmin"]);
	});

	grunt.registerTask("serve", function(){
		grunt.task.run(["connect","watch"]);
	});
	
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-pug");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-sass");
}