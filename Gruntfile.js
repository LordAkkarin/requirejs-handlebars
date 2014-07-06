/*
 * Copyright (C) 2014 Johannes Donath <johannesd@evil-co.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = function (grunt) {
	'use strict';

	// initialize configuration
	grunt.initConfig ({
		/**
		 * Stores the package information.
		 */
		pkg:			grunt.file.readJSON ('package.json'),

		/**
		 * Clean Build
		 */
		clean:			{
			build:			['build']
		},

		/**
		 * Copy Files
		 */
		copy:			{

			/**
			 * Copy development version to build folder
			 */
			src:			{
				src:			'src/hndl.js',
				dest:			'build/hndl.js'
			}
		},

		/**
		 * JSHint
		 */
		jshint:			{

			/**
			 * JSHint options
			 */
			options:		{

				/**
				 * Enables .jshintrc
				 */
				jshintrc:		'src/.jshintrc'
			},

			/**
			 * The grunt jshint task
			 */
			grunt:			{
				src:			['Gruntfile.js'],

				/**
				 * Grunt specific settings
				 */
				options:		{
					jshintrc:		'.jshintrc'
				}
			},

			/**
			 * The script jshint task
			 */
			src:			{
				src:			['src/*.js']
			}
		},

		/**
		 * Script minifaction.
		 */
		uglify:			{
			/**
			 * Uglify Options
			 */
			options:		{

				/**
				 * The Copyright Banner
				 */
				banner:			'/**\n' +
							' * RequireJS Mustache Plugin v<%= pkg.version %>\n' +
							' * Compiled on <%= grunt.template.today("yyyy-mm-dd") %>\n' +
							' *\n' +
							' * Copyright (C) 2014 Johannes Donath <johanesd@evil-co.com>\n' +
							' *\n' +
							' * Licensed under the Apache License, Version 2.0 (the "License");\n' +
							' * you may not use this file except in compliance with the License.\n' +
							' * You may obtain a copy of the License at\n' +
							' *\n' +
							' * http://www.apache.org/licenses/LICENSE-2.0\n' +
							' *\n' +
							' * Unless required by applicable law or agreed to in writing, software\n' +
							' * distributed under the License is distributed on an "AS IS" BASIS,\n' +
							' * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n' +
							' * See the License for the specific language governing permissions and\n' +
							' * limitations under the License.\n' +
							' */\n',

				/**
				 * Ensure some of our comments stick around.
				 */
				preserveComments:	'some'
			},

			/**
			 * Uglify Build Settings
			 */
			build:			{
				src:			'src/hndl.js',
				dest:			'build/hndl.min.js'
			}
		}
	});

	// load tasks
	require ('load-grunt-tasks') (grunt, { scope: 'devDependencies' });

	// TODO: Debug
	grunt.loadNpmTasks ('grunt-download');

	// register tasks
	grunt.registerTask ('default', ['clean', 'jshint', 'uglify', 'copy']);
};