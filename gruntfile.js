module.exports = function(grunt){

	grunt.initConfig({
		jasmine: {
			src: ['src/Player.js', 'src/Song.js'],   //when using requirejs you don't include the source files
			options: {
				specs: 'spec/*Spec.js',
				helpers: 'spec/*Helper.js',
				vendor: ['vendor/*.js'],
				keepRunner: true
			}
		},
		watch:{
			jasmine:{
				files:['src/**', 'spec/**'],
				tasks:['jasmine'],
				options:{
					livereload: 37000
				}
			},
			html:{
				files:['./*.html'],
				options:{
					livereload: 36000
				}
			}
		}, 
		notify:{
			test:{
				options:{
					title:'Test title',
					message: 'Hear ye, Hear ye!'
				}
			}
		},
		notify_hooks:{
			options:{
				enabled: true,
				title: "Grunt Notification"
			}
		}
	});

	grunt.registerTask('default', ['jasmine']);
	grunt.registerTask('watch', ['watch:jasmine', 'watch:html']);

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');
	grunt.task.run('notify_hooks');
};
 