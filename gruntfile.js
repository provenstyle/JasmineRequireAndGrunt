module.exports = function(grunt){

	grunt.initConfig({
		jasmine: {
			src: ['src/scripts/**/*.js'],   //don't include the requirejs modules
			options: {
				specs: 'spec/**/*Spec.js',
				helpers: 'spec/helpers/*Helper.js',
				vendor: ['vendor/require.js'],
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
				enabled: false,
				title: "Grunt Notification"
			}
		}
	});

	grunt.registerTask('default', ['jasmine']);
	grunt.registerTask('watch', ['watch:jasmine', 'watch:html']);

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-open');

	grunt.task.run('notify_hooks');
};
 