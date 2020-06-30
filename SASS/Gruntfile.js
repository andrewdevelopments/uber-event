module.exports = function(grunt) {
	grunt.initConfig({

		watch: {
			options: {
				spawn: false,
				event: ['all']
			},
			scripts: {
				files: ['template/scripts/**/*.js'],
				tasks: ['uglify']
			},
			sass: {
				files: ['template/styles/*.{scss,sass}', 'template/styles/components/*.{scss,sass}'],
				tasks: ['sass']
			},
			styles: {
				files: ['template/styles/*.css', 'template/styles/*.{scss,sass}', 'template/styles/components/*.{scss,sass}'],
				tasks: ['cssmin']
			},
			html: {
				files: ['template/*.html', 'template/scripts/**/*.js']
			}
		},
		jshint: {
			all: {
				src: ['scripts/**/*.js']
			}
		},
		cssmin: {
			options: {
                keepSpecialComments: 0,
                report: 'min'
            },
			minify: {
				expand: true,
				cwd: 'template/styles/',
				src: ['main.css', '!*.min.css'],
				dest: 'template/styles/',
				ext: '.min.css'
			}
		},
		sass: {
			options: {
				loadPath: 'template/styles'
			},
			dist: {
				options: {
					loadPath: 'template/styles',
					style: 'expanded'
				},
				files: {
					'template/styles/main.css' : 'template/styles/main.scss'
				}
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'template/scripts/main.min.js' : ['template/scripts/main.js', 'template/scripts/components/*.js'],
					'template/scripts/plugins.min.js' : 'template/scripts/plugins.js',
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: 'template/images',
						src: ['**/*.{png,jpg,gif}'],
						dest: 'template/images'
					}
				]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('watch-me', ['uglify', 'cssmin', 'imagemin', 'watch']);
};