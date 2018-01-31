var elixir = require('laravel-elixir');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.assetsPath = '';
elixir.config.css.folder = '';
elixir.config.js.folder = '';

elixir(function(mix) {

	mix

		.styles([
			'dist/css/bootstrap.css',
			'dist/css/font-awesome.css',
			'dist/css/simple-sidebar.css'
		], 'dist/vendors/vendor.css')

		//.scripts([], 'dist/vendors/vendor.js')
		.browserify('app.js', 'dist/app.js', 'src');
		
});